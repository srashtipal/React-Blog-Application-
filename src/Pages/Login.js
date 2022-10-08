import { useState } from "react";
import { toast } from "react-toastify";
import {
    Label,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
    Button,
  } from "reactstrap";
import Base from "../Components/Base";
import { loginUser } from "../Services/User-service";
import { doLogin } from "../Auth/AuthIndex";
import { useNavigate } from "react-router-dom";


const Login=()=>{

  const navigate= useNavigate()


  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      // eslint-disable-next-line
      loginDetail.username.trim() == "" || loginDetail.password.trim() == "")
       {
      toast.error("Username or Password  is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{
      console.log(data)
      //save the data to local storage
      doLogin(data,()=>{
         console.log("Login detail save to local storage")
         //redirect to user dashboard page
         navigate("/user/dashboard")
      })
       toast.success("Login success")

   }).catch(error=>{
      console.log(error)
       // eslint-disable-next-line
      if(error.response.status==400 || error.response.status==404){
         toast.error(error.response.data.message)
      }else{
      toast.error("something went wrong on server !!")}
   })
}

    return(
<Base>
    <Container>
    <Row className="mt-4">
          <Col
            sm={{
              size: 6,
              offset: 3,
            }}
          >
            <Card >
              <CardHeader className="text-center" >
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
              <Form onSubmit={handleFormSubmit}>
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      placeholder="Enter email"
                      id="email"
                    value={loginDetail.username}
                    onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark" >
                      Login
                    </Button>
                    <Button
                      onClick={handleReset}
                      className="ms-2"
                      outline
                      color="secondary"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
            
            </Col>
        </Row>
    </Container>
</Base> 
   )
}

export default Login;