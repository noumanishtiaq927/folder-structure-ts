import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from '../pages/authentication/signin/Signin'
import Signup from '../pages/authentication/signup/Signup'
import Dashboard from '../pages/dashboard/Dashboard'
import FullTime from '../pages/manage-shifts/full-time/FullTime'
import ManageShift from '../pages/manage-shifts/ManageShift'
import PartTime from '../pages/manage-shifts/part-time/PartTime'
import PrivateRoutes from './ProtectedRoutes'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Navigate to="/authentication/signin" replace/>}/>
        <Route path="/authentication" element={<Navigate to="/authentication/signin" replace/>}>
          <Route path="signin" element ={<Signin/>}/>
          <Route path="signup" element ={<Signup/>}/>
        </Route>
        <Route path = "/a" element = {<Signup/>}/> 
        <Route path = "/f" element = {<PrivateRoutes/>}>
          <Route path="d" element = {<Dashboard/>}/>
          <Route path="m-s" element = {<ManageShift/>}  >
             <Route path="f-t" element ={<FullTime/>}/>
             <Route path="p-t" element ={<PartTime/>}/>
          </Route>
        </Route> 
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default Routing