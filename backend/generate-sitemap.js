import path from 'path';
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Your static routes
import { staticRoutes } from './routesForSitemap.js';

const frontendPublicDir = path.resolve('../frontend/public');

console.log('Frontend public directory:', frontendPublicDir);

// Check if the frontend public directory exists
if (!fs.existsSync(frontendPublicDir)) {
  console.log('Frontend public directory does not exist. Please ensure it is created.');
  // Exit early by throwing an error instead of using `return`
  throw new Error('Frontend public directory does not exist.');
}

// Function to generate sitemap
async function generateSitemap() {
  console.log("Generating sitemap...");

  // Create a sitemap stream
  const sitemap = new SitemapStream({ hostname: 'https://www.traveloways.com/' });

  // Add static routes to the sitemap stream
  staticRoutes.forEach(route => {
    sitemap.write({ 
      url: route.path,  // Use the 'path' directly as the URL
      changefreq: route.changefreq, 
      priority: route.priority 
    });
  });

  // End the sitemap stream and generate the XML
  sitemap.end();

  // Write the sitemap to a file
  const sitemapXml = await streamToPromise(sitemap);

  // Write to frontend public folder
  const sitemapPath = path.resolve(frontendPublicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml);

  console.log("Sitemap generated successfully at:", sitemapPath);
}

// Call the function to generate the sitemap
generateSitemap();
