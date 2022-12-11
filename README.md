# Coyotiv - School of Software Engineering
  ## Express + MongoDB + Docker + Jest + Vue starter Template  
&nbsp;

---

&nbsp; 
 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

&nbsp;  

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/coyotiv/sose-express-mongo-docker-jest-vue)
&nbsp;  

Now you can directly work in your browser!  
&nbsp;

## Getting started
&nbsp;
### NODE - EXPRESS - MONGODB - DOCKER - JEST - VUE
&nbsp;

Install dependencies in backend folder

  ```sh
  cd backend
  ```  

  ```sh
  npm install
  ```  
  &nbsp;

Install dependencies in frontend folder

  ```sh
  cd frontend
  ```  

  ```sh
  npm install
  ```  
  &nbsp;

Start development server:

- Backend

  - with *Node.js*:
  
    ```sh
    cd backend
    ``` 

    ```sh
    npm start
    ```

  - with *nodemon*:
  
    ```sh
    cd backend
    ``` 

    ```sh
    npm run dev
    ```  
  
  - with *Docker*:

    ```sh
    docker-compose up --build
    ```  

- Frontend
  
  - Compiles and hot-reloads for development
  
    ```sh
    cd frontend
    ```  

    ```
    npm run serve
    ```

  - Compiles and minifies for production 

    
    ```sh
    cd frontend
    ```   

    ```
    npm run build
    ```

  - Lints and fixes files


    ```sh
    cd frontend
    ```    

    ```
    npm run lint
    ```  

Run the backend tests with Jest:

  - without *coverage*:
  
    ```sh
    cd backend
    ```  

    ```sh
    npm test
    ```

  - with *coverage*:

    ```sh
    cd backend
    ```  

    ```sh
    npm test-coverage
    ```  
    
  <p>&nbsp;</p>  

### Working with **env variables** and **.env** files
&nbsp;  
> Note: 
  > - We have automated for you the following step to make the copy from the **.env.example**:  
    > ```sh
    > cp .env.example .env
    > ```
  > - Please before starting the server update the **.env** file values accordingly if necessary  
  &nbsp;  
  <p>&nbsp;</p>

To add new *env variables*:   
  - Add them directly in the **.env** file inside of each directory
  - Add a copy of this *env variables* with an example value (not the real one) in the **.env.example** file
&nbsp;  

To modify a *env variables*:   
  - Modify them directly in the **.env** file
 <p>&nbsp;</p>  

### PLANTUML
  &nbsp;
  > **Note:**  
    > - There is a **class.puml** example file located in the **_architecture_** folder.  
  &nbsp;
  <p>&nbsp;</p>

  To start working **_*.puml_** files:  
  
  - You can continue by editing the **class.puml** file   
  - Add additional **_*.puml_** files on that folder too.  
  &nbsp;  

  If you what to visualize a preview of the **class.puml** file or another **_*.puml_** file on the project, please select the file and on your keyboard press the following keys:
  <p>&nbsp;</p>  

  - _MacOS_: **Option + D**  
  
  - _Linux/Windows_: **Alt + D**  
  <p>&nbsp;</p>
  The above commands will automatically open a window that will show you live any updates that you make on the file.
  <p>&nbsp;</p>  

  ** Note: 
  - If you what to visualize a preview of the **_*.puml_** file locally without Gitpod, to avoid a render error, please go to the **_settings.json_** file under the **_.vscode_** folder and **comment out** the following:  
   
  ```
  "plantuml.server": "http://localhost:8080",
"plantuml.render": "PlantUMLServer",
  ```   

  &nbsp;
  
---  

 &nbsp;  
_Now that we are ready, let's have some coding fun!_

---

&nbsp;
## MIT License

Copyright (c) 2022 Coyotiv

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
