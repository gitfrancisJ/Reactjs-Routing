import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products, { productsLoader } from './pages/Products';
import ProductDetails, { productDetailsLoader } from './pages/ProductDetails';
import MainLayout from './layouts/MainLayout'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route 
        path='products'
        element={<Products />}
        loader={productsLoader}/>
      <Route 
        path='products/:id'
        element={<ProductDetails />}
        loader={ productDetailsLoader }/>
    </Route>

  )
)

function App() {
  return ( 
      <div>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
