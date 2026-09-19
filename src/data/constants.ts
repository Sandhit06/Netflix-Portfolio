
import { TimelineItem } from '../types';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';

// Skills
export const skillsData = [
    // Programming Languages
    { name: "C", category: "Languages", description: "Structured programming language", icon: "SiC" },
    { name: "C++", category: "Languages", description: "Object-oriented programming", icon: "SiCplusplus" },
    { name: "JavaScript", category: "Languages", description: "Scripting for the web", icon: "SiJavascript" },
    { name: "Python", category: "Languages", description: "General-purpose high-level language", icon: "SiPython" },
    { name: "HTML", category: "Frontend", description: "Markup for the web", icon: "SiHtml5" },
    { name: "CSS", category: "Frontend", description: "Styling for the web", icon: "SiCss3" },
    { name: "Java", category: "Languages", description: "Widely-used general-purpose language", icon: "FaJava" },

    // Frontend Frameworks
    { name: "React", category: "Frontend", description: "Component-based UI library", icon: "FaReact" },
    { name: "Angular", category: "Frontend", description: "Enterprise web framework", icon: "SiAngular" },
    { name: "Redux", category: "State Management", description: "State container for JS apps", icon: "SiRedux" },
    { name: "Riverpod", category: "State Management", description: "Flutter state management", icon: "FaPuzzlePiece" },
    { name: "Provider", category: "State Management", description: "Simpler state mgmt for Flutter", icon: "FaPuzzlePiece" },

    { name: "GraphQL", category: "Backend", description: "API query language", icon: "SiGraphql" },

    // Mobile
    { name: "Dart", category: "Mobile", description: "Language for Flutter apps", icon: "SiDart" },
    { name: "Kotlin", category: "Mobile", description: "Modern Android development language", icon: "SiKotlin" },
    { name: "Flutter", category: "Mobile", description: "UI toolkit for building apps", icon: "SiFlutter" },


    // Backend & APIs
    { name: "Node.js", category: "Backend", description: "JavaScript runtime for backend", icon: "FaNodeJs" },
    { name: "Flask", category: "Backend", description: "Python microframework", icon: "SiFlask" },
    { name: "Spring Boot", category: "Backend", description: "Java-based backend framework", icon: "SiSpringboot" },
    { name: "RESTful API", category: "Backend", description: "Web communication standard", icon: "SiApachenetbeanside" }, // fallback icon

    // Cloud & DevOps
    { name: "Google Cloud", category: "Cloud", description: "Cloud platform & services", icon: "SiGooglecloud" },
    { name: "Firebase", category: "Cloud", description: "Realtime DB and hosting", icon: "SiFirebase" },
    { name: "Docker", category: "DevOps", description: "Container platform", icon: "FaDocker" },
    { name: "AWS", category: "Cloud", description: "Cloud infrastructure platform", icon: "FaAws" },
    { name: "Agile", category: "DevOps", description: "Iterative development methodology", icon: "FaProjectDiagram" },
    { name: "CI/CD", category: "DevOps", description: "Automated integration and delivery", icon: "SiCodemagic" }, // or fallback

    // Tools
    { name: "Git", category: "Tools", description: "Version control system", icon: "FaGitAlt" },
    { name: "Figma", category: "Tools", description: "UI/UX design tool", icon: "SiFigma" },
    { name: "Excel", category: "Tools", description: "Spreadsheet and data analysis", icon: "SiMicrosoftexcel" },
    { name: "Android Studio", category: "Tools", description: "IDE for native Android development", icon: "SiAndroidstudio" },
];


