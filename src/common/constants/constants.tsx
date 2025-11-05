import { GoHome, GoQuestion, GoWorkflow, GoCodeReview, GoBug, GoClockFill, GoDiscussionClosed, GoStarFill, GoNorthStar } from "react-icons/go"
import { BsChatRightText, BsInstagram, BsLinkedin, BsGithub, BsMeta } from "react-icons/bs"
import { SiGooglecloud, SiCplusplus, SiNginx, SiCloudinary, SiShadcnui , SiPostman, SiVercel, SiGnubash, SiRedux, SiReactquery, SiFramer, SiProxmox, SiMui, SiOpenai, SiIntellijidea, SiAndroidstudio, SiCisco, SiTestinglibrary, SiTorbrowser } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"
import { FaGitlab, FaPhp, FaReact, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs, FaPython, FaWordpress, FaLinux } from "react-icons/fa"
import { GiBearFace, GiSpermWhale  } from "react-icons/gi";
import { TbBrandPowershell, TbBrandThreejs, TbBrandTypescript, TbBrandTailwind, TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandVite, TbBrandNotion, TbBrandVscode, TbBrandKotlin, TbBrandGmail, TbBrandGolang, TbBrandReactNative } from "react-icons/tb"
import { GrDocker, } from "react-icons/gr";
import { PiCoffeeDuotone, PiNetworkFill, PiMicrosoftExcelLogo } from "react-icons/pi";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { BiSolidMobileVibration, BiLogoPostgresql  } from "react-icons/bi";

import { MenuItemProps } from "../types/menu"
import { aishi, androidBasic, arrashi, backendBeginner, bangkit,  burhan,  cekit, cimb, edi, firdaus, fo, frontendBeginner, frontendReact, google, harry, jsBasic, kotlinBasic, layla, lepkom, nata, notion, porto, projectManagement, puskesmas, rama, reactApp, rene, sofw, sql, syaikha, tasya, ug, uiux, valo, xclone, yanti, ytclone } from "@assets/index"


export const navLinks: MenuItemProps[] = [
   {
      href: '/',
      title: 'Home',
      icon: <GoHome/>
   },
   {
      href: 'about',
      title: 'About',
      icon: <GoQuestion/>
   },
   {
      href: 'journeys',
      title: 'Journeys',
      icon: <GiJourney />

   },
   {
      href: 'tech',
      title: 'Tech',
      icon: <GoCodeReview/>
   },
   {
      href: 'projects',
      title: 'Projects',
      icon: <GoWorkflow/>
   },
   {
      href: 'playlist',
      title: 'Playlist',
      icon: <MdOutlinePlaylistAddCheckCircle/>
   },
   {
      href: 'feeds',
      title: 'Feeds',
      icon: <PiCoffeeDuotone/>
   },
   {
      href: 'contact',
      title: 'Contact',
      icon: <BsChatRightText/>
   },
]

export const services = [
   {
      icon: <SiTorbrowser /> ,
      id: '72d7892ede',
      title: 'Website Development',
      description: 'Create stunning website, user-friendly design with modern technologies '
   },
   {
      icon: <BiSolidMobileVibration />,
      id: 'cd5fc36877',
      title: 'Mobile Development',
      description: 'Create cross-platform and reliable application using React-Native'
   },
   {
      icon: <PiNetworkFill />,
      id: 'a9292e0942',
      title: 'IoT (Internet of Things)',
      description: 'Create and develop IoT services/devices for your needs'
   },
   {
      icon: <SiTestinglibrary />,
      id: '32e5582f4d',
      title: 'Software Testing',
      description: 'Test your application with manual or automation testing'
   },
]

