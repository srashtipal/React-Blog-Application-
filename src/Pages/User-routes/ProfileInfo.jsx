import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../../Components/Base'
import userContext from '../../Context/userContext'
import { getUser } from '../../Services/User-service'
function ProfileInfo() {

  const [user,setUser]=useState(null)

  const object=useContext(userContext)

  const {userId}=useParams()
  //console.log(userId);

  useEffect(()=>{
  getUser(userId).then(data=>{
    console.log(data);
    setUser({...data})
  })
  },[])
  return (
    <Base>
      <div>ProfileInfo</div>
      <h1>Welcome:{object.user.data.name}</h1>
    </Base>
  )
}

export default ProfileInfo;