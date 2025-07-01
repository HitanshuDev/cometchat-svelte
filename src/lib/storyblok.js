import StoryblokClient from 'storyblok-js-client'
// import dotenv from 'dotenv';
// dotenv.config();

// console.log("ENV:", import.meta.env.VITE_STORYBLOK_API_KEY);


export const storyblok = new StoryblokClient({
  accessToken: import.meta.env.VITE_STORYBLOK_API_KEY,
  cache: {
    clear: "auto",
    type: "memory",
  },
  responseInterceptor: (response) => {
    
    if (response.status === 200) {
      // handle your status here
      console.log('✅ Connected to Storyblok');
    }
    return response;
  },
});