// gallery.js (or you can put this directly in your component file)
export const menuItems = [
  {
    title: "Home",
    href: "/",
    highlight: true,
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Resources",
    submenu: [
      {
        title: "Resource 1",
        href: "/resource1",
      },
      {
        title: "Resource 2",
        href: "/resource2",
      },
    ],
  },
  {
    title: "Others",
    submenu: [
      {
        title: "Team",
        href: "/team",
      },
      {
        title: "Other 2",
        href: "/other2",
      },
    ],
  },
];

// data.js
export const statisticsData = [
  {
    number: "+3",
    label: "Experienced",
  },
  {
    number: "+10",
    label: "Teams",
  },
  {
    number: "+53",
    label: "Clients",
  },
  {
    number: "+40",
    label: "Project Done",
  },
];

export const appointmentsData = [
  {
    title: "Interactive therapy",
    location: "Washington",
    price: "200 EGP",
    date: "Mon, Aug 1",
    time: "10:00 - 12:00",
    image: "/images/test.webp",
  },
  {
    title: "Dynamic psychotherapy",
    location: "Washington",
    price: "200 EGP",
    date: "Sun, Aug 14",
    time: "10:00 - 12:00",
    image: "/images/test.webp",
  },
  {
    title: "Humanitarian treatment",
    location: "Washington",
    price: "200 EGP",
    date: "Thu, Aug 25",
    time: "10:00 - 12:00",
    image: "/images/test.webp",
  },
  {
    title: "Cognitive Behavioral Therapy",
    location: "New York",
    price: "300 EGP",
    date: "Wed, Sep 1",
    time: "14:00 - 16:00",
    image: "/images/test.webp",
  },
  {
    title: "Stress Management",
    location: "Los Angeles",
    price: "250 EGP",
    date: "Tue, Sep 7",
    time: "10:00 - 12:00",
    image: "/images/test.webp",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Holistic approach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
    imageSrc: "/images/test.webp",
    altText: "Holistic approach",
  },
  {
    id: 2,
    title: "Expertise Team",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
    imageSrc: "/images/test.webp",
    altText: "Expertise Team",
  },
  {
    id: 3,
    title: "Accessibility",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
    imageSrc: "/images/test.webp",
    altText: "Accessibility",
  },
];
export const galleryImages = [
  {
    src: "/images/test.webp", 
    alt: "Relaxation",
    caption: "Relaxation",
  },
  {
    src: "/images/test.webp ", 
    alt: "Mindfulness",
    caption: "Mindfulness",
  },
  {
    src: "/images/test.webp ", 
    alt: "Creativity",
    caption: "Creativity",
  },
  {
    src: "/images/test.webp ", 
    alt: "Freedom",
    caption: "Freedom",
  },
  {
    src: "/images/test.webp ", 
    alt: "Meditation",
    caption: "Meditation",
  },
  {
    src: "/images/test.webp ", 
    alt: "Balance",
    caption: "Balance",
  },
  {
    src: "/images/test.webp ", 
    alt: "Harmony",
    caption: "Harmony",
  },
  {
    src: "/images/test.webp ", 
    alt: "Joy",
    caption: "Joy",
  },
  {
    src: "/images/test.webp ", 
    alt: "Balance",
    caption: "Balance",
  },
  {
    src: "/images/test.webp ", 
    alt: "Harmony",
    caption: "Harmony",
  },
  {
    src: "/images/test.webp ", 
    alt: "Joy",
    caption: "Joy",
  },
  {
    src: "/images/test.webp ", 
    alt: "Balance",
    caption: "Balance",
  },
  {
    src: "/images/test.webp ", 
    alt: "Harmony",
    caption: "Harmony",
  },
  {
    src: "/images/test.webp ", 
    alt: "Joy",
    caption: "Joy",
  },
];

// team.js
export const teamImages = [
  {
    src: "/images/test.webp", 
    alt: "Team Working Together",
    width: 600,
    height: 400,
  },
  {
    src: "/images/test.webp", 
    alt: "Counseling Session",
    width: 300,
    height: 200,
  },
  {
    src: "/images/test.webp", 
    alt: "Consultant Working",
    width: 300,
    height: 200,
  },
];
// services.js
export const servicesImages = [
  {
    src: "/images/test.webp",
    alt: "Service Image 1",
    title: "Mental Counseling",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    src: "/images/test.webp",
    alt: "Service Image 2",
    title: "Art Therapy",
    description: "Ultrices aliquet at quam adipiscing.",
  },
  {
    src: "/images/test.webp",
    alt: "Service Image 3",
    title: "Group Sessions",
    description: "Adipiscing fringilla nulla diam lorem.",
  },
  {
    src: "/images/test.webp",
    alt: "Service Image 1",
    title: "Mental Counseling",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    src: "/images/test.webp",
    alt: "Service Image 2",
    title: "Art Therapy",
    description: "Ultrices aliquet at quam adipiscing.",
  },
  {
    src: "/images/test.webp",
    alt: "Service Image 3",
    title: "Group Sessions",
    description: "Adipiscing fringilla nulla diam lorem.",
  },
];

