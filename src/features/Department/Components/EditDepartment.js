import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput, ModalHeader} from "bonsai-components-react";
import FlashMessage from '../../FlashMessage';
import TEXT from './../message.json'

import { DepartmentComposedModal, DepartmentModalBody, DepartmentModalFooter } from './../StyledComponents/EditDepartmentPopUp';

export class EditDepartment extends React.Component {
    updateClick = () => {
      this.props.handleUpdateSubmit(this.props.deptUuid);
    }

    render() {
      const { showEditDepartmentPopUp, deptName, isFormValid, editDepartmentValidationText } = this.props.formData;
      const title = "Edit Department"
      const formClass = ''
      return (
            <DepartmentComposedModal id="editDepartmentModal" open={showEditDepartmentPopUp}>
                <ModalHeader label=""
                    title={title}
                    iconDescription="Close"
                    buttonOnClick={() => {
                      this.props.handleHideEdit();
                    }} />
                <DepartmentModalBody>
                    <div className={this.props.className} >
                        <div className={formClass} >
                            <FlashMessage
                                show={!isFormValid}
                                renderMode='inline'
                                title={editDepartmentValidationText}
                                subtitle=''
                                caption=''
                                kind='warning' />
                            
                            <div className="div-department-container">
                                <div className="div-department-item-name" >
                                    <TextInput
                                        className="department-name"
                                        id="txtDepartmentNameEdit"
                                        labelText={TEXT.LABEL.DEPARTMENT_NAME}
                                        value={deptName.value}
                                        invalid={deptName.invalid}
                                        invalidText={deptName.validationText}
                                        onChange={(e) => {
                                          this.props.handleOnChange('deptName', e.target.value);
                                        }}
                                        disabled={false}
                                    />
                                </div> 
                              </div>  
                        </div>
                    </div>
                </DepartmentModalBody>
                <DepartmentModalFooter>
                    <div className="footer">
                        <div className="footer-back-button-holder">
                        </div>
                        <div className="footer-cancel-button-holder">
                        </div>
                        <div className="footer-next-button-holder">
                                <Button onClick={this.updateClick}>
                                    Update Department
                             </Button> 
                        </div>
                    </div>
                </DepartmentModalFooter>
            </DepartmentComposedModal >
      );
    }
}

EditDepartment.propTypes = {
  className: PropTypes.string,
  formData: PropTypes.object,
  deptUuid: PropTypes.string,
  departmentList: PropTypes.array,
  handleOnChange: PropTypes.func,
  handleHideEdit: PropTypes.func,
  handleUpdateSubmit: PropTypes.func,
};

export default EditDepartment;
