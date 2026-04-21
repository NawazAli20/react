# react with Parcel
react fundamentals: This repo will show react fundamentals include react components, props, event handling, states, router etc.  

# Environment installation
1. Open a console and enter the following command to create a new project folder:

mkdir react-project

2. Change to the project's folder and initialize the project:

cd react-project
npm init -y

3. Install Parcel, a build tool that bundles a web application's assets into various files:

npm install --save-dev parcel

4. Install React and ReactDOM:

npm install react react-dom

5. In the project's package.json, remove the "main" line and add a "start" script:

...
  "main": "index.js",   <-- REMOVE THIS LINE
...

  "scripts": {
    "start": "parcel src/index.html --open"  <-- Add THIS LINE
  },
...

6. Create a src project folder, and add the index.html, index.js, and App.js in the src folder.

7. Start the project. A new browser tab should automatically load index.html:

npm start
