import { useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import sty from './MetodoPago.module.scss'

const imagen = require.context('./../../img', true);

function MetodoPago() {

    const {metodos, shift} = useContext(GlobalContext)
    
    return(
        <div className={sty.metodoPago}>
            <div className={sty.metodoPago__arrows}>
                <h2 className={sty.metodoPago__left} onClick={() => shift("left")}>⟨</h2>
                <h2 className={sty.metodoPago__right} onClick={() => shift("right")}>⟩</h2>
            </div>

            <div className={sty.metodoPago__metodos} id="metodos" style={{padding: "0 calc((100vw - 65vw - 2rem)/2)"}}>
                {metodos.map((met) => {
                    return(
                        <div className={sty.metodoPago__metodosDiv} id={met.entity + met.id.toString()}>
                            <p className={sty.metodoPago__entity}>{met.entity}</p>
                            <p className={sty.metodoPago__acount}>{met.acountNmr}</p>

                            <div className={sty.metodoPago__card} style={{background: `linear-gradient(111.14deg, ${met.color[0]}, ${met.color[1]})`}}>
                                <p className={sty.metodoPago__tipo}>{met.tipo.toUpperCase()}</p>
                                <p className={sty.metodoPago__number}>{`⁕⁕⁕⁕ `.repeat(3) + met.last4}</p>
                                <img className={sty.metodoPago__logo} src={imagen('./' + met.financial + '.png')} alt={met.financial} />
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MetodoPago