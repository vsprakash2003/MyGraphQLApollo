import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from "bonsai-components-react";

export class AddDepartment extends React.Component {

  render() {
    
    const { deptId, deptName } = this.props.formData;
    return (
            <div className={this.props.className} >
                <div className="div-department-container">
                    <div className="div-department-item-id">
                        <TextInput
                            className="dept-id"
                            id="txtDeptId"
                            labelText="Department Id"
                            value={deptId.value}
                            invalid={deptId.invalid}
                            invalidText={deptId.validationText}
                            onChange={(e) => {
                              this.props.handleOnChange('deptId', e.target.value);
                            }}
                        />
                    </div>
                    <div className="div-department-item-name">
                        <TextInput
                            className="dept-name"
                            id="txtDeptName"
                            labelText="Department Name"
                            value={deptName.value}
                            invalid={deptName.invalid}
                            invalidText={deptName.validationText}
                            onChange={(e) => {
                              this.props.handleOnChange('deptName', e.target.value);
                            }}
                        />
                    </div>
                </div>
                </div>
    );
  }
}

AddDepartment.propTypes = {
  className: PropTypes.string,
  formData: PropTypes.object,
  handleOnChange: PropTypes.func,
};

export default AddDepartment;
