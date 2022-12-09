import React from 'react'
import Auth from './Auth'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Layout = ({children}) => {
  return (
    <>
      <Auth/> 
      {children}
     
      <ToastContainer position='top-right' limit={1} />
    </>
  )
}

export default Layout