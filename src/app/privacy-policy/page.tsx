import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
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
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto">
        <p>Your privacy is important to us. It is PyLaunch's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
        <br />

        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
        <br />

        <p>You can sign up with your Google account so your PyLaunch's account username will be prefilled with your name and your public profile picture.</p>
        <br />

        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
        <br />

        <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <br />

        <p>We act in the capacity of a data controller and a data processor with regard to the personal data processed through PyLaunch and the services in terms of the applicable data protection laws, including the EU General Data Protection Regulation (GDPR).</p>
        <br />

        <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <br />

        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <br />

        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        <br />

        <p>This policy is effective as of 26 July 2023.</p>
      </div>
    </main>
  );
}
