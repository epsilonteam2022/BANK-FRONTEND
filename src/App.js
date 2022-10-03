import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Transferencias from './components/Transferencias/Transferencias'
import TransferenciaConfirmacion from './components/TransferenciaConfirmacion/TransferenciaConfirmacion'
import GlobalProvider from './contexts/GlobalContext'
import './styles/App.scss'

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <div className='app'>
                    <Routes>
                        <Route
                            path='/transferencias'
                            element={<Transferencias />}
                        />
                        <Route
                            path='/transferenciaConfirmacion'
                            element={<TransferenciaConfirmacion />}
                        />
                    </Routes>

                    <Menu />
                </div>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
