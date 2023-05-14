import { useState, useEffect } from 'react'
import styles from '../../styles/Toast.module.css'

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
        <div className={styles.toast} style={{ opacity: visible ? 1 : 0 }}>
            {message}
            <button style={{
                marginLeft: '1rem',
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
            }}
                type='button'
                onClick={handleClose}>
                X
            </button>
        </div>
    )
}