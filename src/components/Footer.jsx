import { useCart } from '../hooks/useCart'
import useFilters from '../hooks/useFilters'
import './Footer.css'



export default function Footer (){
    const {filters} = useFilters()
    const {cart} = useCart()

    return(
        <footer className='footer'>
            <h4>Tienda Online con React -    
            <span>@iWeb.code</span></h4>
            <h5>Tienda Online con useContext & useReducer</h5>
        </footer>
    )
}