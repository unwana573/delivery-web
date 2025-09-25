import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import Browse_Menu from './pages/Browse_Menu'
import Special_Offer from './pages/Special_Offer'
import Restaurant from './pages/Restaurant'
import Track_Order from './pages/Track_Order'
import Footer from './compnents/footer/footer'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="Browse_Menu" element={<Browse_Menu />} />
        <Route path="Special_Offer" element={<Special_Offer />} />
        <Route path="Restaurant" element={<Restaurant />} />
        <Route path="Track_Order" element={<Track_Order />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    <Footer />
    </>
  )
}

export default App
