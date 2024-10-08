import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Home from "./page/Home"
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
import MyAccount from "./page/MyAccount"
import UserDetails from "./page/UserDetails"

let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/Product/:id" element={<ProDetails />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/single-blog" element={<SingleBlog />}></Route>
      <Route path="/About-Us" element={<AboutUs />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/Order-Complete" element={<OrderComplete />}></Route>
      <Route path="/shipping" element={<ShippingAddy />}></Route>
      <Route path="/userDetails" element={<UserDetails />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/account" element={<MyAccount />}></Route>
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
