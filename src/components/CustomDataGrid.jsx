import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Search, Crop } from '@mui/icons-material';

const CustomDataGrid = ({ rows, columns, pageSize }) => {
  const handleSearch = (event) => {
    // Handle search logic here
    console.log('Search:', event.target.value);
  };

  const handleConvertToSVG = () => {
    // Handle convert to SVG logic here
    console.log('Convert to SVG');
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        components={{
          Toolbar: () => (
            <GridToolbar>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: 10 }}>
                  <Search />
                  <input type="text" placeholder="Search" onChange={handleSearch} />
                </div>
                <div style={{ marginLeft: 'auto', marginRight: 10 }}>
                  <Crop onClick={handleConvertToSVG} style={{ cursor: 'pointer' }} />
                </div>
              </div>
            </GridToolbar>
          ),
        }}
      />
    </div>
  );
};

export default CustomDataGrid;
