import React, { useState } from 'react'
import {Row,Col,Image,Container,Form} from  'react-bootstrap'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert'
import '../css/header.css'
import axios from 'axios';
import { userData } from '../Reducers/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Header = () => {
    const [show, setShow] = useState('');
    // const [first_name,setFirst_name] = useState('')
    // const [last_name,setLast_name] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const submitUser = (e) => {
        e.preventDefault();
        const data = {
            email:email,
            password:password
        }
        axios.post(show == 'signup' ? 'https://reqres.in/api/register' : 'https://reqres.in/api/login',data)
        .then(res=>{
            if(res.status == 200){
                setEmail('')
                setPassword('')
            if(show == 'signup'){
                swal("You have signed in!", "success");
           axios.get(`https://reqres.in/api/users/${res.data.id}`)
           .then(res => {
               dispatch(userData(res.data?.data));
               setShow('');
               navigate('/profile');
            })
           .catch(error=>console.log(error))
            }
            if(show == 'login'){
                swal("You have logged in!", "success");
                axios.post('https://reqres.in/api/register',data)
                .then(res=>{
                    if(res.status == 200){
                axios.get(`https://reqres.in/api/users/${res.data.id}`)
                .then(res =>{
                    dispatch(userData(res.data?.data));
                    setShow('');
                    navigate('/profile');
                })
                .catch(error=>console.log(error))
                    }else{
                        swal("ooops!", "error");
                    }
                })
            }
        }else{
            swal("ooops!", "error");
        }})
    }
  
    return (
        <>
        <div className='lp-header-container'>
        <Row>
        <Col className='lp-navbar-logo' sm={2} xl={2} xs={2} lg={2} md={2}><CottageOutlinedIcon/></Col>
        <Col className='lp-navbar-item' sm={2} xl={3} xs={1} lg={3} md={3}><ul className='lp-navbar-items'><li>Buy</li><li>Rent</li><li>Sold</li></ul></Col>
        <Col className='lp-navbar-buttons-div' sm={8} xl={7} xs={9} lg={7} md={7}><><button className='lp-navbar-buttons' onClick={()=>setShow('signup')}>Sign Up</button><button className='lp-navbar-buttons' onClick={()=>setShow('login')}>Login</button></></Col>
        </Row>
        </div>
        <Modal show={show == 'login' || show == 'signup'} onHide={()=>setShow('')} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>{show == 'login' ? 'Login' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>submitUser(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
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

export default Header