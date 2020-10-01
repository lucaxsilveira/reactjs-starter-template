import React, { useEffect } from 'react';
import { Container } from './styles';

import { useToast } from '../../../hooks/toast';

const icons = {
  info: <i className='mdi mdi-information-outline'></i>,
  error: <i className='mdi mdi-information-outline'></i>,
  success: <i className='mdi mdi-information-outline'></i>,
};

const Toast = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p dangerouslySetInnerHTML={{ __html: message.description }}></p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <i className="mdi mdi-close-thick"></i>
      </button>
    </Container>
  );
};

export default Toast;
