import React, { useState } from 'react';

function UserProfile() {
  const [formData, setFormData] = useState({
    profile_picture: null,
    first_name: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profile_picture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formDataToSend = new FormData();
    const csrfToken = getCookie('csrftoken');

    // Append the user profile data
    formDataToSend.append('profile_picture', formData.profile_picture);
    formDataToSend.append('first_name', formData.first_name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('location', formData.location);

    try {
      const authToken = localStorage.getItem('authToken');

      // Send the form data to your Django API
      const csrfToken = getCookie('csrftoken'); // Use 'csrftoken' as the cookie name
      const response = await fetch('http://localhost:8000/api/create-profile/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'X-CSRFToken': csrfToken, // Include the CSRF token here
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('network error');
      }

      // Handle a successful response, e.g., redirect to a profile page
    } catch (error) {
      console.error(error);
      // Handle the error (e.g., display an error message)
    }
  };

  function getCookie(name) {
    const cookies = document.cookie || '';
    const cookieValue = cookies
      .split('; ')
      .find(cookie => cookie.startsWith(name + '='));

    return cookieValue ? cookieValue.split('=')[1] : null;
  }

  return (
    <div>
      <h1>Create Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="profile_picture">Profile Picture</label>
          <input
            type="file"
            id="profile_picture"
            name="profile_picture"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div> */}
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
