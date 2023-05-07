import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_URL,
    //   prepareHeaders: (headers, { getState, endpoint }) => {
    //     const token = getState().auth?.accessToken;
    //     if (token) {
    //       headers.set('authorization', `Bearer ${token}`);
    //     }
    //     return headers;
    //   },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});