// mockApi.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockData } from './mockData';

const mock = new MockAdapter(axios);

// Mock API endpoint for getting the list of customers
mock.onGet('/customers').reply(200, mockData.customers);

export default axios;
