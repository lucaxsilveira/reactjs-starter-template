import React, { createContext, useContext, useCallback, useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';

const ModalContext = createContext({});

const ConfirmModalProvider = ({ children }) => {
    const [configs, setConfigs] = useState({});

    const addModal = useCallback(
        ({ isOpen, type, title, message, onConfirm }) => {
            const config = {
                isOpen,
                title,
                type,
                message,
                onConfirm,
            };
            setConfigs(config);
        },
        [],
    );

    const removeModal = useCallback(() => {
        setConfigs({
            ...configs,
            isOpen: false,
        });
    }, []);

    return (
        <ModalContext.Provider value={{ addModal, removeModal }}>
            {children}
            <ConfirmModal configs={configs} />
        </ModalContext.Provider>
    );
};

function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('use toast must be used within toast provider');
    }
    return context;
}

export { ConfirmModalProvider, useModal };
