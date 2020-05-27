Prototype for a real-time crop recommendation and yield prediction algorithm in Python using Machine Learning and Data Analytics.
This work presents a system, in form of a website.
The business logic in Python uses Machine Learning techniques in order to predict the most profitable crop in the forecasted weather and soil conditions at a specified location.
The proposed system will integrate the data obtained from soil, crop repository, weather department and by applying machine learning algorithm: Multiple Linear Regression, a prediction of most suitable crops according to current environmental conditions is made.
This provides a farmer with variety of options of crops that can be cultivated.
The business logic is mlr_algo.py directory. The server is programmed using node.js.
And for, yield prediction for each crop under each given place, linear regression is used on the basis of yield values of previous years.
Python package Stack: scikit-learn, pandas. Web development technologies: HTML, CSS, JavaScript,ReactJS.

cropDB.csv(header) - Crop,Duration,Min Temp,Max Temp,PH min,PH max,Rainfall min,Rainfall max,N,P,K
temprainfall.csv(header) - Place,State,Month,Max temp,Min temp,Rainfall
nutrientsarea.csv(header) - State,N,P,K,PH

**Intructions to run project**

Step 1 : Open project folder in visual studio code.
Step 2 : On a new terminal, go to your project directory.
Step 3 : Then, run --> cd server
Step 4 : run --> npm install
Step 5 : run --> npm run startJson // json server starts
Step 6 : Again on other new terminal, go to your project directory and run --> cd server
Step 7 : run --> npm start //server starts
Step 8 : Again visit new terminal( don't close above two terminals) & go to your project directory.
Step 9 : run --> cd client
Step 10: run --> npm install
Step 11: run --> npm start //client starts
Step 12: Choose "yes" if it asks to run client on other port as port 3000 is already occupied by Json Server
