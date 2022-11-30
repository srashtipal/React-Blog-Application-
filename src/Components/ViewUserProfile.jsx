import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Card, CardBody,  CardFooter,  Container, Table,Button } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { Link, useParams } from 'react-router-dom';


const ViewUserProfile = ({user}) => {

  const {userId}=useParams([])

    const[currentUser,setCurrentUser]=useState(null);
    const [login,setlogin]=useState(false)
    useEffect(()=>{
       setCurrentUser(getCurrentUserDetail())
       setlogin(isLoggedIn())
    },[])

  return (
    <Card className='mt-2 border-0 rounded-0 shadow'>
            <CardBody >
              <h3 className='text-uppercase text-center'>User Information</h3>
              <Container className='text-center'>
                <img style={{maxWidth:'150 px',maxHeight:'250px'}} src={user.image?user.image:'data:image/png;base64,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' } alt='user profile picture' className='img-fluid rounded '/>
              </Container>
              <Table  hover bordered={true} className='text-center mt-5'>
                <tbody>
                  <tr>
                    <td>
                      LCWDIBILOGS
                    </td>
                    <td>
                      LCWD{user.id}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      USER NAME
                    </td>
                    <td>
                      {user.name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      EMAIL
                    </td>
                    <td>
                      {user.email}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ABOUT
                    </td>
                    <td>
                      {user.about}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ROLE
                    </td>
                    <td>
                      {user.roles?.map((role)=>{
                        return(
                          <span key={role.id}>{role.name}</span>
                        )
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
              {currentUser?( currentUser.id==user.id)?(
                <CardFooter  className='text-center'>
                <Button tag={Link} to={`/user/update-profile/${userId}`} className='dark' >Update User</Button>
                </CardFooter>
              ):' ' :''}

              
            </CardBody>
          </Card>
  )
}

export default ViewUserProfile;