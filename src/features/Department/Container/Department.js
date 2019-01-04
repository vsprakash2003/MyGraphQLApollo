import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormLabel, Select, SelectItem } from "bonsai-components-react";
import { cloneDeep, find, findIndex } from 'lodash';
import { AddDepartmentPopUp } from '../StyledComponents/AddDepartmentPopUp';
import { AddDepartment } from '../StyledComponents/AddDepartment';
import { EditDepartment } from '../StyledComponents/EditDepartment'
import { DepartmentList } from '../StyledComponents/DepartmentList';
import { transformDepartmentGridData } from './../../../utils/transform/department';
import { ALL_DEPARTMENTS} from './../../../graphql/query/department';
import { ADDNEWDEPARTMENT_MUTATION, EDITDEPARTMENT_MUTATION } from './../../../graphql/mutation/department';
import { readFromApolloStore, updateApolloStore, handleGraphQlError, showToast, showLoader, hideLoader } from '../../../utils/helper';
import { defaultDepartmentState, defaultPaginationListConfig } from './DepartmentConst';
 
export class Department extends React.Component {
  constructor(props) {
  super(props)
  this.state = cloneDeep(defaultDepartmentState)
   }

  showAddDepartmentPopUp = (key, value) => {
    this.setState({ [key]: value });
  } 

  handleDepartmentIdSelectBoxChange = (selectedItem) => {
    this.props.handleDepartmentIdChange((selectedItem === 'Department: All') ? null : selectedItem);
  }

  clearFormData = () => {
    this.setState({ ...cloneDeep(defaultDepartmentState) });
  }
  
  setFormData = (key, value) => {
      this.setState({ [key]: value });
    } 
  
    
    handleShowEdit = (deptUuid) => {
      this.clearFormData();
      const selectedDeptObject = find(this.props.departmentCollection, (item) => {
        return item.uuid === deptUuid;
      });
      
      const formData = cloneDeep(defaultDepartmentState);
      formData.deptId.value = selectedDeptObject.departmentId;
      formData.deptName.value = selectedDeptObject.departmentName;
      formData.deptUuid = selectedDeptObject.uuid;
      
      formData.showEditDepartmentPopUp = true;
      this.initializeEditFormData(formData);
    } 
  
    handleHideEdit = () => { 
      this.showAddDepartmentPopUp('showEditDepartmentPopUp', false);
    }
  
    handleAddSubmit = (client) => {
      if (this.formValidation()) {
        const deptData = this.getDeptFormData();
        this.addDepartment(client, deptData);
        return true;
      }
      return false;
    }
  
    handleUpdateSubmit = (deptUuid) => {
      if (this.formValidation()) {
        const deptData = this.getDeptFormData();
        this.updateDepartment(this.props.client, deptData, deptUuid); 
        return true;
      }
      return false;
    }
    
    getQueryAndVariables = () => {
      const query = ALL_DEPARTMENTS
      const variables_query = { departmentId: "", offset: defaultPaginationListConfig.pageNumber, limit: defaultPaginationListConfig.pageLimit, sortOrder: defaultPaginationListConfig.sortOrder, sortField: defaultPaginationListConfig.sortField };
      return { query: query, variables: variables_query };
    }

    getDeptFormData = () => {
      const { deptId, deptName } = this.state;
      console.log(this.state)
      const deptData = {
        departmentId: deptId.value? deptId.value: deptId,
        departmentName: deptName.value? deptName.value: deptName,
      };
      return deptData;
    }

    initializeEditFormData = (formData) => {
      this.setState({ ...formData });
    }

    addDepartment = async (client, deptData) => {
      const variables = { deptData: deptData };
      showLoader();
      console.log(deptData)
      const dataResponse = await this.props.client.mutate({
        variables: variables, mutation: ADDNEWDEPARTMENT_MUTATION,
      }).catch((res) => {
        return handleGraphQlError(res);
      });
      hideLoader();
      if (dataResponse && dataResponse.error) {
        return this.showError('add', dataResponse.error);
      } else {
        await this.props.onRefetchDeptGrid();
        const message = {
          title: 'New Department added',
          caption: this.state.deptId.value + ' was added.',
          show: true,
        };
        showToast(message);
        return this.showAddDepartmentPopUp('showAddDepartmentPopUp', false);
      }
    }
  
