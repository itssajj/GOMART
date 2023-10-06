import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Quickmalesug from '../Quick/malesug'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";
import QuickSneakers from '../Quick/quicksneaker';
import Quickfemale from '../Quick/quickfemale';
import Quickmale from '../Quick/quickmale';
import QuickAdidas from '../Details/Adidasdetails';
import QuickGucci from '../Details/Guccidetails';
import QuickBalenciaga from '../Details/Balenciagadetials';
import QuickNike from '../Details/Nikedetails';
import QuickNorthface from '../Details/Northfacedetails';
import QuickConverse from '../Details/Conversedetails';
import QuickPuma from '../Details/Pumadetials';
import QuickReebok from '../Details/Reebokdetials';
import QuickHublot from '../Details/Hublotdetails';
import QuickKeppa from '../Details/Keppadetails';
import QuickEllesse from '../Details/Ellesedetails';
import QuickMetalica from '../Details/Metalicadetails';
import QuickPalace from '../Details/Palacedetails';
import QuickTh from '../Details/Thdetails';
import Brands3 from '../Views/Brands3';
import Brands from '../Views/Brands';
import QuickDrm from '../Details/Drmdetails';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ClothingDetail({ clothingItem , onClose  }) {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [ratingValue, setRatingValue] = useState(0); 


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const toggleDetail = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  if (!isOpen) {
    return (
      <button style={{ float: 'right', zIndex: 1, marginLeft:'14px' }} className="btn btn-dark btn-sm open-button float-right" onClick={handleOpen}>
   <i className="fas fa-bars"></i>
      </button>
    );
  }  

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    const prevItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...prevItems, item];
    // const existingItemIndex = updatedCartItems.findIndex((item) => item.id === item.id);
    // if (existingItemIndex !== -1) {
    //   updatedCartItems[existingItemIndex].quantity += 1;
    // } else {
    //   item.quantity = 1;
    //   updatedCartItems.push(item);
    // }
   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setAddedItems(updatedCartItems);
  
    dispatch({ type: 'ADD_CAR', payload: item });
  };
  return (
    <div class= 'container-md'>
 <button style={{float:'right'}}  className="btn btn-outline-dark close-button float-right" onClick={handleClose}>
         <i className="fas fa-bars"></i>
      </button>   
      <br/>   
    <div  class= 'row'>
      <br/>   
      <br/>   
      <div class='col-md-6 col-sm-6  col-lg-6' >
      <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://127.0.0.1:8000/${clothingItem.image}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{clothingItem.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://127.0.0.1:8000/${clothingItem.img1}`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{clothingItem.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://127.0.0.1:8000/${clothingItem.img2}`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{clothingItem.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div variant="elevation" class = 'col-md-6 col-sm-6  col-lg-6 ' style={{padding: '', fontSize:'15px' ,elevation:'1'}} > <br/> 
      <h5 >  <b>{clothingItem.name}</b></h5> <br/> 
      <hr/>
      <h6 style={{fontSize:'14px',color:'GrayText'}}>  {clothingItem.description} clothing item material is a the well made and selected fitting for comfortablity. offers the best quality when it comes to affordable clothing item this is washable and ironable. This is a {clothingItem.description}</h6><hr/>
      <b style={{float:'right'}}>
   &nbsp;
   {clothingItem.color.charAt(0).toUpperCase() + clothingItem.color.slice(1).toLowerCase()}
   &nbsp; <span style={{ marginLeft: '3px', border:'1px black solid',textTransform: 'capitalize', display: 'inline-block', width: '15px', height: '12px',borderRadius:'5O%', backgroundColor: clothingItem.color }}></span>
   </b>
      <h6 style={{color:'grey'}} > ₦{clothingItem.price}</h6><hr/>
      
      <b> Rating : <span style={{marginLeft:'',color:'brown'}}> <Rating
        name="simple-controlled"
        value={ratingValue} 
        onChange={handleRatingChange} 
        style={{color:'brown',fontSize:'15px'}}
      /></span></b> 
     
    <b style={{float:'right'}}>  {ratingValue}  </b><br/>

    <br/>  <b style={{float:''}}>Available:    &nbsp;
       <div class="btn-group container-6" role="group" aria-label="Size">
    <button type="button" class="btn  btn-outline-dark btn-sm" onClick={() => handleSizeSelect('XL')}>XL</button>
    <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleSizeSelect('L')}>L</button>
    <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleSizeSelect('M')}>M</button>
    <button type="button" class="btn  btn-outline-dark btn-sm" onClick={() => handleSizeSelect('S')}>S</button>
    <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleSizeSelect('XS')}>XS</button>
  </div>  </b>  
  <b style={{float:'right'}}>  &nbsp;   <b>{selectedSize}</b> </b>

    <div>    
  <hr/>
  <div  class='container-12'>
         <i class='fab fa-cc-apple-pay' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-paypal' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-visa' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-mastercard' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-apple-pay' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-paypal' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          </div>
</div><br/>
<div className='container'>
  <Row className="justify-content-md-left">
    <Col xs={4} lg={2}><Image className="img-fluid" src={`http://127.0.0.1:8000/${clothingItem.image}`} alt="Image 1"/></Col>
    <Col xs={4} lg={2}><Image className="img-fluid" src={`http://127.0.0.1:8000/${clothingItem.img1}`} alt="Image 1"/></Col>
    <Col xs={4} lg={2}><Image className="img-fluid" src={`http://127.0.0.1:8000/${clothingItem.img2}`} alt="Image 1"/></Col>
  </Row>
  <br/>
  <hr/>
  <button  onClick={() => handleAddToCart(clothingItem)} variant="outline-danger" class="btn btn-dark   w-100  btn-block" type="button">Add to cart 🛒</button>
  <hr/>
</div>
 </div>
    <div style={{marginTop:''}}  >
<hr/>
<h5 style={{marginLeft:'80px'}} > </h5>
{clothingItem.brand === 'Nike' ? (
              <QuickNike />
            ) : clothingItem.brand === 'Adidas' ? (
              <QuickAdidas/>
            ) : clothingItem.brand === 'Gucci' ? (
              <QuickGucci />
            ) : clothingItem.brand === 'Balenciaga' ? (
                <QuickBalenciaga />
            ) : clothingItem.brand === 'Nike' ? (
                  <QuickNike />
           ) : clothingItem.brand === 'Northface' ? (
                 <QuickNorthface />
           ) : clothingItem.brand === 'Converse' ? (
                  <QuickConverse />
           ) : clothingItem.brand === 'Puma' ? (
                    <QuickPuma/>
           ) : clothingItem.brand === 'Reebok' ? (
                      <QuickReebok/>
          ) : clothingItem.brand === 'Ellesse' ? (
                        <QuickEllesse/>
          ) : clothingItem.brand === 'Hublot' ? (
                          <QuickHublot/>
          ) : clothingItem.brand === 'Keppa' ? (
                            <QuickKeppa/>
          ) : clothingItem.brand === 'Metalica' ? (
                              <QuickMetalica/>
          ) : clothingItem.brand === 'Palace' ? (
                                <QuickPalace/>
          ) : clothingItem.brand === 'Tommy Hilfiger' ? (
                                  <QuickTh/>
          ) : clothingItem.brand === 'Drm' ? (
                                    <QuickDrm/>
            ) : (
             <QuickNike/>
            )}
</div>
    </div>
    <hr/>
  </div>
    
  );
}

export default ClothingDetail;
