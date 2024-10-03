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
        title: "Blog",
        href: "/blog",
      },
      // {
      //   title: "Resource 2",
      //   href: "/resource2",
      // },
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
        title: "Contact Us",
        href: "/contact-us",
      },
      {
        title: "Calendar",
        href: "/calendar",
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
    id: 1,
    title: "Interactive therapy",
    location: "Washington",
    price: "200 EGP",
    date: "Mon, Aug 1",
    time: "10:00 - 12:00",
    image: "/images/latest_girl_img.webp",
  },
  {
    id: 2,
    title: "Dynamic psychotherapy",
    location: "Washington",
    price: "200 EGP",
    date: "Sun, Aug 14",
    time: "10:00 - 12:00",
    image: "/images/latest_girl_img.webp",
  },
  {
    id: 3,
    title: "Humanitarian treatment",
    location: "Washington",
    price: "200 EGP",
    date: "Thu, Aug 25",
    time: "10:00 - 12:00",
    image: "/images/latest_girl_img.webp",
  },
  {
    id: 4,
    title: "Cognitive Behavioral Therapy",
    location: "New York",
    price: "300 EGP",
    date: "Wed, Sep 1",
    time: "14:00 - 16:00",
    image: "/images/latest_girl_img.webp",
  },
  {
    id: 5,
    title: "Stress Management",
    location: "Los Angeles",
    price: "250 EGP",
    date: "Tue, Sep 7",
    time: "10:00 - 12:00",
    image: "/images/latest_girl_img.webp",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Holistic approach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
    imageSrc: "/images/Holistic.png",
    altText: "Holistic approach",
  },
  {
    id: 2,
    title: "Expertise Team",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
    imageSrc: "/images/Expertise.png",
    altText: "Expertise Team",
  },
  {
    id: 3,
    title: "Accessibility",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
    imageSrc: "/images/Accessibility.png",
    altText: "Accessibility",
  },
];
export const galleryImages = [
  {
    src: "/images/Gallery/gallery_image_3.webp",
    alt: "Relaxation",
    caption: "Relaxation",
  },
  {
    src: "/images/Gallery/gallery_image_2.webp ",
    alt: "Mindfulness",
    caption: "Mindfulness",
  },
  {
    src: "/images/Gallery/gallery_image_3.webp ",
    alt: "Creativity",
    caption: "Creativity",
  },
  {
    src: "/images/Gallery/gallery_image_4.webp ",
    alt: "Freedom",
    caption: "Freedom",
  },
  {
    src: "/images/Gallery/gallery_image_5.webp ",
    alt: "Meditation",
    caption: "Meditation",
  },
  {
    src: "/images/Gallery/gallery_image_6.webp ",
    alt: "Balance",
    caption: "Balance",
  },
  {
    src: "/images/Gallery/gallery_image_7.webp ",
    alt: "Harmony",
    caption: "Harmony",
  },
  {
    src: "/images/Gallery/gallery_image_8.webp ",
    alt: "Joy",
    caption: "Joy",
  },
  {
    src: "/images/Gallery/gallery_image_9.webp ",
    alt: "Balance",
    caption: "Balance",
  },
  {
    src: "/images/Gallery/gallery_image_10.webp ",
    alt: "Harmony",
    caption: "Harmony",
  },
  {
    src: "/images/Gallery/gallery_image_1.webp ",
    alt: "Joy",
    caption: "Joy",
  },
  {
    src: "/images/Gallery/gallery_image_2.webp ",
    alt: "Balance",
    caption: "Balance",
  },
  {
    src: "/images/Gallery/gallery_image_3.webp ",
    alt: "Harmony",
    caption: "Harmony",
  },
  {
    src: "/images/Gallery/gallery_image_4.webp ",
    alt: "Joy",
    caption: "Joy",
  },
];

