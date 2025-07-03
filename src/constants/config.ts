const ENVIRONMENT_VARIABLES = {
  PUBLIC_DOMAIN:
    process.env.NEXT_PUBLIC_DOMAIN ||
    "https://nguyen-quang-huy-portfolio.vercel.app",
  EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  GITHUB: process.env.NEXT_PUBLIC_GITHUB,
  GITLAB: process.env.NEXT_PUBLIC_GITLAB,
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN,
  GOOGLE_SCRIPT_URL: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
};

export { ENVIRONMENT_VARIABLES };
