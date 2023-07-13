import {
  envBlog,
  iotExplained,
  symbolicValues,
  userIconImg,
} from "@/public/assets/img";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const navLinks = [
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Clients",
    url: "#clients",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "About Us", url: "/about", icon: "" },
      { title: "Why Ghana?", url: "/", icon: "" },
      { title: "Our People", url: "/", icon: "" },
      { title: "Featured Content", url: "/", icon: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/", icon: "" },
      { title: "Blog", url: "/", icon: "" },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        title: "LinkedIn",
        url: "https://linkedin.com/company/turntabl",
        icon: <FaLinkedin />,
      },
      {
        title: "Twitter",
        url: "https://twitter.com/turntablio",
        icon: <FaTwitter />,
      },
      {
        title: "Youtube",
        url: "https://youtube.com/@turntablgh",
        icon: <FaYoutube />,
      },
      { title: "Github", url: "/", icon: <FaGithub /> },
      {
        title: "Medium",
        url: "https://medium.com/@turntabl.io",
        icon: <FaMedium />,
      },
    ],
  },
];

export const values = [
  {
    number: "01",
    title: "Innovative",
    description:
      "Turntabl is changing the way the world thinks about software development.",
  },
  {
    number: "02",
    title: "Experts",
    description:
      "Turntabl has considerable experience in delivering successful projects.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Turntabl is built on the ideal of contributing towards creating a better future for everyone they come across.",
  },
  {
    number: "04",
    title: "Unique",
    description:
      "Turntabl offers world-leading training to their associates before engaging in client projects.",
  },
];

export const clientReview = [
  {
    review:
      "Congratulations to turntabl for winning the Breaking the Status Quo Award at our Member Meeting in London ...",
    name: "Finos",
    title: "Finos",
    image: userIconImg,
  },
];

export const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide a wide rage of services including but not limited to Application Development, Software Consultancy and Project management. Checkout our services page.",
  },
  {
    question: "Where can I find turntabl?",
    answer:
      "Turntabl has offices on the 5th floor of Advantage place at Ridge West Accra.",
  },
  {
    question: "Is Turntabl based in Ghana?",
    answer:
      "Turntabl has offices in London (UK) and Accra (Ghana). But majority of our software engineers are located in Ghana.",
  },
  {
    question: "What is TLC?",
    answer:
      "TLC is a training program we offer to all software engineers we employ to help them reach the levels necessary to work on client projects.",
  },
  {
    question: "Can software engineers work with other experts?",
    answer:
      "Our projects mainly solve business problems, so our engineers collaborate with diverse stakeholders. Examples include product owners, business analysts, operations teams, and QA.",
  },
];

export const blogPosts = [
  {
    image: envBlog,
    date: "26 June 2023",
    title: "Is environmental sustainability pretentious or boring?",
    link: "https://medium.com/@turntabl.io/is-environmental-sustainability-pretentious-or-boring-a50e5b8008af",
    description:
      "Recently, a few turntablrs and I attended a live, environmental podcast with GOTO and participated in some intriguing conversations about sustainability.",
  },
  {
    image: symbolicValues,
    date: "15 May 2023",
    title:
      "Symbolic Values: Why We Wove Our Software Consultancy from Ghana's Historic Fabrics",
    link: "https://medium.com/@turntabl.io/symbolic-values-why-we-wove-our-software-consultancy-from-ghanas-historic-fabrics-69fb0dc189ba",
    description:
      "You may have noticed one of these symbols on local traditional clothing and wondered why it's there. What is it? Where does it come from?",
  },
  {
    image: iotExplained,
    date: "02 May 2023",
    title: "IoT Explained: Why The Internet of Things is Our Future",
    link: "https://medium.com/@turntabl.io/iot-explained-why-the-internet-of-things-is-our-future-dbf9107d7382",
    description:
      "Today, we're thinking about the Internet of Things. It's the automation technology that's propelled our businesses and lifestyles well into the 21st century. Here's the turntabl take on the global efficiency revolution.",
  },
];
export const histories = [
  {
    title: "Global Code",
    date: "2017 - Present",
    icon: "image",
    iconBg: "#383E56",
    story: "Global Code began in 2017 in Koforidua, Ghana. Eighteen students and one instructor navigated (and built!) a curriculum based on practical, real-world technology that software engineers use every day: linux, python, git, and platforms like heroku. Global Code is impact-driven and reaches significantly more students each year, with the help of volunteering instructors.",
  },
  {
    title: "Turntabl",
    date: "2019 - Present",
    icon: "image",
    iconBg: "#383E56",
    story: "In 2019, a pioneering software engineering agency was established with a strong foothold in both Ghana and the UK, creating a powerful cross-cultural collaboration. Fueled by a shared passion for technology and a drive for excellence, the founders embarked on a mission to revolutionize the software engineering landscape. From day one, the agency set out to bridge the gap between emerging technologies and practical business solutions, catering to clients across industries and geographies. With a diverse team of talented engineers and developers, the agency quickly gained recognition for its innovative approach, delivering cutting-edge software solutions that exceeded client expectations.",
  },
];

