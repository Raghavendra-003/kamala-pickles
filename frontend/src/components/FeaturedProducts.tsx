import { motion, useInView } from "framer-motion";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";

import heroMango from "@/assets/hero-mango-pickle.jpg";
import heroGongura from "@/assets/hero-gongura-pickle.jpg";
import heroGarlic from "@/assets/hero-garlic-pickle.jpg";
import productLemon from "@/assets/product-lemon.jpg";

/* ---------------- Product Type ---------------- */

interface FeaturedProduct {
  id: string;
  name: string;
  price: number; 
  image: string;
  tag: string;
}


const products = [
  { id:"1", name: "Mango Pickle", price: 299, image: heroMango, tag: "Bestseller" },
  { id:"2", name: "Gongura Pickle", price: 349, image: heroGongura, tag: "Popular" },
  { id:"3", name: "Garlic Pickle", price: 329, image: heroGarlic, tag: "Spicy" },
  { id:"4", name: "Lemon Pickle", price: 279, image: productLemon, tag: "New" },
];

const FeaturedProducts: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { addToCart } = useContext(CartContext);

  return (
    <section className="py-24 bg-cream-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-serif text-lg italic tracking-wider">
            Handpicked for You
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured <span className="text-gold-gradient">Collection</span>
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden bg-card gold-border hover-lift group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {product.name}
                </h3>

                <p className="text-accent font-heading text-xl font-bold mb-4">
                  ₹{product.price}
                </p>

                <Button
                  variant="hero"
                  size="sm"
                  className="w-full rounded-full"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="gold-outline" size="lg" className="rounded-full">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;