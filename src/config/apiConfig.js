const env_api_url = process.env.REACT_APP_API_URL

export const API_URL = env_api_url || 
(process.env.NODE_URL !== 'production' && 'http://localhost:5000')
