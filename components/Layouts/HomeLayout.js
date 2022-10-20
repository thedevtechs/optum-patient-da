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
        },
        {
            "title": "Weight management",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "slug": "/conditions/weight-management"
        },
        {
            "title": "Kidney Health",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "slug": "/conditions/kidney-health"
        },
        {
            "title": "Hypertension",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "slug": "/conditions/hypertension"
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

export default function HomeLayout(props){
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
                    Managing chronic conditions
                </h1>
                <p className={'w-75'}>
                    If you have been diagnosed with a chronic condition, you’re not alone. In fact, more than half of U.S. adults have at least one chronic disease¹.
                    <br/> <br/>
                    Chronic conditions can last for a long time and often need to be managed throughout life. Browse the topics below to learn more about specific conditions which can make day-to-day management easier.
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
            <div className={'centered-div-column text-center interior-row-container mb-3 w-100 row'}>
                <h1 className={'align--center mt-5 mb-4'}>
                    Stay connected
                </h1>
                <p>
                    Get access to the Optum Patient Portal at <span className={'bold'}>patient.optum.com</span>, available at participating Optum clinic locations.
                </p>
                <div className="row">
                    {
                        sampleIcons.map((item) => {
                            return (
                                <div className={'col-md-3 home-icon-box mb-3 mt-3 p-3'}  key={item.content}>
                                    <Image src={item.icon} height={'60px'} width={'60px'} alt={''} />
                                    <p>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={'my-5'}>
                    <p>
                        For important updates from Optum , including access to OPP,  opt in to receive email and texts from Optum.
                    </p>
                    <Link href={'#'}>
                        <Button type={'button'}
                                className={'mt-3 blue-button sign-up-button'}
                                rightIcon={<Image src={openInNewIcon}
                                width={'15px'}
                                height={'15px'}
                                alt={''}
                            />}
                        >
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        <FooterComponent company={props.universal.shortTitle}/>

    </Fragment>
}
