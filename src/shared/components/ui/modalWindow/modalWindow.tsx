import { FC, JSX } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button/button';
import { useModalModel } from '../../../lib/hooks';

interface Props {
  children?: React.ReactNode;
  renderContent: (close: () => void) => JSX.Element;
}

export const ModalWindow: FC<Props> = ({ children, renderContent }) => {
  const { showModal, handleClose, handleOpen } = useModalModel();

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>

      {showModal &&
        createPortal(
          <div
            onClick={handleClose}
            className="fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-black/20 bg-no-repeat margin-auto flex justify-center items-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white relative rounded-2xl min-w-[360px] w-fit min-h-[200px] z-10 py-8 px-4"
            >
              <Button variant="icon" className="ml-auto absolute right-4 top-4" onClick={handleClose}>
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
