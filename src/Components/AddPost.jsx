import { useRef, useState } from "react"
import { useEffect } from "react"
import { Card, CardBody, Input,Label,Form,Container,Button} from "reactstrap";
import { loadAllCategories } from "../Services/Category-service";
import { getCurrentUserDetail } from "../Auth/AuthIndex"
import JoditEditor from 'jodit-react';
import { toast } from "react-toastify"
import { createPost as doCreatePost, uploadPostImage } from "../Services/Post-service"



const AddPost=()=>{

    const editor = useRef(null)
    // const [content,setContent] =useState('')
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState(undefined)
    const [image, setImage] = useState(null)


    // const config={
    //     placeholder:"Start typing........."
    // }

    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    })

    useEffect(
        () => {
            setUser(getCurrentUserDetail())
            loadAllCategories().then((data) => {
                console.log(data)
                setCategories(data)
            }).catch(error => {
                console.log(error)
            })
        },[])
     //field changed function
     const fieldChanged = (event) => {
        console.log(event)
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const contentFieldChanaged = (data) => {
        setPost({ ...post, 'content': data })
    }

    //create post function
    const createPost = (event) => {

        event.preventDefault();

        // console.log(post)
        if (post.title.trim() === '') {
            toast.error("post  title is required !!")
            return;
        }

        if (post.content.trim() === '') {
            toast.error("post content is required !!")
            return
        }

        if (post.categoryId === '') {
            toast.error("select some category !!")
            return;
        }

        //submit the form one server
        post['userId'] = user.id
        doCreatePost(post).then(data => {


            uploadPostImage(image,data.postId).then(data=>{
                toast.success("Image Uploaded !!")
            }).catch(error=>{
                toast.error("Error in uploading image")
                console.log(error)
            })

            toast.success("Post Created !!")
            // console.log(post)
            setPost({
                title: '',
                content: '',
                categoryId: ''
            })
        }).catch((error) => {
            toast.error("Post not created due to some error !!")
            // console.log(error)
        })
    }

    //handling file chagne event
    const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }

    return(
        <div className="wrapper">
            <Card className="shadow-sm  border-0 mt-2">
            <CardBody>
            <h3>What's on your mind?</h3>
            <Form onSubmit={createPost}>

                {/*Post Title */}
                <div className="my-3">
                <Label for="title" >Post Title</Label>
                    <Input type="text" 
                    id="content"
                    placeholder="Enter here"
                    className="rounded-0"
                    name="title"
                    onChange={fieldChanged}
                    />
                </div>

                {/*Post Content */}
                <div className="my-3">
                <Label for="content" >Post Content</Label>
                            {/* <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="rounded-0"
                                style={{ height: '300px' }}
                            /> */}
                            <JoditEditor
                                ref={editor}
                                value={post.content}
                                // config={config}
                                // onChange={(newContent) => setContent(newContent)}
                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
                        </div>


                         {/* file field  */}
                        <div className="mt-3">
                            <Label for="image">Select Post banner</Label>
                            <Input id="image" type="file" onChange={handleFileChange} />
                        </div>


                      {/*Post Category */}
                         <div className="my-3">
                            <Label for="category" >Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="categoryId"
                                onChange={fieldChanged}
                                defaultValue={0}
                            >
                             <option disabled value={0} >--Select category--</option>
                                {

                                  categories.map((category) => (
                                 <option value={category.categoryId} key={category.categoryId}>
                                    {category.categoryTitle}
                                 </option>
                                   ))
                                 }
                            </Input>
                        </div>

                        {/*Button */}
                        <Container className="text-center">
                            <Button type="submit"  color="dark">Create Post</Button>
                            <Button className="ms-2" color="secondary" outline>Reset Content</Button>
                        </Container>



            </Form>
            </CardBody>
         </Card>
        </div>
    )
}

export default AddPost;