import { Fragment } from "react";
import MetaData from "./MetaData";

const TermsConditions = () => {
    return (
      <Fragment>
        <MetaData title={"Terms & Conditions"} />
        <div className="terms-conditions-container">
          <h1 className="terms-conditions-header">Terms and Conditions</h1>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">Acceptance of Terms</h2>
            <p className="terms-conditions-paragraph">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
          </section>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">Changes to Terms</h2>
            <p className="terms-conditions-paragraph">
              We reserve the right to modify these terms at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.
            </p>
          </section>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">User Responsibilities</h2>
            <p className="terms-conditions-paragraph">
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </section>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">Prohibited Activities</h2>
            <p className="terms-conditions-paragraph">
              You are prohibited from using the site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances, to infringe upon or violate our intellectual property rights or the intellectual property rights of others, to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.
            </p>
          </section>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">Limitation of Liability</h2>
            <p className="terms-conditions-paragraph">
              In no event shall <strong>Vaigai Cart</strong>, nor its directors, employees, partners, agents, suppliers, or affiliates, be accountable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our service.
            </p>
          </section>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">Governing Law</h2>
            <p className="terms-conditions-paragraph">
              These Terms shall be governed and construed in accordance with the laws of your state, country, without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section className="terms-conditions-section">
            <h2 className="terms-conditions-subheader">Contact Us</h2>
            <p className="terms-conditions-paragraph">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="terms-conditions-paragraph">
              Email: vaigaicart@gmail.com
            </p>
            <p className="terms-conditions-paragraph">
              Phone: 6385622704
            </p>
          </section>
        </div>
      </Fragment>
    );
  }
  
  export default TermsConditions;