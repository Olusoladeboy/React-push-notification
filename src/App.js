import logo from './logo.svg';
import './App.css';
import { messaging } from "./init-fcm";


function App() {
  messaging.requestPermission()
    .then(async function () {
      const token = await messaging.getToken({vapidKey: "BIMTJVNBmIXx3LtMLJDldePrDaySVWDXiSKq14cEJbyEK0t-KxYy3rtUhwP7dj9KE7WKklZu_rNAM9fm4KRl61c"});
      console.log(token)
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    });
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
