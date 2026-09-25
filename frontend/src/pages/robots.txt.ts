import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const isStaging = import.meta.env.PUBLIC_SITE_ENV === 'staging' || import.meta.env.PUBLIC_NOINDEX === 'true';

  const body = isStaging
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: https://yp2sk.or.id/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
