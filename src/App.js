import { Provider } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Header from "./components/Header";
import Home from "./pages/Home"
import store from "./store"
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"
import CategoriesPage from "./pages/CategoriesPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp"
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <Provider store={store}>
      <StickyHeader header={<Header />} />
      <Routes>
        <Route element={<Cart />} path="/cart" />
        <Route element={<ProductDetails />} path="/products/:id" />
        <Route element={<CategoriesPage />} path="/category/:category" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
      <ToastContainer />
    </Provider>
  );
}

export default App;
