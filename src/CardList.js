import React, { Fragment } from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return (
        <Fragment>
            <section className='tc'>
                {
                    robots.map((user, i) => {
                        return (
                            <Card 
                                key={robots[i].id}
                                id={robots[i].id}
                                fname={robots[i].fname}
                                lname={robots[i].lname}
                                adjective={robots[i].adjective}
                                domain={robots[i].domain} 
                            />
                        );
                    })
                }
            </section>
        </Fragment>
    );
};

export default CardList;