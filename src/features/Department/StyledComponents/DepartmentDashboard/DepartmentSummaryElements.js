import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';


export const TableMain = styled(Table)``;

export const DepartmentTableMain = styled(TableMain)`
  border-bottom: solid 1px #e3e3e3;
  background-color: #ffffff;
  &:hover {
    background: #e3e3e3;
  }
`;

export const DepartmentGrid = styled(TableMain)`
  padding: 0 8px 0 8px;
  cursor: pointer;

  @media (min-width: 1240px) {
    .md-cell {
      margin: 0 8px;
    }
  }

  @media (max-width: 1239px) and (min-width: 600px) {
    .md-cell--3,
    .md-cell--3-tablet.md-cell--3-tablet {
      width: calc(50% - 16px);
      margin: 8px;
    }
  }

  @media (max-width: 599px) {
    .md-cell--3,
    .md-cell--3-phone.md-cell--3-phone {
      width: calc(100% - 16px);
      margin: 8px;
    }
  }
`;

export const DepartmentGridCell = styled(TableCell)``;

export const DepartmentLabel = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #666666;
  margin-bottom: 0;
  white-space: nowrap;
`;

export const DepartmentData = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

export const DepartmentName = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

export const DepartmentDetails = styled.label`
  font-size: 12px;
  font-weight: normal;
  color: #666666;
  white-space: nowrap;
`;

export const DepartmentTable = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;

export const DepartmentTableWithMargin = styled(DepartmentTable)`
  margin: 1px;
`;

export const DepartmentTableWithMarginandBorder = styled(DepartmentTable)`
  border-radius: 2px;
  border: solid 1px #e3e3e3;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #ffffff;
`;

export const DepartmentCell = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const DepartmentCellBox = styled(DepartmentCell)`
  padding: 0 12px 0 12px;
  width: 33%;
`;

export const DepartmentCellBorder = styled(DepartmentCell)`
  border-right: solid 1px #e3e3e3;
`;

export const DepartmentCellIcon = styled(DepartmentCell)`
  text-align: center;
  width: 80px;
`;

export const IconPlaceHolder = ({ iconClass, className, children }) => (
  <i className={'' + iconClass + ' ' + className}>{children}</i>
);

IconPlaceHolder.propTypes = {
  iconClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};

export const IconRightArrow = styled(IconPlaceHolder)`
  font-size: 20px;
  color: #000000;
`;

export const IconInfo = styled(IconPlaceHolder)`
  font-size: 20px;
  padding-right: 15px;
  color: #000000;
`;

export const DepartmentIconWrapper = styled.div`
  white-space: nowrap;
`;
