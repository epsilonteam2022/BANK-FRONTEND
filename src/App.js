import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Transferencias from './components/Transferencias/Transferencias'
import GlobalProvider from './contexts/GlobalContext'
import './styles/App.scss'

function App() {
    return (
        <GlobalProvider>
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path="/transferencias" element={<Transferencias />} />
                </Routes>

                <Menu />
            </div>
        </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
