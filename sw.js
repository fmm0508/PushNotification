// self.addEventListener("push", e => {
//   var options = {
//     body: "A patient is ready for transport!",
//     icon: "image/example.png",
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: "2"
//     },
//     actions: [
//       { action: "explore", title: "Accept", icon: "images/checkmark.png" },
//       { action: "close", title: "Close", icon: "images/checkmark.png" },
//     ]
//   };
//   e.waitUntil(
//     self.registration.showNotification("Farahani", options )
//   );
// });

self.addEventListener("push", function(event) {
  console.log("Received a push message", event);

  var title = "Patient is ready.";
  var body = "You have a patient to transport.";
  var icon = "/images/icon-192x192.png";
  var tag = "simple-push-demo-notification-tag";

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});