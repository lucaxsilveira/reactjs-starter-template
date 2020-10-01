import styled, { css } from 'styled-components';

const toastTypeVariations = {
    info: css`
        color: #50a5f1;
    `,
    success: css`
        color: #34c38f;
    `,
    warning: css`
        color: #f1b44c;
    `,
};

export const ModalIcon = styled.span`
    font-size: 40px;

    ${(props) => toastTypeVariations[props.type || 'info']}
`;
