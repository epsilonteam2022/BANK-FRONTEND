import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Wallet from '../Wallet/Wallet'
import sty from './Loged.module.scss'

function Loged() {
    
    return(
        <div className={sty.loged}>
            <Routes>
                <Route path='wallet' element={<Wallet />}/>
            </Routes>

            <Menu />
        </div>
    )
}

export default Loged