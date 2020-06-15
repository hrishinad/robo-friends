import React, {Fragment} from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <Fragment>
            <section className='pa2 tc'>
                <input className='pa3 ba b--green bg-lightest-blue' 
                    type="search" 
                    placeholder="Search Robots"
                    onChange={searchChange} 
                />
            </section>
        </Fragment>
    );
};

export default Searchbox;