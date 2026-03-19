import { Link } from "wouter";
import { motion } from "framer-motion";
import { BlogPost } from "@/data/posts";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24"
    >
      <div className="order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {post.tag}
          </span>
          <span className="w-8 h-px bg-border"></span>
          <span className="text-sm text-muted-foreground">{post.readTime}</span>
        </div>
        
        <Link href={`/blog/${post.id}`} className="block focus:outline-none">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium text-sm">
              {post.author.avatarInitials}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.id}`}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition-all hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            Read Story
          </Link>
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        <Link href={`/blog/${post.id}`} className="block relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl isolate focus:outline-none focus:ring-4 focus:ring-primary/20 focus:ring-offset-4 focus:ring-offset-background transition-all">
          <div className="absolute inset-0 bg-foreground/5 z-10 transition-colors group-hover:bg-transparent"></div>
          <img 
            src={post.imageUrl} 
            alt={post.imageAlt}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
        </Link>
      </div>
    </motion.article>
  );
}
