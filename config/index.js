const dev = process.env.NODE_ENV !== 'production'
//make env url
export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'