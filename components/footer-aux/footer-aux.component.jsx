import React from 'react';
import FOOTER_AUX_DATA from "./footer-aux.data";
import Image from "next/image";
import Button from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FooterAuxComponent() {
    const state = FOOTER_AUX_DATA

        return (
            <>
                <div className={"row py-5 px-5 bg-lightblue w-100 g-0 mx-0 mb-5 footer-aux"}>
                    {state.cards.map( (card, index) => {
                        return(
                            <div className={'col-12 col-md-4 px-2'} key={"card"+index}>
                                <div className={"col-12 justify-content-center"}>
                                    <div style={{borderRadius: "10px", maxWidth:"408px"}}
                                         className={card.noBackground ? "rounded no-bg py-2 border-0" : "rounded py-2 card-background"}>
                                        <div className={"card-body px-3 py-5"}>
                                            <div className={"card-title"}>
                                                <div className={"font-navy-blue font-body-1"}>
                                                    <h4>{card.title}</h4>
                                                </div>
                                            </div>
                                            <div className={"card-text"} >
                                                <span className={"font-body-2 font-navy-blue"}>
                                                    {card.text}
                                                </span>
                                            </div>
                                            <h6 className={"font-body-2 font-navy-blue pt-4"}>
                                                <Link href={card.linkUrl}>
                                                    <span className={'blue-link'}>{card.linkText}<FontAwesomeIcon className={"ml-3"} size={"xs"} icon={faChevronRight}/></span>
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                    })}
                </div>
            </>

        )
}