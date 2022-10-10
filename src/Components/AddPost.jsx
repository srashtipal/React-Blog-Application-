import { useRef, useState } from "react"
import { useEffect } from "react"
import { Card, CardBody, Input,Label,Form,Container,Button} from "reactstrap";
import { loadAllCategories } from "../Services/Category-service";
import { getCurrentUserDetail } from "../Auth/AuthIndex"
import JoditEditor from 'jodit-react';



const AddPost=()=>{

    const editor = useRef(null)
    const [content,setContent] =useState('')

    const [categories, setCategories] = useState([])
    const [user, setUser] = useState(undefined)


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
        },
        []
    )

    return(
        <div className="wrapper">
            <Card className="shadow-sm  border-0 mt-2">
            <CardBody>
            <h3>What going in your mind ?</h3>
            <Form>

                {/*Post Title */}
                <div className="my-3">
                <Label for="title" >Post Title</Label>
                    <Input type="text" 
                    id="content"
                    placeholder="Enter here"
                    className="rounded-0"
                    name="title"
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
                                onChange={(newContent) => setContent(newContent)}
                            />
                        </div>

                         {/* file field for post banner */}
                         <div className="mt-3">
                            <Label for="image">Select Post banner</Label>
                            <Input id="image" type="file" />
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
                            >
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