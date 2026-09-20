const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Users Reached" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 3000, suffix: "+", label: "Daily Visitors on Apex" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React / Next.js Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three.js Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git & Full-Stack Workflow",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React / Next.js Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Full-Stack Workflow",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Mentor built Apex from the ground up into an education platform serving thousands of learners daily. His full-stack ownership — from Next.js frontend to Node.js APIs — was invaluable.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full-Stack Developer — Apex Education Platform",
    date: "January 2024 - Present",
    responsibilities: [
      "Built and scaled an education platform helping students study more effectively, reaching 3,000 daily visitors and 2,000+ registered users.",
      "Developed the frontend with React/Next.js and backend APIs with Node.js, backed by MongoDB/MySQL.",
      "Improved performance, signup flow and study-experience UX based on real learner feedback.",
    ],
  },
  {
    review:
      "Mentor's work on Agent With Me turned a fully manual rental process into a completely digital application. He approaches product problems with real ownership.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full-Stack Developer — Agent With Me",
    date: "June 2023 - December 2023",
    responsibilities: [
      "Built a completely digital rental application serving 100+ users, from listings to booking flow.",
      "Worked across React frontend and Node.js/Python backend services with database-backed rentals.",
      "Shipped payments-ready flows, user accounts and a mobile-friendly experience.",
    ],
  },
  {
    review:
      "Mentor's AI work on Stefie AI and Oled Studio delivered realtime experiences — live conference translation and Nigerian-accented audio generation — with impressive quality and speed.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full-Stack / AI Developer — Stefie AI & Oled Studio",
    date: "June 2022 - May 2023",
    responsibilities: [
      "Built Stefie AI, an online realtime translation engine for conferences, using Python and React.",
      "Built Oled Studio, a realtime accented audio generator focused on Nigerian-accented audio generation.",
      "Integrated streaming APIs, WebSockets and Three.js visualizations for realtime feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Mentor. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Mentor was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Mentor was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mentor's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mentor is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Mentor was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Mentor’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Mentor was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/insta.png",
    url: "https://github.com/kenmentor",
  },
  {
    name: "email",
    imgPath: "/images/fb.png",
    url: "mailto:mentorchibuzo@gmail.com",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/kenmentorc97179",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/mentor-chibuzo-865835320/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
