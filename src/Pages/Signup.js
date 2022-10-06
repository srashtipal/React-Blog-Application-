
import { useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row,
  } from "reactstrap";import Base from "../Components/Base";


const Signup=()=>{



     //data
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
      });

      //error
      const [error, setError] = useState({
        errors: {},
        isError:false
      });

      //for data change it works 
      //  useEffect(()=>{
      //   console.log(data);
      //  },[data])

      //handleChange->used for how many times data changes
      const handleChange=(e,property)=>{
        // console.log("name changes");
        // console.log(e.target.value);
        //dynamic value set
        setData({...data,[property]:e.target.value})
      }

       //resetting form
    const resetData=()=>
    {
        setData({
            name:'',
            email:'',
            password:'',
            about:''
        })
    }

    //submit the form
    const submitForm=(e)=>{
      e.preventDefault()

      //data print after submit
      console.log(data)
      
      //data validate


      //call server api for sending data
    }
    

    return(
<Base>
<Container>
<Row className="mt-4">
          {/* { JSON.stringify(data) } */}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card >
              <CardHeader className="text-center">
                <h3 > Fill Information to Register !!</h3>
              </CardHeader>

              <CardBody>
                {/*creating form*/}

                <Form onSubmit={submitForm}>
                    {/*Name Field*/ }
                    <FormGroup>
                        <Label for="name">Enter Name </Label>
                        <Input
                        type="text"
                        placeholder="Enter here"                       
                        id="name"
                        onChange={(e)=>handleChange(e,'name')}
                        value={data.name}
                        />
                    </FormGroup>

                    {/*Email Field*/ }
                    <FormGroup>
                        <Label for="name">Enter Email </Label>
                        <Input
                        type="text"
                        placeholder="Enter here"                       
                        id="email"
                        onChange={(e)=>handleChange(e,'email')}
                        value={data.email}
                        />
                    </FormGroup>

                    {/*Password Field*/ }
                    <FormGroup>
                        <Label for="name">Enter Password</Label>
                        <Input
                        type="password"
                        placeholder="Enter here"
                        id="password"                      
                       onChange={(e)=>handleChange(e,'password')}
                       value={data.password}
                        />
                    </FormGroup>

                    {/*About Field*/ }
                    <FormGroup>
                        <Label for="name">Enter About</Label>
                        <Input
                        type="textarea"
                        placeholder="Enter here"
                        id="name"
                        style={{ height: "250px" }}
                        onChange={(e)=>handleChange(e,'about')}
                        value={data.about}
                        />
                    </FormGroup>

                    {/*Button */}
                    <FormGroup>
                    <Container className="text-center">
                    <Button color="dark">
                      Register
                    </Button>
                    <Button
                     onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                    </FormGroup>
                </Form>
              </CardBody>
    </Card>
        </Col>
    </Row>
</Container>
</Base>
   )
}

export default Signup;