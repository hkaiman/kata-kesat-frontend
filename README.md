# Semak Kata Kesat

A web application to detect profanity word in Malay language

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Hono.js](https://hono.dev/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Upstash](https://upstash.com/)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/hkaiman/kata-kesat-frontend
```
### Create a .env file and fill in the details using Upstash 

```bash
UPSTASH_REDIS_REST_URL=YOURKEY
UPSTASH_REDIS_REST_TOKEN='YOURKEY'
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
