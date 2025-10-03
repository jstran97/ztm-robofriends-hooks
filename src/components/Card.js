import React from 'react';

const Card = ( { name, email, id } ) => {

    return (
        // Default (mobile): < 30em (~480px)
        // -m (medium): 30em - 60em (~480px - 960px)
        // -l (large): > 60em (~960px+)
        // -ns (not small): > 30em (~480px+)

        // w-100 w-50-m w-third-l - Cards take full width on mobile, 50% on medium screens, 33% on large screens
        // f4 f3-m f2-l - Font sizes scale up on larger screens (f4=smaller, f2=larger)
        // w-100 w-auto-ns on image - Full width on mobile, auto on larger screens
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5 w-100 w-50-m w-third-l f4 f3-m f2-l w-auto-ns maxWidth'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;