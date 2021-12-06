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

Not all combinations were tried, but we are getting console errors whenever `XGrid` is updated to `DataGrid` with webpack 3.  These have only beeen resolved by upgrading the toy app to webpack 4.

Error with `DataGrid` 4.0.0 and webpack 3:

```
Uncaught RangeError: Maximum call stack size exceeded
    at Function.getter [as a] (vendor.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
    at Zi (app.bundle.js:1)
```

Error with `DataGrid` 5.0.1 and webpack 3:

```
app.bundle.js:1 Uncaught ReferenceError: e is not defined
    at En (app.bundle.js:1)
    at app.bundle.js:1
    at app.bundle.js:1
    at ms (app.bundle.js:1)
    at app.bundle.js:1
    at renderWithHooks (app.bundle.js:1)
    at updateForwardRef (app.bundle.js:1)
    at beginWork (app.bundle.js:1)
    at HTMLUnknownElement.callCallback (app.bundle.js:1)
    at Object.invokeGuardedCallbackImpl (app.bundle.js:1)
```
and:
```
app.bundle.js:1 The above error occurred in the <ForwardRef> component:

    at http://localhost:8080/app.bundle.js:1:1421854
    at div
    at div
```

