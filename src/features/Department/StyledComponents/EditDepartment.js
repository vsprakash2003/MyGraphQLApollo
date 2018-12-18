import styled from 'styled-components';
import { EditDepartment as DefaultEditDepartment } from '../Components/EditDepartment';

export const EditDepartment = styled(DefaultEditDepartment) `
width: 404px;
/* min-height:365px; */

.department-name {
  height: 40px;
  border-radius: 2px;
  background-color: #f8f8f8;
  min-width:186px;
}

.div-department-container{
    display: flex;
    flex-flow: row wrap;   
    justify-content: space-around;
    margin-top:25px;
}

.div-department-item-name{
    padding-right: 32px;
    width: 218px;
}

`;
