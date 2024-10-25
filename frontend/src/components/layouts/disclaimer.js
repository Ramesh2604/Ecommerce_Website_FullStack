import React, { Fragment } from "react";
import MetaData from "./MetaData";

const Disclaimer = () => {
  return (
    <Fragment>
      <MetaData title="Disclaimer" />
      <div className="disclaimer-container">
        <header>
          <h1 className="disclaimer-header">Disclaimer</h1>
        </header>

        <section className="disclaimer-section">
          <h2 className="disclaimer-subheader">General Disclaimer</h2>
          <p className="disclaimer-paragraph">
            The information provided by <strong>Vaigai Cart</strong> on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
        </section>

        <section className="disclaimer-section">
          <h2 className="disclaimer-subheader">External Links Disclaimer</h2>
          <p className="disclaimer-paragraph">
            The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising.
          </p>
        </section>

        <section className="disclaimer-section">
          <h2 className="disclaimer-subheader">Changes to the Disclaimer</h2>
          <p className="disclaimer-paragraph">
            We may update our Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page. You are advised to review this Disclaimer periodically for any changes. Changes to this Disclaimer are effective when they are posted on this page.
          </p>
        </section>

        <section className="disclaimer-section">
          <h2 className="disclaimer-subheader">Contact Us</h2>
          <p className="disclaimer-paragraph">
            If you have any questions about this Disclaimer, you can contact us:
          </p>
          <p className="disclaimer-paragraph">
            Email: <a href="mailto:vaigaicart@gmail.com">vaigaicart@gmail.com</a>
          </p>
          <p className="disclaimer-paragraph">
            Phone: <a href="tel:+916385622704">6385622704</a>
          </p>
        </section>
      </div>
    </Fragment>
  );
};

export default Disclaimer;
