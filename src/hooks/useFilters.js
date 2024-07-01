import { useContext } from "react"
import { FiltersContext } from "../components/context/Filters"

export default function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext)
  
    const filterProducts = (products) =>{
      return products.filter(product =>{
          return ( 
            product.price >= filters.minPrice &&
            (
              filters.category === 'all' ||
              product.category === filters.category
            )
          )
        })
    }
  
    return {filterProducts, setFilters, filters}
  }