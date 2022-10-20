import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import FooterComponent from "../../components/footer/footer.component";
import Navbar from "../../components/Layouts/Navbar";
import UNIVERSAL_SMA_DATA from "../../data/universal.data";
import { Center } from '@mantine/core';

const UNIVERSAL_DATA = UNIVERSAL_SMA_DATA;

export default function SearchPage(props) {
    const router = useRouter();

    const removeHtmlTags = (input) => {
        return input.replace(/<\/?[^>]+(>|$)/g, "");
    }

    return <Fragment>
        <Head>
            <title>{UNIVERSAL_DATA.shortTitle}</title>
            <meta name="search" content="Search page" />
        </Head>
        <Navbar logo={UNIVERSAL_DATA.logo} />
        <div className="container-large mt-5">
            {
                props.status ?
                    props.data.length > 0 ? (<div style={{ display: "flex", flexFlow: "row wrap" }}> {
                        props.data.map((blog, index) => {
                            return <div className="search-results">
                                <div class="custom-card card" style={{ margin: "10px" }}>
                                    <Image class="card-img-top" src={blog.node.featuredImage.node.mediaItemUrl}
                                        layout="responsive"
                                        width={1280}
                                        height={1080}
                                        alt="" />
                                    <div class="card-body">
                                        <div class="title">
                                            <span>{blog.node.title}</span>
                                        </div>
                                        <p>{removeHtmlTags(blog.node.content)}</p>
                                        {/* <a href="#" class="btn btn-primary">Details</a> */}
                                    </div>
                                </div>
                            </div>
                        })} </div>)
                        : <Center m={50}><div>There is no record based on your search.</div></Center>
                    : <Center m={50}><div>Something went wrong please try again later.</div></Center>
            }
        </div>
        <FooterComponent company={UNIVERSAL_DATA.shortTitle} />
    </Fragment>
}

export async function getServerSideProps(context) {
    try {
        const res = await fetch('https://optum-prcm.tcdapps.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query SearchQuery {
                        conditions(where: {search: "${context.query.s}"}) {
                          edges {
                            node {
                              id
                              title
                              content
                              status
                              slug
                              date
                              featuredImage {
                                node {
                                  mediaItemUrl
                                }
                              }
                            }
                          }
                        }
                      }
                `,
            })
        }, 600);
        const json = await res.json();
        return {
            props: {
                status: true,
                data: json.data.conditions.edges
            }
        };
    } catch (error) {
        return {
            props: {
                status: false,
                error: error.message
            }
        };
    }
}