import React from 'react';
import {Accordion, AccordionCollapse, Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from 'next/link'

const BlogCardComponent = ( { blog } ) => {
    //console.log(blogs)
    return (
        <Link href={'/blogs/' + blog.slug}>
            <div className={'blog-card mt-5'}>
                    <Image src={blog.featuredImage.node.mediaItemUrl}

                           width={2400}
                           height={1000}
                           layout={'responsive'}
                           alt=""/>
                    <h3 className={'mt-5 mb-3'}>{blog.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
                    <span className={'link-primary'}>Read More</span>
                    {/*<p>{blogs.excerpt}</p>*/}
                    <p>{blog.excerpt}</p>
            </div>
        </Link>
    );
}

export default BlogCardComponent;