import { GoHome, GoQuestion, GoProject, GoWorkflow, GoCodeReview, GoBug, GoClockFill, GoDiscussionClosed, GoStarFill, GoNorthStar } from "react-icons/go"
import { BsChatRightText, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { SiMui, SiHtml5, SiXampp, SiIntellijidea, SiAndroidstudio, SiCisco} from "react-icons/si"
import { IoSchoolOutline, IoLogoJavascript } from "react-icons/io5"
import { FaCss3, FaPhp, FaReact, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs, FaPython } from "react-icons/fa"
import { TbBrandTypescript, TbBrandTailwind, TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandVite, TbBrandNotion, TbBrandVscode, TbBrandKotlin, TbBrandGmail, TbBrandGolang} from "react-icons/tb"
import { GrDocker } from "react-icons/gr";
import { androidBasic, backendBeginner, bangkit,  cekit, fo, frontendBeginner, frontendReact, google, jsBasic, kotlinBasic, lepkom, notion, porto, projectManagement, puskesmas, reactApp, sofw, sql, uiux, valo, xclone, ytclone } from "@assets/index"

const navLinks = [
   {
      id: 'home',
      title: 'Home',
      icon: <GoHome/>
   },
   {
      id: 'about',
      title: 'About',
      icon: <GoQuestion/>
   },
   {
      id: 'skills',
      title: 'Skills',
      icon: <GoCodeReview/>
   },
   {
      id: 'educations',
      title: 'Educations',
      icon: <IoSchoolOutline/>
   },
   {
      id: 'experiences',
      title: 'Experiences',
      icon: <GoProject/>
   },
   {
      id: 'projects',
      title: 'Projects',
      icon: <GoWorkflow/>
   },
   {
      id: 'feeds',
      title: 'Feeds',
      icon: <BsChatRightText/>
   },
]

const socialMedia = [
   {
      title: 'Instagram',
      icon: <BsInstagram/>,
      link: 'https://www.instagram.com/dimpfe/'
   },
   {
      title: 'Linkedin',
      icon: <BsLinkedin/>,
      link: 'https://www.linkedin.com/in/dimp-fe/'
   },
   {
      title: 'Github',
      icon: <BsGithub/>,
      link: 'https://github.com/DSQL-MONGKEY'
   },
   {
      title: 'Gmail',
      icon: <TbBrandGmail/>,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dimasprasetyo.work@gmail.com'
   }
]

const techSkills = [
   {
      title: 'HTML',
      icon: <SiHtml5/>,
      level: 'Advanced'
   },
   {
      title: 'CSS',
      icon: <FaCss3/>,
      level: 'Advanced'
   },
   {
      title: 'Javascript',
      icon: <IoLogoJavascript/>,
      level: 'Advanced'
   },
   {
      title: 'Typescript',
      icon: <TbBrandTypescript/>,
      level: 'Basic'
   },
   {
      title: 'PHP',
      icon: <FaPhp/>,
      level: 'Basic'
   },
   {
      title: 'Python',
      icon: <FaPython/>,
      level: 'Basic'
   },
   {
      title: 'Golang',
      icon: <TbBrandGolang />,
      level: 'Basic'
   },
   {
      title: 'Kotlin',
      icon: <TbBrandKotlin/>,
      level: 'Basic'
   },
   {
      title: 'Node Js',
      icon: <FaNodeJs/>,
      level: 'Intermediete'
   },
   {
      title: 'React Js',
      icon: <FaReact/>,
      level: 'Intermediete'
   },
   {
      title: 'Next Js',
      icon: <TbBrandNextjs/>,
      level: 'Basic'
   },
   {
      title: 'React Native',
      icon: <FaReact/>,
      level: 'Basic'
   },
   {
      title: 'MySQL',
      icon: <TbBrandMysql/>,
      level: 'Intermediete'
   },
   {
      title: 'MongoDB',
      icon: <TbBrandMongodb/>,
      level: 'Intermediete'
   },
   {
      title: 'Tailwind CSS',
      icon: <TbBrandTailwind/>,
      level: 'Advanced'
   },
   {
      title: 'Material UI',
      icon: <SiMui/>,
      level: 'Basic'
   },
   {
      title: 'Bootstrap',
      icon: <FaBootstrap/>,
      level: 'Advanced'
   },
   {
      title: 'Vite',
      icon: <TbBrandVite/>,
      level: 'Basic'
   },
]

const tools = [
   {
      title: 'VScode',
      icon: <TbBrandVscode/>,
      level: 'Advanced'
   },
   {
      title: 'IntelliJ IDEA',
      icon: <SiIntellijidea/>,
      level: 'Basic'
   },
   {
      title: 'Cisco',
      icon: <SiCisco/>,
      level: 'Basic'
   },
   {
      title: 'Android Studio',
      icon: <SiAndroidstudio/>,
      level: 'Basic'
   },
   {
      title: 'Docker',
      icon: <GrDocker/>,
      level: 'Basic'
   },
   {
      title: 'Git',
      icon: <FaGitAlt/>,
      level: 'Advanced'
   },
   {
      title: 'Github',
      icon: <BsGithub/>,
      level: 'Advanced'
   },
   {
      title: 'XAMPP',
      icon: <SiXampp/>,
      level: 'Intermediete'
   },
   {
      title: 'Figma',
      icon: <FaFigma/>,
      level: 'Basic'
   },
   {
      title: 'Notion',
      icon: <TbBrandNotion/>,
      level: 'Basic'
   },
]

const softSkills = [
   {
      title: 'Leadership',
      icon: <GoStarFill />,
      level: 'Basic'
   },
   {
      title: 'Public Speaking',
      icon: <GoDiscussionClosed />,
      level: 'Intermediete'
   },
   {
      title: 'Time Management',
      icon: <GoClockFill />,
      level: 'Basic'
   },
   {
      title: 'Problem Solving',
      icon: <GoBug />,
      level: 'Intermediete'
   },
   {
      title: 'English',
      icon: <GoNorthStar />,
      level: 'Speaking - basic'
   },
   
]

const educations = [
   {
      title: 'Gunadarma University',
      major: 'Computer System',
      date: '2022 - Present',
   },
   {
      title: 'Citra Negara Vocational High Shcool',
      major: 'Software Engineering',
      date: '2020 - 2022',
   },
]

const certificates = [
   {
      title: 'Web Programming',
      institution: 'Badan Nasional Sertifikasi Profesi(BNSP)',
      date: 'Feb - 2022',
      image: '',
      link: undefined,
      desc: 'Create a web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist'
   },
   {
      title: 'Frontend Developer',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: frontendBeginner,
      link: 'https://drive.google.com/file/d/1mOsACSrXC97jDDuY1EioAQp-4ag5AZ1E/view?usp=drive_link',
      desc: 'Learn about how to start become Frontend Developer also about frontend technologies such like HTML, CSS, Javascript, API and how the browser works'
   },
   {
      title: 'Frontend React',
      institution: 'MySkill',
      date: 'August - 2022',
      image: frontendReact,
      link: 'https://drive.google.com/file/d/12Tn2FmxjCW6NAP3Z8ynF-PEzsRzTT0hw/view?usp=drive_link',
      desc: 'Learn about basic ReactJs the UI Javascript library and build some study case of based on it as like Frontend Developer'
   },
   {
      title: 'React App',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: reactApp,
      link: 'https://drive.google.com/file/d/1DEEFQr-y_9R1CtpNIGHeUzSRqGYXFKuz/view?usp=drive_link',
      desc: 'Learn basic ReactJS and create a simple study case with it to have deep understanding about react functional component concept'
   },
   {
      title: 'Android Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: androidBasic,
      link: 'https://drive.google.com/file/d/1mOsACSrXC97jDDuY1EioAQp-4ag5AZ1E/view?usp=drive_link',
      desc: 'Learn basic mobile development especially android OS using kotlin for the main language. For this course i learn many basic concepts like Intent, Activity, Viewport, and also logic behind the application when user request some data (proccess and distrubute them)'
   },
   {
      title: 'Backend Beginner',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: backendBeginner,
      link: 'https://drive.google.com/file/d/1KAPhr6ZPJbR0UUUUJ42zzN5mu2iidH2n/view?usp=drive_link',
      desc: 'Learn basic of Backend developer, know how the server response the request and how to handle some specific request from clients'
   },
   {
      title: 'Javascript Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: jsBasic,
      link: 'https://drive.google.com/file/d/1O2viRHkLdVCZvNWXwNXDDA-bKJqnigdc/view?usp=drive_link',
      desc: 'Learn basic Javascript, to become a Frontend and backend Developer learning path in Dicoding'
   },
   {
      title: 'Kotlin Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: kotlinBasic,
      link: 'https://drive.google.com/file/d/14B9te3yWSyK15mGoXnsOXVzd2vb1UvMX/view?usp=drive_link',
      desc: 'Learn basic Kotlin for pre-requisite to create android app with kotlin'
   },
   {
      title: 'Project Management Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: projectManagement,
      link: 'https://drive.google.com/file/d/1Xm3KXui_4e1ylDmpB58coCCuRKsJn4l8/view?usp=drive_link',
      desc: 'Learn basic project management about to know how the project flow, how a project planned and how the PM works on it.'
   },
   {
      title: 'SQL Basic',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: sql,
      link: 'https://drive.google.com/file/d/11IXJFUHt6p5XLdK2Bf7qxyHFae9LYIay/view?usp=drive_link',
      desc: 'Learn basic concept of Structured Query Language for the Relational Database'
   },
   {
      title: 'Software Engineering',
      institution: 'Dicoding ID',
      date: 'August - 2022',
      image: sofw,
      link: 'https://drive.google.com/file/d/1Pmi4RsDBa3ideoXHcaVXjaiH62HaoUHy/view?usp=drive_link',
      desc: 'Learn how to start career as Software Engineer'
   },
   
]

const experience = [
   {
      title: 'Bangkit Academy',
      logo: bangkit,
      role: 'Cloud Computing Cohort'
   },
   {
      title: 'Lembaga Pengembangan Komputer UG',
      logo: lepkom,
      role: 'Workshop & Certification Profession Assistant'
   },
]

const projects = [
   {
      title: 'Twitter Clone',
      techStack: [
         {
            tags: 'Javascript',
            color: 'text-yellow-800'
         },
         {
            tags: 'React',
            color: 'text-cyan-600'
         },
         {
            tags: 'Vite',
            color: 'text-blue-700'
         },
         {
            tags: 'MongoDB',
            color: 'text-green-600'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },
         {
            tags: 'ExpressJS',
            color: 'text-green-600'
         },
         {
            tags: 'Tanstack-query',
            color: 'text-rose-800'
         },
         {
            tags: 'DaisyUI',
            color: 'text-pink-600'
         },
         {
            tags: 'JWT',
            color: 'text-red-700'
         },
         {
            tags: 'NodeJS',
            color: 'text-green-600'
         },
         {
            tags: 'Cloudinary',
            color: 'text-blue-600'
         },
         ],
      desc: 'Fullstack twitter/X clone with MERN stack that have similar functionality like the real app. In this included auth functionality and as a user we could make an post, follow other user, put some like on other user post, and upload or change the image profile that we want. This project have 95% similar functionality',
      image: xclone,
      link: 'https://github.com/DSQL-MONGKEY/twitter-clone'
   },
   {
      title: 'Puskesmas Queue',
      techStack: [
         {
            tags: 'PHP',
            color: 'text-blue-500'
         },
         {
            tags: 'Laravel',
            color: 'text-rose-600'
         },
         {
            tags: 'Livewire',
            color: 'text-rose-700'
         },
         {
            tags: 'MySQL',
            color: 'text-green-600'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },
         ],
      desc: 'web-based community health center queuing application using the Laravel-9 framework which focuses on developing mechanisms for queuing and taking patient medicines This project has 3 authorization roles doctor, patient, pharmacist',
      image: puskesmas,
      link: 'https://github.com/DSQL-MONGKEY/app-puskesmas'
   },
   {
      title: 'Youtube Clone',
      techStack: [
         {
            tags: 'Typescript',
            color: 'text-blue-500'
         },
         {
            tags: 'ReactJS',
            color: 'text-cyan-600'
         },
         {
            tags: 'Rapid-API',
            color: 'text-green-500'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         }, 
         ],
      desc: 'This project provides practical experience in software development and an in-depth understanding of the technologies used in the creation of streaming video platforms such as YouTube.\n Frontend development includes user interface (UI) design, responsiveness, and user interaction and consume the API.',
      image: ytclone,
      link: 'https://github.com/DSQL-MONGKEY/youtube-clone'
   },
   {
      title: 'Portfolio Website',
      techStack: [
         {
            tags: 'Typescript',
            color: 'text-blue-500'
         },
         {
            tags: 'ReactJS',
            color: 'text-cyan-600'
         },
         {
            tags: 'Rapid-API',
            color: 'text-green-500'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },
         {
            tags: 'Vite',
            color: 'text-blue-400'
         },
         ],
      desc: 'My portfolio reflects my journey in the world of development and includes a variety of projects that highlight my technical and creative skills. From intuitive user interface design to developing innovative software solutions, each project has its own unique goals.',
      image: porto,
      link: 'https://github.com/DSQL-MONGKEY/3Dportfolio'
   },
   {
      title: 'Google Clone',
      techStack: [
         {
            tags: 'Javascript',
            color: 'text-yellow-500'
         },
         {
            tags: 'ReactJS',
            color: 'text-blue-600'
         },
         {
            tags: 'Rapid-API',
            color: 'text-green-500'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-800'
         },  
         {
            tags: 'Vite',
            color: 'text-blue-400'
         },  
         ],
      desc: 'Creating a copy or clone of Google is an interesting project and can provide experience in several aspects of web development. Implement a search engine that can handle user search queries. Understand search algorithms and how to optimize search results with Google search API.',
      image: google,
      link: 'https://github.com/DSQL-MONGKEY/google-clone'
   },
   {
      title: 'Notion Clone',
      techStack: [
         {
            tags: 'Typescript',
            color: 'text-blue-500'
         },
         {
            tags: 'React',
            color: 'text-cyan-600'
         },
         {
            tags: 'NextJS',
            color: 'text-zinc-500'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },  
         {
            tags: 'Convex',
            color: 'text-gray-500'
         },  
         {
            tags: 'Clerk',
            color: 'text-blue-700'
         },  
         {
            tags: 'MySQL',
            color: 'text-red-700'
         },  
         ],
      desc: `Clean and Intuitive User Interface:
      Clean and intuitive user interface design similar to Notion.
      Make sure design elements like colors, typography, and icons are consistent.
      
      Implement a page and content management system that allows users to easily create, edit, and delete pages.
      Consider using blocks or modular elements to organize content.
      
      Includes a "What You See Is What You Get" (WYSIWYG) editor that makes it easy for users to format and edit text and multimedia content.
      Add support for various content types, such as text, images, videos, tables, and attached files.
      Organization and Hierarchy:
      
      Implement an organizational system that allows the creation of categories, subcategories, and labels.
      Consider using a tag or label system to help users organize their content.`,
      image: notion,
      link: 'https://github.com/DSQL-MONGKEY/notion-clone'
   },
   {
      title: 'Cekit',
      techStack: [
         {
            tags: 'Typescript',
            color: 'text-blue-500'
         },
         {
            tags: 'ReactJS',
            color: 'text-blue-600'
         },
         {
            tags: 'Rapid-API',
            color: 'text-green-500'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },
      ],
      desc: 'Website for check the postpaid electricity bills, consume PLN API to get the data. This site will be improve further and will add a new features to it.',
      image: cekit,
      link: 'https://github.com/DSQL-MONGKEY/check-pln-bills'
   },
   {
      title: 'Fo-Dashboard UI/UX',
      techStack: [
         {
            tags: 'Figma',
            color: 'text-blue-500'
         },
      ],
      desc: `This Hotel Front Office Dashboard application UI/UX project explores and presents innovative design solutions to improve the user experience in hotel operational management. Use of user research methods to understand user needs and preferences in hotel operations.
      Integrate user feedback in the design process to ensure the interface meets expectations and needs.`,
      image: uiux,
      link: 'https://www.figma.com/proto/hyJkJl3QVX3J3c0uAlF0CA/fo-dashboard?node-id=45-117'
   },
   {
      title: 'Mobile App Fo-Dashboard',
      techStack: [
         {
            tags: 'React Native',
            color: 'text-blue-500'
         },
         {
            tags: 'Expo / React-Native CLI',
            color: 'text-green-700'
         },
         {
            tags: 'Firebase',
            color: 'text-yellow-700'
         },
         {
            tags: 'Typescript',
            color: 'text-blue-700'
         },
         {
            tags: 'Zustand',
            color: 'text-rose-700'
         },
      ],
      desc: `This Hotel Front Office Dashboard application UI/UX project explores and presents innovative design solutions to improve the user experience in hotel operational management. Use of user research methods to understand user needs and preferences in hotel operations.
      Integrate user feedback in the design process to ensure the interface meets expectations and needs.`,
      image: fo,
      link: 'https://github.com/DSQL-MONGKEY/front-office-hotels'
   },
   {
      title: 'Mobile App Valoranism',
      techStack: [
         {
            tags: 'Kotlin',
            color: 'text-blue-500'
         },
         {
            tags: 'Android',
            color: 'text-green-500'
         },
      ],
      desc: `The practice project in creating a Mobile App Agent Valorant using Kotlin has provided valuable experience in mobile app development, providing an in-depth understanding of various technical aspects and best practices. Merancang sistem navigasi yang intuitif dan pengaturan tampilan yang efektif, memastikan pengguna dapat dengan mudah beralih antara berbagai fitur aplikasi.`,
      image: valo,
      link: ''
   },
]

const cards = [
   {
      id:0,
      name: 'Steve Jobs',
      designation: 'co-founder of Apple',
      content: (
         <p>
         The only way to do great work is to love what you do. If you haven&apos;t found it yet, keep looking. Don&apos;t settle.
         </p>
      )
   },
   {
      id:1,
      name: 'Confucius',
      designation: 'Chinese philosopher',
      content: (
         <p>
         It does not matter how slowly you go as long as you do not stop.
         </p>
      )
   },
   {
      id:2,
      name: 'Michael Jordan',
      designation: 'Pro Basketball Player',
      content: (
         <p>
            I always strive to give my best and never stop practicing
         </p>
      )
   },
   {
      id:3,
      name: 'Muhammad Ali',
      designation: 'Legendary boxer',
      content: (
         <p>
         A champion is someone who never gives up, even when he knows he&apos;s out of chances.
         </p>
      )
   },
   {
      id:4,
      name: 'Dimas Prasetyo(me)',
      designation: 'Software Engineer',
      content: (
         <p>
         There&apos;s a price to pay for a goal
         </p>
      )
   },
]

const articles = [
   {
      logo: <TbBrandNotion/>,
      title: 'Notion',
      description: '',
   },
   {
      logo: '',
      title: 'Github Library',
      tags: [],
      description: '',
   },
   {
      logo: '',
      title: 'Medium',
      description: '',
   },
]

const GITHUB_ACCOUNTS = {
   username: "DSQL-MONGKEY"
}

export { 
   navLinks, 
   socialMedia, 
   techSkills, 
   tools, 
   softSkills,
   educations, 
   certificates,
   experience,
   GITHUB_ACCOUNTS,
   projects,
   cards,
   articles,
}