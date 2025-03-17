import Link from "next/link"
import { Rocket } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 text-white py-12">
      <div className="container mx-auto p-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center sm:text-center">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-4">
              <Rocket className="h-6 w-6 mr-2 text-white" />
              <span className="text-xl font-bold text-white">PyLaunch</span>
            </div>
            <p className="text-sm text-gray-200">
              Build your Python APIs faster.
            </p>
            <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} PyLaunch. All Rights Reserved.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Product</h2>
            <ul className="text-gray-300">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Features</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Pricing</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="text-gray-300">
              <li className="mb-4">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li className="mb-4">
                <Link href="/toc" className="hover:underline">Terms &amp; Conditions</Link>
              </li>
              <li className="mb-4">
                <Link href="/license" className="hover:underline">License</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}