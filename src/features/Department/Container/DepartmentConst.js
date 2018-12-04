import { gridConfig } from './../../../config/appConfig';

export const defaultDepartmentState = {
  showAddDepartmentPopUp: false,
  isDeptIdValid:false,
  deptId: {
    value: '',
    invalid: false,
    validationText: 'Required field',
  },
  deptName: {
    value: '',
    invalid: false,
    validationText: 'Required field',
  },
  departmentId: {
    value: '',
    invalid: false,
    validationText: ' ',
  },
  addDepartmentValidationText: 'Resolve Errors to add a new Department',
};


export const defaultDepartmentListHeaders = [
  {
    key: 'deptid',
    header: 'Department ID',
  },
  {
    key: 'name',
    header: 'Department Name',
  },
];

export const defaultPaginationListConfig = {
  pageLimit: gridConfig.pageSize,
  pageNumber: 1,
  sortOrder: 'asc',
  sortField: 'deptid',
};