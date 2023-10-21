/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
    domains:["firebasestorage.googleapis.com","res.cloudinary.com"]
    },
    env: {
    API_URL: "https://backend-ecommerce-jwt-2024.vercel.app"
    } 
    }

module.exports = nextConfig
