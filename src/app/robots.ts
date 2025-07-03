import { ENVIRONMENT_VARIABLES } from "@constants/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/", "/api/"],
    },
    sitemap: `${ENVIRONMENT_VARIABLES.PUBLIC_DOMAIN}/sitemap.xml`,
  };
}
