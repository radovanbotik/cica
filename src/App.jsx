import { Routes, Route } from "react-router-dom";
import {
  Home,
  Cart,
  Error,
  Login,
  Posts,
  CreatePost,
  Purchase,
  SharedLayout,
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
          <Route path="/purchase" element={<Purchase />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
