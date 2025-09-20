import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Image from 'next/image';


const CertModal = ({ open, onClose, imageUrl }) => {
    const [zoom, setZoom] = useState(false)

    const HandleZoom = () => {
        zoom? setZoom(false) : setZoom(true)
    }



  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className='flex justify-center items-center w-auto h-auto'
    >
      <Box className='absolute flex justify-center items-center'>
          <Image onClick={HandleZoom} 
          src={imageUrl} 
          alt="Certificate"  
          className={`transition-transform duration-300 rounded-[10px] ${zoom ? 'cursor-zoom-out xs:h-[100vh] w-[100%] md:h-[100vh] md:w-[100%]' : 'cursor-zoom-in md:h-[50vh] md:w-auto xs:h-[80vh] w-[80%]'}`} 
        />
      </Box>
    </Modal>
  );
};

export default CertModal;