import { Routes, Route } from "react-router-dom";
import {
  Home,
  Cart,
  Error,
  Login,
  Posts,
  CreatePost,
  Shop,
  SharedLayout,
  Private,
  SingleProduct,
} from "./pages";
import { GlobalStyle } from "./components/GlobalStyles.style";
// import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/newpost" element={<CreatePost />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
