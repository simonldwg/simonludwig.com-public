import Link from "next/link"
import {GitHub, Linkedin, Mail} from "react-feather"
import Heading1 from "@/app/components/typography/Heading1"

export default function Footer() {
  return (
    <>
      <div className="text-gray-50" id="contact">
        <div id="contact-container">
          <div className="max-w-screen-2xl mx-auto w-full p-4 sm:pr-8 sm:pl-8 pt-20 pb-20 text-center">
            <Heading1 colorClass="text-gray-50 inline-block p-2">Contact Me</Heading1><br />
            <a className="text-xl p-2 inline-block transition-all duration-300 ease-out hover:transform hover:scale-110 mb-2" href="mailto:hello@simonludwig.com">
              <Mail className="inline mr-2" />hello@simonludwig.com
            </a><br />
            <a className="text-xl p-2 inline-block transition-all duration-300 ease-out hover:transform hover:scale-110" href="https://www.linkedin.com/in/simonldwg/">
              <Linkedin className="inline mr-2" />LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="max-w-screen-2xl mx-auto p-4 sm:pr-8 sm:pl-8 text-center text-sm text-gray-500 sm:grid sm:grid-cols-3 w-full">
        <div className="sm:text-left mb-3 sm:mb-0">
          <Link href="#" className="mr-4">Privacy Policy (Datenschutz)</Link>
          <Link href="#">Imprint (Impressum)</Link>
        </div>
        <div className="mb-3 sm:mb-0">
          <Link href="https://github.com/simonldwg" className="no-underline group mr-7">
            <GitHub className="inline w-7 transition-all duration-300 ease-in-out group-hover:text-gray-900 group-hover:transform group-hover:scale-110"/>
          </Link>
          <Link href="https://www.linkedin.com/in/simonldwg/" className="no-underline group">
            <Linkedin className="inline w-7 transition-all duration-300 ease-in-out group-hover:text-gray-900 group-hover:transform group-hover:scale-110"/>
          </Link>
        </div>
        <div className="sm:text-right">
          <p>Built with <Link href="https://nextjs.org/">Next.js</Link> on <Link href="https://pages.cloudflare.com/">Cloudflare Pages</Link>.</p>
        </div>
      </footer>
    </>
  )
}