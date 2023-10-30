import React, { useState, useEffect } from 'react';
import Navbar3 from '../Navbar/Navbar3';
import { Link } from 'react-router-dom';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import CartUser from '../Cart/CartUser';
import ProfileForm from './/ProfileForm'


function VeiwProfile() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
    const [showShow2, setShowShow2] = useState(false);

  const toggleShow2 = () => setShowShow2(!showShow2);

  useEffect(() => {
    // Fetch the list of customers from your Django backend
    fetch('http://localhost:8000/api/customer-list/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching customer list:', error);
        setLoading(false);
      });
  }, []);

  const loggedInUser = localStorage.getItem('loggedInUsername');
  const filteredCustomers = customers.filter((customer) => customer.customeruser === loggedInUser);
  const reversedCustomers = filteredCustomers.slice().reverse();
  const lastCustomer = reversedCustomers[0];
  // Save the lastCustomer to local storage
localStorage.setItem('lastCustomer', JSON.stringify(lastCustomer));

  // After fetching and getting lastCustomer, save the customer image URL in local storage


  return (
    <div class="" >
      
                  <div class="video-container">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6sIBZCFyz14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div class="container" >

      {/* <br/>     */}
        {/* <br/> */}


      < hr style={{color:'lime'}} />

      {/* <h6 ><b>  Verified </b></h6> */}
      <h4       style={{float:'right'}}
 ><b> <i class='fab fa-expeditedssl'></i> </b></h4>


      {loading ? (
        <p>{loggedInUser} profile...</p>

      ) : lastCustomer ? (

        <div>
          {lastCustomer.customerimage && (
            <div>
              <img
                src={`http://localhost:8000${lastCustomer.customerimage}`}
                alt="Profile"
                style={{ maxWidth: '200px',border:'lime 1px solid' ,borderRadius:"10px"}}
              />
            </div>
            
          )}
{/* <Link to="/profile-form" style={{ float: 'right', textDecoration: 'none' , color:'green'}}>
  <i className="fas fa-marker"></i> Edit Profile
</Link> */}
<>
          <Link tag='a' onClick={toggleShow2} style={{ float: 'right', textDecoration: 'none' , color:'green',marginTop:'-19px'}}>
   <span style={{color:"green"}} ><i className="fas fa-marker"></i> Edit Profile</span>
</Link>

          {/* <button  tag='a' onClick={toggleShow}className="btn btn-dark">
        Check Cart
      </button> */}

      {/* <MDBBtn tag='a' onClick={toggleShow}>
        Check Cart
      </MDBBtn> */}
      {/* <MDBBtn onClick={toggleShow}>Checkout List</MDBBtn> */}
      <MDBCollapse show={showShow2}>
        <div classNam="container w-50 " style={{width:'',backgroundColor:'black'}}></div>
        {/* <CartUser/> */}
        {/* <ProfileForm/> */}
        <ProfileForm/>
      </MDBCollapse>
    </>

<div/>

{/* <br/> */}
< hr style={{color:'lime'}} />
<div style={{backgroundColor:'#D2042D',border:'solid pink 2px',color:'white'}}  ><br/>  <p><strong >&nbsp; <i class='fas fa-user-injured'></i> </strong><b> {lastCustomer.customeruser} </b></p>
</div>


                    {/* <p><strong > <i class='fas fa-user-injured'></i> </strong><b> {lastCustomer.customeruser} </b></p> */}
                    
                    < hr style={{color:'pink'}} />


          <p style={{float:''}}><strong>  <i style={{color:'red'}}  class='fab fa-centercode'></i> Verified Gomart Profile </strong> <i style={{color:'red'}} class='fas fa-check-circle'></i>  </p>
          < hr style={{color:'pink'}} />

          <p style={{float:'',color:'grey'}}><strong> <i class='fas fa-phone'></i> Phone Number:  &nbsp;&nbsp;  </strong> {lastCustomer.phone_number}</p>

          <p style={{float:'',color:'grey'}}><strong> <i class='fas fa-map-marker-alt'></i>  &nbsp; Location: </strong> {lastCustomer.city}</p>
          </div>
      ) : (
        <p>No customer profile found for the logged-in user.</p>
      )}
          <>
          <Link tag='a' onClick={toggleShow} style={{ float: 'right', textDecoration: 'none' , color:'#088F8F'}}>
          <i class='fas fa-cart-arrow-down'></i>
   <span style={{color:"#088F8F"}} > Cart</span>
</Link>

          {/* <button  tag='a' onClick={toggleShow}className="btn btn-dark">
        Check Cart
      </button> */}
                <Link to='/checkout'  style={{ float: '', textDecoration: 'none' , color:'brown'}}>
                <i class='fab fa-cc-amazon-pay'></i> &nbsp;  Checkout</Link>

      {/* <MDBBtn tag='a' onClick={toggleShow}>
        Check Cart
      </MDBBtn> */}
      {/* <MDBBtn onClick={toggleShow}>Checkout List</MDBBtn> */}
      <MDBCollapse show={showShow}>
        <div classNam=""></div>
        <CartUser/>
      </MDBCollapse>
    </>
    < hr style={{color:'pink'}} />
    <br/> <br/> <br/>

    </div>
    </div>

  );
}

export default VeiwProfile;
