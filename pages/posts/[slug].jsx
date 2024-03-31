import { useRouter } from 'next/router';
import Head from 'next/head';
export const prerender = true;
export async function seoNodeByURI(uri){
    const response = await fetch("http://youragency.atwebpages.com/graphql", {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `query seoUri($uri: String!) {
              nodeByUri(uri: $uri) {
                __typename
                ... on Page {
                  id
                  title
                  uri
                  slug
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    readingTime
                    schema {
                      raw
                    }
                  }
                }
                ... on Post {
                  id
                  uri
                  slug
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    readingTime
                    schema {
                      raw
                    }
                  }
                }
                
                ... on Tag {
                  id
                  name
                  uri
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    schema {
                      raw
                    }
                  }
                }

                ... on Basepress {
                  id
                  title
                  uri
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    readingTime
                    schema {
                      raw
                    }
                  }
                }
                ... on SectionBasepress {
                  id
                  name
                  uri
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    schema {
                      raw
                    }
                  }
                }
              }
            }
          
            `,
            variables: {
                uri: uri
            }
        })
    });
    const{ data } = await response.json();

    //console.log(data);
    return data;
  }


const fetchData2 = async (uri) => {
    const response = await fetch('http://youragency.atwebpages.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // If you need to add any authorization token or headers, you can add them here.
      },
      body: JSON.stringify({
        query: `
        query GetNodeByURI($uri: String!) {
            nodeByUri(uri: $uri) {
                __typename
                isContentNode
                isTermNode
                ... on Post {
                    id
                    title
                    date
                    uri
                    slug
                    excerpt
                    content
                    seo{
                      title
                      metaDesc
                    }
                }
            }
         
        }
            
        `,
        variables: {
            uri: uri
        }
      }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const { data } = await response.json();

    // console.log(data);
    return data.nodeByUri;
 
  };

const Post = ( post) => {
  const router = useRouter();
const queryParams=router.query.slug;
//   console.log(router.query.slug);


fetchData2(queryParams);
// console.log(post.content);


  
//   fetchData2(queryParams);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>

    <Head>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <meta name="description" content={post.seo.metaDesc} />
    <title>{post.seo.title}</title>
    </Head>
    <div className='p-10 max-w-4xl ml-auto mr-auto'>
      <h1 className='text-3xl text-center mb-10'>{post.title}</h1>
  
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
    
    </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

//   Fetch data for the specific post using slug
//   const response = await fetch(`https://api.example.com/posts/${slug}`);
  const post = fetchData2(slug);

  return {
    props:  post ,
  };


}

export default Post;