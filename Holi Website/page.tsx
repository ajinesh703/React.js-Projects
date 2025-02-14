import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarDays, ShoppingCart, Star } from "lucide-react"

export default function HoliLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
          <span className="text-2xl font-bold text-purple-800">HoliHub</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-purple-800 hover:text-purple-600">
            Products
          </Link>
          <Link href="#" className="text-purple-800 hover:text-purple-600">
            About Holi
          </Link>
          <Link href="#" className="text-purple-800 hover:text-purple-600">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="flex items-center">
          <ShoppingCart className="mr-2 h-4 w-4" /> Cart (0)
        </Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">Celebrate Holi with Vibrant Colors!</h1>
            <p className="text-xl text-purple-600 mb-6">
              Discover our premium range of Holi colors, water guns, and festive accessories.
            </p>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
              Shop Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Holi Celebration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Organic Holi Colors", "Water Balloons", "Pichkari (Water Gun)"].map((product, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-48 h-48 mx-auto bg-purple-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">{product}</h3>
                  <p className="text-purple-600 mb-4">Experience the joy of Holi with our premium products</p>
                  <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-100">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Holi */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">About Holi Festival</h2>
            <p className="text-lg mb-6">
              Holi, the Festival of Colors, is a joyous celebration of the arrival of spring, good harvests, and the
              victory of good over evil. It's a time for fun, forgiveness, and new beginnings.
            </p>
            <div className="flex flex-wrap justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <CalendarDays className="h-6 w-6 mr-2" />
                <span>Next Holi: March 25, 2024</span>
              </div>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-purple-100">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-purple-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Priya S.", text: "The colors are vibrant and long-lasting. Best Holi products I've used!" },
                { name: "Rahul M.", text: "Fast shipping and excellent quality. Will definitely buy again next year." },
                { name: "Anita K.", text: "Love the eco-friendly options. Celebrated guilt-free this Holi!" },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="text-purple-800 mb-2">{testimonial.text}</p>
                  <p className="text-purple-600 font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-pink-100 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Get Holi-Ready with Exclusive Offers!</h2>
            <p className="text-lg text-purple-600 mb-6">
              Subscribe to our newsletter for special discounts, Holi celebration tips, and new product announcements.
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Input type="email" placeholder="Enter your email" className="md:w-96" />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">HoliHub</h3>
              <p>Bringing colors to your Holi celebration since 2010.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:text-pink-300">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-300">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">{/* Add social media icons here */}</div>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 HoliHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

