/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import sty from './TransfElement.module.scss'

function TransfElement(props) {

    console.log(props.data);
    return(
        <div className={sty.transfElement}>
            <div className={sty.transfElement__date}>
                <h3 className={sty.transfElement__day}>{props.day}</h3>
                <h4 className={sty.transfElement__month}>{props.month}</h4>
            </div>
            <div className={sty.transfElement__desc}>
                <p className={sty.transfElement__destination}>
                    {props.isSent
                        ?
                        'Trasnferencia enviada a'
                        :
                        'Trasnferencia recivida de'
                    }   
                </p>
                <h5 className={sty.transfElement__name}>{props.name}</h5>
            </div>
            <div className={sty.transfElement__money}>
                <h3 className={sty.transfElement__mount}>
                    {props.isSent
                        ?
                        '- $ ' + props.mount
                        :
                        '$ ' + props.mount
                    }
                </h3>
                <p className={sty.transfElement__balance}>$ {props.balance}</p>
            </div>
        
        </div>
    )
}

export default TransfElement