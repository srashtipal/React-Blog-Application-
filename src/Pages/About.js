import userContext from "../Context/userContext";
import Base from "../Components/Base";
import { Card, CardBody, Container } from "reactstrap";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          {console.log(object)}
          <Card>
            <CardBody>
            <h1 className="text-center">
            Welcome user: {object.user.login && object.user.data.name}
          </h1>
          <Container className="text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39A3t4EgJIycwjFdU2xM2xuKxCmyu7cwjFMzk6Jeh&s" alt="blog-image"/>            
          </Container>
          <Container>
            <h3>
            Blogs allow you to talk about any topic you are interested in and express your opinion. You’ll find some bloggers writing on every activity that took place during their day. These activities may range from small things like waking up to major issues like human rights and climate change!

Remember that as a blogger running your own blog, you need to focus on the topics that you are passionate about, and through that focus strive to become one of the best blogs on the web.
            </h3>
          </Container>
            </CardBody>
          </Card>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
