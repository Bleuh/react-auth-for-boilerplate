import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class AuthService {
  login = (username, password) => axios
    .post(`${API_URL}login`, {
      login: username,
      password,
    })
    .then((response) => response.data)
    .then((json) => {
      if (json.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(json.data));
      }

      return json.data;
    });

  logout = () => {
    localStorage.removeItem('user');
  };

  register = (username, password) => axios.post(`${API_URL}register`, {
    login: username,
    password,
  });

  getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
}

export default new AuthService();
