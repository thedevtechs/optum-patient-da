import React, {Fragment} from 'react';
import Navbar from "./Navbar";
import HeaderComponent from "../header.component";
import {Accordion, Tabs} from "@mantine/core";
import FooterComponent from "../footer/footer.component";
import Link from "next/link";
import Image from "next/image";

const FlyerIcon = 'http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/flyer_icon.png';
const VideoIcon = 'http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/Icon_VideoChat_RGB.png';
const HeartIcon = 'http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/Icon_HeartHealth_RGB.png';
const HouseIcon = 'http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/surface1.png';
const FacetimeIcon = 'http://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/Icon_VideoChat_RGB-2.png';

export default function ConditionsLayout(props){
    return <Fragment>
        <main>
            {props.children}
        </main>
        <Navbar logo={props.universal.logo}
        />
        <HeaderComponent
            imageUrl={props.data.featuredImage.node.mediaItemUrl}
            title={props.data.title}
            shouldHideHomeButton={false}
            innerCopy={'Managing your conditions'}
            sectionClass={'reverse-row pt-5'}
        />
        <div className="mx-5 my-5">
            <Accordion defaultValue="" className={'mx-5'}>
                <Accordion.Item value="customization">
                    <Accordion.Control>
                        <div className="row">
                            <div className="col-2">
                                <Image
                                    src={HeartIcon}
                                    height={'120px'}
                                    width={'120px'}
                                    alt={'Heart icon'}
                                />
                            </div>
                            <div className="col-10">
                                <h3>Understanding your condition</h3>
                                <p>
                                    Introducing handouts and videos related to understanding your condition
                                </p>
                                <p className={'blue-link'}>
                                    Learn more about your condition
                                </p>
                            </div>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Tabs defaultValue="gallery">
                            <Tabs.List>
                                <Tabs.Tab value="gallery" icon={<Image src={FlyerIcon} width={'30px'} height={'35px'} alt={'printable resources icon'} />}>Printable resources</Tabs.Tab>
                                <Tabs.Tab value="messages" icon={<Image src={FlyerIcon} width={'30px'} height={'35px'} alt={'video icon'} />}>Videos</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="gallery" >
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                                <p>•The basics about diabetes (Include Information on treatments and medication options)</p>
                            </Tabs.Panel>
                            <Tabs.Panel value="messages" >
                                <p>Videos tab</p>
                            </Tabs.Panel>
                        </Tabs>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="flexibility" className={'conditions-pill'}>
                    <Accordion.Control>
                        <div className="row">
                            <div className="col-2">
                                <Image
                                    src={VideoIcon}
                                    height={'120px'}
                                    width={'120px'}
                                    alt={'Video icon'}
                                />
                            </div>
                            <div className="col-10">
                                <h3>Managing your condition</h3>
                                <p>
                                    Introducing handouts and videos related to understanding your condition
                                </p>
                                <p className={'blue-link'}>
                                    Learn more
                                </p>
                            </div>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="living">
                    <Accordion.Control>
                        <div className="row">
                            <div className="col-2">
                                <Image
                                    src={HouseIcon}
                                    height={'120px'}
                                    width={'120px'}
                                    alt={'House icon'}
                                />
                            </div>
                            <div className="col-10">
                                <h3>Living health with Diabetes</h3>
                                <p>
                                    Introducing handouts and videos related to understanding your condition
                                </p>
                                <p className={'blue-link'}>
                                    Learn more
                                </p>
                            </div>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="class">
                    <Accordion.Control>
                        <div className="row">
                            <div className="col-2">
                                <Image
                                    src={FacetimeIcon}
                                    height={'120px'}
                                    width={'120px'}
                                    alt={'Facetime icon'}
                                />
                            </div>
                            <div className="col-10">
                                <h3>Take a class</h3>
                                <p>
                                    Introducing handouts and videos related to understanding your condition
                                </p>
                                <Link className={'blue-link'} href={'#'}>
                                    Find a class
                                </Link>
                            </div>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>

        {/*<p>This is where we will display the page data</p>*/}
        <FooterComponent company={props.universal.shortTitle}/>
    </Fragment>
}
