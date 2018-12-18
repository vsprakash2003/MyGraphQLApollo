import { gridConfig } from './../../../config/appConfig';
import TEXT from './../message.json';

export const defaultDepartmentState = {
  showAddDepartmentPopUp: false,
  isDeptIdValid:false,
  deptId: {
    value: '',
    invalid: false,
    validationText: TEXT.VAL.ERROR_REQUIRED,
  },
  deptName: {
    value: '',
    invalid: false,
    validationText: TEXT.VAL.ERROR_REQUIRED,
  },
  deptUuid: '',
  addDepartmentValidationText: TEXT.VAL.FORM_ERROR,
  editDepartmentValidationText: TEXT.VAL.FORM_DEPARTMENT_ERROR
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