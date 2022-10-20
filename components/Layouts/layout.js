import {Fragment} from 'react';
import NavbarComponent from "../Layouts/Navbar";
import FooterComponent from "../footer/footer.component";

export default function Layout(props){
    return <Fragment>
        <main>
            {props.children}
        </main>
    </Fragment>
}
