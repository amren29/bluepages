# Find Local Services

Simple MVP directory website inspired by Yellow Pages. It uses the Next.js App Router, a local JSON file for data, and plain CSS for styling.

## Features

- Homepage with a search field, location field, and search button
- Results page that filters businesses by name or category
- Featured businesses sorted to the top of results
- Business detail page with phone, address, description, and website
- Fully static mock data with no APIs, backend, or database

## File structure

```text
src/
  app/
    businesses/[id]/   Dynamic business detail page
    results/           Search results page
    globals.css        Shared styles
    layout.tsx         Root layout and metadata
    page.tsx           Homepage
  components/
    BusinessCard.tsx   Reusable business card UI
    SearchForm.tsx     Reusable search form
  data/
    businesses.json    Local mock business data
  lib/
    businesses.ts      Data types, sorting, and filtering helpers
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How the app works

1. The homepage shows a basic search form with `Kuala Lumpur` as the default location.
2. Submitting the form sends the user to `/results` using query params like `?q=plumber&location=Kuala+Lumpur`.
3. The results page reads those query params, filters the local JSON data, and shows matching businesses.
4. Featured businesses are always sorted above non-featured businesses.
5. Clicking `View Details` opens a static detail page for that business.

## Add or edit businesses

Update [`src/data/businesses.json`](src/data/businesses.json).

Each business object should include:

```json
{
  "id": "unique-slug",
  "name": "Business Name",
  "category": "plumber",
  "rating": 4.8,
  "address": "Full address in Kuala Lumpur",
  "phone": "+60300000000",
  "website": "https://example.com",
  "description": "Short business summary.",
  "isFeatured": true
}
```

Notes:

- Keep `id` unique because it is used in the business detail URL.
- Set `website` to an empty string if the business does not have one yet.
- Use `isFeatured: true` for listings that should appear first in search results.

## Future upgrades

When you want to move past mock data, a sensible next path is:

1. Replace the local JSON file with a real database or CMS.
2. Add a backend API or Next.js Route Handlers for search and business details.
3. Support richer location search with coordinates and distance-based filtering.
4. Add business images, opening hours, and reviews from real providers.
5. Add admin tools for creating and editing listings without touching JSON.
