import React from 'react';
import { ToastNotification, InlineNotification } from "bonsai-components-react";

export const Message = (props) => {
  const { renderMode, title, subtitle, caption, kind, className, timeout, handleToastCloseButtonClick } = props;

  const inLine = () => {
    return (<InlineNotification
            kind={kind}
            title={title}
            subtitle={subtitle}
            hideCloseButton={true}
            className={className}
        />);
  };

  const toast = () => {
    return (<ToastNotification
            timeout={timeout}
            title={title}
            subtitle={subtitle}
            caption={caption}
            kind={kind}
            className={className}
            onCloseButtonClick={handleToastCloseButtonClick}
            style={{ minWidth: '225px', backgroundColor: 'rgba(0,20,64,1)' }}
        />
    );
  };

  return (renderMode === 'inline') ? inLine() : toast();
};