// team.js
export const teamImages = [
  {
    src: "/images/team_img_1.webp",
    alt: "Team Working Together",
    width: 600,
    height: 400,
  },
  {
    src: "/images/team_img_2.webp",
    alt: "Counseling Session",
    width: 300,
    height: 200,
  },
  {
    src: "/images/team_img_3.webp",
    alt: "Consultant Working",
    width: 300,
    height: 200,
  },
];
// services.js
export const servicesImages = [
  {
    src: "/images/service_img_1.webp",
    alt: "Service Image 1",
    title: "Mental Counseling",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    src: "/images/service_img_2.webp",
    alt: "Service Image 2",
    title: "Art Therapy",
    description: "Ultrices aliquet at quam adipiscing.",
  },
  {
    src: "/images/service_img_3.webp",
    alt: "Service Image 3",
    title: "Group Sessions",
    description: "Adipiscing fringilla nulla diam lorem.",
  },
  {
    src: "/images/service_img_4.webp",
    alt: "Service Image 1",
    title: "Mental Counseling",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    src: "/images/service_img_2.webp",
    alt: "Service Image 2",
    title: "Art Therapy",
    description: "Ultrices aliquet at quam adipiscing.",
  },
  {
    src: "/images/service_img_4.webp",
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
    fullTitle:
      "How Mental Health Consultants Can Help Individuals and Organizations Thrive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. 
      In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam 
      porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum.
      `,
    link: "/blog/1",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    fullTitle: "The Importance of Mental Health Consultants in the Workplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
      Nunc ut sem vitae risus tristique posuere.
      `,
    link: "/blog/2",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    fullTitle: "The Importance of Mental Health Consultants in the Workplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
      Nunc ut sem vitae risus tristique posuere.
      `,
    link: "/blog/2",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    fullTitle: "The Importance of Mental Health Consultants in the Workplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
      Nunc ut sem vitae risus tristique posuere.
      `,
    link: "/blog/2",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    fullTitle: "The Importance of Mental Health Consultants in the Workplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
      Nunc ut sem vitae risus tristique posuere.
      `,
    link: "/blog/2",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    fullTitle: "The Importance of Mental Health Consultants in the Workplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
      Nunc ut sem vitae risus tristique posuere.
      `,
    link: "/blog/2",
  },
  {
    id: 2,
    title: "How Mental Health Consultants Can Help...",
    fullTitle: "The Importance of Mental Health Consultants in the Workplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis...",
    image: "/images/Gallery/gallery_image_2.webp",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
      Nunc ut sem vitae risus tristique posuere.
      `,
    link: "/blog/2",
  },
  // Add more blog posts as needed
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
      { icon: "/images/Call.svg", text: "+14 5464 8272" },
      { icon: "/images/Message.svg", text: "rona@domain.com" },
      { icon: "/images/Location.svg", text: "Lazy Tower 192, Burn Swiss" },
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
  imageSrc: "/images/about_girl.webp", // Placeholder image, replace with your image path
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
        src: "/images/video.mp4",
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
        src: "/images/video.mp4",
        title: "Discover Our Therapy Sessions",
        description: "Learn about our therapy sessions through this video.",
      },
      methodCards: [
        {
          icon: "/images/ser1.svg",
          title: "Group Therapy",
          description: "Description for Group Therapy.",
        },
        {
          icon: "/images/ser2.svg",
          title: "Individual Therapy",
          description: "Description for Individual Therapy.",
        },
        {
          icon: "/images/ser3.svg",
          title: "Family Therapy",
          description: "Description for Family Therapy.",
        },
        {
          icon: "/images/ser4.svg",
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

export const contactInfo = {
  title: "We'd Love to Hear From You",
  subtitle: "Get in Touch",
  description:
    "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum.",
  contactDetails: [
    {
      id: 1,
      icon: "/images/phone.svg", // Replace with your actual icon path
      label: "Phone Number",
      info: "+987 654 3210",
    },
    {
      id: 2,
      icon: "/images/time.svg", // Replace with your actual icon path
      label: "Business Hours",
      info: "Mon-Fri, 07:00-16:00",
    },
    {
      id: 3,
      icon: "/images/loc.svg", // Replace with your actual icon path
      label: "Address",
      info: "7676 Arden Avenue, Ginashire",
    },
  ],
  form: {
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    messagePlaceholder: "Enter your message",
    buttonText: "Send Message",
  },
};

export const mapInfo = {
  title: "Mapping Out Mental Health Consulting Strategies",
  subtitle: "Maps",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.484578982694!2d-79.38949648426744!3d43.6454646791219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d54d241bb7%3A0x7b82c13158c40f21!2sRogers%20Centre!5e0!3m2!1sen!2sca!4v1614108256400!5m2!1sen!2sca", // Embed URL from Google Maps
};

export interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Interactive therapy",
    start: new Date(2024, 7, 1, 10, 0), // Year, Month (0-based), Day, Hour, Minute
    end: new Date(2024, 7, 1, 12, 0),
  },
  {
    id: 2,
    title: "Dynamic psychotherapy",
    start: new Date(2024, 7, 14, 8, 0),
    end: new Date(2024, 7, 14, 10, 0),
  },
  {
    id: 3,
    title: "Humanitarian treatment",
    start: new Date(2024, 7, 25, 12, 0),
    end: new Date(2024, 7, 25, 14, 0),
  },
];

// content.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "George J",
    role: "Client",
    message:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis.",
    image: "/images/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Sarah P",
    role: "Client",
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    image: "/images/testimonial2.jpg",
  },
  {
    id: 3,
    name: "John D",
    role: "Client",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "/images/testimonial3.jpg",
  },
];
