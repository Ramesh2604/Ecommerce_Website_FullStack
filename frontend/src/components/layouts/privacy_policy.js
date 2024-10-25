import { Fragment } from "react";
import MetaData from "./MetaData";

const PrivacyPolicy = () => {
    return (
      <Fragment>
        <MetaData title={"Privacy Policy"} />
        <div className="privacy-policy-container">
          <h1 className="privacy-policy-header">Privacy Policy</h1>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Introduction</h2>
            <p className="privacy-policy-paragraph">
              Welcome to <strong>Vaigai Cart</strong>. We value your privacy and are committed to protecting your personal data. This privacy policy outlines how we handle your personal information when you visit our website.
            </p>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Information We Collect</h2>
            <p className="privacy-policy-paragraph">
              We may collect the following types of information:
            </p>
            <ul className="privacy-policy-list">
              <li className="privacy-policy-list-item">Personal Identification Information: Name, email address, phone number, etc.</li>
              <li className="privacy-policy-list-item">Payment Information: Credit card details and billing address.</li>
              <li className="privacy-policy-list-item">Technical Data: IP address, browser type, operating system, etc.</li>
            </ul>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">How We Use Your Information</h2>
            <p className="privacy-policy-paragraph">
              We use your information to:
            </p>
            <ul className="privacy-policy-list">
              <li className="privacy-policy-list-item">Provide and maintain our services.</li>
              <li className="privacy-policy-list-item">Process transactions and send order confirmations.</li>
              <li className="privacy-policy-list-item">Improve our website and customer service.</li>
              <li className="privacy-policy-list-item">Send periodic emails regarding your order or other products and services.</li>
            </ul>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Information Sharing</h2>
            <p className="privacy-policy-paragraph">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except:
            </p>
            <ul className="privacy-policy-list">
              <li className="privacy-policy-list-item">When we have your consent.</li>
              <li className="privacy-policy-list-item">To trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</li>
              <li className="privacy-policy-list-item">When we are required to comply with the law.</li>
            </ul>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Security</h2>
            <p className="privacy-policy-paragraph">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Your Rights</h2>
            <p className="privacy-policy-paragraph">
              You have the right to:
            </p>
            <ul className="privacy-policy-list">
              <li className="privacy-policy-list-item">Access the personal information we hold about you.</li>
              <li className="privacy-policy-list-item">Request the correction of inaccurate information.</li>
              <li className="privacy-policy-list-item">Request the deletion of your personal data.</li>
              <li className="privacy-policy-list-item">Object to the processing of your personal data.</li>
            </ul>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Changes to This Privacy Policy</h2>
            <p className="privacy-policy-paragraph">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
            </p>
          </section>
          
          <section className="privacy-policy-section">
            <h2 className="privacy-policy-subheader">Contact Us</h2>
            <p className="privacy-policy-paragraph">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="privacy-policy-paragraph">
              Email: vaigaicart@gmail.com
            </p>
            <p className="privacy-policy-paragraph">
              Phone: 6385622704
            </p>
          </section>
        </div>
      </Fragment>
    );
  }
  
  export default PrivacyPolicy;