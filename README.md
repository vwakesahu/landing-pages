# Websites by Vivek Sahu

Eight websites I designed and built, collected as runnable Next.js frontends. The live products keep their original branding and artwork; this reusable edition replaces unverified media with original sample art, except for the two Unwallet versions whose assets are retained at the owner's request.

| Website | Code | Live product |
| --- | --- | --- |
| Exequatur | [sites/exequatur](sites/exequatur) | [exequatur.xyz](https://www.exequatur.xyz) |
| Unwallet v1 | [sites/unwallet-v1](sites/unwallet-v1) | [Demo](https://unwallet-v1-showcase.vercel.app) |
| Unwallet v2 | [sites/unwallet-v2](sites/unwallet-v2) | [Demo](https://unwallet-v2-showcase.vercel.app) |
| Bidnox | [sites/bidnox](sites/bidnox) | [bidnox.xyz](https://www.bidnox.xyz) |
| Shoal | [sites/shoal](sites/shoal) | [shoalfi.xyz](https://www.shoalfi.xyz) |
| Skech | [sites/skech](sites/skech) | [skech.trade](https://www.skech.trade) |
| Liquid Components | [sites/liquid](sites/liquid) | [liquidcomponents.xyz](https://liquidcomponents.xyz) |
| ErebuZ | [sites/erebuz](sites/erebuz) | [erebuz.com](https://www.erebuz.com) |

## Run one website

Install [Bun](https://bun.sh), then from this directory:

```sh
bun install
bun run --cwd sites/unwallet-v1 dev --port 3102
```

Replace `unwallet-v1` with any folder name in the table. Run only one dev server at a time. Each website also has a `build` script. Shared UI and configuration are in `packages/`; keep the workspace when copying a site that imports them.

## Deploy to Vercel

Import this repository and create one project per website. Set **Root Directory** to `sites/<name>`, **Framework** to Next.js, **Install Command** to `cd ../.. && bun install`, and **Build Command** to `bun run build`. Enable access to source files outside Root Directory for the shared packages. Keep automatic Git deployments scoped to the relevant app.

Unwallet demos work without backend credentials. Product app links point to their original services. The ErebuZ waitlist is a demo until you provide your own form IDs in `.env.local`; it does not send submissions to the original project's form.

## Images, fonts and brands

See [ASSETS.md](ASSETS.md) for what is included, what was replaced, and the Unwallet exception. No stock-photo archive, reference-site captures, music, backend configuration, contracts, or private services are included. The [asset manifest](asset-replacements.json) records every replaced path. `bun run check:assets` checks this policy. Generated artwork and the prompts are in [artwork/](artwork/).

The original products' names identify the projects. This is not a license to use third-party trademarks or represent yourself as those businesses. Change product copy, links, team information and branding when adapting a template.

## Credits and license

Code in this collection is MIT, subject to retained upstream notices and dependency licenses. Original Shoal and Liquid notices are preserved. Media and trademarks are governed separately as documented in ASSETS.md. Dependencies and adapted components, including shadcn/ui, Radix, Base UI, Motion, Fumadocs and Lucide, retain their respective licenses. ErebuZ began with the MIT ai-website-cloner-template by JCodesMore; the reusable package excludes its old reference-site research and asset-extraction tools.

Source projects and pinned revisions are recorded in [sources.json](sources.json). These are frontend extracts, not mirrors of the product monorepos.
