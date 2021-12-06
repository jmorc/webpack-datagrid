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

- Produce-error-with-datagrid-4
- Error-with-datagrid-5
- Upgrade-webpack-3-to-4
- main

## Results

| DataGrid package                   | Webpack 3 | Webpack 4 |
| ---------------------------------- |---------- | ------------------ |
| @material-ui/x-grid 4.0.0-alhpa.24 |           |                    |
| @mui/x-data-grid 4.0.0             |     :x:   |                    |
| @mui/x-data-grid 5.0.1             |     :x:   | :white_check_mark: |


