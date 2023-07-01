/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from "next";
import { ClientEmail } from "~/components/email-templates";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: "KristensCreations <kristen@kristenscreationsllc.com>",
      to: ["calebcampbellcrm@gmail.com"],
      subject: "Hello world",
      react: ClientEmail({ firstName: "Caleb" }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
