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
    title: "How Good is the Quality of Education in the Philippines?",
    excerpt: "An evidence-based look at the current quality of Philippine education, from low completion rates and licensure outcomes to the long-term impact on national development.",
    content: [
      "In the Philippines, the quality of education and training faces significant challenges, with the country ranking 71st place in the Global Competitiveness Index for higher education and 110th in primary education quality. This 'distressing reality' is highlighted by a licensure examination pass rate of less than 34%, which has fueled a massive 'brain drain'—a cycle where the country’s most skilled workers, such as teachers, migrate overseas for better pay, often in roles far below their professional qualifications.",
      "The Philippine educational system is facing a severe crisis where the ideal of education as a tool for national development starkly contrasts with what's happening in real life.  ",
      "Despite significant investments by the government intended to alleviate the poverty issue and boost the national economy, the system suffers from alarming rates of decline: out of ten students who start the first grade, only one will eventually complete tertiary education. This failure to adequately prepare students leads to a cascade of societal issues, including high dropout rates driven by child labor, low functional literacy, and widespread unemployment or underemployment among college graduates, ultimately widening the wealth gap and hindering the country's progress.",
    ],
    author: {
      name: "Robin Montoya",
      avatarInitials: "RM",
      role: "College Student"
    },
    date: "March 12, 2026",
    tag: "Education Quality",
    readTime: "8 min read",
    // coffee and book aesthetic
    imageUrl: "https://www.globalgiving.org/pfil/56830/ph_56830_221308.jpg",
    imageAlt: "A cozy scene of a book and a cup of coffee on a wooden table surrounded by autumn leaves"
  },
  {
    id: "4-day-work-week",
    title: "  The Consequences of Globalization to the Philippine Education System",
    excerpt: "A student perspective on how globalization reshapes Philippine education through better access to knowledge, while also intensifying digital inequality, brain drain, and commercialization.",
    content: [
      "As a college student, it has contributed to me in ways that have affected me both positively and negatively, with more emphasis on the positive. It has provided me with access to global knowledge through e-journals, academic papers, and research tools. Yet, it is for this reason that I was enlightened that it also brought about afflictions that continue to affect communities to this day. Globalization’s effects on education have introduced numerous advantages and disadvantages, with lasting impacts on learning as a whole(Masuhay et al., 2020). Today, we shall have a deep discussion of both perspectives and reach a conclusion, with a proper call to action to address moving forward.",
      "**Positive Consequences**",
      "Globalization in education has certainly improved education to a degree that has made us more interconnected than ever, especially with the Internet at our disposal. This has made knowledge more accessible than ever, with an open-source mindset towards universal access to education. Additionally, there are academic institutions that have a dedicated public e-journal for access to a vast array of research papers, available to researchers, students, and even the general public. It has also influenced the Philippine educational system,  which, in turn, led to the creation of K-12. This system was designed to conform to international standards, rival those of countries with similar systems (namely the USA, India, China, and many others), and produce globally competitive graduates who are all-rounded and job-ready (DepED, 2024).",
      "**Negative Consequences**",
      "While it is evident that globalization has certainly impacted education in the Philippines, it does come with drawbacks. The Digital Divide is one of its major negative impacts, essentially the inequality in access to educational resources in more rural regions of the country. According to Frąckiewicz (2025), factors such as electronic and electricity scarcity in these regions are also major contributors to this inequality, which, in turn, results in roughly 16% of Filipinos remaining offline in 2025. Another liability of it in the education in the Philippines is Brain Drain, the migration of talented professionals to other countries with better opportunities. Higher compensation, quality of life, limited opportunities, and bad job conditions are the usual catalysts, which, in turn, leave a shortage in skilled professionals in certain fields, most notably in IT, healthcare, and engineering sectors(Katlene O. & Cacho-Laurejas, 2025), and the weakening of the local educational system. Lastly, Privatization and marketization of education, including the presence of private educational institutions and international companies that sell courses, have called into question equity and access to education. When I talk about private schools, I do not mean all private schools; rather, I mean institutions that prioritize profit over education, called diploma mills. Diploma mills are fraudulent organizations that charge money for a diploma without rigorous student learning (Bull, 2019). These are very rampant in the Philippines, as numerous students have reported on social media that it is nothing short of a “scam and money-grabbing scheme that does not enrich their minds but rather the institution’s own pockets.”",
      "Globalization has transformed education in both positive and negative ways. It enhanced the scope of our education while introducing the challenges of inequality and privatization. These challenges have certainly not gone unnoticed, as the Philippine government has introduced policies and reforms to combat them, such as the National Education and Workforce Development Plan, which aims to address “systemic challenges via an evidence-based approach” (Republika News, 2026). As the world evolves and many adversities may surface, the government must remain resilient in improving the Philippine educational system, as Jose Rizal said, “Ang kabataan ang pag-asa ng bayan.”"
    ],
    author: {
      name: "Trevor Garcia",
      avatarInitials: "TG",
      role: "College Student"
    },
    date: "February 28, 2026",
    tag: "Globalization",
    readTime: "15 min read",
    // clean minimalist workspace
    imageUrl: "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/philippines-fastest-growing-industries.jpg.optimal.jpg",
    imageAlt: "A clean, minimalist desk setup with a laptop, notebook, and natural light"
  },
  {
    id: "hidden-gems-southeast-asia",
    title: "New and Emerging Trends in Philippine Education",
    excerpt: "A quick overview of key trends in Philippine education, including classroom technology, critical-thinking focused instruction, and the continuing challenge of unequal access.",
    content: [
      "The Philippines education is transforming as schools respond to globalization, technology and economic challenges. While overcrowded classrooms, limited resources and unequal access to education remains a major concern.",
      "Technology has become one of the major trends in education. One instance is the use of technology in the classrooms. Many schools in the Philippines use online platforms and digital platforms to use in the education of their students. This became a common use after online learning was expanded during the pandemic era.",
      "Another important trend is critical thinking as a learning focus. In the past, classrooms mainly focused on memorization or repetition, but this newer type of teaching method encourages students to analyze the questions and solve them correspondingly (Sison, 2017). Critical thinking might be a part of educational goals, although it might still be difficult to fully apply because of teachers' heavy work loads.",
      "Globalization continues to influence the Philippines education by pushing schools to match the international standards. Students are now encouraged to develop communications skills, digital literacy and the adaptability to be effective in the global workforce (Utama, 2025).",
      "Despite these improvements, unequal access to education remains the major challenge because a lot of schools still lack the financial capability to provide devices, internet access and resources (World Bank, 2026). For these changes to be successful, the education system must ensure that resources and opportunities are distributed fairly across everyone."
    ],
    author: {
      name: "Carl Celestial",
      avatarInitials: "CC",
      role: "College Student"
    },
    date: "January 15, 2026",
    tag: "Education Trends",
    readTime: "5 min read",
    // lush southeast asia landscape
    imageUrl: "https://common.usembassy.gov/wp-content/uploads/sites/24/2022/12/12-09-2022-PR-U.S.-Philippines-Celebrate-Five-Years-of-Partnership-to-Improve-Filipino-Childrens-Reading-Skills-2-1024x576.jpg",
    imageAlt: "Stunning lush green mountains and a serene river in Southeast Asia"
  }
];
