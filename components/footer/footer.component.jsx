import React from 'react';
import backToTopImage from '../../public/images/standard/back-to-top-icon.svg'
import FooterAuxComponent from "../footer-aux/footer-aux.component";
import Link from "next/link";

function FooterComponent(props) {

        return (
            <footer>
                <FooterAuxComponent/>
                <div className="bottomFooter">
                    <div className="row pt-2 px-5 w-100 g-0 mx-0 mb-5">
                        <div className="col-md-3 px-5">
                            <h4 className={'gray-text footer-header'}>Company</h4>
                            <ul className={'no-bullet'}>
                                <li><Link href={'https://www.optum.com/contact-us.html'}>Contact us</Link></li>
                                <li><Link href={'https://www.optum.com/careers.html'}>Careers</Link></li>
                                <li><Link href={'https://www.optum.com/about-us/accreditations.html'}>Accreditations</Link></li>
                                <li><Link href={'https://brand.optum.com/'}>Brand Center</Link></li>
                                <li><Link href={'https://www.optum.com/more-optum-sites.html'}>More Optum sites</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className={'gray-text footer-header'}>Countries</h4>
                            <ul className={'no-bullet'}>
                                <li><Link href={'https://www.optum.com.br/'}>Optum Brazil</Link></li>
                                <li><Link href={'https://www.optum.in/'}>Optum India</Link></li>
                                <li><Link href={'https://www.optum.ie/'}>Optum Ireland</Link></li>
                                <li><Link href={'https://www.optum.co.uk/'}>Optum United Kingdom</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className={'gray-text footer-header'}>Accessibility</h4>
                            <ul className={'no-bullet'}>
                                <li><Link href={'https://www.optum.com/language-assistance-nondiscrimination.html'}>Language Assistance / Non-Discrimination Notice</Link></li>
                                <li><Link href={'https://www.optum.com/language-assistance-nondiscrimination.html'}>Asistencia de Idiomas / Aviso de no Discriminación</Link></li>
                                <li><Link href={'https://www.optum.com/language-assistance-nondiscrimination.html'}>語言協助 / 不歧視通知</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-2 px-5 w-100 g-0 mx-0 pb-3 legal-footer">
                        <div className="col-12 text-centered mobile-link-center px-5">
                        <span
                            className={'mr-5'}>
                            © 2022 Optum, Inc. All rights reserved. Stock photos used.
                        </span>
                            <Link
                                href="https://www.optum.com/privacy-policy.html" rel="noreferrer">
                                Privacy policy
                            </Link>
                            <Link
                                href="https://www.optum.com/terms-of-use.html" rel="noreferrer">
                                Terms of use
                            </Link>
                            <Link
                                href="https://www.optum.com/opt-out.html" target="_blank" rel="noreferrer">
                                Opt out
                            </Link>
                            <Link
                                href="https://www.optum.com/accessibility.html" target="_blank" rel="noreferrer">
                                Accessibility
                            </Link>
                            <Link
                                href="https://www.optum.com/vulnerability.html" target="_blank" rel="noreferrer">
                                Vulnerability report
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
}

export default FooterComponent;
