import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from '../pages/authentication/signin/signin'
import Signup from '../pages/authentication/signup/signup'
import Dashboard from '../pages/dashboard/dashboard'
import OverallRatings from '../pages/reviews-and-feedback/overall-ratings/overall-ratings'
import RateGuest from '../pages/reviews-and-feedback/rate-guest/rate-guest'


import PrivateRoutes from './protected-routes'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
        <Route path="/authentication/signin" element={<Signin/>}/>
        <Route path="/authentication/signup" element={<Signup/>}/>
        <Route path="/reviews-and-feedback/overall-ratings" element={<OverallRatings/>}/>
        <Route path="/reviews-and-feedback/rate-guest" element={<RateGuest/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    </>
  )
}

export default Routing