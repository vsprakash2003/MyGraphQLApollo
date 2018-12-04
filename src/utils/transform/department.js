import { map } from 'lodash';

export const transformDepartmentGridData = (data) => {
  if (data) {
    const returData = map(data, (item) => {
      const departmentData=
       {
         id: item.uuid,
         deptid: item.departmentId,
         name: item.departmentName,
       };
      return departmentData;
    });
    return returData;
  }
  return [];
};

export const transformDepartmentDataForDropDown = (data) => {
  if (data) {
    const returData = map(data, (item) => {
      return {
        id: item.uuid,
        text: item.departmentId,
      };
    });
    return returData;
  }
  return [];
};