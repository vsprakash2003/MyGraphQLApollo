import { ModalWrapper, ComposedModal, ModalHeader, ModalBody, ModalFooter } from "bonsai-components-react";
import styled from 'styled-components';

export const EditDepartmentPopUp = styled(ModalWrapper) `
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

.bx--modal-container 
{
  text-align: left;
}

.bx--btn--secondary {
    border-color: rgba(198,40,40);
    color: rgba(198,40,40);
}
.bx--btn--secondary:hover {
    background-color: #fff;
    color: rgba(198,40,40);
}
`;


export const DepartmentComposedModal = styled(ComposedModal) `
.bx--modal-container{
    max-width:404px;
    max-height: 100%;
}
`;
export const DepartmentModalHeader = styled(ModalHeader) ``;
export const DepartmentModalBody = styled(ModalBody) `
    margin-bottom: 1rem !important;
    margin-top: 1rem !important;
`;
export const DepartmentModalFooter = styled(ModalFooter) `
.footer{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.footer-back-button-holder{
    width: 55%;
    text-align: left;
    align-self: center;
    padding-left: 25px;
    font-size: 1.1rem;
    
    a {
        cursor: pointer;
    }
}

.footer-cancel-button-holder{
    padding: 0 20px;
}

.footer-next-button-holder
{
}
`;