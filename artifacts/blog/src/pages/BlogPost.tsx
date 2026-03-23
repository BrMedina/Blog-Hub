import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Bookmark, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { posts } from "@/data/posts";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = posts.find((p) => p.id === params?.id);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <article className="min-h-screen pb-24 bg-background">
      {/* Hero Section */}
      <header className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {post.tag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-foreground mb-8">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-t border-b border-border/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium text-lg">
                {post.author.avatarInitials}
              </div>
              <div>
                <p className="text-base font-medium text-foreground">{post.author.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{post.author.role}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => alert('Shared!')}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Share post"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => alert('Saved!')}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Save post"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Featured Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24"
      >
        <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
          <img 
            src={post.thumbnailImageUrl ?? post.imageUrl} 
            alt={post.thumbnailImageAlt ?? post.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-stone lg:prose-lg mx-auto"
        >
          <p className="lead text-xl sm:text-2xl text-foreground/80 font-serif italic mb-10">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, index) => (
            <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
          ))}

          {post.id === "4-day-work-week" && (
            <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
              <img
                src={post.imageUrl}
                alt={post.imageAlt}
                className="w-full h-auto"
              />
            </div>
          )}
        </motion.div>

        {/* Post Footer Actions */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => alert('Liked!')}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Heart className="w-5 h-5 group-hover:fill-primary" />
              </div>
              <span className="font-medium text-sm">Like this story</span>
            </button>
          </div>
          
          <div className="flex items-center gap-3">
             <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
             <button onClick={() => alert('Shared to Twitter')} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm underline underline-offset-4">Twitter</button>
             <button onClick={() => alert('Shared to LinkedIn')} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm underline underline-offset-4">LinkedIn</button>
          </div>
        </div>
      </div>
    </article>
  );
}
