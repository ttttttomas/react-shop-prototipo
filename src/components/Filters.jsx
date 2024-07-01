import { useId } from 'react'
import './Filters.css'
import useFilters from '../hooks/useFilters'

export default function Filters (){
    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    

    const handleChangeMinPrice = (event) =>{
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min price:</label>
                <input 
                type="range"
                id="price"
                max="1000"
                min=""
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category:</label>
                <select onChange={handleChangeCategory} id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}