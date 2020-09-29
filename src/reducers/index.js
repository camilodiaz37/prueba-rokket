import { combineReducers } from 'redux'
import tagBusqueda from './tagBusqueda'
import pagina from './pagina'
import post from './post'

export default combineReducers({
    tagBusqueda,
    pagina,
    post,
})