import React from "react";
import Text from "../core/Text";
import Icon from "../core/icon";

function Contact() {
  return (
    <section className="contact" id="contactMe">
      <div className="tagline">
        <Icon name="Cut" />
        <p className="text-xxl cut-tag">&nbsp;Less Talk.&nbsp;</p>
        <p className="text-xxl">More Coding</p>
      </div>
      <div>
        <Text label="That's It! Now It's Your Turn to Say Hi" />
      </div>
      <div className="email">
        <Text label="kumarmanglamemail@gmail.com" />
      </div>
    </section>
  );
}

export default Contact;
