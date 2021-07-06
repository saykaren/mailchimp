import "../Styling/App.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Subscribe for 10% Discount Coupon!
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        <a
          // href={process.env.REACT_CONTACT_MAILCHIMP_URL}
          href={`https://us6.list-manage.com/contact-form?u=546943de41f1c48dde40f2b14&form_id=3f34220521c8db9e6f32a19fcf1f6a8f`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
    </div>
  );
};

export default App;
