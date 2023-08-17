import Login from "../../pages/Login/Login";
import SignUp from "../../pages/signup/signUp";
import Book from "../../pages/Book/Book";
import User from "../../pages/User/User";
import BookListing from "../../pages/Book/BookListing";
import EditBook from "../../pages/Book/EditBook";
import EditCategory from "../../pages/Category/EditCategory";
import EditUser from "../../pages/User/EditUser";
import Category from "../../pages/Category/Category";
import Cart from "../../pages/Book/BookCart";
import { Navigate,Routes,Route } from "react-router-dom";
import { useAuthContext } from "../../Context/auth";
import { RoutePaths } from "../../utils/enum";
import Profile from "../../pages/Profile/Profile";
// import Shared from "../../utils/shared";
import React from 'react'

function PageNavigation() {
   
    const authContext= useAuthContext();

    const Redirect = <Navigate to={RoutePaths.Login}/>;

  return (
    <Routes>
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Register} element={<SignUp />} />
      <Route exact path={RoutePaths.Cart} element={authContext.user.id?<Cart/>:Redirect}/>

        <Route
        exact
        path={RoutePaths.BookListing}
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.User}
        element={authContext.user.id ? <User /> : Redirect}
      />
          <Route
        exact
        path={RoutePaths.EditUser}
        element={authContext.user.id ? <EditUser /> : Redirect}
      />
       <Route
        exact
        path={RoutePaths.UpdateProfile}
        element={authContext.user.id ? <Profile /> : Redirect}
      />

      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
       <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />

<Route
        exact
        path={RoutePaths.Category}
        element={authContext.user.id ? <Category /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Other}
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
    </Routes>
  )
}

export default PageNavigation
