import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { loadAllPosts } from "../Services/Post-service";
import { Row, Col } from 'reactstrap'
import Post from "./Post";



function NewFeed(){

    
    //storing all post in data
    const [postContent,setPostContext]=useState(
        {
            content:[]
        }
    )

    useEffect(()=>{
        //load all posts from server
        loadAllPosts().then((data)=>{
            console.log(data);
            setPostContext(data);
        }).catch(error=>{
            console.log(error)
        })
    },[])

    return(
        <div className="container-fluid ">
            <Row>
                <Col md={
                    {
                        size:10,
                        offset:1
                    }
                }>
               <h1> Blogs Count ({postContent?.totalElements})</h1>
                {
                    postContent.content.map((post)=>(
                        <Post post={post } key={post.postId}/>
                    ))
                }
                </Col>
                
            </Row>
        </div>
    )
}

export default NewFeed;