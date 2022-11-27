import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Base from '../../Components/Base'
import ViewUserProfile from '../../Components/ViewUserProfile'
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

  const userView=()=>{
    return(
      <Row>
        <Col md={{size:8,offset:2}}>
          <ViewUserProfile user={user}/>
        </Col>
      </Row>
    )
  }
  return (
    <Base>
        {user? userView():'Loading User Data......'}
    </Base>
  )
}

export default ProfileInfo;