import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, content }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        const targetElement = e.target as HTMLElement;
        const isContentClicked = contentRef.current?.contains(targetElement);

        if (!isContentClicked) {
            onClose();
        }
    }

    useEffect(() => {
        const handleScroll = (event: Event) => {
            if (isVisible) {
                event.preventDefault();
            }
        };

        if (isVisible) {
            document.body.style.overflow = "hidden";
            window.addEventListener("scroll", handleScroll, { passive: false });
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-pixel-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
                    onClick={handleClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="bg-transparent shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%]" ref={contentRef}>
                        <div className="bg-transparent p-2 rounded overflow-y-auto max-h-[80vh]">{content}</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
