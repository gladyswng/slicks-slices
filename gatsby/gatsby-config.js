import dotenv from 'dotenv';
// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Somewhere!',
    twitter: '@slicksSlices',
  },
  // Two different x ways to specify - name except all default options, or with settings.
  plugins: [
    'gatsby-plugin-react-helmet',
    // Style component plugin (added dependencies) that surfaces the css to gatsby so gatsby can figure out the critical css
    'gatsby-plugin-styled-components',
    {
      // this tis the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '48ogibie',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