// Projects: paste each project's full https:// website URL into websiteUrl.
// Leave it empty to keep the card without a destination.
export const projectsData = [
    {
        title: "CodeNexus",
        websiteUrl: "https://codenexus-sandhit.vercel.app/",
        description: "A Next.js & TypeScript-powered interview platform with secure authentication, real-time video calls, screen sharing, recording, and seamless interview management for scalability and high performance.",
        techUsed: "React, CSS3",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576766/codenexus_1_hrccxa.avif", // Place this image inside public/images
    },
    {
        title: "AI Finance Platform",
        websiteUrl: "https://github.com/Sandhit06/AI-Finance-Platform",
        description: "A Full-Stack AI-powered finance platform featuring secure authentication, transaction management, AI insights, budgeting, and automated workflows for scalability and performance.",
        techUsed: "Next.js, Express.js, CSS3, MongoDB",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576765/welth_1_s7rlyp.avif",
    },
    {
        title: "3D-Iphone Website",
        websiteUrl: "https://sandhit-iphone.vercel.app/",
        description: "A fully responsive Apple iPhone 15 Pro website clone using React.js, Three.js, GSAP, and TailwindCSS, featuring smooth animations, dynamic 3D model rendering, a custom video carousel, and an optimized user experience.",
        techUsed: "React, CSS3",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742578742/iphone_1_wxmmus.webp",
    },
    {
        title: "Car Rent",
        websiteUrl: "https://github.com/Sandhit06/Car-Rental-App",
        description: "A Next.js & TypeScript-powered car showcase platform with advanced search, filtering, SSR, API-driven real-time data, responsive design, and SEO optimization for seamless user experience and performance.",
        techUsed: "Next.js, CSS3, MongoDB",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576765/carrent_1_msijzr.avif",
    },
    {
        title: "NOVA",
        websiteUrl: "https://sandhit-nova.vercel.app/",
        description: "Designed and developed a visually captivating website inspired by Zentry, leveraging React.js, GSAP, and Tailwind CSS to implement scroll-triggered animations, geometric transitions, interactive 3D hover effects, and seamless video storytelling, ensuring a luxurious and responsive user experience.",
        techUsed: "React, CSS3",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742579516/imag_rnjjna.jpg",
    },
    {
        title: "Vibe Store App",
        websiteUrl: "https://github.com/Sandhit06/ECommerce-App",
        description: "Vibe Store is an e-commerce app featuring a checkout system, coupon discounts, product search, MVVM architecture, and seamless UI animations, built using Fake Store API for a smooth shopping experience.",
        techUsed: "Kotlin, MongoDB",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576765/vibe_1_h0gsrm.avif",
    },
    {
        title: "Weather App",
        websiteUrl: "https://github.com/Sandhit06/suraksha",
        description: "Flutter Weather App provides real-time weather updates using the Weather API, featuring a sleek UI, geolocation-based forecasts, and dynamic weather animations for an intuitive user experience.",
        techUsed: "Flutter, Firebase, RESTful API",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576822/weather_1_hepsuy.jpg",
    },
    {
        title: "Bank App",
        websiteUrl: "https://github.com/Sandhit06/XNL-21BAI1743-MOBILE-1",
        description: "Highly scalable, event-driven fintech platform with microservices architecture, real-time transactions, AI-powered risk management, and Kubernetes-based cloud deployment for seamless financial operations.",
        techUsed: "Flutter, Express.js, Firebase",
        image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742565908/bank1_tvrsbw.avif",
    },
];

// Timeline (Work + Education)
export const timelineData: TimelineItem[] = [
    {
        timelineType: 'work',
        name: 'Standard Chartered Gloal Business Services',
        title: 'Software Engineer',
        techStack: ' SpringBoot, PostgresSQL, Java, React, Micfroservices',
        summaryPoints: [
            'Engineered the full DQMA (Data Quality Management & Analytics) module end-to-end in Spring Boot and React.js + Typescript, covering DQ Rule CRUD across 5 rule categories, multi-stage Linkage workflows (Draft -> Review -> Live), Monitor dashboards and Exception tracking, enabling data stewards to govern critical financial data attributes and reducing rule lifecycle management overhead by an estimated 30%. Performed automated testing & Performance testing and increased scalability & efficiency.',
            'Developed core backend functionality using Spring Boot for template file uploads and failed-record downloads via DQ Monitor, integrating backend APIs with the frontend to streamline file processing and reduce upload time by 30%. Deployed and maintained production applications using PuTTY and WinSCP, ensuring seamless server updates, and consistent application availability.',
            'Architected the RTDS (Real-Time Data Service) ingestion monitoring dashboard using Dagre.js with 7 parallel visualizations, optimizing concurrent API calls to reduce dashboard load time by ~40% while monitoring millions of daily financial messages.',
            'Conducted System Integration Testing (SIT), resolved defects, and supported end-to-end software delivery using Azure DevOps (ADO), including Git repositories, CI/CD pipelines, version control, and deployment automation as part of the RTDS sub-squad.',
            'Standardized 100+ REST API integration patterns by implementing centralized JWT token injection, session-expiry handling and Axios request/response interceptors, reducing per-component boilerplate by ~60% and accelerating consistent API integration.',
        ],
        dateRange: 'Sept 2025 - Present'
    },
    {
        
        timelineType: 'work',
        name: 'Canverro',
        title: 'Flutter Developer',
        techStack: ' Flutter, Firebase, Android, Node-js',
        summaryPoints: [
            'Crafted and designed a set of reusable UI components following Flutter best practices. This reduced future designrevisions by an estimated 20% due to positive client feedback.',
            'Developed and tested over 1000 lines of Flutter and Dart code utilizing BLoC and Provider State Managementpatterns; this initiative accelerated deployment timelines while ensuring a seamless user experience on bothiOS and Android.',
            'Implemented robust login and sign-up features, independently overseeing the project from design to deployment.',
            'Streamlined development and deployment processes by leveraging Jira & Agile methodologies.',
        ],
        dateRange: 'Aug 2023 - Apr 2025'
    },
    {
        timelineType: 'work',
        name: 'Fossip',
        title: 'Flutter Developer',
        techStack: ' Flutter, Firebase, Canva',
        summaryPoints: [
            'Reduced app load time by 30% through collaboration with senior developers, optimizing scalability, and improvingcode quality via rigorous code reviews.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Redesigned the app UI framework, introducing new features and a user-friendly interface, resulting in a 25%increase in user engagement and a 15% improvement in user retention.',
            'Identified and resolved critical bugs, improving app stability and boosting performance, leading to a reduction incrash reports.',
        ],
        dateRange: 'May 2022 - Aug 2023'
    },
    {
        timelineType: 'work',
        name: 'GDSC VIT',
        title: 'Flutter Developer',
        techStack: ' Flutter, Firebase',
        summaryPoints: [
            'Developing and maintaining web applications using Flutter and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
        dateRange: '2023 - Present'
    },
    {
        timelineType: 'work',
        name: 'Android Club VIT',
        title: 'Android Developer',
        techStack: ' MongoDB, Docker, AWS',
        summaryPoints: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Organized various events and workshops on campus.',
        ],
        dateRange: '2023 - Present'
    },
    {
        timelineType: 'education',
        name: 'Vellore Institute of Technology, Chennai',
        title: 'B.Tech in Computer Science Spl. AI & ML',
        techStack: 'C, C++, Java, Data Structures, Algorithms',
        summaryPoints: [
            'Graduated with 8CGPA',
            'Active member of coding club and tech fest organizer'
        ],
        dateRange: '2021 - Present'
    },
    {
        timelineType: 'education',
        name: 'St. Claret School, Kolkata',
        title: 'Higher Secondary Education',
        techStack: 'Maths, Physics, Chemistry, Computer Science',
        summaryPoints: [
            'Secured 90% in final board exams',
            'Led the school’s tech club and robotics team'
        ],
        dateRange: '2019 - 2021'
    },

];


