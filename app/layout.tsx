import "./globals.css"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

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

export default function RootLayout({ children, params }: {
  children: React.ReactNode,
  params: {
    colorClass?: string
  }
}) {
  return (
    <html lang="en">
    <head>
      {renderFontCSS()}
    </head>
    <body className="bg-light text-title">
    <div className="flex flex-col h-screen justify-between">
      <header>
        <Navbar />
      </header>
      <main className={`mb-auto ${(params.colorClass) ? params.colorClass : 'text-primary'}`}>{children}</main>
      <Footer />
    </div>
    </body>
    </html>
  )
}
