import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cc } from "../utils/cc";

export type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const prevIsOpen = useRef<boolean>();

    useEffect(() => {
        function handler(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [onClose]);

    useLayoutEffect(() => {
        if (!isOpen && prevIsOpen.current) {
            setIsClosing(true);
            // setTimeout(() => {
            //     setIsClosing(false);
            // }, 300);
        }
        prevIsOpen.current = isOpen;
    }, [isOpen]);

    if (!isOpen && !isClosing) return null;

    return createPortal(
        <div onAnimationEnd={() => setIsClosing(false)} className={cc("modal", isClosing && "closing")}>
            <div className="overlay" onClick={onClose} />
            <div className="modal-body">{children}</div>
        </div>,
        document.getElementById("modal-container") as HTMLElement
    );
}
