import React from 'react';

const Scroll = (props) => {
    return (
        // maxHeight: '70vh' - Uses viewport height so it adapts to screen size
        // overflow-y-scroll - Tachyons class for overflow
        // ba b--black - Border using Tachyons classes
        <div
            className='overflow-y-scroll ba b--black'
            style={{ overflowY: 'scroll', border: '1px solid black', height: '600px'}}
        >
            {props.children}
        </div>
    );
};

export default Scroll;