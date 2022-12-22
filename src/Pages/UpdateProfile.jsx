import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Base from "../Components/Base";
import { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { getUser,updateUser as doUpdateUser, updateUser} from '../Services/User-service';
import {toast} from "react-toastify";



const UpdateProfile = () => {

  const {userId}=useParams([])
  

  const [data, setData] = useState({
    id:"",
    name: "",
    email: "",
    password: "",
    about: "",
  });

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // handle change
  const handleChange = (event, fieldName) => {

    setData({
        ...data,
        [fieldName]: event.target.value
    })

}

  useEffect(()=>{
    
    getUser(userId).then(data=>{
      console.log(data)
      setData({...data})
    })
    .catch(error => {
      console.log(error)
  })
  // eslint-disable-next-line
  },[])


  const updateUser = (event) => {

    event.preventDefault()
    console.log(data)
    doUpdateUser({ ...data, id:data.id},data.id)
    //console.log()
        .then(res => {
            console.log(res)
            toast.success("Data updated")
        })
        .catch(error => {
            console.log(error);
           toast.error("Error in upading data")
        })

}
  

  const updateHtml = () => {
    return(
      <div className="wrapper mt-4" >
         <Card  className="shadow-sm  border-0 mt-2 " >
              <CardHeader className="text-center">
                <h3> Update User Information !!</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form  onSubmit={updateUser}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      value={data.name}
                      onChange={(event) =>handleChange(event, 'name')}
                    />

                    
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      value={data.email}
                      onChange={(event) =>handleChange(event, 'email')}
                    />
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      value={data.password}
                      onChange={(event) =>handleChange(event, 'password')}
                      
                    />
                      </FormGroup>
            
                  {/* about field */}
                  <FormGroup>
                    <Label for="about">Write something about yourself</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                      value={data.about}
                      onChange={(event) =>handleChange(event, 'about')}
                      
                    />                    
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark"> Save & Proceed</Button>
                    <Button onClick={resetData}
                     color="secondary" 
                     type="reset" 
                     className="ms-2">Reset</Button>
                  </Container>

                </Form>
              </CardBody>
            </Card>
      </div>
    )
  }


  return (
    <Base>
    <Container>
        {updateHtml()}
      </Container>
    </Base>
  )
}

export default UpdateProfile;