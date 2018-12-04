import styled from 'styled-components';

import {
  TableMain,
  DepartmentGridCell,
  DepartmentTable,
  DepartmentCell,
} from './DepartmentSummaryElements';

export const GridListMain = styled(TableMain)`
  height: 60px;
  width: 1440px;
  padding: 8px 8px;
  background-color: #001E60;
  border-top: solid 1px #666666;
`;

export const GridCellMain = styled(DepartmentGridCell)`
  //border-radius: 2px;
  height: 10px;
  width: 1294px;
  border-left: #CDCDCF 1px solid;
  margin: 8px 8px 8px 0;
`;

export const DepartmentHeaderTable = styled(DepartmentTable)``;

export const DepartmentHeaderCell = styled(DepartmentCell)``;

export const DepartmentHeaderData = styled.div`
  margin-left: 14px;
  label {
    height: 28px;
    width: 350px;
    font-family: "TT Norms";
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 28px;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }
`;

export const DepartmentColumnBackground = styled.div`
    height: 47px;	
    width: 1294px;	
    background-color: #E6E7E8;
`;

export const DepartmentColumnLabels = styled.div`
    height: 16px;	
    width: 10.59px;	
    color: #2D2926;	
    font-family: Roboto;	
    font-size: 16px;	
    font-weight: 500;	
    line-height: 15px;
`;

export const MainDiv = styled.div`
  position: relative;
`;

export const LoadMoreDiv = styled.div`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`;