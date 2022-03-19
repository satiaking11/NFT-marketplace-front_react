/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: (
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: Boolean,
  ) => {
    content: React.ReactNode;
    button: React.ReactNode;
  };
};

function Modal({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const { button, content } = children(setIsOpen, isOpen);

  return (
    <>
      {button}
      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black dark:bg-white dark:bg-opacity-40 bg-opacity-40"
              style={{
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <div className="relative z-10 w-full flex justify-center">
              {content}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default Modal;
