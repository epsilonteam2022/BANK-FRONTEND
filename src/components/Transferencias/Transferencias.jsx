/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import TransfElement from '../TransfElement/TransfElement'
import sty from './Transferencias.module.scss'

const imagen = require.context('./../../img', true);

function Transferencias() {
    
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
        <div className={sty.transferencias}>
            <div className={sty.transferencias__header}>
                <div className={sty.transferencias__headerDiv}>
                    <h2 className={sty.transferencias__headerArrow}>⟨</h2>
                    <h2 className={sty.transferencias__headerDivTitle}>Trasnferencias</h2>
                </div>                    
                <button>Nueva Transferencia</button>
            </div>

            <div className={sty.transferencias__history}>
                {transHistory.length === 0
                    ?
                    <img src={imagen('./loading.gif')} />
                    :
                    <div className={sty.transferencias__histDiv}>
                        <div className={sty.transferencias__histOptions}>
                            <img src={imagen('./search.png')}/>
                        </div>
                        <div className={sty.transferencias__histHeader}>
                            <h5>Fecha</h5>
                            <h5>Descripción</h5>
                            <h5>Monto</h5>
                        </div>
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
                                <TransfElement 
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
                }                    
            </div>
        </div> 
    )
}

export default Transferencias