import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5555/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `invoices`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