    updateDepartment = async (client, deptData, deptUuid) => {
      showLoader();
      deptData.uuid = deptUuid;
      deptData.departmentName = this.state.deptName
      const dataResponse = await this.props.client.mutate({
        variables: { deptData: deptData },
        mutation: EDITDEPARTMENT_MUTATION,
        update: (cache, { data }) => {
          const queryAndVariables = this.getQueryAndVariables();
          const dataFromStore = readFromApolloStore(queryAndVariables.query, queryAndVariables.variables);
          const allDepartments = dataFromStore.departmentById;
          const index = findIndex(allDepartments, { uuid: deptUuid });
          if (data.editDept != null) {
            allDepartments.splice(index, 1, data.editDept.dept);
            updateApolloStore(queryAndVariables.query, queryAndVariables.variables, { departmentById: allDepartments });
            hideLoader();
            showToast({
              show: true, title: 'Department updated', caption: `${data.editDept.dept.departmentId + ' ' + data.editDept.dept.departmentName}'s data was updated`,
            });
            this.handleHideEdit();
          } else {
            hideLoader();
            return this.showError('edit', 'Department already exists');
          }
          this.handleHideEdit();
        },
      }).catch((res) => {
        return handleGraphQlError(res);
      });
      if (dataResponse && dataResponse.error) {
        hideLoader();
        return this.showError('edit', dataResponse.error);
      }
  
    }
  
    showError = (type, error) => {
      const validationObject = {};
      if (type === 'edit') {
        validationObject.editDepartmentValidationText = error;
      } else {
        validationObject.addDepartmentValidationText = error;
      }
      this.setState({
        isFormValid: false, ...validationObject,
      });
    }
  
    formValidation = () => {
      const { deptId, deptName } = this.state;
      (deptId.value === '') ? this.setFormValid('deptId', true) : this.setFormValid('deptId', false);
      (deptName.value === '') ? this.setFormValid('deptName', true) : this.setFormValid('deptName', false);
      
      if (deptId.value !== '' && deptName.value !== '') {
          this.setState({ isFormValid: true });
          return true;
        }
    }
  
    setFormValid = (key, value) => {
      const formProperty = { ...this.state[key] };
      formProperty.invalid = value;
      this.setState({ [key]: formProperty });
    }

    
  addDepartmentPopupJSX = (client) => {
    return (
      <AddDepartmentPopUp
        id="addDepartmentModal"
        shouldSubmitOnEnter={false}
        onRequestSubmit={() => {
          this.handleAddSubmit(client);
        }}
        primaryButtonText="Add Department"
        secondaryButtonText="Cancel"
        onSecondarySubmit={() => {
          this.showAddDepartmentPopUp('showAddDepartmentPopUp', false);
        }}
        modalHeading="Add New Department"
        onRequestClose={() => {
          this.showAddDepartmentPopUp('showAddDepartmentPopUp', false);
        }}
        
        // primaryButtonDisabled={!this.state.isDeptIdValid}
        open={this.state.showAddDepartmentPopUp}
      >
        <AddDepartment formData={this.state} 
          handleOnChange={this.setFormData}  />
      </AddDepartmentPopUp>
    );
  }
  
  editDepartmentPopupJSX = () => {
    return (<EditDepartment deptUuid={this.state.deptUuid} handleUpdateSubmit={this.handleUpdateSubmit} handleHideEdit={this.handleHideEdit} 
      departmentList={this.props.departmentDropDownData} formData={this.state} handleOnChange={this.setFormData} />);
  }

  DepartmentIdDropDown = () => {
    return (
      <div><Select className="department-select"     
                    id="drpDepartment"
                    defaultValue="-1"
                    onChange={(e) => {
                      this.handleDepartmentIdSelectBoxChange(e.currentTarget.value);
                    }}
                >
                    <SelectItem
                        disabled
                        hidden
                        value="-1"
                        text="Choose an department"
                    />
                    {this.props.departmentIdDropDownData.map(( items) => (
                        <SelectItem key ={items.id} text={items.text} value={items.text} />
                    ))}
                </Select>
                </div>
      );
    }

  render() {
    return (
      <React.Fragment>
        {this.addDepartmentPopupJSX(this.props.client)} {this.editDepartmentPopupJSX()}
        <div className={this.props.className}>
          <div className="department-header">
            <FormLabel className="department-header-label">Departments</FormLabel>
          </div>
          <div>
               {this.DepartmentIdDropDown()} 
            </div>
          
            <div className="department-button">
              <Button kind="primary" onClick={() => {
                this.showAddDepartmentPopUp('showAddDepartmentPopUp', true);
              }}>Add Departments</Button>
            </div>
          
          <div className="department-list">
            <DepartmentList headers={this.props.headers} departmentCollection={transformDepartmentGridData(this.props.departmentCollection)} 
                            handleShowEdit={this.handleShowEdit}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Department.propTypes = {
  headers: PropTypes.array,
  className: PropTypes.string,
  departmentCollection: PropTypes.array,
  client: PropTypes.object,
  DepartmentIdDropDownData: PropTypes.array,
  paginationData: PropTypes.object,
  handlePageChange: PropTypes.func,
  handleListSort: PropTypes.func,
  handleDepartmentIdChange: PropTypes.func,
  refetchDeptGrid: PropTypes.func,
};

export default Department;