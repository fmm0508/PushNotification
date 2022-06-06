var push = require("web-push");

let vapidKeys = {
  publicKey: 'BCFfkmzCBqVMYB178gdMLMwccmJYqCacTci-3YyHM8EoJGDZDuv1sbO3uiU82vN9qh1yVfxivCScDWGpC4k7gjE',
  privateKey: 'BxSDKLkJDJ1GOCBIDyji4B-0iCrSdvGIoV55WZv2RP8'
}

push.setVapidDetails('mailto:faraghoney@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'You have a patient to pick up');