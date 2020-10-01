import React from 'react';

import { ToastProvider } from './toast';
import { ConfirmModalProvider } from './confirm_modal';

const AppProvider = ({ children }) => {
    return (
        <ToastProvider>
            <ConfirmModalProvider>{children}</ConfirmModalProvider>
        </ToastProvider>
    );
};

export default AppProvider;
