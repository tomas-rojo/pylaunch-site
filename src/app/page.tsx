import LaunchButton from "@/components/LaunchButton";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import DotPattern from "@/components/magicui/dot-pattern";
import LetterPullup from "@/components/magicui/letter-pullup";
import { Check, CheckIcon, ChevronRight, Code2, Database, GitBranch, Rocket, Shield, Zap } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in"
import NavHeader from "@/components/NavHeader";
import PricingSection from "@/components/Pricing";
import OrbitalDiagram from "@/components/o";
import FeatureCard from "@/components/f";

// export default function Home() {
//   return (
//     <>
//       <NavHeader />
//       <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden">
//         <DotPattern className="absolute inset-0 opacity-75" />
//         <div className="flex items-center">
//           <LetterPullup words="PyLaunch " className="md:text-8xl text-6xl" />
//         </div>
//         <BlurIn
//           word="Turbocharge Your Python API Development"
//           className="font-bold text-black dark:text-white text-indigo-600"
//         />
//         <OrbitalDiagram />
//         <div className="mt-8">
//           <AnimatedSubscribeButton
//             buttonColor="rgb(79 70 229)"
//             buttonTextColor="#ffffff"
//             subscribeStatus={false}
//             initialText={<LaunchButton />}
//             changeText={
//               <span className="group inline-flex items-center">
//                 <CheckIcon className="mr-2 h-4 w-4" />
//                 Redirecting...{" "}
//               </span>
//             }
//           />
//         </div>
//       </main>
//         <PricingSection id="pricing" />
//     </>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,rgba(56,189,248,0)_100%)]" />
        <OrbitalDiagram />
        <div className="container mx-auto md:py-24 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-4xl font-bold text-blue-400 bg-slate-900/50 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-500/10">
              <Rocket size={60} />
              <div className="flex items-center">
                <span className="md:text-7xl text-5xl text-blue-400 pb-5 pl-2">PyLaunch</span>
             </div>
            </div>
            <br />
            <br />
            <br />
            <p className="text-xl text-slate-300 max-w-2xl mt-12 pt-10">
              Launch your Python REST API in minutes, not days.
            </p>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Built with modern best practices, security, and scalability in mind.
            </p>
            <a href="https://buy.stripe.com/test_9AQ4ixar48dAbmg5kk" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
            <Rocket size={20} />
            Get PyLaunch
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">Why PyLaunch?</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Rocket}
            title="Instant Setup"
            description="Get your REST API running in under 5 minutes with our comprehensive boilerplate setup"
          />
          <FeatureCard
            icon={Database}
            title="Database Ready"
            description="Pre-configured SQLAlchemy and Postgres with migrations or NoSQL database with MongoDB"
          />
          <FeatureCard
            icon={Zap}
            title="High Performance"
            description="Optimized for speed with async support and efficient database queries"
          />
          <FeatureCard
            icon={GitBranch}
            title="CI/CD Ready"
            description="Includes GitHub Actions workflows or Gitlab CI and Docker configurations for seamless deployment"
          />
          <FeatureCard
            icon={Code2}
            title="Clean Architecture"
            description="Built for maintainable, scalable code with a modular design that keeps core logic independent from technical details"
          />
          <FeatureCard
            icon={Check}
            title="Best Practices"
            description="Follows clean architecture principles for maintainable and scalable code"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
          <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-center mb-8">Ready to Launch?</h2>
            <div className="bg-slate-900/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Professional License</h3>
                <span className="text-3xl font-bold text-blue-400">$99</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Full source code access',
                  'Production-ready setup',
                  '6 months of updates',
                  'Premium email support',
                  'CI/CD configurations',
                  'Documentation access'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-300">
                    <ChevronRight size={16} className="text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/test_9AQ4ixar48dAbmg5kk" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                <Rocket size={20} />
                Get PyLaunch
              </a>
            </div>
            <p className="text-center text-slate-400 text-sm">
              • Lifetime access • Instant download
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
