import { Check, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Save time building your own API, and focus on building your product.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 max-w-3xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription className="text-sm">Perfect for small projects and individual developers.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <p className="text-2xl font-bold">$19<span className="text-lg">/lifetime</span></p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Python API Boilerplate
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  API Documentation
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  API Testing (Unit, Integration, E2E)
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full text-sm py-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Rocket className="mr-2 h-3 w-3" />
                Get PyLaunch
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Premium</CardTitle>
              <CardDescription className="text-sm">For growing teams and larger projects.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <p className="text-2xl font-bold">$39<span className="text-lg">/lifetime</span></p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Python API Boilerplate
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  API Documentation
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  API Testing (Unit, Integration, E2E)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Regular Updates
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full text-sm py-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Rocket className="mr-2 h-3 w-3" />
                Get PyLaunch
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
