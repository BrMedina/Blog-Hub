import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { FeaturedPost } from "@/components/FeaturedPost";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <main className="min-h-screen pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-16 sm:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground mb-6">
            Reflections on living, working, and discovering.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light">
            A curated collection of stories exploring mindfulness, the future of work, and hidden corners of the world.
          </p>
        </motion.div>

        {/* Featured Post */}
        <FeaturedPost post={featuredPost} />

        {/* Section Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-12"
        >
          <h3 className="font-serif text-2xl font-medium m-0">Latest Stories</h3>
          <div className="h-px bg-border flex-grow"></div>
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12">
          {regularPosts.map((post, idx) => (
            <PostCard key={post.id} post={post} index={idx} />
          ))}
        </div>
        
        {/* Newsletter CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 p-10 sm:p-16 rounded-3xl bg-secondary text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-serif font-medium mb-4">Join the chronicle</h3>
          <p className="text-secondary-foreground/80 mb-8 max-w-md mx-auto">
            Get our latest essays and stories delivered straight to your inbox, twice a month. No spam, ever.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing! (Demo)");
            }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-grow h-12 px-5 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button 
              type="submit"
              className="h-12 px-8 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 active:scale-[0.98] transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.section>

      </div>
    </main>
  );
}
