import "../Styling/App.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello Subscribe
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
      </header>
    </div>
  );
}

export default App;