// Profile Banner
export const profileBannerData = {
    headline: "Sandhit Karmakar - Full Stack Developer",
    resumeLink: "https://drive.google.com/file/d/1BODZFawoOLGH89k0TrMUeF-fR1PKwExU/view?usp=sharing",
    linkedinLink: "https://www.linkedin.com/in/sandhit-karmakar/",
    backgroundImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
};


// Contact Info
export const contactInfo = {
    name: "Sandhit Karmakar",
    title: "Full-Stack Developer",
    summary: "Actively seeking full-time opportunities in backend and data engineering, leveraging strong expertise in both domains.",
    companyUniversity: "VIT Chennai",
    linkedinLink: "https://www.linkedin.com/in/sandhit-karmakar/",
    email: "sandhitkarmakar@gmail.com",
    phoneNumber: "+91 8274996750",
    profilePicture: "/images/yourpic.jpg"
};


// Certifications
export const certificationsData = [
    {
        title: "GOOGLE CLOUD COMPUTING FOUNDATIONS PROGRAM",
        issuer: "Google",
        issuedDate: "Dec 2023",
        link: "https://drive.google.com/file/d/1IDiMnXOCWsuhUU9C1zo9PtDtJ7m9B5j-/view?usp=drive_link",
        iconName: "googlecloud"
    },
    {
        title: "AWS Solutions Architect- Associate Internship Program",
        issuer: "AWS",
        issuedDate: "2022",
        link: "https://drive.google.com/file/d/1doCDC8h-IcZ9wA3K-dk3Hp5Gp6DdgBa_/view",
        iconName: "aws"
    },
    {
        title: "Git, Github Fundamentals for Software Developers",
        issuer: "Udemy",
        issuedDate: "2022",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-df91ff6b-f4c0-418a-82a5-05969f86540a.pdf",
        iconName: "udemy"
    },
    {
        title: "SQL Intermediate- Certificate Of Accomplishment",
        issuer: "HackerRank",
        issuedDate: "Mar 2025",
        link: "https://www.hackerrank.com/certificates/iframe/b74b60c44683",
        iconName: "hackerrank"
    },
    {
        title: "Google Hashcode Certificate",
        issuer: "Google",
        issuedDate: "2022",
        link: "https://drive.google.com/file/d/1j8PHq8TcZd8RcFm1Tx4BLa1W-Q-iB4qs/view?usp=sharing",
        iconName: "googlecloud"
    },
    {
        title: "FlutterFest hackathon Winner",
        issuer: "VIT Chennai",
        issuedDate: "2023",
        link: "https://www.linkedin.com/in/sandhit-karmakar/recent-activity/all/",
        iconName: "udacity"
    },
];

// Blogs
export const blogPosts = [

];

// Reading List
export const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        imgSrc: "/images/atomic_habits.jpg",
        description: "How small habits lead to big changes."
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        imgSrc: "/images/deep_work.jpg",
        description: "Rules for focused success in a distracted world."
    }
];


export const profiles = [
    {
        name: "Recruiter",
        image: blueImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif" // Dark storm clouds
    },
    {
        name: "Developer",
        image: greyImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" // Flickering neon lights
    },
    {
        name: "Stalker",
        image: redImage,
        backgroundGif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3czcwZ3VrazA0YjAyNzlnMW1tOXBmdGxhZmd2anlmaXBydTA2ZGpmZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/5VKbvrjxpVJCM/giphy.gif" // Dark, abstract digital lights
    },
    {
        name: "Adventurer",
        image: yellowImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" // Dark ocean waves at night
    },
];
