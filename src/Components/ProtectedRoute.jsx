import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const ProtectedRoute = ({children})=> {
  const {user}= UserAuth()
  const Navigate = useNavigate()
  if(!user){
     return Navigate('/')
  }else{
    return children;
  }
}

export default ProtectedRoute
