import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useModal } from '../../hooks/confirm_modal';

import { ModalIcon } from './styles';

const icons = {
    info: <i className="bx bx-info-circle" />,
    warning: <i className="bx bx-error" />,
    success: <i className="bx bx-check-circle" />,
};

function ConfirmModal({ configs }) {
    const { removeModal } = useModal();
    return (
        <Modal
            isOpen={configs.isOpen}
            role="dialog"
            autoFocus
            centered
            toggle={() => {
                removeModal();
            }}
        >
            <div className="modal-content">
                <ModalBody className="d-flex align-items-center">
                    <ModalIcon type={configs.type}>
                        {icons[configs.type || 'info']}
                    </ModalIcon>

                    <div className="ml-2">
                        <h4>{configs.title}</h4>
                        <p className="mb-0">{configs.message}</p>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                            removeModal();
                        }}
                    >
                        Fechar
                    </Button>
                    <Button
                        type="button"
                        color="success"
                        onClick={configs.onConfirm}
                    >
                        Confirmar
                    </Button>
                </ModalFooter>
            </div>
        </Modal>
    );
}

export default ConfirmModal;
