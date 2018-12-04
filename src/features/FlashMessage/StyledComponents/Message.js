import styled from 'styled-components';
import { Message as DefaultMessage } from '../Components/Message';

export const Message = styled(DefaultMessage) `
.bx--toast-notification__title {
  color: #fff;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.bx--toast-notification__close-button {
    background-color: rgba(0,20,64,1);
    width: 12px;
    height: 12px;
}
.bx--toast-notification__icon {
    fill: #fff;
    width: 12px;
    height: 12px;
    top: 3px;
}
.bx--toast-notification__caption {
    color: #fff;
    overflow-wrap: break-word;
    word-wrap: break-word;
}
`;