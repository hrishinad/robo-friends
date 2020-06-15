import React, { Fragment } from 'react';

const Card = ({id, fname, lname, adjective, domain}) => {
    return (
        <Fragment>
            <article className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{`${fname} ${lname}`}</h2>
                    <p>{`${fname.toLowerCase()}.${lname.toLowerCase()}@${adjective.replace(/ /g, '').toLowerCase()}.${domain.toLowerCase()}`}</p>
                </div>
            </article>
        </Fragment>
    );
};

export default Card;