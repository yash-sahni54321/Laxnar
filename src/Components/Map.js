import React from 'react';

const Map = () => {
    return (
        <>
            <div className=''>
                <div className='pb-0.5 pt-4'>
                    <iframe
                        className='w-full h-64'
                        id='gmap_canvas'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.13517552307!2d80.95103731441569!3d26.89920476714839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957cf680ef3af%3A0xa8e4739209f6f093!2sC-62%2C%20Sector%20M%2C%20Aliganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!5e0!3m2!1sen!2sin!4v1675506770069!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                        frameborder='0'
                        scrolling='no'
                        marginheight='0'
                        marginwidth='0'
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Map;
