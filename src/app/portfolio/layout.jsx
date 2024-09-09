import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h1 className='text-6xl text-center mt-10 font-bold'>Our works</h1>
            {children}
            
        </div>
    );
};

export default Layout;