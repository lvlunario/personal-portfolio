import { Link } from 'react-router-dom';
import { Feather, DollarSign, Code, Briefcase } from 'lucide-react';

// Placeholder data for your blog posts
const blogPosts = [
  {
    category: "Travel & FIRE",
    title: "How Our Maui Rentals Fund Our Adventures",
    description: "A look into the strategy and numbers behind using real estate to achieve financial independence and travel the world.",
    icon: <Feather className="w-8 h-8 text-primary" />,
    link: "/blog/maui-rentals-adventures" // Example link
  },
  {
    category: "Technical",
    title: "Building This Portfolio with Vite, React, and Tailwind",
    description: "A deep dive into the technical decisions, challenges, and architecture behind this personal website.",
    icon: <Code className="w-8 h-8 text-primary" />,
    link: "/blog/building-this-portfolio"
  },
  {
    category: "Finance",
    title: "The Entrepreneur's Guide to Angel Investing",
    description: "Exploring the risks and rewards of investing in early-stage startups as part of a diversified portfolio.",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    link: "/blog/guide-to-angel-investing"
  },
  {
      category: "Real Estate",
      title: "Managing Short-Term Rentals from Afar",
      description: "Systems and strategies for successfully managing properties in Maui and the Philippines while living a flexible lifestyle.",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      link: "/blog/managing-remote-rentals"
  }
];

export default function Blog() {
  return (
    <div className="bg-background text-foreground pt-24 sm:pt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">The Digital Logbook</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of thoughts and learnings on technology, finance, real estate, and the pursuit of a well-lived life.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link to={post.link} key={index} className="block group p-6 bg-card-bg border border-card-border rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="mt-1">{post.icon}</div>
                <div>
                  <p className="font-semibold text-primary">{post.category}</p>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="mt-2 text-foreground/70 text-sm">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
