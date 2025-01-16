import React from 'react'
import { useSelector } from 'react-redux'

export default function Profiles() {
    const userdata = useSelector((state)=>state.user.userData)
  return (
    <div>Profiles</div>
  )
}
