// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res
    // .setHeader("X-Frame-Options", "DENY")
    // .setHeader("X-Frame-Options", "SAMEORIGIN")
    .status(200)
    .send(
      `${req.body.widgetId}: ${
        req.body.token === "abcdef" ? 123 : "Invalid token"
      }`
    );
}
