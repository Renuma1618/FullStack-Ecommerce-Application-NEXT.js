
import "server-only"
import { defineLive } from "next-sanity/live";
import { client } from './client'

const token = process.env.SANITY_API_TOKEN 
if(!token){
  throw new Error("Missing SANITY_API_READ_TOKEN")
}

export const { sanityFetch, SanityLive } = defineLive({ 
  client,
  serverToken: token, // valid for server-side operations
  browserToken:token,// valid for client-side operations
  // This is used to fetch data from the Sanity API
  fetchOptions:{
    revalidate :0,// revalidate every time
  },

}) 
