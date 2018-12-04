import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function DepartmentList(props) {
  const { classes, list } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>UUID</CustomTableCell>
            <CustomTableCell>Dept Id</CustomTableCell>
            <CustomTableCell>Name </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              list.map(row => {
                  console.log(parseInt(row.id))
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell string>{row.uuid}</CustomTableCell>
                <CustomTableCell string>{row.departmentId}</CustomTableCell>
                <CustomTableCell string>{row.departmentName}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

DepartmentList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
};

export default withStyles(styles)(DepartmentList);
