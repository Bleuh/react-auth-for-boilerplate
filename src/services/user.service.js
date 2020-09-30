import axios from 'axios';
import authHeader from './auth-header';

const API_URL_USER = 'http://localhost:3000/user/';

class UserService {
  getUserInformation = () => axios({
    baseURL: API_URL_USER,
    method: 'post',
    url: 'info',
    headers: {
      ...authHeader(),
    },
  })
}

export default new UserService();
