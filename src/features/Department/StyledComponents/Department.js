import styled from 'styled-components';
import { Department as DefaultDepartment } from '../Container/Department';


export const Department = styled(DefaultDepartment) `
  display: grid;    
  justify-content: start;
  margin: 24px 72px;
  grid-row-gap: 25px;
  grid-template-rows: 45px auto ;
  grid-column-gap: 24px;
  grid-template-columns: 4fr minmax(250px, 350px) 1fr;
   .department-header{
    .department-header-label {
      font-size: 36px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: #2d2926;
    } 
  }

  .department-button {
    .bx--btn
    {
      height: 40px; 
      float: right;
    }
    text-align: right;
    float: center;
    white-space: nowrap;
    
  } 
  
  .department-list {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .department-select {
    width: 100%
}

`;
