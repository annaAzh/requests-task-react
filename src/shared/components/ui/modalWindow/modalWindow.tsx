import { FC, JSX, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button/button';

interface Props {
  children?: React.ReactNode;
  renderContent: (close: () => void) => JSX.Element;
}

export const ModalWindow: FC<Props> = ({ children, renderContent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>{children}</Button>

      {showModal &&
        createPortal(
          <div className="fixed left-0 right-0 top-0 bottom-0 w-full flex items-center justify-center bg-black/10">
            <div className="bg-white relative rounded-2xl min-w-[360px] w-fit min-h-[200px] z-10 py-8 px-4">
              <Button variant="icon" className="ml-auto absolute right-4 top-4" onClick={() => setShowModal(false)}>
                x
              </Button>

              {renderContent(handleClose)}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
