import createClient from 'openapi-fetch';
import type { paths } from '../types/api';
import qs from 'qs';

const httpClient = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_REST_API_URL,
  credentials: 'include',
  querySerializer: params => {
    return qs.stringify(params, { encodeValuesOnly: true });
  }
});

export default httpClient;
