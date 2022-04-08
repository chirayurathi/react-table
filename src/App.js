import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import QuickSearchToolbar from './SearchField';
const App = () => {
  // const [searchText, setSearchText] = React.useState('');
  // const requestSearch = (searchValue) => {
  //   setSearchText(searchValue);
  //   const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
  //   const filteredRows = data.rows.filter((row) => {
  //     return Object.keys(row).some((field) => {
  //       return searchRegex.test(row[field].toString());
  //     });
  //   });
  //   setRows(filteredRows);
  // };

  // React.useEffect(() => {
  //   setRows(data.rows);
  // }, [data.rows]);
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];
  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
             BasicList
          </Typography>
            <div style={{ flex: '1 1 0px' }} />
          </Toolbar>
        </AppBar>
        <Box>
          <Grid container>
            <Grid item sm={12}>
              <DataGrid columns={columns} rows={rows} autoHeight components={{ Toolbar: GridToolbar}} />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
}
export default App;