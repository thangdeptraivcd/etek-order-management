# ETEK Order Management

Interactive ERP order-management UI recreated from the supplied design.

## Features

- ERP header, sidebar, business tabs, filters, table and pagination
- Create-order modal with required-field validation
- Image upload input and submit loading state
- Responsive sidebar and mobile bottom-sheet form
- Accessible labels and keyboard-friendly controls

## Tech stack

- TypeScript
- React 19
- Next.js-compatible Vinext runtime
- Tailwind CSS 4 and custom CSS
- Cloudflare Worker deployment target

## Requirements

- Node.js `>=22.13.0`
- npm

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Main files

- `app/page.tsx`: page structure and interactions
- `app/globals.css`: visual design and responsive styles
- `app/layout.tsx`: page metadata and root layout

## Live demo

[Open the deployed ETEK ERP interface](https://etek-order-management.thangveo.chatgpt.site)
