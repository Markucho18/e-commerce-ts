import {createContext, useContext, useReducer, Reducer} from "react"
import { Filter, category, brand, size } from "../types"

interface FilterContextValue {
  filters: Filter
  addFilter: (filter: keyof Filter, value: PayloadValue) => void
  removeFilter: (filter: keyof Filter, value: PayloadValue) => void
  clearFilter: () => void
}

interface FiltersContextProdiver {
  children: React.ReactNode
}

type PayloadValue = category | brand | number | size | ""

interface ReducerAction {
  type: 'ADD_FILTER' | 'REMOVE_FILTER' | 'CLEAR_FILTER'
  payload?: {
    key: keyof Filter
    value: PayloadValue
  }
}

const initialState: Filter = {
  category: [],
  brand: [],
  minPrice: 0,
  size: []
}

const reducer: Reducer<Filter, ReducerAction> = (state, action) => {
  switch (action.type){
    case 'ADD_FILTER':
      if(!action.payload){
        throw new Error("There must be a payload")
      }
      else{
        const { key, value } = action.payload
        if(key !== "minPrice"){
          return {
            ...state,
            [key]: [...state[key], value]
          }
        }
        else{
          return {
            ...state,
            [key]: value as number
          }
        }
      }
    case 'REMOVE_FILTER':
      if (!action.payload) {
        throw new Error("There must be a payload");
      }
      const { key, value: removeValue } = action.payload;
      if (key !== 'minPrice'){
        return {
          ...state,
          [key]: (state[key] as PayloadValue[]).filter((value: PayloadValue) => value !== removeValue)
        };
      }
      return state
    case 'CLEAR_FILTER':
      return initialState
    default:
      return state
  }
}

const FiltersContext = createContext<FilterContextValue | undefined>(undefined)

export const FiltersContextProvider: React.FC<FiltersContextProdiver> = ({children}) => {

  const [filters, dispatch] = useReducer<Reducer<Filter, ReducerAction>>(reducer, initialState)

  const addFilter = (filter: keyof Filter, value: PayloadValue) => {
    dispatch({type: 'ADD_FILTER', payload: {key: filter, value}})
  }
  
  const removeFilter = (filter: keyof Filter, value: PayloadValue) => {
    dispatch({type: 'REMOVE_FILTER', payload: {key: filter, value}})
  }

  const clearFilter = () => dispatch({type: 'CLEAR_FILTER'})

  return (
    <FiltersContext.Provider value={{filters, addFilter, removeFilter, clearFilter}}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  const context = useContext(FiltersContext)
  if(!context){
    throw new Error("FiltersContext must be used inside its provider")
  }
  return context
}