import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFoundPage from '../pages/NotFoundPage'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import UserDashboard from "../pages/UserDashboard";
import Dashboard from '../pages/Dashboard'
import UserManagement from '../pages/UserManagement'
import TaskMonitoring from '../pages/TaskMonitoring'
import ActivityLogs from '../pages/ActivityLogs'
import Signup from "../pages/Signup";
import PrivateRoute from '../components/PrivateRoute'
import AdminRoute from '../components/AdminRoute'

function Allroutes() {

  return (
    <Routes>

      <Route path='/' element={<Home />} />

      <Route path="/mydashboard" element={<PrivateRoute><UserDashboard /> </PrivateRoute>}/>

      <Route path='/login' element={<Login />} />

      <Route path='/about' element={<About />} />

      <Route path="/signup" element={<Signup />} />

      <Route path='/contactUs' element={<ContactUs />} />

      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          </PrivateRoute>
        }
      />

      <Route
        path='/users'
        element={
          <PrivateRoute>
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          </PrivateRoute>
        }
      />

      <Route
        path='/tasks'
        element={
          <PrivateRoute>
            <AdminRoute>
              <TaskMonitoring />
            </AdminRoute>
          </PrivateRoute>
        }
      />

      <Route
        path='/logs'
        element={
          <PrivateRoute>
            <AdminRoute>
              <ActivityLogs />
            </AdminRoute>
          </PrivateRoute>
        }
      />

      <Route path='*' element={<NotFoundPage />} />

    </Routes>
  )
}

export default Allroutes
