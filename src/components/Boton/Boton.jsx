/* eslint-disable react/prop-types */
import sty from './Boton.module.scss'

function Boton(props) {
    
    const style = {
        backgroundColor: props.background, 
        border: props.border
    }
    return(
        <button 
            className={sty.boton} 
            onClick={() => props.fn}
            style={style}
            >{props.name}
        </button>
    )
}

export default Boton