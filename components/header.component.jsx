import React from 'react';
import Link from "next/link";
import Image from "next/image";

import myImage from '../public/images/diabetes/diabetes-hero.png';

const HeaderComponent = ({ title, imageUrl, innerCopy, shouldShowHomeButton, bgColor, imagePosition, sectionClass, backButtonText, backButtonLink }) => (
    <header className={'row centered-div container auto ' + sectionClass}>
        <div className="col-6">
            {shouldShowHomeButton &&
                <Link href="/" className="header-breadcrumb">Home</Link>
            }
            {backButtonText &&
                <Link href={backButtonLink} className="header-breadcrumb">{backButtonText}</Link>
            }
            <h1 className={'title'}>{title}</h1>
            <p className={'pt-3'}>{innerCopy}</p>
        </div>
        <div className="col-6">
            <Image src={`${imageUrl}`} width="500px" height="420px" alt=""/>
        </div>
    </header>
)

export default HeaderComponent;
