import Heading1 from "@/app/components/typography/Heading1"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="p-4 sm:p-8 sm:pt-20 pt-20 md:pt-40 text-center">
      <Heading1>Oh no!</Heading1>
      <p className="mb-4">We have searched extensively, but could not find the site you were looking for, sorry :(</p>
      <p className="mb-4">You might want to take a look at the <Link href="/">home</Link> page.</p>
      <p className="text-gray-500 text-sm">Status code: 404</p>
    </div>
  )
}