export const loadPosts = async () => {
  const context = require.context('../posts-md', false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const postPath = key.replace('./', '');

    try {
      const post = await import(`../posts-md/${postPath}`);
      const response = await fetch(post.default);
      const text = await response.text();

      const meta = {};
      const content = text.replace(/---([\s\S]*?)---/, (_, m) => {
        m.split('\n').forEach(line => {
          const [key, value] = line.split(': ').map(str => str.trim());
          if (key && value) {
            const [mainKey, subKey] = key.split('.');
            const trimmedValue = value.replace(/^'(.*)'$/, '$1'); // Remove extra quotes
            if (subKey) {
              meta[mainKey] = meta[mainKey] || {};
              meta[mainKey][subKey] = trimmedValue;
            } else {
              meta[key] = trimmedValue;
            }
          }
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
