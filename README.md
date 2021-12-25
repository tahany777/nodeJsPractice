# Node JS

## how Node js differs from Vanilla JS

1. Node runs on a server not in a browser(backend not frontend)
2. The console is the terminal window
3. global object instead of window object
4. Has common core modules.
5. common js modules instead of ES6 modules.
6. missing some JS API's like Fetch.

## File System

* readFile
* writeFile
* appendFile
* unlink
* rename

### Node Package Manager

> provide thousands of packages for us to use in our applicaions.

### **difference between a node common core module and a NPM package:**

* NPM packages are node modules that created by third parties (other developers)

example:

* axios
* nodemon => monitor our files (automatically start our server)
  * add nodemon globally``npm i nodemon -g``
  * create package.json file``npm init -y``
  * add nodemon as a dev package(devDependencies)
    ``npm i nodemon --save -dev or npm i nodemon -D``
  * nodemon run index.js as default
    **inside scripts put**

    ```javascript
        "start": "node index",
        "dev": "nodemon index"
        //or nodemon without index becuse its default
    ```

* uuid => universally unique identifier
* remove a dev dependencies ``npm rm nodemon -D``
