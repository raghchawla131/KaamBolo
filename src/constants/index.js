import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Find a service",
    url: "/find-a-service", // Updated to a route path
  },
  {
    id: "1",
    title: "Post a job",
    url: "/post-a-job", // Updated to a route path
  },
  {
    id: "2",
    title: "Messages",
    url: "/messages", // Updated to a route path
  },
  {
    id: "3",
    title: "My bookings",
    url: "/my-bookings", // Updated to a route path
  },
  {
    id: "4",
    title: "New account",
    url: "/signup", // Already a route
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login", // Already a route
    onlyMobile: true,
  },
];


export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const customers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    email: "rajesh.sharma@example.com",
    phone: "+91 9876543210",
    latitude: 28.6139,   // New Delhi
    longitude: 77.209,
    address: "Connaught Place, New Delhi"
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@example.com",
    phone: "+91 9123456789",
    latitude: 19.076,    // Mumbai
    longitude: 72.8777,
    address: "Andheri West, Mumbai"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+91 9988776655",
    latitude: 23.0225,   // Ahmedabad
    longitude: 72.5714,
    address: "Navrangpura, Ahmedabad"
  },
  {
    id: 4,
    name: "Neha Agarwal",
    email: "neha.agarwal@example.com",
    phone: "+91 8765432109",
    latitude: 13.0827,   // Chennai
    longitude: 80.2707,
    address: "T. Nagar, Chennai"
  },
  {
    id: 5,
    name: "Vikram Khanna",
    email: "vikram.khanna@example.com",
    phone: "+91 8877665544",
    latitude: 22.5726,   // Kolkata
    longitude: 88.3639,
    address: "Salt Lake, Kolkata"
  }
];

export const workers = [
  // {
  //   id: 1,
  //   name: "Sunil Verma",
  //   skill: "Electrician",
  //   phone: "+91 9654321890",
  //   latitude: 28.6189,   // Within 5 km of New Delhi
  //   longitude: 77.2140,
  //   experience: "5 years",
  //   profilePicUrl: "https://images.unsplash.com/photo-1730302737916-2a1871ff3ec7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 2,
  //   name: "Anjali Mehta",
  //   skill: "Plumber",
  //   phone: "+91 9321456780",
  //   latitude: 28.6090,   // Within 5 km of New Delhi
  //   longitude: 77.2040,
  //   experience: "3 years",
  //   profilePicUrl: "https://images.unsplash.com/photo-1730302737916-2a1871ff3ec7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  {
    id: 3,
    name: "Ravi Kumar",
    skill: "Carpenter",
    phone: "+91 9812345678",
    latitude: 28.6150,   // Within 5 km of New Delhi
    longitude: 77.2100,
    experience: "7 years",
    profilePicUrl: "https://images.unsplash.com/photo-1730302737916-2a1871ff3ec7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Deepika Joshi",
    skill: "Painter",
    phone: "+91 9212345678",
    latitude: 25.3176,   // Lucknow
    longitude: 82.9739,
    experience: "4 years",
    profilePicUrl: "https://images.unsplash.com/photo-1730302737916-2a1871ff3ec7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Manoj Shetty",
    skill: "Electrician",
    phone: "+91 9876501234",
    latitude: 15.3173,   // South Goa
    longitude: 74.1193,
    experience: "6 years",
    profilePicUrl: "https://images.unsplash.com/photo-1730302737916-2a1871ff3ec7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];