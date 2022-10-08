import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import Boton from '../Boton/Boton';
import Saldo from '../Saldo/Saldo';
import Movimiento from '../Movimiento/Movimiento'
import sty from './Movimientos.module.scss'

const imagen = require.context('./../../img', true);

function Movimientos(props) {
    
    const {transHistory, getTransHistory} = useContext(GlobalContext)

    const shortMonth = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SET", "OCT", "NOV", "DIC"]
    let prev = ['','']

    const [data, setData] = useState()
    const [isData, setIsData] = useState(false)

    if(!isData){
        console.log('getting');
        getTransHistory()
        setIsData(true)
    }

    useEffect(() => {
        
    }, [transHistory])



    return(
        <div className={sty.movimientos}>
            <div className={sty.movimientos__history}>
                {false /*transHistory.length === 0*/
                    ?
                    <img src={imagen('./loading.gif')} />
                    :
                    <div className={sty.movimientos__hist}>
                        <div className={sty.movimientos__histHeader}>
                            <h5 >Movimientos</h5>
                            <img src={imagen('./search.png')}/>
                        </div>

                        <div className={sty.movimientos__histDiv} style={{overflow: props.over}}>
                            {transHistory.map((trans) => {
                                let day = trans.date.getDate()
                                let month = shortMonth[trans.date.getMonth()]

                                if(prev[0] === day && prev[1] === month){
                                    day = ''
                                    month = ''
                                } else {
                                    prev = [day, month]
                                }                           

                                return(
                                    <Movimiento 
                                        key = {trans.id}
                                        day = {day}
                                        month = {month}
                                        isSent = {trans.isSent}
                                        name = {trans.name}
                                        mount = {trans.mount}
                                        balance = {trans.balance}
                                    />    
                                )
                            })} 
                        </div>  
                    </div>
                }                    
            </div>
        </div> 
    )
}

export default Movimientos