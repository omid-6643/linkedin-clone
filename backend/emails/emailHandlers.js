import { mailtrapClient } from "../lib/mailtrap.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient({
      from: sender,
      to: recipient,
      subject: "Welcome to UnLinked",
      html: createWelcomeEmailTemplate(name, profileUrl),
      category: "welcome",
    });

    console.log("welcome email ", response);
  } catch (error) {
    console.log({ error });
  }
};
