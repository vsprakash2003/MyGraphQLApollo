import styled from 'styled-components';

import { DepartmentList as DefaultDepartmentList } from '../Components/DepartmentList';

export const DepartmentList = styled(DefaultDepartmentList) `

.bx--data-table-v2 tbody tr:nth-child(even)
{
  background-color: #fff;
}
.bx--btn--primary, .bx--btn--primary-icon-button {
  background-color: transparent;
}
.bx--btn--primary .bx--btn__icon{
  fill:black;
}
.bx--btn--primary:hover {
  background-color: transparent;
}
.icon-style {
  margin-left:12px;
}
.hyphen-style {
  margin-left:20px;
}
.disable-cell {
  color:#999ca0;  
}
.bold-name {
  font-weight:bold;
}
.truncate-style {
 max-width: 150px;
 white-space:nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}
.bx--tooltip__trigger {
  font-weight:normal;
  margin-left: 0px;
}
td:first-of-type {  
  .bx--tooltip__trigger {
    font-weight: bold !important;
    font-size: 14px;    
  }
}
.cell-style{
  height: 30px;
  width: 30px;
  background-color: #e6e7e8;
  border-radius: 40%;
  display: inline-block;
  margin-left: 35px;
  padding-top: 8px;
  padding-left: 11px;
}

`;
