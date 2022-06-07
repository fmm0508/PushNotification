self.addEventListener("push", e => {
  var options = {
    body: "A patient is ready for transport!",
    icon: "image/example.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2"
    },
    actions: [
      { action: "explore", title: "Accept", icon: "images/checkmark.png" },
      { action: "close", title: "Close", icon: "images/checkmark.png" },
    ]
  };
  e.waitUntil(
    self.registration.showNotification("Farahani", options )
  );
});