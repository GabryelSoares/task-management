import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '../models/task.model';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000',
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], string>({
      query: (user) => `/tasks/${user}`,
      providesTags: ['Task']
    }),
    getTask: builder.query<Task, string>({
      query: (id) => `/tasks/${id}`,
      providesTags: ['Task']
    }),
    addTask: builder.mutation<void, Task>({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Task']
    }),
    updateTask: builder.mutation<void, Task>({
      query: ({ id, ...rest }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: rest,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Task']
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task']
    })
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
