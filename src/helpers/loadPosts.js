// src/helpers/loadPosts.js

export const loadPosts = async () => {
  const context = require.context('../posts-md', false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    // This line removes the './' from the key to get the correct post path
    const postPath = key.replace('./', '');

    try {
      // Dynamically import the markdown file
      const post = await import(`../posts-md/${postPath}`);
      const response = await fetch(post.default);
      const text = await response.text();

      // Extract metadata and content
      const meta = {};
      const content = text.replace(/---([\s\S]*?)---/, (_, m) => {
        m.split('\n').forEach(line => {
          const [key, value] = line.split(': ').map(str => str.trim());
          meta[key] = value;
        });
        return '';
      });

      posts.push({ meta, content, path: postPath.replace('.md', '') });
    } catch (error) {
      console.error('Error loading post:', error);
    }
  }

  console.log(posts); // Debugging log to check posts
  return posts;
};
