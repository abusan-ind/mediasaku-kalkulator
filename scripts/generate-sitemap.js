const fs = require("fs");
const pages = [
  "",
  "kalkulator",
  "tentang",
  "kontak",
  "privacy-policy",
  "terms"
];

const baseUrl = "https://mediasaku.web.id";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
    )
    .join("\n  ")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ sitemap.xml berhasil dibuat");
