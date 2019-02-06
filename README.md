# NativeScript Vue axio issue


to reproduce clone this repo, run npm install and then use tns or sidekick to deploy the app to your phone. 

open up the chrome dev tools and click login, you should get a valid response from beeceptor.

if you then set the device to run in flight mode and then login again,

you will see a pending network request that never returns and axios will log a sucess to the console window
