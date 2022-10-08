import sty from './Saldo.module.scss'

function Saldo() {
    
    return(
        <div className={sty.saldo}>
            <div className={sty.saldo__headerDiv}>
                <h2 className={sty.saldo__headerArrow}>⟨</h2>
                <h2 className={sty.saldo__headerDivTitle}>Saldo</h2>                
            </div>      

            <h1 className={sty.saldo__amount}>$ 10.546,<sup>00</sup></h1>
        </div>
    )
}

export default Saldo