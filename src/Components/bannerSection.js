import React from 'react';
import {Image,Form,Button} from 'react-bootstrap'
import '../css/banner.css'
import Bimage from '../Images/index.jpg' 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Banner = () => {
    const [alignment, setAlignment] = React.useState('Buy');

  const handleChange = (
    newAlignment
  ) => {
    setAlignment(newAlignment);
  };
    return (
        <div className='lp-banner-container'>
        <Image className='lp-banner-image' src='https://source.unsplash.com/VWcPlbHglYc' alt='banner'/>
        <div className='lp-banner-details'>
        <p>Discover a PLACE you will <br/> love to live</p>
        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Buy">Buy</ToggleButton>
      <ToggleButton value="Rent">Rent</ToggleButton>
      <ToggleButton value="Sold">Sold</ToggleButton>
    </ToggleButtonGroup><br/>{''}<br/>
        <Form className="lp-banner-form d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='lp-banner-button' variant="success"><SearchOutlinedIcon/></Button>
          </Form>
        </div>
        </div>
    )
}

export default Banner;