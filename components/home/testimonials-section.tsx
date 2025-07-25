"use client";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
type Testimonial = {
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
};
const testimonials: Testimonial[] = [
  {
    name: "Hassan A.",
    position: "CEO",
    company: "Mayfair Cars UAE",
    quote:
      "Partnering with Notify for our website development was a fantastic experience. From the start, their team took the time to understand our vision for Mayfair Cars and crafted a site that truly reflects our brand. Their expertise in creating user-friendly designs and optimizing for performance has made a huge difference in how we engage with customers. The support throughout the launch was exceptional, and we've already seen an increase in bookings. I highly recommend Notify for anyone looking to elevate their online presence!",
    rating: 5,
  },
  {
    name: "Marko Nichola",
    position: "CEO",
    company: "Geek Radar",
    quote:
      "Working with Notify on our app’s UI/UX design and custom illustrations was a truly smooth and rewarding experience. Their team’s passion and work ethic stood out, delivering creative, user-focused results that elevated our product.",
    rating: 5,
  },
  {
    name: "Moyosore Olajiga",
    position: "Co Founder",
    company: "Event Parcel",
    quote:
      "Choosing Notify to revamp our Event Parcel website was a game-changer. Their design and UX expertise delivered a sleek, user-friendly platform that resonates with our African audience.",
    rating: 5,
  },
  {
    name: "Hina Rabbani",
    position: "CEO",
    company: "Dara",
    quote:
      "Our website looks incredible and works like a charm. They just got what we needed and nailed it! - Dara -",
    rating: 5,
  },
  {
    name: "Hina Hassan",
    position: "CEO",
    company: "Amayra Jewels",
    quote:
      "Our jewelry site is elegant, smooth, and captures our brand perfectly. They turned our vision into a sparkling reality! - Amayra Jewels",
    rating: 5,
  },
  {
    name: "Ayesha",
    position: "CEO",
    company: "Mausummery",
    quote:
      "Teaming up with them was the best move we made—they nailed our website, managed our socials like pros, and handled everything from shoots to performance marketing seamlessly. A true 360° game-changer for our brand!",
    rating: 5,
  },
  {
    name: "Rabazka",
    position: "Co Founder",
    company: "Rabazka",
    quote:
      "Captured over 130 outfits with style, precision, and creativity. From planning to final edits, everything was smooth and spot-on!",
    rating: 5,
  },
  {
    name: "Alizay Saad Studio",
    position: "Co Founder",
    company: "Alizay Saad Studio",
    quote:
      "From a stunning website to sharp and powerful performance marketing, they brought our fashion brand to life and elevated our presence across the board.",
    rating: 5,
  },
  {
    name: "Shahtaj Design House",
    position: "Co Founder",
    company: "Shahtaj Design House",
    quote:
      "Our website turned out amazing, and their full-circle performance marketing pushed our brand to new heights. Growth, visibility, results—they delivered it all!",
    rating: 5,
  },
];

const getPerView = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
  }
  return 1;
};

export const TestimonialsSection = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: getPerView(),
      spacing: 16,
    },
  });
  useEffect(() => {
    const handleResize = () => {
      slider.current?.update({
        slides: {
          perView: getPerView(),
          spacing: 16,
        },
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slider]);

  return (
    <section className="relative py-20">
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
            className="mt-2 text-3xl font-bold dark:text-white sm:text-5xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 mx-auto max-w-2xl text-l text-gray-400"
          >
            Discover how we&apos;ve helped businesses achieve their digital
            transformation goals
          </motion.p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full transition"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full transition"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Join hundreds of satisfied clients who have transformed their
            digital presence with Notify. Let us help you achieve your business
            goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

type TestimonialProps = {
  testimonial: Testimonial;
};
const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayQuote = isExpanded
    ? testimonial.quote
    : `${testimonial.quote.slice(0, 120)}...`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div className="relative rounded-lg bg-gray-300/30 p-8">
        <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/20" />

        <div className="mb-4 flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>

        <blockquote className="mb-2 lg:text-lg text-sm text-gray-700 dark:text-white">
          &quot;{displayQuote}&quot;
          <button
            onClick={handleToggle}
            className="text-blue-500 underline flex items-center space-x-1"
          >
            <span>{isExpanded ? "Read Less" : "Read More"}</span>
          </button>
        </blockquote>

        <div className="flex items-center gap-4">
          <div>
            <div className="font-semibold dark:text-white">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-400">
              {testimonial.position}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
