importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCMTGrMFU27X8jgV3J4qyxuVwIPPb9_fo0",
  authDomain: "push-notification-68d9b.firebaseapp.com",
  projectId: "push-notification-68d9b",
  storageBucket: "push-notification-68d9b.firebasestorage.app",
  messagingSenderId: "767412132973",
  appId: "1:767412132973:web:26bfb530dffdb25072b364",
  measurementId: "G-Z4XS016NEC",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
