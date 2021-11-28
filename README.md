# Webpack - DataGrid
Toy app to toubleshoot a bug with DataGrid in webpack 3 app

## Local setup
From the root, run
```
> yarn            # install js packages
> yarn run wp-dev # start webpack-dev-server
```
Visit http://localhost:8080/page.html to observe the model app.


On the branch `Error-with-datagrid-5` a console error occurs:
```
Uncaught ReferenceError: e is not defined
...
The above error occurred in the <ForwardRef> component
```
On the branch `Produce-error-with-datagrid-4` a different console error occurs:
`RangeError: Maximum call stack size exceeded`

