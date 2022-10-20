import React, { Component } from 'react';
import Head from 'next/head'

import UNIVERSAL_SMA_DATA from "../../data/universal.data";
import ConditionsLayout from "../../components/Layouts/ConditionsLayout";

const UNIVERSAL_DATA = UNIVERSAL_SMA_DATA;

export default function DiabetesPage(wp_page_info) {
    //console.log(wp_page_info.wp_page_info.node)
    return (
        <>
            <Head>
                <title>{wp_page_info.wp_page_info.node.title} | {UNIVERSAL_DATA.shortTitle}</title>
                <meta name="description" content="Conditions page"/>
            </Head>
            <ConditionsLayout data={wp_page_info.wp_page_info.node} universal={UNIVERSAL_DATA}/>
        </>
    );
}

export async function getStaticProps({ params }) {
    //console.log(params)
    const res = await fetch('https://optum-prcm.tcdapps.com/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
                query COPDPageQuery {
                  conditions(where: {id: 301, title: ""}) {
                    edges {
                      node {
                        id
                        featuredImage {
                          node {
                            mediaItemUrl
                          }
                        }
                        title
                        slug
                      }
                    }
                  }
                }
            `,
        })
    }, 600)
    const json = await res.json()
    //console.log(json.data.conditions.edges[0])
    return {
        props: {
            wp_page_info: json.data.conditions.edges[0]
        }
    }
}