import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loged from './components/Loged/Loged'
import Menu from './components/Menu/Menu'
import Transferencias from './components/Movimientos/Movimientos'
import GlobalProvider from './contexts/GlobalContext'
import './styles/App.scss'

function App() {
    return (
        <GlobalProvider>
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={""} />
                    <Route path='/loged/*' element={<Loged />} />
                    <Route path="/transferencias" element={<Transferencias />} />
                </Routes>
            </div>
        </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
