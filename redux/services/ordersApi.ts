import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),

    getAllOrders: builder.query({
      query: (params) => ({
        url: "/orders",
        method: "GET",
        params: params,
      }),
      providesTags: ["orders"],
    }),
  }),
});

export const { useGetAllOrdersQuery,useCreateOrderMutation } = ordersApi;
