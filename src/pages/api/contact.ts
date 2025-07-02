import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return res.status(500).json({
        error:
          "Contact form is not properly configured. Please contact the administrator.",
      });
    }

    // Validate request body
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required",
      });
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "Google Script response error:",
        response.status,
        response.statusText
      );
      return res.status(500).json({
        error: "Failed to submit form. Please try again later.",
      });
    }

    const result = await response.json();

    if (result.result === "success") {
      return res.status(200).json({
        message: "Thank you for contacting me! I will get back to you soon.",
      });
    } else {
      console.error("Google Script returned error:", result);
      return res
        .status(500)
        .json({ error: "Something went wrong. Please try again later." });
    }
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({
      error: "Internal Server Error. Please try again later.",
    });
  }
}
