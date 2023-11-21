## Building And Dockernize Node.je Express Web App From Scretch

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/742f2388-54fe-4ecb-b511-79eb90bf2f8a)

### *Introduction*

The process of converting an application to run within a Docker container is 'Dockernize'. Docker container can be run in any Linux, Ubuntu and Mac servers; however,Docker makes building, deploying, and managing containers simpler and safer. Docker is a toolkit that allows you to use a single API to build, deploy, operate, update, and stop containers using simple commands and work-saving automation.
This post shares tips to build images, run tests, and deploy web applications with Docker containers 
Let’s get started. 

 ### *Step 1 - Create a simple nodejs app*

 First I created a directory usinng visual Studio Code 
 
 mkdir node.js-doc-web-App
 I Cd into the directory and generated package.json file by Running: 'npm init -y', this is a convenient way to quickly generate a basic package.json file with default values. The -y flag stands for "yes" and automatically accepts the default values for the prompts, creating a package.json file without requiring manual input.

After running npm init -y, you should have a basic package.json file in your project directory. It might look something like this:

{
  "name": "your-project-name",
  
  "version": "1.0.0",
  
  "description": "",
 
  "main": "index.js",
 
  "scripts": {
  
    "test": "echo \"Error: no test specified\" && exit 1"
 
  },
 
  "keywords": [],
 
  "author": "",
 
 "license": "ISC"
}

the template was adjusted to serve my purpose and needs

### *Step 2 Install Dependencies*

Both express and dotenv are dependencies for  package.json file
express: A popular web application framework for Node.js.
dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.
npm install express dotenv

npm install nodemon --seve-dev 

with the dependencies in place the script for the web app can now be written 


### * Step 3 Creating The Web-App in server.js file*

The script for the web-app in server.js file and the picture below shows how it was runed and tested and showed the port the app was listed to

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/0927b522-14c5-45f9-9f2c-e415d176242b)

Good. We have a nodejs app. To test it you can run: node server.js

The app should be availbale on http://localhost:3000

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/f7de4960-0258-47bd-a94d-481ffa9af1ed)

### *Step 4 Creating A Docker Container

The script for the container is in Dockerfile and the picture below shows how it was build, runed and tested and showed the port the app was listed to

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/d0a7052d-4290-42eb-85e6-ed7db7e080a8)

the code docker ps -a was run to see are the new image build and run is doing. From the The  picture below, is the first with the image name bubbles/web-app:v2, created about a munite ago listed to 0.0.0.0:3000->/tcp

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/e26b6732-73a2-4227-8a12-83b609b107d2)

the below picture showing the desktop version of the docker image runing 

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/be3c829b-3ca1-44af-9e34-7bca649a4c9b)

putting the port listed in a browser i got same result

![image](https://github.com/akpatiudo/Node.js-doc-web-app/assets/118566096/b1c3178f-f0fc-4f91-ba6b-725e7abe60a0)




