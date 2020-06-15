import React, { Fragment } from 'react';

const Scroll = (props) => {
    return (
        <Fragment>
            <div style={{overflowY: "scroll", border: "2px solid black", height: "800px", scrollbarWidth: "none",}}>{props.children}</div>
        </Fragment>
    );
};

export default Scroll;