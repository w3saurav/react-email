import {
  Body,
  Container,
  Img,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const SubscritionMail = () => (
  <Html>
    <Head />

    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://ik.imagekit.io/uqrdgqmey/React%20Email%20/ARB_LOGO_BLACK.png?updatedAt=1690975858069`}
          alt="Plaid"
          width="210"
          height="30"
          style={logo}
        />
        <Section style={box}>
          <Text style={tertiary}>Subscription Confirmation</Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            I hope this email finds you well. We are thrilled to inform you that
            your subscription to AppReviewBot has been successfully processed!
            Thank you for choosing our service to streamline and enhance your
            app review management process.!
          </Text>
          <Text style={paragraph}>
            Exciting news! Your subscription to AppReviewBot is now active! 🎉.
            <br />
            With AppReviewBot, managing app reviews becomes effortless. Gain
            valuable insights, improve user experience, and make data-driven
            decisions.
            <Hr style={hr} />
          </Text>

          <Text style={subscription}>
            Subscription Details: <br />
            <Text style={paragraph}>
              Plan: Free <br />
              Start Date: Today <br />
              End Date: Tomorrow
            </Text>
          </Text>
          <Hr style={hr} />

          <Text style={paragraph}>
            We'll be here to help you with any step along the way. You can find
            answers to most questions and get in touch with us on our{" "}
            <Link style={anchor} href="https://appreviewbot.com/contact/">
              support site
            </Link>
            .
          </Text>
          <Text style={paragraph}>— Thank you for choosing AppReviewBot!</Text>
          <Hr style={hr} />
          <Text style={footer}>Team AppReviewBot</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SubscritionMail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "15px",
  fontWeight: 900,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const box = {
  padding: "10px 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const subscription = {
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: "24px",
  color: "#525f7f",
  textAlign: "left" as const,
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
  fontWeight: "bold",
};
const logo = {
  margin: "0 auto",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
