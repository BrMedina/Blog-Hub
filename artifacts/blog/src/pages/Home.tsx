import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { FeaturedPost } from "@/components/FeaturedPost";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);
  const crisisImageUrl = "https://childhope.org.ph/wp-content/uploads/2020/08/street-education-program.jpg";
  const crisisImageAlt = "Filipino students in a classroom";
  const proposals = [
    {
      title: "Fair wage to local professionals",
      description:
        "Nations should be wary of the wages of their professionals as they are the key to strengthening their educational system. As such, reforms on better wages to trained professionals in countries will open more opportunities for them and result in benefitting their country rather than another."
    },
    {
      title: "Fund locally done projects",
      description:
        "Rather than countries relying on other countries’ educational systems, local systems to specifically combat educational inequality, like Project REINN by DOST-ASTI, should be given light and funded by their government which encourages a localized infrastructure."
    },
    {
      title: "Improved curriculum",
      description:
        "Expand and modernize curriculum content so students gain stronger literacy, critical thinking, and practical competencies needed in present-day learning and work environments."
    },
    {
      title: "Expanding and improving digital and physical infrastructure, especially in marginalized areas",
      description:
        "Improve access to classrooms, learning resources, devices, and stable internet so students in underserved communities receive equitable opportunities to learn and progress."
    }
  ];

  return (
    <main className="min-h-screen pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mb-16 sm:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground mb-6">
            <center>Global Education Crisis; The Philippine Experience</center>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <p className="text-lg sm:text-xl text-muted-foreground font-light m-0">
              Walking through any busy streets of Manila, you cannot help but notice children selling sampaguita, cleaning windshields, and begging for money during school hours while the rest of us are in class. It is a harsh reality where a family’s income determines whether a child attends a decent school or studies under a street lamp. This inequality is not merely a product of poverty — it is a symptom of a deeper, systemic crisis within Philippine education.
              Despite decades of reforms, the country still faces high dropout rates, low literacy outcomes, and a workforce unprepared for the demands of the modern world. Globalization has made the situation more complex: while it opens doors to global knowledge, it also widens the gap between those who have access and those who do not. In the blogs that follow, we examine the state of education quality in the Philippines, the effects of globalization on our learning systems, and the trends shaping the future of our classrooms.
            </p>
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-foreground/5 h-80 sm:h-96 lg:h-128 lg:translate-y-1">
              <img
                src={crisisImageUrl}
                alt={crisisImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 mb-4"
        >
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
            Education in this age, especially in an era when the Internet has made us more interconnected than ever, has fostered discussions and cooperation with others around the world, yet it has also made us more divided. As such, proposals to combat issues regarding the lack of education are in need, and the group has identified the following:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {proposals.map((proposal) => (
              <article
                key={proposal.title}
                className="rounded-2xl border border-border bg-secondary/40 p-6"
              >
                <h4 className="font-serif text-xl font-medium mb-3 text-foreground">
                  {proposal.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed m-0">
                  {proposal.description}
                </p>
              </article>
            ))}
          </div>
        </motion.section>
        
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
