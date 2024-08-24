import {createContext, useContext, useReducer} from "react"
import { Filter, category, brand, size } from "../types"

interface FilterContextValue {
  filters: Filter
  addFilter: (filter: keyof Filter, value: PayloadValue) => void
  deleteFilter: (filter: keyof Filter, value: PayloadValue) => void
  clearFilter: () => void
}

interface FiltersContextProdiver {
  children: React.ReactNode
}

type PayloadValue = category | brand | [number, number] | size | ""

interface ReducerAction {
  type: 'ADD_FILTER' | 'DELETE_FILTER' | 'CLEAR_FILTER'
  payload?: {
    key: keyof Filter
    value: PayloadValue
  }
}

const initialState: Filter = {
    category: [],
    brand: [],
    priceRange: [0, 1000000],
    size: []
  }

const reducer = (state: Filter, action: ReducerAction) => {
  switch (action.type){
    case 'ADD_FILTER':
      if(!action.payload){
        throw new Error("There must be a payload")
      }
      else{
        if(action.payload.key !== 'priceRange'){
          return {
            ...state,
            [action.payload.key]: [...state[action.payload.key], action.payload.value]
          }
        }
        else{
          return {
            ...state,
            priceRange: action.payload.value
          }
        }
      }
    case 'DELETE_FILTER':
      if(!action.payload){
        throw new Error("There must be a payload")
      }
      return {
        ...state,
        [action.payload.key]: state.[action.payload.key].filter(value => value !== action.payload?.value)
      }
    case 'CLEAR_FILTER':
      return initialState
    default:
      return state
  }
}

const FiltersContext = createContext<FilterContextValue | undefined>(undefined)

export const FiltersContextProvider: React.FC<FiltersContextProdiver> = ({children}) => {

  const [filters, dispatch] = useReducer(reducer, initialState)

  const addFilter = (filter: keyof Filter, value: PayloadValue) => {
    dispatch({type: 'ADD_FILTER', payload: {key: filter, value}})
  }
  
  const deleteFilter = (filter: keyof Filter, value: PayloadValue) => {
    dispatch({type: 'DELETE_FILTER', payload: {key: filter, value}})
  }

  const clearFilter = () => dispatch({type: 'CLEAR_FILTER'})

  return (
    <FiltersContext.Provider value={{filters, addFilter, deleteFilter, clearFilter}}>
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