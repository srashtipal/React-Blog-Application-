import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row,Col } from "reactstrap";
import Base from "../Components/Base";
import { toast } from "react-toastify";
import { loadPost } from "../Services/Post-service"


const PostPage=()=>{

    const {postId}=useParams()
    const[post,setPost]=useState(null)

    useEffect(() => {
        // load post of postId 
        loadPost(postId).then(data => {
            console.log(data);
            setPost(data)

        }).catch(error => {
            console.log(error)
            toast.error("Error in loading post")
        })

    }, [])
    return(
        <Base>
        <Container className="mt-4">
            <Link to="/">Home</Link>
            <Row>
                <Col md={{
                    size:12
                }}>
                    <h1>Load the post from database</h1>
                </Col>
            </Row>
        </Container>
        </Base>
        
    )
}

export default PostPage;