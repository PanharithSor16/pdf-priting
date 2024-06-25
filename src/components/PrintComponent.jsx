
import React, { forwardRef } from 'react';
import Barcode from 'react-barcode';

const PrintComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="p-4 bg-white flex place-content-center">
     <div className=' flex flex-col place-content-center mt-4 w-full'>
     <h1 className="text-2xl font-bold mb-2 text-center">07P-RIJ-K-3RL
      </h1>
   {/* //   <p>This content will be converted to PDF and printed.</p> */}
      <Barcode value='0015' height={70} className=" w-full" />
      <div className=' flex place-content-around'>
        <div className='mr-4'> SD MC</div>
        <div className='mr-4'>Connetor</div>
        <div className='mr-10'>JST</div>
        <div className='mr-4'>500</div>
      </div>
      {/* Add more content as needed */}
     </div>
    </div>
  );
});

export default PrintComponent;