// blogPosts.js
export const blogPosts = [
  {
    id: 1,
    title: "How Mental Health Consultants Can Help...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla...",
    image: "/images/test.webp", 
    link: "#",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla...",
    image: "/images/test.webp", 
    link: "#",
  },
  {
    id: 3,
    title: "How Mental Health Consultants Can Help...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla...",
    image: "/images/test.webp", 
    link: "#",
  },
  {
    id: 4,
    title: "How Mental Health Consultants Can Help...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla...",
    image: "/images/test.webp", 
    link: "#",
  },
  {
    id: 5,
    title: "How Mental Health Consultants Can Help...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla...",
    image: "/images/test.webp", 
    link: "#",
  },
  {
    id: 6,
    title: "How Mental Health Consultants Can Help...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla...",
    image: "/images/test.webp", 
    link: "#",
  },
];
// pricingPlans.js
export const pricingPlans = [
  {
    id: 1,
    name: "Standard Plan",
    price: "$200",
    duration: "/month",
    description:
      "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel.",
    features: [
      "Sessions: 4 sessions /month",
      "Duration: 60 minutes",
      "Individual Therapy",
      "Features: Online Resources",
    ],
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "$500",
    duration: "/month",
    description:
      "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel.",
    features: [
      "Sessions: Unlimited sessions",
      "Duration: 60 minutes",
      "Individual & Group",
      "Features: 24/7 Support",
    ],
    highlighted: true, // for highlighted background
  },
  {
    id: 3,
    name: "Family Plan",
    price: "$600",
    duration: "/month",
    description:
      "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel.",
    features: [
      "Sessions: 8 sessions /month",
      "Duration: 90 minutes",
      "Family & Group",
      "Features: Group Workshops",
    ],
  },
];
// faqData.js
export const faqData = [
  {
    id: 1,
    question: "How can I schedule an appointment?",
    answer:
      "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.",
  },
  {
    id: 2,
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept a variety of insurance providers. Please contact us for more details about the specific insurance plans we accept.",
  },
  {
    id: 3,
    question: "What types of payment do you accept?",
    answer:
      "We accept credit cards, debit cards, and various digital payment methods like PayPal.",
  },
  {
    id: 4,
    question: "Are your services confidential?",
    answer:
      "Yes, all services and consultations are 100% confidential and adhere to privacy regulations.",
  },
];
// footerData.js
export const footerData = {
  logo: {
    name: "Dima Soul",
    description: "Lorem ipsum dolor sit amet consectetur. Convallis est urna.",
    email: "DimaSoul@gmail.com",
    socialLinks: [
      { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
      { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
      { icon: "fab fa-instagram", href: "#", label: "Instagram" },
      { icon: "fab fa-whatsapp", href: "#", label: "WhatsApp" },
    ],
  },
  services: {
    title: "Services",
    items: [
      "Psychotherapy",
      "Mental Counseling",
      "Support Groups",
      "Case Management",
    ],
  },
  contact: {
    title: "Contact",
    details: [
      { icon: "fas fa-phone-alt", text: "+14 5464 8272" },
      { icon: "fas fa-envelope", text: "rona@domain.com" },
      { icon: "fas fa-map-marker-alt", text: "Lazy Tower 192, Burn Swiss" },
    ],
  },
  links: {
    title: "Links",
    items: ["Services Detail", "Pricing", "Gallery", "Team"],
  },
};






export const AboutUSsectionDetails = [
  {
    id: 1,
    title: "Promoting Mental Wellness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus.",
  },
  {
    id: 2,
    title: "Empowering Individuals",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus.",
  },
  {
    id: 3,
    title: "Supporting Personal Growth",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus.",
  },
];

export const welcomeMessageContent = {
  welcomeText: [
    "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus.",
    "Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat. Cursus mattis interdum sem pretium morbi ornare nunc nunc. Pharetra neque ut ipsum nunc pretium nisi vivamus dolor. Suspendisse lectus est sed vulputate ut habitant sagittis semper lacinia.",
  ],
  author: "Alexander G – Founder of Mindfulcare",
};

export const teamContent = {
  title: "Team",
  subtitle: "Caring for Your Mental Health",
  description: "Get to Know Our Team of Experts",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing.",
  images: [
    {
      id: 1,
      src: "/images/test.webp", // Replace with your real image paths
      alt: "Team working together",
    },
    {
      id: 2,
      src: "/images/test.webp",
      alt: "Expert meeting",
    },
    {
      id: 3,
      src: "/images/test.webp",
      alt: "Consultant",
    },
  ],
  buttonText: "See Details",
};


export const successStoryContent = {
  title: "Success Story",
  headline:
    "Breaking the Stigma The Success Story of a Mental Health Consultant",
  storyItems: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.",
      icon: "/images/playIcon.svg", // Path to your SVG file
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.",
      icon: "/images/playIcon.svg",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.",
      icon: "/images/playIcon.svg",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.",
      icon: "/images/playIcon.svg",
    },
  ],
  imageSrc: "/images/test.webp", // Placeholder image, replace with your image path
  imageAlt: "Mental Health Consultant",
};




