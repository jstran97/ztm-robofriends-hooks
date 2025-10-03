import React from 'react';

const searchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2 pa3-m pa4-l tc'>
            {/* pa2 pa3-m pa4-l - Padding increases on larger screens
            w-100 w-50-m w-third-l - Search box width adjusts by screen size
            tc - Centers the input
            w-100 w-50-m w-third-l - Search box takes full width on mobile, 50% on medium screens */}
            <input
                className='pa3 ba b--green bg-lightest-blue w-100 w-50-m w-third-l br2'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default searchBox;