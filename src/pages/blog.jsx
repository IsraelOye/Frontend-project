// import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const blogs = [
  {
    id: 1,
    title: "Efficient Freight Solutions for Growing Businesses",
    excerpt:
      "Discover how our innovative freight solutions are helping businesses reduce costs and improve delivery times.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop", // Business logistics/warehouse
    date: "August 5, 2025",
  },
  {
    id: 2,
    title: "5 Tips for Faster International Shipping",
    excerpt:
      "Learn the strategies top logistics companies use to speed up customs clearance and delivery for international shipments.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=800&fit=crop", // Large cargo container ship at sea
    date: "July 28, 2025",
  },
  {
    id: 3,
    title: "The Future of Green Logistics",
    excerpt:
      "Explore how the logistics industry is adapting to eco-friendly technologies to reduce carbon footprints.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop", // Electric delivery truck/green logistics
    date: "July 18, 2025",
  },
  
  {
    id: 4,
    title: "How Technology is Changing Supply Chains",
    excerpt:
      "From AI to blockchain, discover the technologies revolutionizing supply chain management today.",
    image:
      "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop",
    date: "July 10, 2025",
  },
  {
    id: 5,
    title: "International Shipping: What You Need to Know",
    date: "June 10, 2025",
    author: "Global Freight Insights",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "From customs paperwork to international regulations — here’s your complete shipping checklist.",
  },
  {
    id: 6,
    title: "Eco-Friendly Logistics: How We’re Reducing Carbon Footprint",
    date: "May 25, 2025",
    author: "LogiPro Sustainability Team",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Discover our green initiatives, from electric delivery vehicles to sustainable packaging.",
  },
];  

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-10 pt-40 bg-gray-50 min-h-screen">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">Our Blogs</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {blog.date} • {blog.author}
                </p>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <button className="text-blue-600 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;