export const servicesContent = {
  title: "Services",
  subtitle: "Empowering Minds Our Mental Health Consulting Services",
  services: [
    {
      id: 1,
      slug: "mental-counseling", // Used for dynamic routing
      title: "Mental Counseling",
      description: "Short description for hover on card.",
      headerDescription:
        "This is the description in the service details header.",
      detailedDescription:
        "This is the detailed description after the hero image in the service details page.",
      cardImageSrc: "/images/test.webp", // Small image for main card
      heroImageSrc: "/images/test.webp", // Hero image for the service detail page
      cardsTitle: "Mental Counseling Method",
      video: {
        src: "/videos/mental-counseling.mp4",
        title: "Breaking the Stigma Mental Health Counseling",
        description: "Watch our video on mental health counseling.",
      },
      methodCards: [
        {
          icon: "/images/test.svg",
          title: "Cognitive Behavioral Therapy",
          description: "Description for Cognitive Behavioral Therapy.",
        },
        {
          icon: "/images/test.webp",
          title: "Humanistic Therapy",
          description: "Description for Humanistic Therapy.",
        },
        {
          icon: "/images/test.webp",
          title: "Psychoanalytic Therapy",
          description: "Description for Psychoanalytic Therapy.",
        },
        {
          icon: "/images/test.webp",
          title: "Mindfulness Based Therapy",
          description: "Description for Mindfulness Based Therapy.",
        },
      ],
    },
    {
      id: 2,
      slug: "therapy-sessions",
      title: "Therapy Sessions",
      description: "Short description for hover on card.",
      headerDescription:
        "This is the description in the service details header.",
      detailedDescription:
        "This is the detailed description after the hero image in the service details page.",
      cardImageSrc: "/images/test.webp",
      heroImageSrc: "/images/test.webp",
      cardsTitle: "therapy-sessions Method",
      video: {
        src: "/videos/therapy-sessions.mp4",
        title: "Discover Our Therapy Sessions",
        description: "Learn about our therapy sessions through this video.",
      },
      methodCards: [
        {
          icon: "/images/test.webp",
          title: "Group Therapy",
          description: "Description for Group Therapy.",
        },
        {
          icon: "/images/test.webp",
          title: "Individual Therapy",
          description: "Description for Individual Therapy.",
        },
        {
          icon: "/images/test.webp",
          title: "Family Therapy",
          description: "Description for Family Therapy.",
        },
        {
          icon: "/images/test.webp",
          title: "Couples Therapy",
          description: "Description for Couples Therapy.",
        },
      ],
    },
    // Add more services as needed
  ],
};

export const teamMembers = [
  {
    title: "John D.",
    role: "Cardiologist",
    image: "/images/team1.jpg",
    caption: "Harry J - Psychologist",
  },
  {
    title: "Sarah K.",
    role: "Neurologist",
    image: "/images/team2.jpg",
    caption: "Harry J - Psychologist",
  },
  {
    title: "Harry J.",
    role: "Psychologist",
    image: "/images/team3.jpg",
    caption: "Harry J - Psychologist",
  },
  {
    title: "Anna M.",
    role: "Pediatrician",
    caption: "Harry J - Psychologist",
    image: "/images/team4.jpg",
  },
  {
    title: "Dr. David",
    role: "Surgeon",
    image: "/images/team5.jpg",
    caption: "Harry J - Psychologist",
  },
  {
    title: "Emily R.",
    role: "Dermatologist",
    image: "/images/team6.jpg",
    caption: "Harry J - Psychologist",
  },
  {
    title: "Michael B.",
    role: "Oncologist",
    image: "/images/team7.jpg",
    caption: "Harry J - Psychologist",
  },
];
