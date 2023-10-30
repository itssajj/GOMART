import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function ProfileForm() {
  const [customerData, setCustomerData] = useState({
    customeruser: '', // Initialize with an empty string
    phone_number: '',
    city: '',
    customerimage: null, // Use 'null' if no image is selected
  });

  useEffect(() => {
    // Retrieve the logged-in user from local storage when the component mounts
    const user = localStorage.getItem('loggedInUsername');
    if (user) {
      setCustomerData({ ...customerData, customeruser: user });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCustomerData({
      ...customerData,
      customerimage: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('customeruser', customerData.customeruser);
    formData.append('phone_number', customerData.phone_number);
    formData.append('city', customerData.city);
    formData.append('customerimage', customerData.customerimage);

    const response = await fetch('http://localhost:8000/api/add-customer/', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Handle successful update, e.g., show a success message
      window.location.reload(); 
      window.open('/profile-view')

    } else {
      // Handle errors, e.g., display an error message
      console.error('Update failed with status:', response.status);
    }
  };

  return (
    <div className="container mt-4">
      {/* <br/> */}
      < hr style={{color:'lime'}} />
<div style={{backgroundColor:'green',color:'white'}}>   &nbsp;   <h6>  &nbsp; Profile Settings <i class='fas fa-marker'></i></h6><hr/>
</div>
      {/* <br/> */}
      < hr style={{color:'lime'}} />
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <InputGroup className="mb-3">
      <InputGroup.Text><i class='fas fa-address-card'></i>&nbsp; Firstname:</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <InputGroup.Text><i class='far fa-id-card'></i> 
      &nbsp; Lastname:</InputGroup.Text>

      <Form.Control aria-label="Last name" />
    </InputGroup>
          {/* <label htmlFor="customeruser" className="form-label"><i class='fas fa-address-card'></i> Firstname:</label> */}
          {/* <input
            type="text"
            className="form-control"
            name="customeruser"
            value={customerData.customeruser}
            onChange={handleInputChange}
            readOnly // Make this field read-only since it's pre-filled
          /> */}
        </div>
        {/* <div className="mb-3">
          <label htmlFor="customeruser" className="form-label"><i class='far fa-id-card'></i> Lastname:</label>
          <input
            type="text"
            className="form-control"
            // name="customeruser"
            // value={customerData.customeruser}
            // onChange={handleInputChange}
            // readOnly // Make this field read-only since it's pre-filled
          />
        </div> */}

< hr style={{color:'lime'}} />

        <div className="mb-3">
          <label htmlFor="customeruser" className="form-label"> <i class='fas fa-user-injured'></i> Username:</label>
          <input
            type="text"
            className="form-control"
            name="customeruser"
            value={customerData.customeruser}
            onChange={handleInputChange}
            readOnly // Make this field read-only since it's pre-filled
          />
        </div>
        {/* < hr style={{color:'lime'}} /> */}
        {/* <br/> */}
        {/* < hr style={{color:'lime'}} /> */}

        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label" >  <i class='fas fa-mobile-alt'></i> Phone Number:</label>
          <input
            type="text"
            className="form-control"
            name="phone_number"
            value={customerData.phone_number}
            onChange={handleInputChange}
          />
        </div>
        {/* < hr style={{color:'lime'}} /> */}

        <div className="mb-3">
          <label htmlFor="city" className="form-label"> <i class='fas fa-map-marker-alt'></i> Location:</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={customerData.city}
            onChange={handleInputChange}
          />
        </div>
        {/* < hr style={{color:'lime'}} /> */}

        <div className="mb-3">
          <label htmlFor="customerimage" className="form-label"><i class='fas fa-images'></i> Profile Picture:</label>
          <input
            type="file"
            className="form-control"
            name="customerimage"
            onChange={handleImageChange}
          />
        </div>
        {/* < hr style={{color:'lime'}} /> */}

        <button type="submit"style={{ float: '', textDecoration: '' , color:'green'}} className="btn btn-dark"><i class='fas fa-user-cog'></i> Update Profile</button>
        <br/>
      </form>
      <br/>

    </div>
  );
}

export default ProfileForm;
