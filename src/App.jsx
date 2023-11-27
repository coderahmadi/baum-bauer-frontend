import React from "react";
import { CartContextProvider } from "./store/CartContext";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Importing our pages
import Home from "./pages/Home";
import Trees from "./pages/Trees";
import Index from "./pages/Index";
import News from "./pages/News";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";
import UserSponsorships from "./pages/UserSponsorships";
import PasswordChange from "./pages/PasswordChange";
import Signout from "./pages/Signout";
import SingleTreePage from "./pages/SingleTreePage";
import NewsArticle from "./pages/NewsArticle";
import AddToGallery from "./pages/AddToGallery";
import AddToNewArticle from "./pages/AddToNewsArticle";
import AddNewTree from "./pages/AddNewTree";

function App() {
  const bioBaumRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/trees/:id" element={<SingleTreePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update_profile" element={<UpdateProfile />} />
        <Route path="/user_sponsorships" element={<UserSponsorships />} />
        <Route path="/password_change" element={<PasswordChange />} />{" "}
        <Route path="/signout" element={<Signout />} />
        <Route path="/addImageToGallery" element={<AddToGallery />} />
        <Route path="/addToNewArticle" element={<AddToNewArticle />} />
        <Route path="/addNewTree" element={<AddNewTree />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <CartContextProvider>
        <RouterProvider router={bioBaumRouter} />
      </CartContextProvider>
    </div>
  );
}

export default App;
