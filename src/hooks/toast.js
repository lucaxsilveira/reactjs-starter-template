import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

// interface ToastContextData {
//   addToast(message: Omit<ToastMessage, 'id'>): void;
//   removeToast(id: string): void;
// }

// export interface ToastMessage {
//   id: string;
//   type?: 'success' | 'error' | 'info';
//   title: string;
//   description?: string;
// }

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addToast = useCallback(({ type, title, description }) => {
        const id = uuidv4();

        const toast = {
            id,
            title,
            type,
            description,
        };

        // são iguais, mas uso a segunda pra evitar o parametro no useCallback
        // setMessages([...messages, toast]);
        setMessages((oldMessages) => [...oldMessages, toast]);
    }, []);

    const removeToast = useCallback((id) => {
        // retornar todas menos a que possui o id do parametro
        setMessages((state) => state.filter((message) => message.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
};

function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('use toast must be used within toast provider');
    }
    return context;
}

export { ToastProvider, useToast };
