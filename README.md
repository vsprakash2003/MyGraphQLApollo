This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## `npm install`

This installs apollo client and graphql package

## other folders setup

1. Add a file in root and name it env.dev
    2. Update env.dev with the environment variables like server URL
3. Add a folder under src and name it config
    4. Add the apiConfig.js file under config. Add conditions where the environment variable is not available
    5. Add the appConfig.js file under config. Add constants for managing grid size and variable truncation lengths
5. Add a folder under src and name it utils
    6. Add a sub-folder under utils for apolloClient and data transformation
    7. Respective files go under these folders
8. Add a folder under src and name it graphql
    9. Add subfolders query and mutation
   10. Queries and mutation commands go in respective subfolders
11. Add a folder under src and name it features
   12. Add subfolders for each feature like Department, Employee
   13. Add subfolders under each feature for Containers, Components and Styled Components
14. Add app.js, AsyncLoad.js, Authorization.js under src

## Add gitignore file 
   `touch .gitignore`

## Git commands
### for master branch
`git init`
`git add .`
`git commit -m "first commit"`
`git remote add https://github.com/vsprakash2003/MyGraphQLApollo-Client.git`
`git push -u origin master` 

### for coding branch
`git checkout -b origin/c/{branch name}`
`git add .`
`git commit -m "second commit"
`git push -u origin origin/c/{branch name}`

### for merging code branch to master
`git checkout master`
`git pull origin master`
`git merge origin/c/{branch name}`
`git push -u origin master`

## for running build and serving from node
### install serve package
`mkdir ~/.npm-global`
`npm config set prefix '~/.npm-global’`
`export PATH=~/.npm-global/bin:$PATH`
`npm install serve -g`

`npm run build`
`serve -p 3000 -s build`

## for creating docker container
1. Create dockerfile, .dockerignore and nginx.conf files
2. Create the build file (this avoids running npm install in docker)
3. Create a docker bridge (if not already exists and only if needed. This is to connect 2 containers)
4. Do docker build
5. Run docker container and add to bridge

`npm run build`
`docker network create -d bridge Myappbridge`
`docker build . -t react-docker`
`docker run --rm --network=Myappbridge -d -p 3000:80 --name Myclientdocker react-docker`

