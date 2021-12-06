# Webpack - DataGrid
Toy app to toubleshoot a bug with DataGrid in webpack 3 app

## Local setup

From the root, run
```
> yarn            # install js packages
> yarn run wp-dev # start webpack development server
```
Visit http://localhost:8080/page.html and observe the console error or correctly rendered DataGrid.

## Methods

Several versions of DataGrid were tested with webpack 3 and 4.

These tests are available as branches on this repo.

- Material-ui-alpha-wp-3
Tests @material-ui/x-grid, version 4.0.0-alpha.24 with webpack 3
- Produce-error-with-datagrid-4
Tests @mui/x-data-grid, version 4.0.0, with webpack 3
- Error-with-datagrid-5
Tests @mui/x-data-grid, version 5.0.1, with webpack 3
- Upgrade-webpack-3-to-4
Tests @mui/x-data-grid, version 5.0.1, with webpack 4

## Results

| DataGrid package                   | Webpack 3          | Webpack 4          |
| ---------------------------------- |------------------- | ------------------ |
| @material-ui/x-grid 4.0.0-alpha.24 | :white_check_mark: |                    |
| @mui/x-data-grid 4.0.0             |     :x:            |                    |
| @mui/x-data-grid 5.0.1             |     :x:            | :white_check_mark: |

Not all combinations were tests, but we are getting console errors whenever `XGrid` is updated to `DataGrid` with webpack 3.  These have only beeen resolved by upgrading the toy app to webpack 4.

Error with `DataGrid` 4.0.0 and webpack 3:

Error with `DataGrid` 5.0.1 and webpack 3:


