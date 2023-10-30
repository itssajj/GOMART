import React, { useEffect} from 'react';
import { filteredBalenciaga } from "../Store/allProduct";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/search";
import {useState} from 'react';
import ClothingDetail from '../Data/detail'
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ADI_LOGO from '../../images/logoad.png'
import ADI_AD from '../../images/500.jpg'



function Adidas() {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    const prevItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...prevItems, item];
   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setAddedItems(updatedCartItems);
    dispatch({ type: 'ADD_CAR', payload: item });
  };
    const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('network error');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('fetch error:', error);
      });
  }, []);

    const maleCardList = products.filter((maleclothesItem) => maleclothesItem.brand === 'Adidas').map((maleclothesItem) => (

      <Col
      style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
            key={maleclothesItem.id}
        sm={6}
        md={6}
        lg={3}
      >
        <Card style={{ width: '268px', marginBottom: '5px',border: '0.1px solid white ' }}>
          <Card.Img
            variant="top"
            src={`http://localhost:8000/${maleclothesItem.image}`}
            style={{ width: '267px', height: '300px',padding: ''}}
  
            onClick={() => handleCardClick(maleclothesItem)}
          />
       <Card.Body>
            <Card.Title style={{ fontFamily: '' }}>
             <h6> {maleclothesItem.name}</h6>
            </Card.Title>
            <Card.Title style={{ fontFamily: '',float:'right',marginTop:'-30px' ,color:'grey'}}>
             <h6>₦ {maleclothesItem.price}</h6>
            </Card.Title>
  
            {/* <Card.Text style={{ fontFamily: 'Helvetica' }}>
              {maleclothesItem.desc} so get it now
            </Card.Text> */}
            {/* <Card.Text style={{ fontFamily: '' }}>
              ₦{maleclothesItem.price}
            </Card.Text>
            <h5>★★★☆☆</h5> */}
            <Button
  onClick={() => handleAddToCart(maleclothesItem)}
                variant="dark"
              style={{ fontFamily: '' }}
            >
              Add to cart 🛒
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div  className='container'>
            <Search/>

            <div class="video-container">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rhrwsA-O5sY"   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
    <hr/>
            <a href="/adidas">

            <img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white  ',width:'120px',height:'100px'}} src={ADI_LOGO}></img>
</a>
{selectedItem && <ClothingDetail clothingItem={selectedItem} />}

      <Row>{maleCardList}</Row>
    </div>
  );
}

export default Adidas;
