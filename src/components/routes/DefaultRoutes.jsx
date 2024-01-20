import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import ForceAuthForm from '../auth/form/ForceAuthForm'
import NotFoundPageMain from "../../pages/NotFoundPage";
import CartPageMain from '../../pages/checkout/CartPage';

/**
 * Currently, the default routes differ from the ones in the JSON file in the fact that
 * those are automatically rendered in the LINKs in the NavBar, while these are not.
 * TODO: (fix this in a future update)
 * 
 * @returns {JSX.Element} The default routes for the Application
 */
const DefaultRoutes = () => {
  return (
    <React.Fragment>
        {/* Redirect `/` => `IdxPage` */}
        <Route path="/" element={<Navigate to={"/pages/idx"} />} />
        {/* SignIn page */}
        <Route path="/auth/login" element={<ForceAuthForm />} />
        {/* Cart Page */}
        <Route path="/checkout/cart" element={<CartPageMain />} />
        {/* 404 page */}
        <Route path="/pages/not-found" element={<NotFoundPageMain />} />
        {/* Redirect `*` => `NotFoundPage` */}
        <Route path="*" element={<Navigate to={"/pages/not-found"} />} />
    </React.Fragment>
  )
}

export default DefaultRoutes