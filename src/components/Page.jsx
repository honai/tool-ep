export const Page = ({ title, children }) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </head>
    <body>{children}</body>
  </html>
)
