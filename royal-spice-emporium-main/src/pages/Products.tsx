import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import heroMango from "@/assets/hero-mango-pickle.jpg";
import heroGongura from "@/assets/hero-gongura-pickle.jpg";
import heroGarlic from "@/assets/hero-garlic-pickle.jpg";
import productLemon from "@/assets/product-lemon.jpg";
import productChicken from "@/assets/product-chicken.jpg";
import productPrawn from "@/assets/product-prawn.jpg";

const allProducts = [
  { name: "Mango Pickle", price: "₹299", weight: "500g", image: heroMango, category: "veg", desc: "Authentic Andhra-style mango pickle crafted with handpicked spices and sun-dried perfection." },
  { name: "Gongura Pickle", price: "₹349", weight: "500g", image: heroGongura, category: "veg", desc: "A tangy, spicy delight made from fresh sorrel leaves and traditional stone-ground masalas." },
  { name: "Garlic Pickle", price: "₹329", weight: "500g", image: heroGarlic, category: "veg", desc: "Bold, aromatic garlic cloves infused with premium cold-pressed oil and spices." },
  { name: "Lemon Pickle", price: "₹279", weight: "500g", image: productLemon, category: "veg", desc: "Zesty lemon pieces marinated in turmeric, mustard seeds, and aromatic spices." },
  { name: "Chicken Pickle", price: "₹449", weight: "500g", image: productChicken, category: "non-veg", desc: "Tender chicken pieces slow-cooked in a rich blend of Andhra spices and sesame oil." },
  { name: "Prawn Pickle", price: "₹499", weight: "500g", image: productPrawn, category: "non-veg", desc: "Succulent prawns marinated in a fiery masala with coastal spices and tamarind." },
];

const Products = () => {
  const [filter, setFilter] = useState<"all" | "veg" | "non-veg">("all");

  const filtered = filter === "all" ? allProducts : allProducts.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-royal-gradient heritage-pattern">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-serif text-lg italic tracking-wider">Our Collection</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-cream mt-3 mb-4">
            Premium <span className="text-gold-gradient">Pickles</span>
          </h1>
          <div className="section-divider mt-4" />
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-3">
          {(["all", "veg", "non-veg"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all capitalize ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {f === "non-veg" ? "Non-Veg" : f === "all" ? "All" : "Veg"}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-card gold-border hover-lift group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className={`absolute top-4 right-4 text-xs font-body font-semibold px-3 py-1 rounded-full ${
                  product.category === "veg" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                }`}>
                  {product.category === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-accent font-heading text-2xl font-bold">{product.price}</span>
                    <span className="text-muted-foreground text-sm font-body ml-2">/ {product.weight}</span>
                  </div>
                  <Button variant="hero" size="sm" className="rounded-full">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
