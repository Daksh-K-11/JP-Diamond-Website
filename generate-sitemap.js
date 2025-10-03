// generate-sitemap.js
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";

const BASE_URL = "https://www.jpdiamondlab.in";

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/certification", changefreq: "monthly", priority: 0.7 },
  { url: "/pricing", changefreq: "monthly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/blog", changefreq: "weekly", priority: 0.6 }
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const pipeline = sitemap.pipe(createGzip());

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  const buffer = await streamToPromise(pipeline);
  writeFileSync("dist/sitemap.xml.gz", buffer); // output to dist folder
  console.log("Sitemap generated at dist/sitemap.xml.gz");
}

generateSitemap();
