export async function getPost() {

    const response = await fetch("http://youragency.atwebpages.com/graphql", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query GET_POSTS {
            posts {
              edges {
                node {
                  id
                  title
                content
                uri
                featuredImage {
                  node {
                    id
                    uri
                    mediaItemUrl
                  }
                }
                }
              }
            }
          }
          `
      })
    });
    const { data } = await response.json();
    return data;
  
  }
  