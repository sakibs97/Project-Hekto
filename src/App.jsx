import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Home from "./page/Home"
import SPList from "./page/SPList"
import ProDetails from "./page/ProDetails"
import Blog from "./page/Blog"
import SingleBlog from "./components/SingleBlog"
import AboutUs from "./page/AboutUs"
import ContactUs from "./page/ContactUs"
import NotFound from "./page/NotFound"
import Faq from "./page/Faq"
import Cart from "./page/Cart"
import OrderComplete from "./page/OrderComplete"
import ShippingAddy from "./page/ShippingAddy"
import Login from "./page/Login"
import Shop from "./page/Shop"

let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop-list" element={<SPList />}></Route>
      <Route path="/Product/:id" element={<ProDetails />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/single-blog" element={<SingleBlog />}></Route>
      <Route path="/About-Us" element={<AboutUs />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/Order-Complete" element={<OrderComplete />}></Route>
      <Route path="/Shipping-Details" element={<ShippingAddy />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </>
))

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
