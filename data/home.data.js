import React from "react";

import heroImage from '../public/images/home/hero.png';
import ctaImage from '../public/images/home/home-cta.png'

import cardListImage1 from '../public/images/home/circle-4.png';
import cardListImage2 from '../public/images/home/circle-2.png';
import cardListImage3 from '../public/images/home/circle-3.png';
import cardListImage4 from '../public/images/home/circle-1.png';

import grayCardImage1 from '../public/images/home/gray-card-1.jpg';
import grayCardImage2 from '../public/images/home/gray-card-3.png';
import grayCardImage3 from '../public/images/home/gray-card-1.png';
import grayCardImage4 from '../public/images/home/gray-card-4.png';
import grayCardImage5 from '../public/images/home/gray-card-5.jpg';

import obgyn from '../public/images/home/home-obgyn.jpg';

import oc5050 from '../public/images/home-doctor.png';



import UNIVERSAL_SMA_DATA from './universal.data';
const UNIVERSAL = UNIVERSAL_SMA_DATA;



const HOMEPAGE_SMA_DATA = {
    headerSection: {
        imageUrl: heroImage,
        title: 'Live better by being your healthiest self'
    },
    textSection1: {
        htmlCopy: `Thank you for choosing Optum Care Network of Nevada. Your wellness is important, and we're here to support you in meeting your health goals. We look forward to working with you and your primary care provider to ensure a healthier you.`,
        id: 1
    },
    circularCardItems: [
        {
            title: 'Women and teen wellness',
            imageUrl: cardListImage1,
            linkText: 'Learn more',
            linkUrl: 'women-and-teen-wellness',
            columnQuarter: true,
            id: 1
        },
        {
            title: 'Family planning',
            imageUrl: cardListImage2,
            linkText: 'Learn more',
            linkUrl: 'family-planning',
            columnQuarter: true,
            id: 2
        },
        {
            title: 'Pregnancy and postpartum care',
            imageUrl: cardListImage3,
            linkText: 'Learn more',
            linkUrl: 'pregnancy-and-postpartum-care',
            columnQuarter: true,
            id: 3
        },
        {
            title: 'Senior wellness',
            imageUrl: cardListImage4,
            linkText: 'Learn more',
            linkUrl: 'senior-wellness',
            columnQuarter: true,
            id: 4
        }
    ],
    grayCardItems: [
        {
                 title: 'OB/GYN health',
                 imageUrl: grayCardImage3,
                 bodyCopy: 'Helpful information on common topics.',
                 linkText: 'Learn more',
                 linkUrl: '#',
                 columnQuarter: true,
                 id: 11
             },
        {
            title: 'Patient forms',
            imageUrl: grayCardImage2,
            bodyCopy: 'Fill out these forms to help us easily get you into our system.',
            linkText: 'Learn more',
            linkUrl: 'patient-forms',
            columnQuarter: true,
            id: 1
        },

        {
            title: 'Patient handouts',
            imageUrl: grayCardImage1,
            bodyCopy: 'Educational resources on a variety of OB/GYN conditions.',
            linkText: 'Learn more',
            linkUrl: '#',
            columnQuarter: true,
            id: 1
        },
        {
            title: 'Our practice',
            imageUrl: grayCardImage4,
            bodyCopy: 'Find our locations and meet our providers.',
            linkText: 'Learn more',
            linkUrl: 'our-practice',
            columnQuarter: true,
            id: 5
        },
    ],
    textSection2:{
        title: `Caring for women through all stages of life`,
        customTitle1Class: 'dash align--center mt-5',
        customSectionClass: 'centered-div-column text-center interior-row-container mb-3 w-100',
        id: 1
    },
    interiorSections: {
        title: "Member resources to help keep you feeling your best",
        htmlCopy: `
                <p>
                    As an Optum Care Network of Nevada member, you have easy access to the care you need through our many medical resources.
                </p>
                <a href="/member-resources"target="_self"><button class="btn">View resources</button></a>
            `,
        imageUrl: oc5050,
        customClassDiv: 'w-100 no-padding',
        customClassSection: 'mb-5 no-padding',
        id: 1
    },
    ctaInfo : {
        htmlCopy: `<h1 class="dash">Questions? Call our patient support center</h1><a href="` + UNIVERSAL.numberLink + `"><btn class="btn">CALL ` + UNIVERSAL.number + `</btn></a>`,
        isFlipped: true,
        imageColumnClass: 'no-padding',
        imageUrl: ctaImage
    }
}



export default HOMEPAGE_SMA_DATA;
