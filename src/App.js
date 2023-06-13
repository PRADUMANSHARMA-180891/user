import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

const UserPostsCrud = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
  const [post, setPost] = useState(null);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const createUser = async () => {
    try {
      const response = await axios.post(
        'https://dummyapi.io/data/v1/user/create',
        user,
        {
          headers: {
            'Content-Type': 'application/json',
            'app-id': '648863cc80cff9e71cb55c4f' // Replace with your actual app ID
          }
        }
      );
      console.log('Created user:', response.data);
      // Handle success or show a success message
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error or show an error message
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://dummyapi.io/data/v1/user/${userId}`,
        {
          headers: {
            'app-id': '648863cc80cff9e71cb55c4f' // Replace with your actual app ID
          }
        }
      );
      console.log('User details:', response.data);
      // Handle success or update state
    } catch (error) {
      console.error('Error retrieving user details:', error);
      // Handle error or show an error message
    }
  };

  const updateUser = async () => {
    try {
      const response = await axios.put(
        `https://dummyapi.io/data/v1/user/${userId}`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
            'app-id': '648863cc80cff9e71cb55c4f' // Replace with your actual app ID
          }
        }
      );
      console.log('Updated user:', response.data);
      // Handle success or show a success message
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle error or show an error message
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `https://dummyapi.io/data/v1/user/${userId}`,
        {
          headers: {
            'app-id': '648863cc80cff9e71cb55c4f' // Replace with your actual app ID
          }
        }
      );
      console.log('User deleted successfully');
      // Handle success or show a success message
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error or show an error message
    }
  };

  return (
    <div>
      <h2>User CRUD</h2>
      <div>
        <TextField
          name="userId"
          label="User ID"
          value={userId}
          onChange={handleUserIdChange}
        />
        <Button variant="contained" color="primary" onClick={getUser}>
          Get User
        </Button>
        <TextField
          name="firstName"
          label="First Name"
          value={user.firstName}
          onChange={handleUserInputChange}
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={user.lastName}
          onChange={handleUserInputChange}
        />
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={handleUserInputChange}
        />
        <Button variant="contained" color="primary" onClick={createUser}>
          Create User
        </Button>
        <Button variant="contained" color="primary" onClick={updateUser}>
          Update User
        </Button>
        <Button variant="contained" color="primary" onClick={deleteUser}>
          Delete User
        </Button>
      </div>

      {/* Rest of the code for posts CRUD operations... */}
    </div>
  );
};

export default UserPostsCrud;
