import Image from 'next/image';
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const queryClient = new QueryClient();

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
  



const MyComponent = () => {
    const { data, isLoading, isError } = useQuery('postsData', fetchData);

    // console.log(data);


    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error fetching data</div>;
    }
  
    return (
      <div>
           <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
              
                    onSlideChange={() => console.log('')}
                    onSwiper={(swiper) => console.log('')}
                    loop={true}
                    navigation
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 30,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 140,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 140,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 100,
                        },
                        1500: {
                            slidesPerView: 3,
                            spaceBetween:140,
                          },
                        1800: {
                            slidesPerView: 3,
                            spaceBetween:140,
                          },
                      }}


                >
        {data && data.posts.edges.map((post) => (
          <SwiperSlide>
          <div key={post.node.id} className='p-10 max-w-4xl ml-auto mr-auto'>


          
          <img className='featured-image h-48 w-[21rem] object-cover' src={
            post.node.featuredImage?.node?.mediaItemUrl && 
                     post.node.featuredImage.node.mediaItemUrl.replace('h','h')}
alt="raj" width={340} height={200} /> 
  <Link href={`/posts/${post.node.uri}`}>
<div className=' text-xl font-bold'>{post.node.title}</div>
</Link>
            {/* <div dangerouslySetInnerHTML={{ __html: post.node.content }} /> */}
            {/* Render other post data as needed */}
          </div>
          </SwiperSlide>
        ))}

</Swiper>

      </div>
    );
  };
  
  const GetPosts = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <MyComponent />
      </QueryClientProvider>
    );
  };
  
  export default GetPosts;