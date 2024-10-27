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
        body: {
          ...data,
          totalPrice:data.unitPrice * data.quantity
        },
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
    getTotalSales: builder.query({
      query: (params) => ({
        url: "/orders/total-sales",
        method: "GET",
        params: params,
      }),
      providesTags: ["orders"],
    }),
    getTodaySales: builder.query({
      query: (params) => ({
        url: "/orders/today-sales",
        method: "GET",
        params: params,
      }),
      providesTags: ["orders"],
    }),
    mostSoldItems: builder.query({
      query: (params) => ({
        url: "/orders/most-sold",
        method: "GET",
        params: params,
      }),
      providesTags: ["orders"],
    }),
    salesByMonth: builder.query({
      query: () => ({
        url: "/orders/sales-by-month",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    deleteOrder: builder.mutation({
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),
    bulkDeleteOrders: builder.mutation({
      query: (ids: string[]) => ({
        url: "/orders/bulk-delete",
        method: "DELETE",
        body: ids,
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrder: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: ({ id, data }: { id: string; data: any }) => ({
        url: `/orders/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
    getAOrder: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: ["orders"],
    }),

  }),
});

export const { useGetAllOrdersQuery,useCreateOrderMutation,useGetTotalSalesQuery,useGetTodaySalesQuery,useMostSoldItemsQuery,useSalesByMonthQuery,useBulkDeleteOrdersMutation,useUpdateOrderMutation,useGetAOrderQuery,useDeleteOrderMutation } = ordersApi;
