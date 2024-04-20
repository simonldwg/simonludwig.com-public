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

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      {renderFontCSS()}
    </head>
    <body className="bg-gray-50 text-gray-900">
    <div className="flex flex-col h-screen justify-between">
      <header className="border-b-gray-200 border-b-2">
        <Navbar />
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
    </body>
    </html>
  )
}
