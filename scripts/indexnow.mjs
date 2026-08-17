const siteUrl = "https://www.alwaysready4moore.com";
const host = "www.alwaysready4moore.com";
const key = "c9ace571b0de4626be9d874c62fd8b57";
const keyLocation = `${siteUrl}/${key}.txt`;

async function main() {
  const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
  if (!sitemapResponse.ok) {
    throw new Error(`Could not fetch live sitemap: ${sitemapResponse.status}`);
  }

  const xml = await sitemapResponse.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(siteUrl));

  if (!urls.length) {
    throw new Error("No canonical URLs found in the live sitemap.");
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList: urls,
    }),
  });

  if (!response.ok && response.status !== 202) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
  }

  console.log(`Submitted ${urls.length} URLs to IndexNow.`);
  console.log(`Response: ${response.status} ${response.statusText}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
