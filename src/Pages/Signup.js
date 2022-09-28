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

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
      });

      const [error, setError] = useState({
        errors: {},
        
      });
    

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

                <Form>
                    {/*Name Field*/ }
                    <FormGroup>
                        <Label for="name">Enter Name </Label>
                        <Input
                        type="text"
                        placeholder="Enter here"                       
                        id="name"
                        />
                    </FormGroup>

                    {/*Email Field*/ }
                    <FormGroup>
                        <Label for="name">Enter Email </Label>
                        <Input
                        type="text"
                        placeholder="Enter here"                       
                        id="email"
                        />
                    </FormGroup>

                    {/*Password Field*/ }
                    <FormGroup>
                        <Label for="name">Enter Password</Label>
                        <Input
                        type="password"
                        placeholder="Enter here"
                        id="password"
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
                        />
                    </FormGroup>

                    {/*Button */}
                    <FormGroup>
                    <Container className="text-center">
                    <Button color="dark">
                      Register
                    </Button>
                    <Button
                    
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