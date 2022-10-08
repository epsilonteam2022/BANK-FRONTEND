import MetodoPago from '../MetodoPago/MetodoPago'
import Movimientos from '../Movimientos/Movimientos'
import Saldo from '../Saldo/Saldo'
import sty from './Wallet.module.scss'

function Wallet() {
    
    return(
        <div className={sty.wallet} id="wallet">
            <Saldo />

            <MetodoPago />

            <Movimientos 
                over = {"hidden"}
                boton = {false}
            />
        </div>
    )
}

export default Wallet