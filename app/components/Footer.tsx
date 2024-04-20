import Link from "next/link"
import {GitHub, Linkedin} from "react-feather"

export default function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto p-4 text-center text-sm text-gray-500 sm:grid sm:grid-cols-3 w-full">
      <div className="sm:text-left mb-3 sm:mb-0">
        <Link href="#" className="mr-4">Privacy Policy</Link>
        <Link href="#">Imprint</Link>
      </div>
      <div className="mb-3 sm:mb-0">
        <Link href="https://github.com/simonldwg" className="no-underline hover:text-gray-900 transition-all duration-300 ease-in-out mr-7">
          <GitHub className="inline w-7"/>
        </Link>
        <Link href="https://www.linkedin.com/in/simonldwg/" className="no-underline hover:text-gray-900 transition-all duration-300 ease-in-out">
          <Linkedin className="inline w-7"/>
        </Link>
      </div>
      <div className="sm:text-right">
        <p>Built with <Link href="https://nextjs.org/">Next.js</Link> on <Link href="https://pages.cloudflare.com/">Cloudflare Pages</Link>.</p>
      </div>
    </footer>
  )
}