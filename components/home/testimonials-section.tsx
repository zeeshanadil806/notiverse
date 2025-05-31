"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Hassan A.",
    position: "Founder",
    company: "Mayfair Cars UAE",
    quote:
      "Partnering with Notify for our website development was a fantastic experience. From the start, their team took the time to understand our vision for Mayfair Cars and crafted a site that truly reflects our brand. Their expertise in creating user-friendly designs and optimizing for performance has made a huge difference in how we engage with customers. The support throughout the launch was exceptional, and we've already seen an increase in bookings. I highly recommend Notify for anyone looking to elevate their online presence!",
    rating: 5,
  },
  {
    name: "Marko Nichola",
    position: "Founder",
    company: "Geek Radar",
    quote:
      "Working with Notify was an incredible experience! They completely transformed our vision into a stunning UI/UX design for our app and website. Their attention to detail and understanding of user experience truly set them apart. The marketing strategy they crafted has helped us engage our audience like never before. From start to finish, the Notify team was collaborative, responsive, and committed to our success. I can’t recommend them enough!",
    rating: 5,
  },
  {
    name: "Moyosore Olajiga",
    position: "Founder",
    company: "Event Parcel",
    quote:
      "Partnering with Notify for our website development and upgrade was a fantastic decision. They brought our vision for Event Parcel to life, creating a site that not only looks great but also functions seamlessly for our African-based clients. The team's expertise in web design and user experience was evident throughout the process, and their dedication to delivering high-quality work on time was impressive. Since the upgrade, we've seen an increase in user engagement and bookings. I highly recommend Notify for anyone looking to elevate their online presence!",
    rating: 5,
  },
]

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 " />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-wider"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-4xl font-bold dark:text-white sm:text-5xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 mx-auto max-w-2xl text-xl text-gray-400"
          >
            Discover how we&apos;ve helped businesses achieve their digital transformation goals
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg bg-gray-300/30 p-8">
                <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/20" />

                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="mb-8 text-lg text-gray-700 dark:text-white">&quot;{testimonial.quote}&quot;</blockquote>

                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Join hundreds of satisfied clients who have transformed their digital presence with Notify. Let us help you
            achieve your business goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