export const founders = [
  {
    info: {
      name: "Sam",
      position: "CEO",
      links: [
        {
          icon: <FaTwitter />,
          url: "https://twitter.com/sammoorhouse?s=20",
        },
      ],
      content: "",
    },
    image: "/assets/img/SamMoorhouse.jpeg",
  },
  {
    info: {
      name: "Obeng",
      position: "CTO",
      links: [
        {
          icon: <FaTwitter />,
          url: "",
        },
      ],
      content: "",
    },
    image: "/assets/img/Silhoutte.jpeg",
  },
];

export const about_slider = [
  {
    url: "/assets/img/tt1.jpeg",
  },
  {
    url: "/assets/img/tt12.jpeg",
  },
  {
    url: "/assets/img/IMG_9947.jpg",
  },

  {
    url: "/assets/img/fair.jpg",
  },
  {
    url: "/assets/img/IMG_9383.jpg",
  },
];

export const ourPeoples = [
  {
    info: {
      name: "Giselle",
      position: "Programme Coordinator",
      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/giselle-partington-osei-aa895ba/",
        },
      ],
    },
    image: {
      url: "/assets/img/Giselle.jpeg",
      width: 800,
      height: 800,
    },
  },
  {
    info: {
      name: "Ri",
      position: "Engineering Team Lead",
      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://linkedin.com/in/riyanat/",
        },
      ],
    },
    image: {
      url: "/assets/img/Ri.jpeg",
      width: 800,
      height: 800,
    },
  },
  {
    info: {
      name: "Stoirm",
      position: "Chief Operating Office",

      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/stoirm/",
        },
      ],
    },
    image: {
      url: "/assets/img/Stoirm.jpeg",
      width: 800,
      height: 800,
    },
  },
  {
    info: {
      name: "Chimaobi",
      position: "Engineering Team Lead",

      content:
        "Chima has over 5 years of experience in research and production as a software engineer and data specialist. With a postgraduate degree in Information Systems from the University of Ibadan, Chima is also keen to acquire skills in new technologies, provide value, and has an unending enthusiasm for solving problems. Chima is fascinated by mentoring, teaching and career development, which aligns with the core values of turntabl.",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://linkedin.com",
        },
      ],
    },
    image: {
      url: "/assets/img/Chimaobim Ibebunjoh .png",
      width: 1999,
      height: 1333,
    },
  },
  {
    info: {
      name: "Aisha",
      position: "Engineering Team Lead",

      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/aisha-moradeyo-animashaun/",
        },
      ],
    },
    image: {
      url: "/assets/img/Aisha.jpeg",
      width: 1999,
      height: 1333,
    },
  },
  {
    info: {
      name: "Kicki",
      position: "Engineering Team Lead",

      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/kicki-frisch-9b5676/",
        },
      ],
    },
    image: {
      url: "/assets/img/Kicki.jpeg",
      width: 800,
      height: 800,
    },
  },
  {
    info: {
      name: "Calvin",
      position: "Engineering Team Lead",

      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/calvin-w-thomas/",
        },
      ],
    },
    image: {
      url: "/assets/img/Calvin.jpeg",
      width: 560,
      height: 560,
    },
  },
  {
    info: {
      name: "Enock",
      position: "Engineering Team Lead",

      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/knocksto/",
        },
      ],
    },
    image: {
      url: "/assets/img/Enock Boadi-Ansah .png",
      width: 1999,
      height: 1333,
    },
  },
  {
    info: {
      name: "Ibrahim",
      position: "Head of Operations",

      content: "",
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/inusaibrahim/",
        },
      ],
    },
    image: {
      url: "/assets/img/team-frame-1.png",
      width: 1999,
      height: 1333,
    },
  },
];
