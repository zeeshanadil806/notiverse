"use client";
import { motion } from "framer-motion";
import { Code, Rocket, Globe, MessageSquare, Search, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    const services = [
        {
          icon: Code,
          title: "Custom Software Development",
          description: "Tailored solutions to meet your unique business needs",
        },
        { icon: Rocket, title: "Performance Marketing", description: "Data-driven strategies to boost your online presence" },
        { icon: Globe, title: "Website & App Development", description: "User-friendly designs that engage and convert" },
        {
          icon: MessageSquare,
          title: "Social Media Management",
          description: "Building your brand across digital platforms",
        },
        { icon: Search, title: "SEO", description: "Improving your visibility in search engine results" },
        { icon: Cpu, title: "AI-Powered Solutions", description: "Leveraging cutting-edge technology for your business" },
      ]
  return (
    <div className="">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            >
              About <span className="text-primary">Notiverse</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl text-gray-300 sm:text-2xl"
            >
              Revolutionizing the Digital Landscape Since 2019
            </motion.p>
          </div>
        </div>
      </section>
      <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold sm:text-4xl"
        >
          Our Story
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl text-center text-lg text-gray-800 dark:text-gray-300"
        >
          <p className="mb-4">
            Since 2019, Notiverse has been at the forefront of developing software solutions for industries such as ERP,
            business development, finance, supply chain, and E-commerce. We revolutionize the digital landscape by
            crafting strategies that not only create a strong online presence but also deliver tangible results.
          </p>
          <p>
            With a combination of innovative technology and creative strategies, we ensure that businesses can thrive in
            an ever-evolving digital world. Our client-centric approach allows us to provide personalized solutions that
            exceed expectations and drive measurable success.
          </p>
        </motion.div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:bg-gray-700"
            >
              <service.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          Our Vision & Mission
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">&quot;To create paths to success in a dynamic, ever-evolving digital world.&quot;</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  &quot;To empower brands with cutting-edge strategies and expert solutions, ensuring their presence across
                  all digital platforms while driving growth and success in a fast-evolving digital world.&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Globe className="mx-auto mb-6 h-16 w-16 text-primary" />
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Global Reach</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            With a global reach and a client-centric approach, we provide personalized solutions that exceed
            expectations and drive measurable success. We pride ourselves on delivering projects on time and delivering
            real value for businesses of all sizes.
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
