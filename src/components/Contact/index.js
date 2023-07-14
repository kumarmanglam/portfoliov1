import React from "react";
import Text from "../core/Text";
import Icon from "../core/icon";

function Contact() {
  return (
    <section className="contactwrap" id="contactMe">
      <div className="contact">
        <div className="tagline">
          <Icon name="Cut" />
          <p className="text-xxl cut-tag">&nbsp;Less Talk.&nbsp;</p>
          <p className="text-xxl">More Coding</p>
        </div>
        <div>
          <Text label="That's It! Now It's Your Turn to Say Hi" />
        </div>
        <div className="email">
          <a href="mailto:kumarmanglamemail@gmail.com" className="email-link">
            kumarmanglamemail@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
