import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["customers"],
  endpoints: (builder) => ({
    // createCustomer: builder.mutation({
    //   query: (data) => ({
    //     url: "/customers",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["customers"],
    // }),
    getAllCustomers: builder.query({
      query: () => "/customers",
      providesTags: ["customers"],
    }),
  }),
});

export const { useGetAllCustomersQuery } = customersApi;
