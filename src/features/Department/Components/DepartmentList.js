import React from 'react';
import { DataTable, Icon } from "bonsai-components-react";
import { iconEdit} from 'bonsai-icons';
import PropTypes from 'prop-types';
import { randomKeyGenerator } from '../../../utils/helper';

export class DepartmentList extends React.Component{

  editButtonJSX = (row) => {
    return (
      <div style={{ cursor: 'pointer' }} onClick={() => {
        this.props.handleShowEdit(row.id);
      }}>
        <Icon
          icon={iconEdit}
          fill='#2d2926'
          description='Edit User'
          height='20px'
          width='20px'
        />
      </div>
    );
  }

  cellStyle = (value) => {
    return (
     <div className="cell-style">
       {value}
      </div>
    );
  }

  getColumnData = (row, cell) => { 
    if (cell.info.header === 'edit') {
      return this.editButtonJSX(row);
    }
    return <React.Fragment>{cell.value}</React.Fragment>;
  }

  render(){
    const headers = this.props.headers;
    const initialRows = this.props.departmentCollection;
    
    const { 
      Table,
      TableBody, 
      TableCell,
      TableContainer,
      TableHead,
      TableHeader,
      TableRow,
    } = DataTable;
    return (
      
            <DataTable
            onHeaderClick={this.props.handleListSort}
            rows={initialRows}
            headers={headers}
            render={({ rows, headers, getHeaderProps }) => (
              <TableContainer className={this.props.className}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {headers.map(header => {
                        const headerProperties = getHeaderProps({ header })
                        
                        return(
                        <TableHeader key={randomKeyGenerator()} {...headerProperties}>
                          {header.header}
                        </TableHeader>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map(row => (
                      <TableRow key={row.id} isSelected={row.isSelected} >
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>
                            {this.getColumnData(row, cell)}
                            </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          />
    );
  }
}
export default DepartmentList;

DepartmentList.propTypes = {
  headers: PropTypes.array,
  className:PropTypes.string,
  departmentCollection: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    departmentId: PropTypes.string,
    departmentName: PropTypes.string,
  })),
};
