import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { loadAllPosts } from "../Services/Post-service";
import { Row, Col,Pagination,PaginationItem,PaginationLink, Container } from 'reactstrap'
import Post from "./Post";
import { toast } from "react-toastify";



function NewFeed(){

    
    //storing all post in data
    const [postContent,setPostContext]=useState(
        {
            content:[],
            totalPages: '',
            totalElements: '',
            pageSize: '',
            lastPage: false,
            pageNumber: ''
        }
    )

    useEffect(()=>{
        //load all posts from server
        loadAllPosts(0,4).then((data)=>{
            console.log(data);
            setPostContext(data);
        }).catch(error=>{
            console.log(error)
            toast.error("Error in loading post")
        })
        //changePage(0)
    },[])
       
    
    const changePage=(pageNumber=0,pageSize=5)=>{
         if(pageNumber>postContent.pageNumber && postContent.lastPage){
            return;
         }

         if(pageNumber>postContent.pageNumber && postContent.pageNumber){
            return;
         }
        loadAllPosts(pageNumber,pageSize).then(data=>{
            setPostContext(data)
            window.scroll(0,0)
        }).catch(error=>{
            toast.error("Error in loading post")
        })
    }

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
                <Container className="mt-3">

                    <Pagination size="lg">

                    <PaginationItem onClick={()=>changePage(postContent.pageNumber-1)} disabled={postContent.pageNumber===0}>
                        <PaginationLink previous>
                             Previous
                        </PaginationLink>
                    </PaginationItem>

                    {
                        [...Array(postContent.totalElements)].map((item,index)=>(
                            // eslint-disable-next-line
                            <PaginationItem onClick={()=>changePage(index)} active={index==postContent.pageNumber} key={index}>
                                <PaginationLink>
                                    {index+1}
                                </PaginationLink>

                            </PaginationItem>
                        ))
                    }
                
                    <PaginationItem onClick={()=>changePage(postContent.pageNumber+1)} disabled={postContent.lastPage}>
                        <PaginationLink next>
                            Next
                        </PaginationLink >
                    </PaginationItem>
                    </Pagination>
                </Container>
                </Col>
                
            </Row>
        </div>
    )
}

export default NewFeed;