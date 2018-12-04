import gql from "graphql-tag";

export const ADDDEPARTMENT_MUTATION = gql`
  mutation addDepartment($deptData: NewDeptInput!) {
    addDept(deptData: $deptData) {
          uuid
          departmentId
          departmentName
    }
  }
`;

export const ADDNEWDEPARTMENT_MUTATION = gql`
  mutation addNewDepartment($deptData: NewDeptInput!) {
    addDept(deptData: $deptData) {
      dept{
          uuid
          departmentId
          departmentName
      }
    } 
  }
`;

export const EDITDEPARTMENT_MUTATION = gql`
  mutation editDepartment($deptData: UserInput!) {
    editDept(deptData: $deptData) {
          uuid
          departmentId
          departmentName
    }
  }
`;
