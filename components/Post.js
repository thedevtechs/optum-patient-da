// /components/Post.js

import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from '../utils/utils';

export default function Post({post, featuredMedia}) {

    return (
        <>{console.log(featuredMedia)}</>
    )
}