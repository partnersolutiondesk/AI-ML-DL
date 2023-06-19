# Download ChatBot source code from "ChatBot - Node Js Source code" folder
#### 1. npm , Node js should be installed on the machine
#### 2. Go to google dialog flow console and create your own intent for the chatbot . You will can export the intent json file once you create an intent.
Create a Google Service Account and Private Key and download the json and use it inside your Node js application. Go to app.js file and replace it with your json file & also edit the ProjectId.

Refer below documents 

https://cloud.google.com/iam/docs/keys-create-delete
https://cloud.google.com/dialogflow/es/docs/intents-manage
https://cloud.google.com/dialogflow/es/docs/intents-training-phrases


#### 3. Once downloaded go to "AARI-BankChatBot-LoanApplication" folder and open a terminal and run the command "npm install"
#### 4. Edit the "config.json" file inside the Nodejs server code to edit the Control room URL,user credentials and Bot id etc
#### 5. Once all the npm libraries installed, run the command "node app.js" 
#### 6. The ChatBot application will be running on localhost:3000

# Download ChatBot source code from "ChatBot - Node Js Source code" folder
#### Download the exported A360 bot from "A360 Bot & Process" folder
#### Import it your control room
#### "RunProcess" is the bot which is getting called by the ChatBot. "RunProcess" is internally calling ""
#### "RunProcess" bot will internally call the "LoanRequestProcess" Automation Co-pilot process.
#### Edit the "config.json" file inside the Nodejs server code to edit the Control room URL,user credentials and Bot id etc





