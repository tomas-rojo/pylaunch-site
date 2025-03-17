import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

export default function TermsAndConditions() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/" className="inline-block mb-6 text-black hover:text-gray-700 transition-colors">
        <Button variant="ghost">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </span>
        </Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto">
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>By using PyLaunch you confirm your acceptance of, and agree to be bound by, these terms and conditions.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Agreement to Terms and Conditions</h2>
        <p>This Agreement takes effect on the date on which you first use the PyLaunch application.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Unlimited Access Software License with Termination Rights</h2>
        <p>
        The PyLaunch Software License facilitates the acquisition of PyLaunch software through a single purchase, granting users unrestricted and perpetual access to its comprehensive functionalities. Tailored for independent creators, entrepreneurs, and small businesses, PyLaunch empowers users to create compelling web pages and online portfolios.
        </p>
      <p>
  This license entails a straightforward and flexible arrangement, exempting users from recurring fees or subscriptions. However, it is important to acknowledge that the licensor retains the right to terminate the license without conditions or prerequisites. This termination provision enables the licensor to exercise control over software distribution and utilization.
  </p>
  <p>
Opting for the PyLaunch Software License enables users to enjoy the benefits of the software while recognizing the licensor&apos;s unrestricted termination rights, which provide adaptability and address potential unforeseen circumstances.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Refunds</h2>
        <p>
Due to the nature of digital products, the PyLaunch boilerplate cannot be refunded or exchanged once access is granted.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Disclaimer</h2>
        <p>
It is not warranted that PyLaunch will meet your requirements or that its operation will be uninterrupted or error free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption or loss of contracts), so far as such exclusion or disclaimer is permitted under the applicable law are excluded and expressly disclaimed. This Agreement does not affect your statutory rights.
        </p>

        <p className="text-sm text-gray-600 mt-8">Last updated: 21 June 2024.</p>
      </div>
    </main>
  );
}
