#!/usr/bin/env node
/**
 * Injecte meta SEO, canonical, Open Graph et JSON-LD dans les pages HTML.
 * Usage: node scripts/apply-seo.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  SITE,
  drivingSchoolSchema,
  faqSchemas,
  breadcrumbSchema,
} from "../seo/schemas.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const config = JSON.parse(
  fs.readFileSync(path.join(root, "seo", "pages-config.json"), "utf8")
);

const DEFAULT = {
  title: "Libre Permis — Auto-école Paris 10 | Permis B accéléré",
  description:
    "Libre Permis, auto-école agréée Paris 10e, Gare du Nord. Formation permis B accéléré, repassage examen, code. 91 rue de Maubeuge.",
};

function canonicalFromFile(file) {
  const base = file.replace(/\.html$/, "");
  if (base === "index") return "/";
  return `/${base}`;
}

function buildSeoBlock(page) {
  const canonicalPath = page.canonical || "/";
  const canonicalUrl =
    canonicalPath === "/" ? `${SITE}/` : `${SITE}${canonicalPath}`;
  const title = page.title || DEFAULT.title;
  const description = page.description || DEFAULT.description;
  const ogImage = `${SITE}/images/logo.svg`;

  const scripts = [];
  scripts.push({
    id: "schema-driving-school",
    data: drivingSchoolSchema,
  });
  if (page.faqKey && faqSchemas[page.faqKey]) {
    scripts.push({
      id: `schema-faq-${page.faqKey}`,
      data: faqSchemas[page.faqKey],
    });
  }
  if (page.breadcrumb?.length) {
    const items = page.breadcrumb.map((b) => ({
      name: b.name,
      url: b.path === "/" ? `${SITE}/` : `${SITE}${b.path}`,
    }));
    scripts.push({
      id: "schema-breadcrumb",
      data: breadcrumbSchema(items),
    });
  }

  const jsonLd = scripts
    .map(
      (s) =>
        `  <script type="application/ld+json" id="${s.id}">\n${JSON.stringify(s.data, null, 2)}\n  </script>`
    )
    .join("\n");

  const robots = page.noindex
    ? '  <meta name="robots" content="noindex, nofollow">\n'
    : "";

  return `  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Libre Permis">
  <meta property="og:title" content="${escapeAttr(title)}">
  <meta property="og:description" content="${escapeAttr(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:locale" content="fr_FR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(title)}">
  <meta name="twitter:description" content="${escapeAttr(description)}">
  <meta name="twitter:image" content="${ogImage}">
${robots}${jsonLd}
`;
}

function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function stripOldSeo(head) {
  let h = head;
  h = h.replace(/\s*<link rel="canonical"[^>]*>/gi, "");
  h = h.replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, "");
  h = h.replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, "");
  h = h.replace(/\s*<meta name="robots"[^>]*>/gi, "");
  h = h.replace(
    /\s*<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
    ""
  );
  return h;
}

function processFile(filePath) {
  const file = path.basename(filePath);
  const page = config[file] || {
    canonical: canonicalFromFile(file),
    ...DEFAULT,
  };
  if (!page.title) page.title = DEFAULT.title;
  if (!page.description) page.description = DEFAULT.description;

  let html = fs.readFileSync(filePath, "utf8");
  if (!html.includes("<head>")) return false;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${page.title}</title>`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*">/i,
    `<meta name="description" content="${escapeAttr(page.description)}">`
  );

  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return false;

  let headInner = stripOldSeo(headMatch[1]);
  const seoBlock = buildSeoBlock(page);
  const insertBefore =
    headInner.includes("preconnect") && headInner.includes("fonts.googleapis")
      ? headInner.indexOf("<link rel=\"preconnect\"")
      : headInner.indexOf("<link rel=\"stylesheet\"");

  if (insertBefore > -1) {
    headInner =
      headInner.slice(0, insertBefore) + seoBlock + headInner.slice(insertBefore);
  } else {
    headInner = headInner.trimEnd() + "\n" + seoBlock;
  }

  html = html.replace(headMatch[0], `<head>${headInner}</head>`);
  fs.writeFileSync(filePath, html, "utf8");
  return true;
}

const htmlFiles = fs
  .readdirSync(root)
  .filter((f) => f.endsWith(".html"))
  .map((f) => path.join(root, f));

let count = 0;
for (const f of htmlFiles) {
  if (processFile(f)) {
    count++;
    console.log("OK", path.basename(f));
  }
}
console.log(`\n${count} fichiers mis à jour.`);
