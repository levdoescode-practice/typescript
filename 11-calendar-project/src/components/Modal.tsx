import { useEffect } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
    useEffect(() => {
        function handler(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal">
            <div className="overlay" onClick={onClose} />
            <div className="modal-body">{children}</div>
            {children}
        </div>,
        document.getElementById("modal-container") as HTMLElement
    );
}
