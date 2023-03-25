import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://641ecc72f228f1a83eaa289e.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
