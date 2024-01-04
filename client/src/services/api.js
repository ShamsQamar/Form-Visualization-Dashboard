import axios from 'axios';

// const URL = 'http://localhost:5000';  // using proxy in package.json to avaoid cors policy error
axios.defaults.withCredentials = true;
export const registerUser = async ( user ) => {
   try {
    return await axios.post('/register', user);
   } catch (error) {
    console.log('error while calling registerUser',error);
   }
}

export const loginUser = async ( data ) => {
  try {
    return await axios.post('/signin', data);
  } catch (error) {
    console.log('error while calling loginUser',error);
  }
}

export const getUsers = async () => {
  try {
    let response = await axios.get('/getusers');
    return response.data;
  } catch (error) {
    console.log('error while calling getUsers',error);
  }
}
