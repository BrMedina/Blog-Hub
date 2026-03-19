import { Link } from "wouter";
import { motion } from "framer-motion";
import { BlogPost } from "@/data/posts";

export function PostCard({ post, index }: { post: BlogPost, index: number }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col h-full"
    >
      <Link href={`/blog/${post.id}`} className="block relative aspect-[3/2] overflow-hidden rounded-xl mb-6 isolate focus:outline-none focus:ring-4 focus:ring-primary/20 focus:ring-offset-4 focus:ring-offset-background transition-all">
        <div className="absolute inset-0 bg-foreground/5 z-10 transition-colors group-hover:bg-transparent"></div>
        <img 
          src={post.imageUrl} 
          alt={post.imageAlt}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {post.tag}
          </span>
          <span className="w-1 h-1 rounded-full bg-border"></span>
          <span className="text-sm text-muted-foreground">{post.readTime}</span>
        </div>
        
        <Link href={`/blog/${post.id}`} className="block focus:outline-none group-hover:text-primary transition-colors duration-300">
          <h3 className="text-2xl font-serif font-medium leading-snug mb-3">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
          <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium text-xs">
            {post.author.avatarInitials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground leading-none mb-1">{post.author.name}</span>
            <span className="text-xs text-muted-foreground leading-none">{post.date}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
