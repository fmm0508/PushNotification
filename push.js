var push = require("web-push");

let vapidKeys = {
  publicKey: 'BCFfkmzCBqVMYB178gdMLMwccmJYqCacTci-3YyHM8EoJGDZDuv1sbO3uiU82vN9qh1yVfxivCScDWGpC4k7gjE',
  privateKey: 'BxSDKLkJDJ1GOCBIDyji4B-0iCrSdvGIoV55WZv2RP8'
}

push.setVapidDetails('mailto:faraghoney@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

// THIS PART WILL BE SAVED IN THE BACKEND.
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dR5kdE7sI4U:APA91bEwX4vF_8HXv46KseZ0IgQKAePYPBu2x-ymn3ndhNwm3G3Q7URZHlBVwFPW0XW6xUM0TGqXnoRMzfRqqGzdvdGy1XmaT79oSmLm8t3jmzEWCfsWVvt9zNaQWpQEhMuYlqjCeQan","expirationTime":null,"keys":{"p256dh":"BO9H3rsbRrJIGSVQn6MtqWL63GY9bLmAcINxaDOcsA9KXUMdhc0ufC2lNEQKyuv0-rkWc0qMsgRD_SAgKk6YzsM","auth":"XYrcZeH_fi5yATq8Tcs0vA"}};

push.sendNotification(sub, 'You have a patient to pick up');