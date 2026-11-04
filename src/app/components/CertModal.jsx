import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const CertModal = ({ open, onClose, imageUrl }) => {
    const t = useTranslations("About");
    const dialogRef = useRef(null);
    const [zoom, setZoom] = useState(false)

    const HandleZoom = () => {
        zoom? setZoom(false) : setZoom(true)
    }

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    const handleClose = () => {
        setZoom(false);
        onClose();
    }

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
    }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={handleBackdropClick}
      aria-label={t("certificate")}
      className='m-auto bg-transparent p-0 max-w-none max-h-none overscroll-contain backdrop:bg-black/50'
    >
      {imageUrl && (
        <button
          type="button"
          onClick={HandleZoom}
          aria-label={zoom ? t("zoom_out") : t("zoom_in")}
          className={`block rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
        >
          <Image
            src={imageUrl}
            alt={t("certificate")}
            className={`rounded-[10px] ${zoom ? 'xs:h-[100vh] w-[100%] md:h-[100vh] md:w-[100%]' : 'md:h-[50vh] md:w-auto xs:h-[80vh] w-[80%]'}`}
          />
        </button>
      )}
    </dialog>
  );
};

export default CertModal;
