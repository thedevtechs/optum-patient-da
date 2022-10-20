import React, { Component } from 'react';
import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "next/link";
import { Menu, Button } from '@mantine/core';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchComponent from './Search';
const logo = "https://optum-prcm.tcdapps.com/wp-content/uploads/2022/10/optum_logo-300x117.png";


export default function NavbarComponent({ menu_info }) {

    const router = useRouter()

    return (
        <>
            <div className="container-fluid top-nav row centered-div auto">
                <div className="top-nav col-md-6">
                    <Link href={'/'}>
                        <Image id="main-logo" src={logo} alt="Website Logo" height={'65px'} width={'170px'} />
                    </Link>
                    <div className=" mt-3">
                        <Menu width={200} shadow="md">
                            <Menu.Target>
                                <Button rightIcon={<FontAwesomeIcon className={"ml-1"} size={"xs"} icon={faChevronDown} />}>Conditions</Button>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item
                                    component="a"
                                    href="/conditions/diabetes"
                                >
                                    Diabetes
                                </Menu.Item>
                                <Menu.Item
                                    component="a"
                                    href="/conditions/copd"
                                >
                                    COPD
                                </Menu.Item>
                                <Menu.Item
                                    component="a"
                                    href="/conditions/congestive-heart-failure"
                                >
                                    Congestive heart failure
                                </Menu.Item>
                                <Menu.Item
                                    component="a"
                                    href="/conditions/weight-management"
                                >
                                    Weight management
                                </Menu.Item>
                                <Menu.Item
                                    component="a"
                                    href="/conditions/kidney-health"
                                >
                                    Kidney health
                                </Menu.Item>
                                <Menu.Item
                                    component="a"
                                    href="/conditions/hypertension"
                                >
                                    Hypertension
                                </Menu.Item>

                                {/*<Menu.Item*/}
                                {/*    component="a"*/}
                                {/*    href="https://optum.com"*/}
                                {/*    target="_blank"*/}
                                {/*>*/}
                                {/*    External link*/}
                                {/*</Menu.Item>*/}
                            </Menu.Dropdown>
                        </Menu>

                        {/*Menu item 2*/}

                        <Menu width={200} className={'ml-3'} shadow="md">
                            <Link href={"#"}>
                                <Button>Classes</Button>
                            </Link>
                        </Menu>

                        {/*Menu item 3 */}

                        <Menu width={200} className={'ml-3'} shadow="md">
                            <Link href={"/patient-resources"}>
                                <Button>Patient Resources</Button>
                            </Link>
                        </Menu>

                    </div>
                </div>
                <div className={'pull-right col-md-6'}>
                    <div className="row vertical-center">
                        <div className="col-8 search-column">
                            <SearchComponent></SearchComponent>
                        </div>
                        <div className="col-3 sign-in-div centered-div-left">
                            <Link href={'https://www.optum.com/sign-in.html'}>
                                <Button>Sign in</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://optum-prcm.tcdapps.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query MenuItemsQuery {
                  menus(where: {id: 10}) {
                    nodes {
                      menuItems {
                        edges {
                          node {
                            id
                            url
                            label
                            parentId
                          }
                        }
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
            menu_info: json.data,
        }
    }
}

