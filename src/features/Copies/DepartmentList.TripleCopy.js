import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    GridListMain,
    GridCellMain,
    DepartmentHeaderTable,
    DepartmentHeaderCell,
    DepartmentHeaderData, 
    LoadMoreDiv,
    MainDiv,
    DepartmentColumnLabels,
    DepartmentColumnBackground,
  } from '../../styledComponents/DepartmentDashboard/DepartmentListElements';
  import { ScrollbarDashBoard } from '../../styledComponents/Scrollbar';
  
  export class DepartmentList extends Component {
    constructor(props) {
      super(props);
      this.state = { showLoadMore: false };
    }



render() {
    const header = () => {
      return (
        <GridListMain>
          <GridCellMain>
            <DepartmentHeaderTable>
              <DepartmentHeaderCell>
                <DepartmentHeaderData>
                <label id="header">
                    List of Departments
                </label>
                </DepartmentHeaderData>
              </DepartmentHeaderCell>
            </DepartmentHeaderTable>
          </GridCellMain>
        </GridListMain>
      );
    };
    
    function departmentHeaderLabels() {
        return (
            <DepartmentColumnBackground>
              <DepartmentColumnLabels>
                UUID
                Department ID
                Department Name
              </DepartmentColumnLabels>
            </DepartmentColumnBackground>
        );
      }

    const departmentListData = this.props.list.map(row => {
                    return (
                        <div>
                        <GridCellMain string>{row.uuid}</GridCellMain>
                        <GridCellMain string>{row.departmentId}</GridCellMain>
                        <GridCellMain string>{row.departmentName}</GridCellMain>
                        </div>
                    );
                  })

    return (
        <MainDiv>
          {header()}
          <ScrollbarDashBoard>
            <div id="DeptHeadingWrapper">{departmentHeaderLabels()}</div> 
            <div id="DeptListWrapper">{departmentListData}</div>
          </ScrollbarDashBoard>
          {this.state.showLoadMore ? <LoadMoreDiv /> : ''}
        </MainDiv>
      );
    }
  }

DepartmentList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
};

//export default withStyles(styles)(DepartmentList);
export default DepartmentList;