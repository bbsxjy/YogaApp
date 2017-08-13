# YogaApp
This is an app that used for our yoga studio
## Node, babel, webpack, react setting commands:
Get NodeJS first to be able to use npm command, https://nodejs.org/en/  
### 0.Init package.json  
	-> npm init (if you need one)  
### 1.Babel:  
	-> npm install --save-dev babel-loader babel-core  
	-> npm install --save-dev babel-cli babel-preset-env  
	-> npm install --save-dev babel-preset-react  
	-> npm install --save-dev babel-preset-es2015  
### 2. React:  
	-> npm install --save react react-dom
### 3. TypeScript:  
	-> npm install -g typescript  
### 4. WebPack:  
	-> npm install webpack --save  
	-> npm install webpack-dev-server --save  
## Environment Setting issue
### * Can't find certain components from react imports:
	-> npm install --save @types/react @types/react-dom @types/react-router @types/react-bootstrap @types/react-bootstrap-table 
