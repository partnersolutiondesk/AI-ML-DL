
## How to run the ChatBot application

### Pre-requisites
   * Npm & Node js should be installed on the machine

### Steps to follow
* Download ChatBot source code from "ChatBot - Node Js Source code" folder
* Go to google dialog flow console and create your own intent for the chatbot . You will can export the intent json file once you create an intent.
* Create a Google Service Account and Private Key and download the json and use it inside your Node js application. Go to app.js file and replace it with your json file & also edit the ProjectId.

  Refer below documents 

    https://cloud.google.com/iam/docs/keys-create-delete
  
    https://cloud.google.com/dialogflow/es/docs/intents-manage

    https://cloud.google.com/dialogflow/es/docs/intents-training-phrases


* Once downloaded go to "AARI-BankChatBot-LoanApplication" folder and open a terminal and run the command "npm install"
* Edit the "config.json" file inside the Nodejs server code to edit the Control room URL,user credentials and Bot id etc
* Once all the npm libraries installed, run the command "node app.js" 
* The ChatBot application will be running on localhost:80. In required , you can change the port in app.js file.

## How to get the Automation Co-Pilot process and related bots
* Download the exported A360 bot from "A360 Bot & Process" folder
* Import the zip file to your Control Room
* "RunProcess" is the bot which is getting called by the ChatBot. "RunProcess" is internally calling ""
* "RunProcess" bot will internally call the "LoanRequestProcess" Automation Co-pilot process.

  ![image](https://github.com/sikha-p/AI-ML-DL/assets/84059776/7adddca9-3ad3-4fd4-ac9c-2652380e340c)


* Edit the "config.json" file inside the Nodejs server code to edit the Control room URL,user credentials and Bot id etc
  
  ![image](https://github.com/sikha-p/AI-ML-DL/assets/84059776/e146caf4-ec76-42f4-b8fa-fbfb89fd292a)

* 





