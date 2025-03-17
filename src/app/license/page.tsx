import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License Agreement',
};
export default function License() {
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

      <h1 className="text-3xl font-bold mb-6 text-center">PyLaunch Boilerplate License Agreement</h1>
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">TL;DR;</h2>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Personal License:</strong> Build unlimited projects as an individual.</li>
          <li><strong>Team License:</strong> Build unlimited projects as a team.</li>
        </ul>

        <p className="mb-6">
          This License Agreement ("Agreement") is entered into between PyLaunch, represented by Tomas Rojo, whose contact information is info@pylaunch.net, and you, the user ("Licensee"), regarding the use of the PyLaunch coding boilerplate (the "Product") available at https://pylaunch.net/ (the "Website"). By downloading, accessing, or using the Product, Licensee agrees to be bound by the terms and conditions of this Agreement.
        </p>

        <h2 className="text-xl font-semibold mb-4">1. Grant of License</h2>
        
        <h3 className="text-lg font-medium mb-2">1.1 Personal License</h3>
        <p className="mb-4">
          Subject to the terms and conditions of this Agreement, PyLaunch grants Licensee a non-exclusive, non-transferable, and non-sublicensable Personal License to use the PyLaunch coding boilerplate for the following purposes:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>Create unlimited projects.</li>
          <li>Build and develop applications or websites for personal use or commercial use.</li>
        </ul>

        <h3 className="text-lg font-medium mb-2">1.2 Team License</h3>
        <p className="mb-4">
          Subject to the terms and conditions of this Agreement, PyLaunch grants Licensee a non-exclusive, non-transferable, and non-sublicensable Team License to use the PyLaunch coding boilerplate for the following purposes:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>Create unlimited projects.</li>
          <li>Build and develop applications or websites as part of a team.</li>
          <li>Share the code with other members of the team.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">2. Usage Restrictions</h2>
        <p className="mb-4">
          Licensee shall not:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>Modify, adapt, reverse engineer, decompile, disassemble, or create derivative works based on the PyLaunch boilerplate.</li>
          <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices from the PyLaunch boilerplate.</li>
          <li>Use the PyLaunch boilerplate in any manner that violates applicable laws, regulations, or third-party rights.</li>
          <li>Sub-license, rent, lease, or transfer the PyLaunch boilerplate or any rights granted under this Agreement.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">3. Ownership and Intellectual Property</h2>
        <p className="mb-4">
          PyLaunch retains all ownership and intellectual property rights in the PyLaunch boilerplate. This Agreement does not transfer any ownership rights to the Licensee.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Warranty Disclaimer</h2>
        <p className="mb-4">
          THE PYLAUNCH BOILERPLATE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>


        <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">
          TO THE EXTENT PERMITTED BY APPLICABLE LAW, PYLAUNCH SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO THE USE OR INABILITY TO USE THE PYLAUNCH BOILERPLATE, EVEN IF PYLAUNCH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>

        <h2 className="text-xl font-semibold mb-4">6. Governing Law and Jurisdiction</h2>
        <p className="mb-4">
          This Agreement shall be governed by and interpreted in accordance with the laws of the United States, without regard to its conflict of law principles. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts located in Singapore.
        </p>

        <h2 className="text-xl font-semibold mb-4">7. Entire Agreement</h2>
        <p className="mb-4">
          This Agreement represents the complete agreement between Licensee and PyLaunch regarding the subject matter and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings.
        </p>


        <p className="mt-8 text-sm text-gray-600">
          Last updated: 2024-09-07
        </p>

        <p className="mt-4 text-sm text-gray-600">
          PyLaunch<br />
          Contact Information: info@pylaunch.net
        </p>
      </div>
    </main>
  );
}
