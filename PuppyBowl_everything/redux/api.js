//import the RTK Query methods from the react-specific entry point 
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// replace cohort name 
const cohortName = "2310-fsa-et-web-pt-sf-b";
// Use the APIURL variable for fetch requests
const api = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const apiSlice = createApi ({
// the cache reducer expects yo be added at `state api`
reducerPath: "api",
//set up base Url api 
baseQuery: fetchBaseQuery({baseUrl: api}),
// the "endpoints" represent operations and request for this server
endpoints: (builder) => ({
    playerslist: builder.query({
        query: () => ({
            url: "/players",
        }),
    }),
    addPlayer: builder.query({
        query: (body) => ({
            url: "",
            method: "POST",
            body
        }),
       
    }),
}),
})
export const {usePlayerslistQuery} = apiSlice; 