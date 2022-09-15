import React from 'react'
import { Container,Image,Row,Col, Button } from 'react-bootstrap';
import '../css/helper.css';
import DomainIcon from '@mui/icons-material/Domain';
import CabinIcon from '@mui/icons-material/Cabin';
import CottageIcon from '@mui/icons-material/Cottage';

const Helper = () => {
    return (
        <div className='lp-helper-container'>
        <Container>
        <h2>See How Trulia Can Help</h2>{''}{''}
        <Row>
        <Col xs={6} sm={6} xl={4} lg={4} md={4}>
        <CabinIcon/>
        <h4>Buy a Home</h4>
        <p>lorem epsum lorem epsum lorem epsum</p>
        <Button variant="success">Find a Home</Button>
        </Col>
        <Col xs={6} sm={6} xl={4} lg={4} md={4}>
        <CottageIcon/>
        <h4>Rent a Home</h4>
        <p>lorem epsum lorem epsum lorem epsum</p>
        <Button variant="success">Find a Rental</Button>
        </Col>
        <Col xs={6} sm={6} xl={4} lg={4} md={4}>
        <DomainIcon/>
        <h4>See neighborhoods</h4>
        <p>lorem epsum lorem epsum lorem epsum</p>
        <Button variant="success">Learn More</Button>
        </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Helper;