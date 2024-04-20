import "./globals.css"

export const metadata = {
  title: "Simon Ludwig",
  description: "",
}

function renderFontCSS() {
  if (process.env.FONT_CSS_URL) {
    return <link rel="stylesheet" href={process.env.FONT_CSS_URL}/>
  }
  return null
}

export default function RootLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      {renderFontCSS()}
    </head>
    <body>
      {children}
    </body>
    </html>
  )
}
