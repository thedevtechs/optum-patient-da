import React, { Component } from 'react';
import HomeLayout from "../components/Layouts/HomeLayout";
import Head from "next/head";

import UNIVERSAL_SMA_DATA from "../data/universal.data";
import HOMEPAGE_SMA_DATA from "../data/home.data";

const UNIVERSAL_DATA = UNIVERSAL_SMA_DATA;
const PAGE_DATA = HOMEPAGE_SMA_DATA;

const metaDescription = UNIVERSAL_DATA.faqMetaDescription(UNIVERSAL_DATA.longTitle)
const metaImage = UNIVERSAL_DATA.faqPreviewImage;

export default function HomePage({ page_info, events }) {
  return (
      <>
        <Head>
          <title>{UNIVERSAL_DATA.longTitle} | Home</title>
          <meta name="description" content={metaDescription}/>
          <meta name="twitter:image" content={metaImage}/>
          <meta property="og:image" content={metaImage}/>
        </Head>
        <HomeLayout data={ PAGE_DATA } universal={UNIVERSAL_DATA} page_info={page_info}/>
        {/*{jsxPosts}*/}
      </>
  );
}

// wordpress query

export async function getStaticProps({ params }) {
  const res = await fetch('https://optum-prcm.tcdapps.com/graphql', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
                query HomePageQuery {
                  pages(where: {name: "home"}) {
                    nodes {
                    featuredImage {
                        node {
                          mediaItemUrl
                        }
                      }
                      home {
                        heroText
                        heroSubtext
                      }
               
                    }
                  }
                }
            `,
    })
  })

  const json = await res.json()
  return {
    props: {
      page_info: json.data.pages,
    }
  }
}