import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "C# Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "3D Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

  ];
  
  const experiences = [
    {
      title: " Iberia Agent",
      company_name: "Iberia",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Apr 2016 - Jan 2017",
      points: [
        "Operated complex hardware, software, and network problems to accurately resolve issues, and prepare reports summarizing and analyzing the issues with flights and reservations in real time.",
        "Facilitated day-to-day help desk operations including flight programmaming, ticket prioritization, tracking, and timely resolution, as well as technical support to 300+ agency agents, 200+ Airport operators, and 5,000+ passengers",
      ],
    },
    {
      title: "Yes He is consultant",
      company_name: "CV",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Feb 2019",
      points: [
        "Small updates and section creation for the WordPress Website.",
        "Classification and categorization of more than 500 videos, while adding subtitles and transcripts of each of them.",
        "Participating in code reviews and providing constructive feedback to the developers.",
      ],
    },
    {
      title: "Personal Assistant",
      company_name: "Santi Romero Films",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2019 - Apr 2022",
      points: [
        "Coordinated business development for 2 contractors in video and digital content.",
        "Management of Personal information, including but not limited to CC, passwords and social media accounts.",
        "Social media administration FB ADS, INSTAGRAM REELS, YOUTUBE.",
      ],
    },
    {
      title: "Customer Resolution Management",
      company_name: "Enercare",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Present",
      points: [
        "Handled highly escalated issues related to HVAC systems, communicating with managers from different areas in order to find resolution for customers in danger.",
        "Utilized advanced software systems to track and analyze service requests in real-time, facilitating seamless coordination between field technicians and customers.",
        "Generated comprehensive reports summarizing service trends, customer feedback, and operational metrics to drive continuous improvement initiatives and enhance overall customer satisfaction.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Regal Quest",
      description:
        "Regal Quest: The King’s Journey is a pre-Columbian-inspired platformer where players guide King Raion through puzzles, battles, and moral choices to restore his kingdom, blending action, strategy, and narrative depth.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "2D",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Jeddidias/Regal-Quest.git",
    },
    {
      name: "This Portfolio",
      description:
        "Website implementing 3D models.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    /*{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };