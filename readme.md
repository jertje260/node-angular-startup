## Getting all the packages

Command `npm run install-all` installs all the dependencies for all the sub projects

## Develop in watch mode

Command `npm run watch` starts the nodejs server and the angular app in watch mode (file changes restart the build and restarts the server)

## Build all projects

Command `npm run build` builds the node and angular, moves the angular output to the dist/public folder of the server and you can start the server to serve it all.

## Build for prod

Command `npm run build-prod` build the node and angular for prod, this adds bundling, minification, uglification and dead code elimination to get a tiny frontend