import React from 'react';

const MapComponent = () => {
  return (
    <>
      <div className='max-w-[1380px] px-5 mx-auto'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12283.847771465045!2d66.86775635!3d39.67307065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1736531724422!5m2!1sru!2s"
          width="100%"
          height="450"
          style={{ border: '0', borderRadius: '20px 20px 0 0',  }}
          allow=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default MapComponent;
