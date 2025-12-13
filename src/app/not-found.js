// src/app/not-found.js

import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="h-[400px]  m-8 md:m-12 lg:m-24 ">
      <h1 className='bungeeHead text-3xl text-[#cc5f4d]'>The page can’t be found.</h1>
      <p className='merriHead text-md text-gray-600 mt-8'>It looks like nothing was found at this location.</p>
    </div>
  );
};

export default NotFoundPage;
