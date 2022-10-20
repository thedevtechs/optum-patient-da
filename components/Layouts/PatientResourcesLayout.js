import React, {Fragment} from 'react';
import Navbar from "./Navbar";
import HeaderComponent from "../header.component";
import FooterComponent from "../footer/footer.component";
import {Button} from "@mantine/core"
import Image from "next/image";
import Link from "next/link";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const openInNewIcon = 'http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/open-in-new.png';

const sampleGray =
    [
        {
            "title": "Diabetes",
            "content": "Left unmanaged, diabetes can lead to problems like blindness and kidney damage. Take proper steps now to lower your risk or better manage diabetes.",
            "slug": "/conditions/diabetes"
        },
         {
            "title": "COPD",
             "content": "Chronic obstructive pulmonary disease, or COPD, refers to a group of diseases that cause airflow blockage and breathing. Although there is no cure for COPD, it can be treated.",
             "slug": "/conditions/copd"
        },
        {
            "title": "Congestive heart failure",
            "content": "Congestive heart failure, or CHF, means your heart muscle does not pump blood as well as it should. Typically, occurs as a result of a heart attack but it can also happen because of ongoing high blood pressure.",
            "slug": "/conditions/congestive-heart-failure"
        }
    ]

const sampleIcons =
    [
        {
            "title": "Diabetes",
            "content": "Get your lab results faster, on demand",
            "icon": "http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/beaker.png"
        },
        {
            "title": "COPD",
            "content": "Schedule an appointment with your doctor",
            "icon": "http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/calendar.png"
        },
        {
            "title": "Congestive heart failure",
            "content": "Message your care team 24/7",
            "icon": "http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/stethoscope.png"
        },
        {
            "title": "Weight management",
            "content": "Manage prescriptions and referrals",
            "icon": "http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/checkmark.png"
        },
    ]

export default function PatientResourcesLayout(props){
    return <Fragment>
        <main>
            {props.children}
        </main>
        <Navbar logo={props.universal.logo}
        />
        <HeaderComponent
            imageUrl={props.page_info.nodes[0].featuredImage.node.mediaItemUrl}
            title={props.page_info.nodes[0].home.heroText}
            innerCopy={props.page_info.nodes[0].home.heroSubtext}
        />
        <div className="container-large mt-5">
            <div className={'centered-div-column text-center interior-row-container mb-3 w-100 row'}>
                <h1 className={'align--center mt-5 mb-3'}>
                    Download Care Guide
                </h1>
                <p className={'w-75'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
            </div>
            <div className="row">
                {
                    sampleGray.map((item) => {
                        return (
                            <div className={'col-md-4 home-gray-box mb-3 p-3'} key={item.title}>
                                <div className="home-gray-sub centered-div-left">
                                    <h4 className={'font-blue'}>{item.title}</h4>
                                    <p>{item.content}</p>
                                    <Link href={item.slug}>
                                        <span className={'blue-link'}>Learn more<FontAwesomeIcon className={"ml-3"} size={"xs"} icon={faChevronRight}/></span>
                                    </Link>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <FooterComponent company={props.universal.shortTitle}/>

    </Fragment>
}
