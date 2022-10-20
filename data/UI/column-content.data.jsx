import React from 'react';
import ColumnContentComponent from '../../components/column-content.component';

class ColumnContentitemComponent extends React.Component {

    state = {
        sections: [
            {
                title_2: '', 
                htmlCopy_2: ``,
                title_3: `<h4>To schedule your Southwest Medical new member appointments, call: <br><a href="tel:+17022434608"> <button class="btn">1-702-243-4608</button></a></h4>`,
                id: 1
            },

            {
                title_2: '', 
                htmlCopy_2: ``,
                title_3: `<h4>To schedule your new member appointments, call: <br><a href="tel:+17025624657"> <button class="btn">1-702-562-4657</button></a></h4>`,
                id: 2
            }

        ]
    }

    render() {
        return (
            <>
                <div class="row d-flex justify-content-center align-items-center">
                {
                    this.state.sections.map( ({ id, ...sectionProps }) => (
                        <ColumnContentComponent key={id} {...sectionProps} />
                    ))
                }
                </div>
            </>
        );
    }


}

export default ColumnContentitemComponent;