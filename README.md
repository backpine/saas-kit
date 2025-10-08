# saas-kit

[![Watch the video](https://img.youtube.com/vi/TWQv_tr5ABI/maxresdefault.jpg)](https://www.youtube.com/watch?v=TWQv_tr5ABI&t=1s)

A monorepo SaaS application with user-facing frontend and data service backend.

## Setup

```bash
pnpm run setup
```

This installs all dependencies and builds required packages.

## Development

### User Application
```bash
pnpm run dev:user-application
```

### Data Service
```bash
pnpm run dev:data-service
```

## Deployment

### User Application (Cloudflare)
```bash
pnpm run deploy:user-application
```

### Data Service
```bash
pnpm run deploy:data-service
```

## Working with Individual Apps

You can also navigate into any sub-application directory and work with it independently in your IDE:

```bash
cd packages/user-application
# Open in your preferred IDE
```
