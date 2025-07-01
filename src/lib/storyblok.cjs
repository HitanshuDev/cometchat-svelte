import StoryblokClient from 'storyblok-js-client'

export const storyblok = new StoryblokClient({
  accessToken: '2tQlFuekJykgPq97w5VcgQtt',
  cache: {
    clear: "auto",
    type: "memory",
  },
  responseInterceptor: (response) => {
    // one can handle status codes and more with the response
    if (response.status === 200) {
      // handle your status here
    }
    // ALWAYS return the response
    return response;
  },
});