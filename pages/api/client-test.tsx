import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "first@gmail.com",
      name: "firstMan",
    },
  });
  res.json({
    ok: true,
  });
}
