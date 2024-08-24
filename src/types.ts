export type Page = 'homePage' | 'resultsPage' | 'productPage' | 'cartPage'

export type Display = 'list' | 'grid'

export type category = 'Bedroom' | 'Sofa' | 'Office' | 'Outdoor'

export type brand = 'Dominik' | 'Karl' | 'Maxing' | 'Ernest'

export type size = 'XS' | 'S' | 'M' | 'L' | 'XL'

export interface Product {
  id: number
  name: string
  price: number
  thumbnail: string
  category : category
  brand : brand
  size : size
  stock: number
}

export interface Filter {
  category: [] | category[]
  brand: [] | brand[]
  priceRange: [number, number]
  size: [] | size[]
}