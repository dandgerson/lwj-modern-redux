import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOG_API_KEY =
  "live_qkHfMAMhCPbBEk8gEWTBRpskLEHgz3UBSwjZThePCWcVPDxceO20gA9kyCO6g69N";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders: (headers, api) => {
      headers.set("x-api-key", DOG_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchBreeds: builder.query<Breed[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`,
    }),
  }),
});

export const { useFetchBreedsQuery } = dogApi;
