import { useState, useEffect } from 'react';

interface ToastProps {
    message: string;
    duration: number;
    onClose: () => void;
}

export default function Toast({ message, duration, onClose }: ToastProps) {
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const handleClose = () => {
        setVisible(false);
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: '#333',
            color: '#fff',
            padding: '1rem',
            borderRadius: '0.25rem',
            boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
        }}>
            {message}
            <button style={{
                marginLeft: '1rem',
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
            }}
                onClick={handleClose}>
                X
            </button>
        </div>
    )
}