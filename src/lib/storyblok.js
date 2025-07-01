import StoryblokClient from 'storyblok-js-client';

export const storyblok = new StoryblokClient({
  accessToken: '2tQlFuekJykgPq97w5VcgQtt', // Get this from Storyblok space settings
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});
