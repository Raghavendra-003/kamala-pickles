import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import traditionalImg from "@/assets/traditional-making.jpg";

const TraditionalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-royal-gradient heritage-pattern relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden gold-border gold-glow">
              <img
                src={traditionalImg}
                alt="Traditional pickle making"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-serif text-lg italic tracking-wider">Heritage & Tradition</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mt-3 mb-6 leading-tight">
              Crafted the <br />
              <span className="text-gold-gradient">Traditional Way</span>
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <p className="text-cream/80 font-body text-lg leading-relaxed mb-6">
              Our pickles are handcrafted using age-old traditional methods. Sun-dried ingredients,
              stone-ground spices, and slow blending techniques ensure authentic flavor in every jar.
            </p>
            <p className="text-cream/60 font-body leading-relaxed">
              Every batch is prepared with love by local artisans who have inherited recipes passed
              down through generations. We believe in preserving the authentic taste of India.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalSection;
