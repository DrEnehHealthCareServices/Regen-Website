import { build } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { routeMeta } from './src/routeMeta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runPrerender() {
  console.log('🚀 Starting pre-rendering build process...');

  // 1. Build client-side assets
  console.log('📦 Building client-side bundle...');
  await build({
    configFile: path.resolve(__dirname, 'vite.config.js'),
    build: {
      outDir: 'dist'
    }
  });

  // 2. Build server-side bundle for SSR
  console.log('⚙️ Building server-side bundle for SSR...');
  await build({
    configFile: path.resolve(__dirname, 'vite.config.js'),
    build: {
      ssr: true,
      outDir: 'dist-server',
      rollupOptions: {
        input: path.resolve(__dirname, 'src/entry-server.jsx')
      }
    }
  });

  // 3. Load the server entry point dynamically
  const entryServerPath = path.resolve(__dirname, 'dist-server/entry-server.js');
  console.log(`🔌 Loading server entry point from ${entryServerPath}...`);
  const { render } = await import(pathToFileURL(entryServerPath).href);

  // 4. Read index.html template from dist
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  let templateHtml = fs.readFileSync(templatePath, 'utf8');

  // 5. Pre-render each route
  const routes = Object.keys(routeMeta);
  console.log(`🌐 Found ${routes.length} routes to pre-render. Processing...`);

  for (const route of routes) {
    console.log(`📄 Pre-rendering route: ${route}`);
    const meta = routeMeta[route];
    const renderedHtml = render(route);

    // Build SEO head block
    const headBlock = `
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="https://regencareafrica.com/assets/og-share.jpg" />
    <meta property="og:url" content="${meta.canonical}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="https://regencareafrica.com/assets/og-share.jpg" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
${JSON.stringify(meta.schema, null, 2)}
    </script>
  </head>`;

    // Inject SEO metadata and pre-rendered body content
    let html = templateHtml
      .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
      .replace('</head>', headBlock)
      .replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`);

    // Determine output file path
    let outputDir = path.resolve(__dirname, 'dist');
    let outputFileName = 'index.html';

    if (route !== '/') {
      // Create subdirectories for other routes (e.g. dist/about/index.html)
      outputDir = path.join(outputDir, route);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
    }

    const outputPath = path.join(outputDir, outputFileName);
    fs.writeFileSync(outputPath, html, 'utf8');
  }

  // 6. Generate sitemap.xml
  console.log('🗺️ Generating sitemap.xml...');
  const sitemapUrls = routes.map(route => {
    const canonical = routeMeta[route].canonical;
    return `  <url>
    <loc>${canonical}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

  fs.writeFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), sitemapXml, 'utf8');

  // 7. Generate robots.txt
  console.log('🤖 Generating robots.txt...');
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://regencareafrica.com/sitemap.xml
`;
  fs.writeFileSync(path.resolve(__dirname, 'dist/robots.txt'), robotsTxt, 'utf8');

  // 8. Copy index.html to 404.html (GitHub Pages fallback for SPA routers)
  console.log('🔄 Copying index.html to 404.html for GitHub Pages fallback...');
  fs.copyFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    path.resolve(__dirname, 'dist/404.html')
  );

  // 9. Clean up SSR bundle directory
  console.log('🧹 Cleaning up temporary SSR server bundle...');
  fs.rmSync(path.resolve(__dirname, 'dist-server'), { recursive: true, force: true });

  console.log('✨ Pre-rendering build completed successfully!');
}

runPrerender().catch(err => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
