import React, { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Modal = props => {
    const { children } = props;
    const modalRef = useRef();

    useEffect(() => {
        const modalElement = modalRef.current;
        disableBodyScroll(modalElement);
        return () => enableBodyScroll(modalElement);
    }, []);

    return <div className="modal" ref={modalRef}>
        {children}
    </div>;
};

export default Modal;
