const homepage = "https://raj-agency.vercel.app";


function generateSiteMap(data) {
    // console.log(data.posts.edges);
    const urls = data.posts.edges?.map((item) => {
        const slug = item?.node?.uri;
    //   console.log(slug);

      return {
        url: `${homepage}/posts${slug}`,
      };
      });

      return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/abous-us/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/contact-us/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${urls
        ?.map((item) => {
          return (
            item &&
            `<url>
              <loc>${item?.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
          );
        })
        .join("")}
    </urlset>
  `;
    

}
function generateSiteMapdddd(data) {
console.log(data);


  const urls = data?.map((item) => {
    const slug = item?.slug;
    return {
      url: `${homepage}/posts/${slug}`,
    };
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/abous-us</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/contact-us</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${urls
        ?.map((item) => {
          return (
            item &&
            `<url>
              <loc>${item?.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
          );
        })
        .join("")}
    </urlset>
  `;
}
const fetchData = async () => {
    const response = await fetch('http://youragency.atwebpages.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // If you need to add any authorization token or headers, you can add them here.
      },
      body: JSON.stringify({
        query: `
          query NewQuery {
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
        `,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const { data } = await response.json();
    return data;
 
  };


export async function getServerSideProps({ res }) {
  const blogs = await fetch("http://youragency.atwebpages.com/graphql");
  const data = await fetchData();


 const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "text/xml");
 res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}