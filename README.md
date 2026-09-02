# Glenford Sales Phase 1

Bolt-ready Vite and React implementation for `glenfordsales.com`.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Import into Bolt

1. Put this folder in its own GitHub repository.
2. In Bolt, choose the GitHub import option and select that repository.
3. Publish to a temporary `bolt.host` address for review.
4. Connect `glenfordsales.com` only after final review and after the compromised hosting content has been preserved offline and removed.
5. After the custom domain is connected, enable Bolt's SEO Boost in Domains & Hosting so crawlers receive pre-rendered page HTML.

## Phase 1 scope

- Responsive single-page product guide
- Five confirmed Amazon product links and ASINs
- Interactive single-muff and double-muff filtering
- Connector and fit guidance, FAQs and direct email support
- Organization, WebSite, ItemList, Product and FAQ structured data
- Canonical metadata, social metadata, `robots.txt`, `sitemap.xml` and `llms.txt`
- No local checkout, prices, inventory, CMS, database, login, forms or WordPress runtime

## Confirm before public launch

- Confirm that all five Amazon ASINs remain active and the product names and connector labels match the current listings.
- Confirm that `glenfordsales@hotmail.com` remains the preferred public email.
- Obtain Paul's exact eBay profile or store URL before adding eBay links. Search results did not establish a trustworthy match.
- Confirm whether more accurate photographs are available for each connector variant. Phase 1 uses the two recovered product images across the range.
- Add Search Console and Bing Webmaster verification values after the Bolt deployment URL is available.
- Verify that an invented or previously hacked URL returns a true 404 response rather than the homepage with a 200 response.
- Connect privacy-friendly analytics only if the client requests ongoing reporting.
- Preserve a quarantined backup of the old hosting files and database before removing the compromised installation.

## Content policy

The website never republishes marketplace price, stock, rating or delivery claims. Those facts can change and belong on Amazon. Individual model pages, deeper compatibility resources, eBay integration and additional search content belong in Phase 2.
