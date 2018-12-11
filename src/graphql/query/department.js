import gql from 'graphql-tag'

export const ALL_DEPARTMENTS = gql `
 query departmentById($departmentId:String,$offset:Int!,$limit:Int!,$sortOrder:String!,$sortField:String!) {
      departmentById(departmentId: $departmentId,offset:$offset,limit:$limit,sortOrder:$sortOrder,sortField:$sortField) {
          uuid
          departmentId
          departmentName
    }
  }
  `;

export const DEPARTMENT_BY_ID = gql `
 query departmentById($departmentId:String!,$offset:Int!,$limit:Int!,$sortOrder:String!,$sortField:String!) {
      departmentById(departmentId: $departmentId,offset:$offset,limit:$limit,sortOrder:$sortOrder,sortField:$sortField) {
          uuid
          departmentId
          departmentName
    }
  }
  `;
