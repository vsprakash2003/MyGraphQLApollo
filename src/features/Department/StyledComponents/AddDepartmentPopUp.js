import { Modal } from "bonsai-components-react";
import styled from 'styled-components';

export const AddDepartmentPopUp = styled(Modal) `
overflow-y: auto;
display: grid !important;
.bx--modal-container
{
    max-height: 100%;
}

.bx--modal-content
{
    overflow-y: inherit;
    margin-bottom: 0;
}
`;
