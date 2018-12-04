import { showLoader, hideLoader, updateApolloStore } from '../../../utils/helper';
import { apolloClient } from './../../../utils/apolloClient/apolloClient';
import { DEPARTMENT_BY_ID, ALL_DEPARTMENTS} from '../../../graphql/query/department';

export const fetchDepartmentListData = async (offset, limit, sortOrder, sortField, departmentId) => {
  showLoader();
  const variables = {};

  if (departmentId) {
    variables.departmentId = departmentId;
  }

  const resdata  = await apolloClient.query({
    fetchPolicy: 'network-only',
    query: (departmentId) ? DEPARTMENT_BY_ID: ALL_DEPARTMENTS,
    variables: variables,
  }).catch(() => {
  });

  const cacheVariables = {};
  if(resdata.data) {
    updateApolloStore(DEPARTMENT_BY_ID, cacheVariables, resdata.data);
  }
  hideLoader();
};

export const getSortColumnName = (columnName) => {
  let column = 'none';
  switch (columnName) {
    case 'departmentId':
      column = 'departmentId';
      break;
    case 'departmentName':
      column = 'departmentName';
      break;
    default:
      column = 'none';
  }
  return column;
};