export const socialMedia = [
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

export const tech = [
   {
      title: 'Javascript',
      label: 'tech',
      icon: <IoLogoJavascript/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Typescript',
      label: 'tech',
      icon: <TbBrandTypescript/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'C Lang',
      label: 'tech',
      icon: <SiCplusplus/>,
      level: 'Basic',
      onLearn: true,
   },
   {
      title: 'PHP',
      label: 'tech',
      icon: <FaPhp/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Python',
      label: 'tech',
      icon: <FaPython/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Golang',
      label: 'tech',
      icon: <TbBrandGolang />,
      level: 'Basic',
      onLearn: true,
   },
   {
      title: 'Kotlin',
      label: 'tech',
      icon: <TbBrandKotlin/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Node Js',
      label: 'tech',
      icon: <FaNodeJs/>,
      level: 'Intermediete',
      onLearn: false,
   },
   {
      title: 'React Js',
      label: 'tech',
      icon: <FaReact/>,
      level: 'Intermediete',
      onLearn: false,
   },
   {
      title: 'Next Js',
      label: 'tech',
      icon: <TbBrandNextjs/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'React Native',
      label: 'tech',
      icon: <TbBrandReactNative/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'MySQL',
      label: 'tech',
      icon: <TbBrandMysql/>,
      level: 'Intermediete',
      onLearn: false,
   },
   {
      title: 'PostgreSQL',
      label: 'tech',
      icon: <BiLogoPostgresql/>,
      level: 'Basic',
      onLearn: true,
   },
   {
      title: 'MongoDB',
      label: 'tech',
      icon: <TbBrandMongodb/>,
      level: 'Intermediete',
      onLearn: false,
   },
   {
      title: 'Tailwind CSS',
      label: 'tech',
      icon: <TbBrandTailwind/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'ShadCN',
      label: 'tech',
      icon: <SiShadcnui/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Material UI',
      label: 'tech',
      icon: <SiMui/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'three.js',
      label: 'tech',
      icon: <TbBrandThreejs/>,
      level: 'Basic',
      onLearn: true,
   },
   {
      title: 'Bootstrap',
      label: 'tech',
      icon: <FaBootstrap/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Framer Motion',
      label: 'tech',
      icon: <SiFramer/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'React Query',
      label: 'tech',
      icon: <SiReactquery/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Zustand',
      label: 'tech',
      icon: <GiBearFace/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Redux',
      label: 'tech',
      icon: <SiRedux/>,
      level: 'Basic',
      onLearn: true,
   },
   {
      title: 'Wordpress',
      label: 'tools',
      icon: <FaWordpress/>,
      level: 'Basic',
      onLearn: true,
   },
]

export const devOps = [
   {
      title: 'Docker',
      label: 'tools',
      icon: <GrDocker/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Git',
      label: 'tools',
      icon: <FaGitAlt/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Github',
      label: 'tools',
      icon: <BsGithub/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'Google Cloud',
      label: 'tools',
      icon: <SiGooglecloud/>,
      level: 'Intermediete',
      onLearn: true,
   },
   {
      title: 'Bash',
      label: 'tools',
      icon: <SiGnubash/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Powershell',
      label: 'tools',
      icon: <TbBrandPowershell/>,
      level: 'Intermediete',
      onLearn: false,
   },
   {
      title: 'Linux',
      label: 'tools',
      icon: <FaLinux/>,
      level: 'Intermediete',
      onLearn: true,
   },
   {
      title: 'Postman',
      label: 'tools',
      icon: <SiPostman/>,
      level: 'Intermediete',
      onLearn: false,
   },
   {
      title: 'Proxmox',
      label: 'tools',
      icon: <SiProxmox/>,
      level: 'basic',
      onLearn: true,
   },
   {
      title: 'Nginx',
      label: 'tools',
      icon: <SiNginx/>,
      level: 'basic',
      onLearn: true,
   },
   {
      title: 'Cloudinary',
      label: 'tools',
      icon: <SiCloudinary/>,
      level: 'basic',
      onLearn: false,
   },
   {
      title: 'Vite',
      label: 'tech',
      icon: <TbBrandVite/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Vercel',
      label: 'tech',
      icon: <SiVercel/>,
      level: 'Basic',
      onLearn: false,
   },
]

export const tools = [
   {
      title: 'VScode',
      label: 'tools',
      icon: <TbBrandVscode/>,
      level: 'Advanced',
      onLearn: false,
   },
   {
      title: 'IntelliJ IDEA',
      label: 'tools',
      icon: <SiIntellijidea/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Cisco',
      label: 'tools',
      icon: <SiCisco/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Android Studio',
      label: 'tools',
      icon: <SiAndroidstudio/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Meta Ads',
      label: 'tools',
      icon: <BsMeta/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Figma',
      label: 'tools',
      icon: <FaFigma/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'OpenAI',
      label: 'tools',
      icon: <SiOpenai/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Deepseek',
      label: 'tools',
      icon: <GiSpermWhale/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Gitlab',
      label: 'tools',
      icon: <FaGitlab/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Notion',
      label: 'tools',
      icon: <TbBrandNotion/>,
      level: 'Basic',
      onLearn: false,
   },
   {
      title: 'Macro Excel',
      label: 'tools',
      icon: <PiMicrosoftExcelLogo />,
      level: 'Basic',
      onLearn: false,
   },
]


export const softSkills = [
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

export const journeys = [
   {
      title: 'Citra Negara Vocational High Shcool',
      role: 'Software Engineering',
      logo: ug,
      date: 'August 2020 - 2022',
      isPresent: false,
      jobDesc: 'Learning the fundamentals of software development, including programming, system design, and database management, with a focus on algorithms, data structures, and efficient software solutions. This field also hones analytical and problem-solving skills essential for the tech industry.',
      coworks: [
         {
            name: 'Muhammad Rizki',
            role: 'Fullstack Developer & Jurnalist',
            image: '',
            tag: 'm.rizki_array',
            link: 'https://www.instagram.com/m.rizki_array/',
            opinion: 'Saya senang dapat mengenal nya dan dia adalah teman yang baik.'
         },
         {
            name: 'Muhammad Calvin Pradana',
            role: 'Fullstack Developer',
            image: '',
            tag: '-',
            link: '-',
            opinion: 'Sukses Selalu!'
         },
         {
            name: 'Kaviga Yudhistira',
            role: 'Civil Engineering Student',
            image: '',
            tag: 'yudhistirakav_',
            link: 'https://www.instagram.com/yudhistirakav_/',
            opinion: 'Saya senang dapat mengenal nya dan dia adalah teman yang baik.'
         },
      ]
   },
   {
      title: 'Gunadarma University',
      role: 'Computer System',
      logo: ug,
      date: 'September 2022 - Present',
      isPresent: true,
      jobDesc: 'Studying electronics to develop computer systems and implementing them in IoT projects that integrate multiple fields of computer science and electrical engineering. Focused on understanding hardware, designing circuits, and analyzing the processes behind how a computer executes commands.',
      coworks: [
         {
            name: 'Rama Idsan',
            role: 'LepKom Asistant | Network Engineer',
            image: rama,
            tag: 'rama_idsan',
            link: 'https://www.instagram.com/rama_idsan/',
            opinion: 'He demonstrates exceptional social skills, fostering strong relationships through genuine kindness and selflessness. His ability to collaborate effectively makes him a valuable team player, always actively contributing and supporting others without hesitation. Academically, his dedication and hard work are evident in his continuous pursuit of knowledge and excellence. His strong teamwork ethic ensures that he consistently stands out through his proactive involvement and impactful contributions.'
         },
         {
            name: 'Arrashi Satyadi',
            role: 'LepKom Asistant | Network Engineer',
            image: arrashi,
            tag: 'satyadis_',
            link: 'https://www.linkedin.com/in/arrashi-satyadi-476918241/',
            opinion: 'He demonstrates exceptional social skills, fostering strong relationships through genuine kindness and selflessness. His ability to collaborate effectively makes him a valuable team player, always actively contributing and supporting others without hesitation. Academically, his dedication and hard work are evident in his continuous pursuit of knowledge and excellence. His strong teamwork ethic ensures that he consistently stands out through his proactive involvement and impactful contributions.'
         },
         {
            name: 'Fataa Alhaq',
            role: 'Computer System Student',
            image: '',
            tag: 'fataaalhaq',
            link: 'https://www.instagram.com/fataaalhaq/',
            opinion: 'He demonstrates exceptional social skills, fostering strong relationships through genuine kindness and selflessness. His ability to collaborate effectively makes him a valuable team player, always actively contributing and supporting others without hesitation. Academically, his dedication and hard work are evident in his continuous pursuit of knowledge and excellence. His strong teamwork ethic ensures that he consistently stands out through his proactive involvement and impactful contributions.'
         },
         {
            name: 'M. Syukri Rahman',
            role: 'Computer System Student',
            image: '',
            tag: 'sykrii11',
            link: 'https://www.instagram.com/sykrii11/',
            opinion: 'Dimas adalah orang yang sangat menyenangkan dan terkadang dapat memberikan solusi tak terduga dari masalah yang ada di pekerjaan'
         },
         {
            name: 'Edi Darmawan',
            role: 'Computer System Student',
            image: edi,
            tag: '3dy_darmawan',
            link: 'https://www.instagram.com/3dy_darmawan/',
            opinion: 'He demonstrates exceptional social skills, fostering strong relationships through genuine kindness and selflessness. His ability to collaborate effectively makes him a valuable team player, always actively contributing and supporting others without hesitation. Academically, his dedication and hard work are evident in his continuous pursuit of knowledge and excellence. His strong teamwork ethic ensures that he consistently stands out through his proactive involvement and impactful contributions.'
         },
         {
            name: 'Burhan Adji Zarkasih',
            role: 'LepKom Asistant | Network Engineer | Cyber Security',
            image: burhan,
            tag: 'burhandjzr',
            link: 'https://www.instagram.com/burhandjzr/',
            opinion: 'He demonstrates exceptional social skills, fostering strong relationships through genuine kindness and selflessness. His ability to collaborate effectively makes him a valuable team player, always actively contributing and supporting others without hesitation. Academically, his dedication and hard work are evident in his continuous pursuit of knowledge and excellence. His strong teamwork ethic ensures that he consistently stands out through his proactive involvement and impactful contributions.'
         },
         {
            name: 'Harry Mahardika',
            role: 'Machine Learning Engineer',
            image: harry,
            tag: 'harry.mrdk',
            link: 'https://www.instagram.com/harry.mrdk/',
            opinion: 'He demonstrates exceptional social skills, fostering strong relationships through genuine kindness and selflessness. His ability to collaborate effectively makes him a valuable team player, always actively contributing and supporting others without hesitation. Academically, his dedication and hard work are evident in his continuous pursuit of knowledge and excellence. His strong teamwork ethic ensures that he consistently stands out through his proactive involvement and impactful contributions.'
         },
      ]
   },
   {
      title: 'Lembaga Pengembangan Komputer UG',
      role: 'Workshop Insturctor & Certification Profession Assistant',
      logo: lepkom,
      date: 'March 2024 - Present',
      isPresent: true,
      jobDesc: 'As an Assistant and IT Support at LePKom UG (Lembaga Pengembangan Komputer Universitas Gundarama), I was responsible for maintaining and upgrading applications on lab computers used for professional certification and graduation exams, as well as resolving technical issues to ensure smooth operations. I also assisted participants during LePKom Workshops, providing support for technical and programming-related problems. My role included handling lab maintenance, ensuring all systems and equipment were functioning optimally to support academic and professional activities. This experience strengthened my technical troubleshooting skills and ability to provide effective IT solutions in a dynamic environment.',
      coworks: [
         {
            name: 'Harry Mahardika',
            role: 'Machine Learning Engineer',
            image: harry,
            tag: 'harry.mrdk',
            link: 'https://www.instagram.com/harry.mrdk/',
            opinion: 'Sukses Selalu!'
         },
         {
            name: 'Jessica Theresia',
            role: 'Machine Learning Engineer',
            image: '',
            tag: 'jessica_trs',
            link: 'https://www.instagram.com/jessica_trs/',
            opinion: 'Dimas adalah teman sekaligus rekan kerja yang dapat diandalkan.'
         },
         {
            name: 'Jessica Valencia',
            role: 'Machine Learning Engineer',
            image: '',
            tag: 'jevaa_zh',
            link: 'https://www.instagram.com/jevaa_zh/',
            opinion: 'Sukses Selalu!'
         },
         {
            name: 'Jessica Marta',
            role: 'Informatics Student',
            image: '',
            tag: 'jessicalaen',
            link: 'https://www.instagram.com/jessicalaen/',
            opinion: 'Sukses Selalu!'
         },
         {
            name: 'M. Ibrahim',
            role: 'Information System Student',
            image: '',
            tag: '-',
            link: 'https://www.instagram.com/',
            opinion: 'Sukses Selalu!'
         },
         {
            name: 'Rama Satriana',
            role: 'Informatics Student',
            image: '',
            tag: '-',
            link: 'https://www.instagram.com/',
            opinion: 'Sukses Selalu!'
         },
      ]
   },
   {
      title: 'Bangkit Academy',
      role: 'Cloud Computing Cohort',
      logo: bangkit,
      date: 'February 2024 - July 2024',
      isPresent: false,
      jobDesc: 'As a Cloud Computing Cohort/Backend Engineer at Bangkit Academy 2024, I was honored to be one of the 4,650 selected participants out of over 57,000+ registrants in Batch 1. During the program, I designed the backend infrastructure for our capstone project using Google Cloud Platform (GCP). Additionally, I developed a Flask-API to bridge communication between the mobile application and machine learning models, deploying it on the Cloud Run service. This experience at Bangkit Academy enhanced my expertise in cloud-based solutions, backend development, and system integration, while collaborating with a diverse and talented team.',
      coworks: [
         {
            name: 'Rivaldo Elia',
            role: 'ELectrical & Machine Learning Engineer',
            image: '',
            tag: 'iamvaldoo',
            link: 'https://www.instagram.com/iamvaldoo/',
            opinion: 'Sukses Selalu!'

         },
         {
            name: 'Alfa',
            role: 'Machine Learning Engineer',
            image: '',
            tag: '-',
            link: 'https://www.instagram.com/',
            opinion: 'Sukses Selalu!'

         },
         {
            name: 'Deo Ginting',
            role: 'Machine Learning Engineer',
            image: '',
            tag: '-',
            link: 'https://www.instagram.com/',
            opinion: 'Sukses Selalu!'

         },
         {
            name: 'Pany Irene Matondang',
            role: 'Informatics Student',
            image: '',
            tag: 'matondangpany',
            link: 'https://www.instagram.com/matondangpany/',
            opinion: 'Sukses Selalu!'

         },
      ]
   },
   {
      title: 'PT. Bank CIMB Niaga Tbk',
      role: 'Bussines Process & Solution Excellence Intern (Software Tester)',
      logo: cimb,
      date: 'August 2024 - Present',
      isPresent: true,
      jobDesc: 'As a Software Tester in the banking system field, I am responsible for conducting User Acceptance Testing (UAT) on core banking system scenarios, including operating AS400 machines to test new features. Additionally, I develop Business Process Engines using a macro Excel approach to enhance efficiency and automate business processes. My role involves ensuring all testing scenarios run smoothly, identifying potential issues, and verifying that the system functions according to business requirements.',
      coworks: [
         {
            name: 'Rene Indra Nugraha',
            role: 'Head of Bussines Process & Solution Excellence',
            tag: 'reneindra',
            link: 'https://www.instagram.com/reneindra/',
            image: rene,
            opinion: 'Dimas adalah rekan kerja yang sangat andal dan profesional. Dia selalu menyelesaikan tugas dengan teliti dan tepat waktu, serta memiliki kemampuan komunikasi yang baik dalam tim. Sikapnya yang ramah, mudah bekerja sama, dan selalu siap membantu membuat suasana kerja menjadi lebih menyenangkan dan produktif. Dimas adalah aset berharga bagi tim kami.'
         },
         {
            name: 'Septian Hadinata',
            role: 'Bussines Process & Solution Excellence Specialist',
            tag: 'tian_nata',
            link: 'https://www.instagram.com/tian_nata/',
            image: nata,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'S Gilang Sukma kencana',
            role: 'Bussines Process & Solution Excellence Staff',
            tag: '',
            link: '',
            image: '',
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Hanafi Khusuma Yudha',
            role: 'Bussines Process & Solution Excellence Staff',
            tag: 'hankyudha',
            link: 'https://www.instagram.com/hankyudha/',
            image: '',
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Yurina Indria Tasya',
            role: 'Bussines Process & Solution Excellence Staff',
            tag: 'yurinatasya',
            link: 'https://www.instagram.com/yurinatasya/',
            image: tasya,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Aishi Hamarin',
            role: 'Compliance Staff',
            tag: 'aishihamarin',
            link: 'https://www.instagram.com/aishihamarin/',
            image: aishi,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Noviyanti Putri',
            role: 'UAT Partner Staff',
            tag: 'noviyanti_p',
            link: 'https://www.instagram.com/noviyanti_p/',
            image: yanti,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Istikhomah',
            role: 'UAT Partner Staff',
            tag: 'noviyanti_p',
            link: 'https://www.instagram.com/noviyanti_p/',
            image: '',
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Firdaus',
            role: 'The Complete Intern CIMB NIAGA',
            tag: 'zhvxe',
            link: 'https://www.instagram.com/zhvxe/',
            image: firdaus,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Layla Alfissofyah',
            role: 'The Complete Intern CIMB NIAGA',
            tag: 'laylaalfis',
            link: 'https://www.instagram.com/laylaalfis/',
            image: layla,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
         {
            name: 'Syaikha Berlian .A',
            role: 'The Complete Intern CIMB NIAGA',
            tag: 'syaikhaazzahra',
            link: 'https://www.instagram.com/syaikhaazzahra/',
            image: syaikha,
            opinion: 'Sangat baik, sangat keren sekali COY!'
         },
      ]
   },
   {
      title: 'PT. Kereta Api Indonesia(KAI)',
      role: 'IT Support & Developer',
      logo: ug,
      date: 'February 2025 - June 2025',
      isPresent: false,
      jobDesc: 'Support the facility monitoring division with excellence and on-point solution using Macro Excel for automate generate Grafik Perjalanan Kereta Api(GAPEKA) and helping re-design internal web application in digital transformation project',
      coworks: [
         {
            name: 'Afrizal Bahar',
            role: 'Facility Monitoring Staff',
            tag: 'afrzlb28',
            link: 'https://www.instagram.com/afrzlb28/',
            image: '',
            opinion: 'TOPP DAHH!'
         },
      ]
   },
   {
      title: 'DSCVRY PTE. LTD (SG)',
      role: 'Fullstack Engineer',
      logo: ug,
      date: 'July 2025 - Present',
      isPresent: true,
      jobDesc: 'Developing multi-platform application for the company\'s new PoC product, focusing on enhancing user experience and functionality. Deliver technical solutions for product system requirements.',
      coworks: [
         
      ]
   },
]

export const certificates = [
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

export const projects = [
   {
      title: 'LoRa Climber Tracker',
      isFeatured: true,
      techStack: [
         {
            tags: 'IoT',
            color: 'text-yellow-800'
         },
         {
            tags: 'Typescript',
            color: 'text-yellow-800'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },
         {
            tags: 'Shadcn-UI',
            color: 'text-zinc-500'
         },
         {
            tags: 'NextJS',
            color: 'text-green-600'
         },
         {
            tags: 'Tanstack-query',
            color: 'text-rose-800'
         },
         {
            tags: 'Zustand',
            color: 'text-gray-700'
         },
         {
            tags: 'Supabase',
            color: 'text-pink-600'
         },
         {
            tags: 'NodeJS',
            color: 'text-green-600'
         },
         {
            tags: 'Clerk',
            color: 'text-blue-600'
         },
      ],
      desc: 'This project addresses the safety issues of mountain climbers in areas with minimal cellular signal. We designed and implemented the LoRa Tracking System, a reliable location-tracking prototype.Utilizing LoRa 433MHz and GPS technology, the system wirelessly sends real-time position data from a device carried by the climber to a monitoring station. This data is then displayed on a web dashboard, enabling the base camp team to track climber movements and provide a rapid response in emergency situations. This project demonstrates LoRa as an effective and power-efficient solution for long-range communication in extreme environments.',
      image: xclone,
      link: 'https://github.com/DSQL-MONGKEY/maps-tracker-dashboard'
   },
   {
      title: 'Kanaeru Dispenser',
      isFeatured: true,
      techStack: [
         {
            tags: 'IoT',
            color: 'text-yellow-800'
         },
         {
            tags: 'MQTT',
            color: 'text-yellow-800'
         },
         {
            tags: 'HiveMQ',
            color: 'text-yellow-800'
         },
         {
            tags: 'Typescript',
            color: 'text-yellow-800'
         },
         {
            tags: 'TailwindCSS',
            color: 'text-blue-500'
         },
         {
            tags: 'Shadcn-UI',
            color: 'text-zinc-500'
         },
         {
            tags: 'NextJS',
            color: 'text-green-600'
         },
         {
            tags: 'Tanstack-query',
            color: 'text-rose-800'
         },
         {
            tags: 'Zustand',
            color: 'text-gray-700'
         },
         {
            tags: 'Supabase',
            color: 'text-pink-600'
         },
         {
            tags: 'NodeJS',
            color: 'text-green-600'
         },
         {
            tags: 'Clerk',
            color: 'text-blue-600'
         },
      ],
      desc: 'The Kanaeru Multi Dispenser project is an IoT innovation that allows you to easily make drinks. Equipped with three drink tubes, this device can not only mix drinks manually, but also automatically based on stored recipes or your favorite drink history. To ensure that all commands and data run smoothly, Kanaeru uses the MQTT protocol with HiveMQ as a broker, which efficiently connects its hardware and software.',
      image: xclone,
      link: 'https://github.com/DSQL-MONGKEY/maps-tracker-dashboard'
   },
   {
      title: 'Twitter Clone',
      isFeatured: true,
      techStack: [
         {
            tags: 'Typescript',
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
      isFeatured: false,
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
      isFeatured: false,
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
      isFeatured: false,
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
      isFeatured: false,
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
      isFeatured: false,
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
      isFeatured: false,
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
      isFeatured: false,
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
      isFeatured: true,
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
      isFeatured: false,
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

export const cards = [
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
         A champion is someone who never gives up, even when he knows he&apos;s out of chances.q
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

export const articles = [
   {
      logo: <TbBrandNotion/>,
      title: 'Notion',
      tags: [''],
      description: '',
   },
   {
      logo: <TbBrandNotion />,
      title: 'Github Library',
      tags: [''],
      description: '',
   },
   {
      logo: <TbBrandNotion />,
      title: 'Medium',
      tags: [''],
      description: '',
   },
]

export const playlist = [
   {
      title: 'TEST',
      src: '../../src/music/test.mp3'
   }
]

export const GITHUB_ACCOUNTS = {
   username: "DSQL-MONGKEY"
}

