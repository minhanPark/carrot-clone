import twilio from "twilio";
import mail from "@sendgrid/mail";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

const twilioClient = twilio(process.env.TWILLIO_SID, process.env.TWILLIO_TOKEN);

mail.setApiKey(process.env.SENDGRID_EMAIL!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILLOP_MSSID,
    //   to: process.env.PHONE_NUMBER!,
    //   body: `You! Token! ${payload}`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "alsgks1218@gmail.com",
    //   to: "alsgks1218@naver.com",
    //   subject: "Carrot Marcket Verification Email",
    //   html: `<p>Your Token <strong>${payload}</strong></p>`,
    // });
    // console.log(email);
  }
  res.json({ ok: true });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
