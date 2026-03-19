export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    avatarInitials: string;
    role: string;
  };
  date: string;
  tag: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
}

export const posts: BlogPost[] = [
  {
    id: "art-of-slow-living",
    title: "The Art of Slow Living",
    excerpt: "In a world obsessed with speed and productivity, discovering the profound joy of intentionally slowing down and savoring the quiet moments.",
    content: [
      "We live in an era where busyness is often worn as a badge of honor. Our calendars are full, our minds are cluttered, and our days blur together in a fast-paced sprint toward the next weekend. But what happens when we decide to step off the treadmill?",
      "Slow living isn't about doing nothing; it's about doing the right things with intention. It is the conscious choice to savor the morning coffee instead of gulping it down during a commute. It is choosing to read a chapter of a book rather than endlessly scrolling through social media feeds before bed.",
      "The philosophy traces its roots back to the slow food movement in Italy, a direct rebellion against the fast-food culture that threatened local traditions. Today, it has permeated every aspect of lifestyle—from fashion and travel to how we consume information and build relationships.",
      "To begin practicing slow living, start small. Designate one hour of your evening as a 'no-screen' zone. Cook a meal from scratch and pay attention to the aromas and textures. Walk without a destination. You will quickly find that by doing less, you actually experience so much more."
    ],
    author: {
      name: "Sarah Mitchell",
      avatarInitials: "SM",
      role: "Lifestyle Editor"
    },
    date: "March 12, 2026",
    tag: "Lifestyle",
    readTime: "4 min read",
    // coffee and book aesthetic
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "A cozy scene of a book and a cup of coffee on a wooden table surrounded by autumn leaves"
  },
  {
    id: "4-day-work-week",
    title: "Why I Switched to a 4-Day Work Week",
    excerpt: "A personal reflection on stepping away from the traditional 40-hour grind, navigating the transition, and the surprising impact on my overall output.",
    content: [
      "For the first decade of my career, I was entirely subscribed to the hustle culture. Fifty-hour weeks were the baseline, and being 'always on' was an expectation I placed heavily on myself. But after experiencing severe burnout, I realized something had to change. I decided to experiment with a 4-day work week.",
      "The transition wasn't seamless. At first, squeezing five days of tasks into four felt like a recipe for more stress, not less. I had to become ruthlessly protective of my time. Meetings were slashed, asynchronous communication became the default, and deep-work blocks were sacred.",
      "The most surprising outcome? My absolute output didn't drop. In fact, the quality of my work improved. Knowing I had three full days to rest, explore hobbies, and disconnect meant I returned to my desk on Monday with renewed energy and sharper focus.",
      "We often conflate hours spent at a desk with actual value created. The 4-day work week forced me to divorce time from productivity, and in doing so, I didn't just reclaim my Fridays—I reclaimed my life."
    ],
    author: {
      name: "James Chen",
      avatarInitials: "JC",
      role: "Productivity Writer"
    },
    date: "February 28, 2026",
    tag: "Productivity",
    readTime: "6 min read",
    // clean minimalist workspace
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "A clean, minimalist desk setup with a laptop, notebook, and natural light"
  },
  {
    id: "hidden-gems-southeast-asia",
    title: "Exploring Hidden Gems in Southeast Asia",
    excerpt: "Step off the beaten path and discover the lesser-known wonders of Vietnam, Laos, and Cambodia for an unforgettable and respectful adventure.",
    content: [
      "Southeast Asia has long been a magnet for backpackers and luxury travelers alike. But beyond the bustling streets of Bangkok and the crowded beaches of Bali lie quiet, relatively untouched sanctuaries waiting to be explored.",
      "Take, for example, the karst landscapes of Phong Nha-Kẻ Bàng National Park in Vietnam. While Ha Long Bay draws the masses, Phong Nha offers arguably more spectacular caves and underground rivers, complete with a sleepy village atmosphere where locals genuinely welcome you.",
      "In Laos, skip the increasingly commercialized Vang Vieng and head south to the Bolaven Plateau. Here, you can rent a scooter and spend days driving past cascading waterfalls, remote coffee plantations, and traditional villages, feeling a world away from modern anxieties.",
      "Traveling off the beaten path comes with a responsibility. It requires us to be mindful guests—respecting local customs, supporting family-run businesses rather than massive chains, and treading lightly on the environment. When done right, finding these hidden gems transforms a simple vacation into a deeply meaningful journey."
    ],
    author: {
      name: "Priya Sharma",
      avatarInitials: "PS",
      role: "Travel Journalist"
    },
    date: "January 15, 2026",
    tag: "Travel",
    readTime: "5 min read",
    // lush southeast asia landscape
    imageUrl: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Stunning lush green mountains and a serene river in Southeast Asia"
  }
];
