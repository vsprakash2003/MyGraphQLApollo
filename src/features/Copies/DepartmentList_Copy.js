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
} from '../../styledComponents/DepartmentDashboard/DepartmentListElements';


export class DepartmentList extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoadMore: false };
  }

  updateShowLoadMode(value) {
    this.setState({ showLoadMore: value });
  }

  render() {
    const header = () => {
      return (
        <GridListMain>
          <GridCellMain>
            <DepartmentHeaderTable>
              <DepartmentHeaderCell>
                <DepartmentHeaderData>
                  {this.props.list}
                </DepartmentHeaderData>
              </DepartmentHeaderCell>
            </DepartmentHeaderTable>
          </GridCellMain>
        </GridListMain>
      );
    };


    return (
      <MainDiv>
        {header()}
        {this.state.showLoadMore ? <LoadMoreDiv /> : ''}
      </MainDiv>
    );
  }
}

DepartmentList.propTypes = {
  list: PropTypes.object,
  showLoadMore: PropTypes.bool,
};

export default DepartmentList;
