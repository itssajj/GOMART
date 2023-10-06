import React, { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../User/AuthContext';
import ClothingDetail from '../Data/detail';




function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { loggedInUsername, logout } = useContext(AuthContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedItems, setAddedItems] = useState([]);

  const handleCardClick = (item) => {
    console.log('Card clicked:', item);
    setAddedItems((prevItems) => [...prevItems, item]);
    setSelectedItem(item);
  };

  const loadCartItems = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const uniqueItemsMap = new Map();
    for (const item of storedCartItems) {
      const uniqueKey = `${item.name}_${item.price}`;
      const existingItem = uniqueItemsMap.get(uniqueKey);
            if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = { ...item, quantity: 1 };
        uniqueItemsMap.set(uniqueKey, newItem);
      }
    }
    const uniqueCartItems = Array.from(uniqueItemsMap.values());
    setCartItems(uniqueCartItems);
  
    const reversedCartItems = uniqueCartItems.slice().reverse();
    setCartItems(reversedCartItems);
  };
    const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
   setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  function calculateTotalPrice(cartItems) {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  }
    useEffect(() => {
    loadCartItems();
  }, []);
  useEffect(() => {
    const total = calculateTotalPrice(cartItems);
    setTotalPrice(total);
  }, [cartItems]);
  const handleCheckout = () => {
    const checkoutPageURL = '/checkout'; 
      window.open(checkoutPageURL, '_blank');
  };
  

  return (
    <div className='container'>
      <div className='row-8'>
        <hr/>
        <h5 > Gobag  <i className="fa-solid fa-shopping-bag"></i>   </h5>
        <div style={{float:'right'}} >
      <b> {loggedInUsername}</b>  <br/>
        
    ₦{totalPrice.toFixed(2)}
    
        </div>
{/* <br/> */}
<br/>
<br/>
<hr/>

        {/* <hr /> */}
        {selectedItem && <ClothingDetail clothingItem={selectedItem} />}


        <Table striped bordered hover size="sm"  >
          <thead>
            <tr>
              <th>Gobag</th>
              <th>Name</th>
              <th>Quantity</th>

              <th>Price</th>
              {/* <th>Quantity</th> */}
              {/* <th>Total</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={`http://localhost:8000/${item.image}`}
                    style={{ width: '90px', height: '100px' }}
                    alt={item.name}
                    className="img-thumbnail"
                    onClick={() => handleCardClick(item)}

                  />
                 &nbsp;    
                  
                </td>
                <td><h6>{item.name} 
 </h6></td>
 <td><h6><span style={{float:'reverted'}} class='text-info '> <b>{item.quantity}</b></span>  </h6></td>



                <td><h6>₦{item.price *item.quantity}</h6></td>

                {/* <td>{item.quantity}</td> */}
                {/* <td>${item.price * item.quantity}</td> */}
                <td>
             <h6>  </h6>  
                  
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn btn-dark"
                  >
                    Remove
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <hr/>
      <div>
  <b> Total: </b>     ₦{totalPrice.toFixed(2)}<button   onClick={handleCheckout}  style={{float:'right'}}  class='btn-sm btn btn-outline-dark'>checkout</button>
        <table> 

          <td>           <h5>  
          
</h5>  

</td>
          
          
            </table>
            <hr/>

            
         </div>
         
    </div>

  );
}

export default Cart;
