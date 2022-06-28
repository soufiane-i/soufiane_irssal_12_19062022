import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import Home from './components/pages/Home'



export default function Router() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/user/:id' element={<Home/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}