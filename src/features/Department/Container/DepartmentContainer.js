import React from 'react';
import { Department as StyledDepartment } from '../StyledComponents/Department';
import { defaultDepartmentListHeaders, defaultPaginationListConfig } from './DepartmentConst';
import { ALL_DEPARTMENTS, DEPARTMENT_BY_ID} from './../../../graphql/query/department';
import { Query } from 'react-apollo';
import { get } from 'lodash';
import { transformDepartmentDataForDropDown } from './../../../utils/transform/department';
import { apolloClient } from './../../../utils/apolloClient/apolloClient';
import { fetchDepartmentListData, getSortColumnName } from './DepartmentListActions';

export class DepartmentContainer extends React.Component {
  constructor() {
    super();
    this.pageNumber = defaultPaginationListConfig.pageNumber;
    this.pageLimit = defaultPaginationListConfig.pageLimit;
    this.sortOrder = defaultPaginationListConfig.sortOrder;
    this.sortField = defaultPaginationListConfig.sortField;
    this.departmentId = null;
  }
    state = {
      reload: 0,
    }

    getDataTableHeaders = () => {
      const headers = Object.assign([], defaultDepartmentListHeaders);
      headers.push({ key: 'edit', header: '' })
      return headers;
    }

    onPageChange = (pageNumber, pageLimit) => {
      this.pageNumber = pageNumber;
      this.pageLimit = pageLimit;
      fetchDepartmentListData(this.pageNumber, this.pageLimit, this.sortOrder, this.sortField, this.departmentId);
    }
  
    onPageSortChange = (sortDirection, columnName) => {
      this.sortField = getSortColumnName(columnName);
      this.sortOrder = sortDirection.toLowerCase();
      fetchDepartmentListData(this.pageNumber, this.pageLimit, this.sortOrder, this.sortField, this.departmentId);
    }

    onDepartmentIdChange = (departmentId) => {
      this.departmentId = departmentId;
      fetchDepartmentListData(this.pageNumber, this.pageLimit, this.sortOrder, this.sortField, this.departmentId);
      this.setState({reload: this.state.reload+1})
    }

    refetchDeptGrid = () => {
      fetchDepartmentListData(this.pageNumber, this.pageLimit, this.sortOrder, this.sortField, this.departmentId);
    }

      departmentList = (client, departmentIdList) => {
          const tableHeaders = this.getDataTableHeaders();
          const variables = {
            departmentId: "",
            offset: this.pageNumber,
            limit: this.pageLimit,
            sortOrder: this.sortOrder,
            sortField: this.sortField
          };
          if (this.departmentId) {
            variables.departmentId = this.departmentId
          }
  
        return (
          <Query query={(this.departmentId) ? DEPARTMENT_BY_ID : ALL_DEPARTMENTS} variables={variables} 
          >
            {({ loading, error, data }) => {
              if (loading) {
                return <p>Loading....</p>;
              }
              if (error) {
                return `Error! ${error.message}`;
              }
              
              const departmentData = get(data, 'departmentById', null);
              const paginationData = {
                totalCount: 0,
                pageNumber: this.pageNumber,
                pageLimit: this.pageLimit,
                sortOrder: this.sortOrder,
                sortField: this.sortField,
              }; 

              let departmentList = [];
              if (departmentData) {
                departmentList = departmentData;
              }

              return (
               <StyledDepartment
           headers={tableHeaders}
           departmentCollection= {departmentList}
           departmentIdDropDownData={departmentIdList}
           paginationData={paginationData}
           handlePageChange={this.onPageChange}
           handleListSort={this.onPageSortChange}
           handleDepartmentIdChange={this.onDepartmentIdChange}
           client={client}
           onRefetchDeptGrid={this.refetchDeptGrid}
           />);
            }}
          </Query>
        );
      };

      departmentIdList = (client) => {
        const variables = { departmentId:"", offset: this.pageNumber, limit: this.pageLimit, sortOrder: this.sortOrder, sortField: this.sortField};
          return (
            <Query query={ALL_DEPARTMENTS} variables={variables}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <p>Loading....</p>;
                }
                if (error) {
                  return `Error! ${error.message}`;
                }
                const departmentData = get(data, 'departmentById', null);
                const departmentIdList = [];
                if (departmentData) {
                  const departmentIdDropDownData = transformDepartmentDataForDropDown(departmentData, true)
                  departmentIdList.push({ id: '-1', text: 'Department: All' });
                  departmentIdDropDownData.map(item => {
                    return departmentIdList.push(item);
                  });
                }
                return this.departmentList(client, departmentIdList);
              }}
            </Query>);
      }

      render() {
        return (
          <div>
            {this.departmentIdList(apolloClient)}
          </div>
        );
      }
}

export default DepartmentContainer;
