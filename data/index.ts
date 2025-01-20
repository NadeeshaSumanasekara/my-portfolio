export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./445379791_353902911042794_6655861764818493784_n.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I’m passionate about understanding real-world challenges and crafting innovative tech solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SINHALA ASR SYSTEM (ONGOING)",
    des: " Developing an ASR system for the low-resource Sinhala language by leveraging transfer learning techniques with pre-trained models. The system incorporates data augmentation and language modeling, to enhance recognition accuracy. ",
    img: "./445379791_353902911042794_6655861764818493784_n.jpg",
    iconLists: [
      "./re.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./fm.svg",
    ],
    link: "blank",
  },
  {
    id: 2,
    title: "FINDASTAY",
    des: "A full-stack MERN project for booking, selling, and renting accommodations with secure authentication (JWT, Firebase, Google OAuth), property management, advanced search, and free deployment on Render. ",
    img: "./p2.svg",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./stream.svg",
      "./c.svg",
    ],
    link: "blank",
  },
  {
    id: 3,
    title: "DEEP LEARNING IMAGE CLASSIFICATION",
    des: "Built and trained a GPU-accelerated binary image classification model as a learning project, focusing on end-to-end deep learning workflows.",
    img: "./p3.svg",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: " AIRLINE RESERVATION SYSTEM",
    des: " Developed a ticket booking system for airlines, focusing primarily on backend API creation and database design. Implemented a simplified version of a real-world airline reservation system to simulate its functionality effectively. ",
    img: "./p4.svg",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./gsap.svg",
    ],
    link: "/ui.apple.com",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    Company: " LiveRoom (Pvt) Ltd.",
    desc: " Participated in two key projects, contributing to design, development, and deployment phases. ( USD Exporter project C++,SwiftUI, flutter iOS App Development )",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: " Trainee Bank Assistant",
    Company: " Hatton National Bank PLC",
    desc: " Assisted in banking operations and customer service as a Trainee Bank Assistant.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/NadeeshaSumanasekara", // GitHub link
  },
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/nadeesha-sumanasekara/", // LinkedIn link
  },
];

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",
//   },
//   {
//     id: 2,
//     img: "/twit.svg",
//   },
//   {
//     id: 3,
//     img: "/link.svg",
//   },
// ];
