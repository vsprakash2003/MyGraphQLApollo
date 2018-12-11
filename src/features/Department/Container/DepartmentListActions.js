import { showLoader, hideLoader, updateApolloStore } from '../../../utils/helper';
import { apolloClient } from './../../../utils/apolloClient/apolloClient';
import { DEPARTMENT_BY_ID, ALL_DEPARTMENTS} from '../../../graphql/query/department';
import { defaultPaginationListConfig } from './DepartmentConst';

export const fetchDepartmentListData = async (offset, limit, sortOrder, sortField, departmentId) => {
  showLoader();
  const variables = { departmentId:"", offset: offset, limit: limit, sortOrder: sortOrder, sortField: sortField };

  if (departmentId) {
    variables.departmentId = departmentId;
  }

  const resdata  = await apolloClient.query({
    fetchPolicy: 'network-only',
    query: (departmentId) ? DEPARTMENT_BY_ID: ALL_DEPARTMENTS,
    variables: variables,
  }).catch(() => {
  });

  const cacheVariables={ departmentId:"", offset: defaultPaginationListConfig.pageNumber, limit: defaultPaginationListConfig.pageLimit, 
                         sortOrder: defaultPaginationListConfig.sortOrder, sortField: defaultPaginationListConfig.sortField };
  if (departmentId) {
    cacheVariables.departmentId = departmentId
  }

  if(resdata.data) {
    updateApolloStore((departmentId) ? DEPARTMENT_BY_ID: ALL_DEPARTMENTS, cacheVariables, resdata.data);
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