import sty from './Movimiento.module.scss'

function Movimiento(props) {

    console.log(props.data);
    return(
        <div className={sty.movimiento}>
            <div className={sty.movimiento__date}>
                <h3 className={sty.movimiento__day}>{props.day}</h3>
                <h4 className={sty.movimiento__month}>{props.month}</h4>
            </div>
            <div className={sty.movimiento__desc}>
                <p className={sty.movimiento__destination}>
                    {props.isSent
                        ?
                        'Trasnferencia enviada a'
                        :
                        'Trasnferencia recivida de'
                    }   
                </p>
                <h5 className={sty.movimiento__name}>{props.name}</h5>
            </div>
            <div className={sty.movimiento__money}>
                <h3 className={sty.movimiento__mount}>
                    {props.isSent
                        ?
                        '- $ ' + props.mount
                        :
                        '$ ' + props.mount
                    }
                </h3>
                <p className={sty.movimiento__balance}>$ {props.balance}</p>
            </div>
        
        </div>
    )
}

export default Movimiento