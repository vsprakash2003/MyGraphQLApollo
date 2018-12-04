import styled from 'styled-components';

import { AddDepartment as DefaultAddDepartment } from '../Components/AddDepartment';

export const AddDepartment = styled(DefaultAddDepartment) `
width: 404px;
/* min-height:365px; */


.dept-name {
  height: 40px;
  border-radius: 2px;
  background-color: #f8f8f8;
  min-width:186px;
}

.div-dept-container{
    display: flex;
    flex-flow: row wrap;   
    justify-content: space-around;
    margin-top:25px;
}

.div-dept-item-id{
    padding-right: 32px;
    width: 218px;
}

.div-dept-item-dept-name{
    width: 186px;
}
`;
