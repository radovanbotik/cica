import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Purchase from "./pages/Purchase";
// import "./App.css";

function App() {
  return (
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
  );
}

export default App;
