import React from 'react';
import { DataTable } from "bonsai-components-react";
import PropTypes from 'prop-types';

export class DepartmentList extends React.Component{

  cellStyle = (value) => {
    return (
     <div className="cell-style">
       {value}
      </div>
    );
  }

  getColumnData = (row, cell) => { 
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
            rows={initialRows}
            headers={headers}
            render={({ rows, headers, getHeaderProps }) => (
              <TableContainer  className={this.props.className}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {headers.map(header => (
                        <TableHeader key={header.id} {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map(row => (
                      <TableRow key={row.id} isSelected={row.isSelected} >
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{this.getColumnData(row, cell)}</TableCell>
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
