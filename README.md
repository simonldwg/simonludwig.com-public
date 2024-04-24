# simonludwig.com

This is the public GitHub repository for my personal website located at [simonludwig.com](https://simonludwig.com).

## Notes
* This site uses Next.js, Tailwind and Prisma ORM.
* It is deployed on Cloudflare Pages using Cloudflare D1 as a database.
* Due to the deployment setup, every server component uses the edge runtime, as it currently is the only Next.js runtime that Cloudflare Pages supports.
* Furthermore, Cloudflare Pages disables the image optimization mechanisms built into Next.js. This is why the `<img>` tag is used instead of the Next.js `Image` component.
* You can configure the site to use custom fonts via the three environment variables `FONT_CSS_URL`, `CUSTOM_MONOSPACE_FONT` and `CUSTOM_SANS_FONT`. Please take a look at the `.env.sample` file.

## License
If you would like to reuse the design or the code, please do. You can use it however you want, there is no attribution required. However, please do not reuse or redistribute any photos or any of the personal content within your own software project. Thank you.
