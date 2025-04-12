import { useState } from 'react';

export const useModalModel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

  return { showModal, handleClose, handleOpen };
};
