import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Register/Main/Main'
import './styles/App.scss'
import Header from './components/Header/Header'

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/register' element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
