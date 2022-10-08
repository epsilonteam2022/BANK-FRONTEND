import { useLocation } from 'react-router-dom';
import sty from './Menu.module.scss'

const imagen = require.context('./../../img', true);

function Menu() {

    const nav = useLocation()
    console.log(nav.pathname);
    
    return (
        <div className={sty.menu}>
            <div className={sty.menu__home}>
                <img src={imagen('./WHome.png')} alt='Home' />
                <p>Home</p>
            </div>
            <div className={sty.menu__wallet}>
                {nav.pathname === "/loged/wallet"
                    ?
                    <div>
                        <img src={imagen('./GWallet.png')} alt='Wallet' />
                        <p style={{color: '#1CAEA3'}}>Saldo</p>
                    </div>
                    :
                    <div>
                        <img src={imagen('./WWallet.png')} alt='Wallet' />
                        <p>Saldo</p>
                    </div>
                }
            </div>
            <div className={sty.menu__transaction}>
                {nav.pathname === '/loged/transferencias'
                    ?
                    <div>
                        <img src={imagen('./GArrow.png')} alt='Arrow' />
                        <p style={{color: '#1CAEA3'}}>Transferencias</p>
                    </div>
                    :
                    <div>
                        <img src={imagen('./WArrow.png')} alt='Arrow' />
                        <p>Transferencias</p>
                    </div>
                }
            </div>
            <div className={sty.menu__exit}>
                <img src={imagen('./exit.png')} alt='Exit' />
                <p>Cerrar Sesión</p>
            </div>
        </div>
    )
}

export default Menu