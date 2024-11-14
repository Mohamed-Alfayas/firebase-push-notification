import "./App.css";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import { onMessage } from "firebase/messaging";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BKZuUV4vUhPUWIYL_DaNqdBcuj_6xteo_OrF9fjqvxijtHYbfIcckF7e_VZv5c_m5xV0Y-RxoMwP1zw6_jzSLxo",
      });
      console.log("Token", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
    onMessage(messaging, (payload) => {
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
      };
      if (!document.hidden) {
        new Notification(notificationTitle, notificationOptions);
      }
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
