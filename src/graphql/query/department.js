import gql from 'graphql-tag'

export const ALL_DEPARTMENTS = gql `
 {
    allDepartments {
          uuid
          departmentId
          departmentName
    }
  }
  `;

  export const DEPARTMENT_BY_ID = gql `
 query getDepartmentData($departmentId:String!) {
    departmentById(departmentId: $departmentId) {
          uuid
          departmentId
          departmentName
    }
  }
  `;
  