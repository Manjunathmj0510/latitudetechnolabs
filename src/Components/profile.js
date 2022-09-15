import React, { useState } from 'react'
import { Container,Image, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import '../css/profile.css'
import Button from '@restart/ui/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { userData } from '../Reducers/userReducer';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Profile = () => {
    const user = useSelector(state => state.persistedReducer?.userData)
    const [show, setShow] = useState(false);
     const [first_name,setFirst_name] = useState(user?.first_name ? user?.first_name :'')
    const [last_name,setLast_name] = useState(user?.last_name ? user?.last_name:'')
    const [email,setEmail] = useState(user?.email ? user?.email : '')
    const dispatch = useDispatch()
    const editUser = () =>{
        let obj = Object.assign({},user,{id:user?.id,first_name:first_name,last_name:last_name,email:email,avatar:user?.avatar})
        dispatch(userData(obj))
    }
    return (
        <>
        <div className='lp-profile-container'>
        <Container>
        <Image src={user?.avatar} alt=''/>
        <h4>{user?.first_name} {user?.last_name}</h4>
        <p>{user?.email}</p>
        <Button onClick={()=>setShow(true)}><EditOutlinedIcon/></Button>
        </Container>
        </div>
        <Modal show={show} onHide={()=>setShow(false)} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>{show == 'login' ? 'Login' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>editUser(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  value={first_name} onChange={(e)=>setFirst_name(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  value={last_name} onChange={(e)=>setLast_name(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Profile;