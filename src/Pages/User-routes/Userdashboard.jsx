import React from 'react'
import AddPost from '../../Components/AddPost'
import '../../Components/Base' 
import Base from '../../Components/Base'
import { Container } from 'reactstrap'

const Userdashboard = () => {
  return (
    <Base>
    <Container>
    <AddPost/>
    </Container>
    </Base>
  )
}
export default Userdashboard;