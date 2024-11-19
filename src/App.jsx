import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Beautyandhygiene from './pages/Beautyandhygiene'
import Cleaningandhousehold from './pages/Cleaningandhousehold'
import Dairyproducts from './pages/Dairyproducts'
import Fruitsandveg from './pages/Fruitsandveg'
import Snacks from './pages/Snacks'
import WebLayout from './layout/WebLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import TwClasses from './pages/TwClasses'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminBeautyandhygiene from './pages/Admin/AdminBeautyandhygiene'
import AdminCleaningandhousehold from './pages/Admin/AdminCleaningandhousehold'
import AdminDairyproducts from './pages/Admin/AdminDairyproducts'
import AdminFruitsandveg from './pages/Admin/AdminFruitsandveg'
import AdminSnacks from './pages/Admin/AdminSnacks'
import AdminUsers from './pages/Admin/AdminUsers'

// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/beautyandhygiene' element={<Beautyandhygiene />} />
                        <Route path='/cleaningandhousehold' element={<Cleaningandhousehold />} />
                        <Route path='/dairyproducts' element={<Dairyproducts />} />
                        <Route path='/fruitsandveg' element={<Fruitsandveg />} />
                        <Route path='/snacks' element={<Snacks />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/temp' element={<TwClasses />} />
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/products' element={<AdminProducts />} />
                        <Route path='/admin/beautyandhygiene' element={<AdminBeautyandhygiene />} />
                        <Route path='/admin/cleaningandhousehold' element={<AdminCleaningandhousehold />} />
                        <Route path='/admin/dairyproducts' element={<AdminDairyproducts />} />
                        <Route path='/admin/fruitsandveg' element={<AdminFruitsandveg />} />
                        <Route path='/admin/snacks' element={<AdminSnacks />} />
        
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

