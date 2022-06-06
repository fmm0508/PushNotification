var push = require("web-push");

let vapidKeys = {
  publicKey: 'BCFfkmzCBqVMYB178gdMLMwccmJYqCacTci-3YyHM8EoJGDZDuv1sbO3uiU82vN9qh1yVfxivCScDWGpC4k7gjE',
  privateKey: 'BxSDKLkJDJ1GOCBIDyji4B-0iCrSdvGIoV55WZv2RP8'
}

push.setVapidDetails('mailto:faraghoney@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

// THIS PART WILL BE SAVED IN THE BACKEND.
let sub = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/fTP0ZVP_e-w:APA91bE8n1myPKCikax5gVVUo1z82KFJptDjsB6brBjqSJ1lIpqL4ptH4b5a25Ee0pu1J3X3wTBtFNNYGRf2sOLYD3Ic0WLsJl8BhBIoIse5zJudf55uNnlsrBOmDkhBuevl-tNOYK8k",
  "expirationTime":null,
  "keys":{
    "p256dh":"BFnLtxuvl4R5CLqYDG1ofLC5wqY_bYSkOHqtK9sJdMUvykwHvWEFu2jSejyM4SXvFfWWuqB6sapF2JJzGc1Xaj8",
    "auth":"q1b_Ti0iqIZBLvciHZQueQ"
  }
};

push.sendNotification(sub, 'You have a patient to pick up');