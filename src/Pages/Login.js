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

const Login=()=>{
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
              <CardHeader className="text-center">
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
                <Form >
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      placeholder="Enter email"
                      id="email"
                    
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                    
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark" >
                      Login
                    </Button>
                    <Button

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