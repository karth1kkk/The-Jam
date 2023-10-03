import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '3l1mos45',
    dataset: 'production',
    apiVersion: '2023-10-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)