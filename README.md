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
```bash 
   touch .gitignore
```

## Git commands
### for master branch
```git commands
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/vsprakash2003/MyGraphQLApollo-Client.git
git push -u origin master 
```

### for coding branch
```git commands
git checkout -b origin/c/{branch name}
git add .
git commit -m "second commit"
git push -u origin origin/c/{branch name}
```

### for merging code branch to master
```git commands
git checkout master
git pull origin master
git merge origin/c/{branch name}
git push -u origin master
```

## for running build and serving from node
### install serve package
``` bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global’
export PATH=~/.npm-global/bin:$PATH
npm install serve -g

npm run build
serve -p 3000 -s build
```

## for creating docker container (only local)
1. Create dockerfile, .dockerignore and nginx.conf files
2. Create the build file (this avoids running npm install in docker)
3. Create a docker bridge (if not already exists and only if needed. This is to connect 2 containers)
4. Do docker build
5. Run docker container and add to bridge

``` bash
npm run build
docker network create -d bridge Myappbridge
docker build . -t react-docker
docker run --rm --network=Myappbridge -d -p 3000:80 --name Myclientdocker react-docker
```

## for creating docker container (production)
1. Create dockerfile, .dockerignore and nginx.conf files
2. Create the build file (this avoids running npm install in docker)
3. Create docker-compose.yml file (this will run dockerfile)
4. Create launch.sh shell script to bring up docker-compose file

```bash
sh launch.sh
```

## for deploying docker containers in google cloud using Kubernetes
1. Setup account in google app engine
2. Create a project and a bucket
3. Install google cloud SDK
4. Set default configurations like project code and zone in the CLI
5. Login to docker from CLI
6. Tag the 2 images (client and server)
7. Push the images to docker hub with updated tags
8. Create clusters with 2 nodes using glcoud CLI
9. Provide Kubernetes with your docker hub user id and password credentials to pull images
10.Upload the my-graphql-server-pod.yaml using Kubernetes CLI from where this file resides
11.Curl the LoadBalancer Ingress (external ip) IP and verify it is working

## commands for installing and setting up docker images in google cloud
### {} braces refer to your instances like projects, user id, naming etc.
```bash
xcode-select —install
glcoud init
gcloud config set project {your google cloud project id}
gcloud config set compute/zone {google cloud region you selected}
gcloud auth configure-docker
docker login
docker tag mydocker_client:latest {your docker user name}/dockerhub:{myfirstclientimagepush}
docker push {your docker user name}/dockerhub:{myfirstclientimagepush}
docker tag mydocker_server:latest {your docker user name}/dockerhub:{myfirstserverimagepush}
docker push {your docker user name}/dockerhub:{myfirstserverimagepush}
gcloud container clusters create mygraphql-cluster --num-nodes=2
kubectl create secret docker-registry {provide a credential name here} --docker-server=https://index.docker.io/v1/ --docker-username={your docker user name} --docker-password={your dockerhub password} --docker-email={email id used for dockerhub}
kubectl create -f my-graphql-server-pod.yaml
```

## some additional commands for viewing, deleting stuff
```bash
gsutil acl get gs://{your google cloud project url} #to get access control list
docker rmi {your docker user name}/dockerhub:{myfirstimagepush} #to delete an existing image
cat ~/.docker/config.json #to view config file from docker. This file has good details
kubectl get secret {credential name you gave} --output=yaml  #to view credentials imported
kubectl get secret {credential name you gave} --output="jsonpath={.data.\.dockerconfigjson}" | base64 --decode  #to decode the base 64 encoded output from previous command
kubectl delete service mygraphql-service --grace-period=30  #to delete a service
kubectl delete pod mygraphql-container --grace-period=30 #to delete a pod
kubectl get pods #to get details on a pod
kubectl get service {service name} #to get details on the service
kubectl describe pods #to get more indepth information on the pod
kubectl get service mygraphql-service #to view the external ip
curl {external ip} #to view response
```
## for deploying application in google app engine
1. Setup account in google app engine
2. Create a project and a bucket
3. Install google cloud SDK
4. Update the app.yaml file
5. Deploy the application 
6. Browse the deployed application using the URL which you can obtain from the terminal after the app is deployed

## commands for deploying the application in google app engine
```bash
gcloud app deploy
gcloud app browse
```

### some points to note while deploying to google app engine
1. Specify runtime as 'custom' and env as 'flex'
2. When runtime is specified as 'custom', google app engine will look for a dockerfile or docker-compose file to build and run docker
3. App engine is like a 'PaaS' layer while compute engine is a 'IaaS'
4. Also note that app engine expects the application to listen on port 8080. So change the nginx.conf to listen on 8080. For running on local the port should be 80 and not 8080
5. Also setup the firewall rules in the app engine to allow the following IPs
   1. 0.0.0.0/0
   2. 0.1.0.40
   3. 10.0.0.1
   4. 35.191.0.0/16
   5. 130.211.0.0/22
   6. 172.17.0.1
6. The readiness_check in app.yaml fails due to application timeout. Even increasing the timeout time (app_start_timeout_sec) did not work. Hence readiness_check has been removed. If you want to include readiness_check in app.yaml, here is the code
   ```docker
    readiness_check:
    path: "/readiness_check"
    check_interval_sec: 30
    timeout_sec: 4
    failure_threshold: 2
    success_threshold: 2
    app_start_timeout_sec: 900
    ```
7. Changing the server name to localhost in nginx.conf should also work as internally google app engine sees services deployed in the same project as localhost. But for clarity sake, the server name specifies the seperate backend service
