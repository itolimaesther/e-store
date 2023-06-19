import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements} from 'react-router-dom';
// import Dashoard from './components/Dashoard';
import Layout from './Layout';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

    )
  ) 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
