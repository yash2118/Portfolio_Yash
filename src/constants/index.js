import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
export const HERO_CONTENT = `Passionate about data science, I excel in machine learning, real-time analytics, and transforming data into actionable insights for impactful solutions. I thrive on uncovering patterns in complex data and building scalable solutions that drive innovation. Additionally, I explore opportunities in software development, leveraging analytical and problem-solving skills to create meaningful technological advancements.`;

export const ABOUT_TEXT = `Driven by innovation, I blend technical expertise with a creative mindset to develop intelligent, data-driven solutions that enhance user experiences and deliver measurable business value. With a strong foundation in data science, machine learning, and real-time analytics, I thrive on uncovering meaningful insights from complex data. Committed to continuous learning, I stay at the forefront of emerging technologies, leveraging advanced analytics and scalable systems to solve real-world challenges. My goal is to contribute to impactful projects that drive efficiency, innovation, and informed decision-making.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - June 2024",
    role: "Data Analyst Intern",
    company: "Tridhya Tech",
    description: `Analyzed market trends and developed actionable insights using Power BI, enabling data-driven strategic planning for market entry decisions in Singapore and the USA. Conducted comprehensive industry analysis to identify challenges, solutions, and key tech players in five major industries.`,
    technologies: ["Power BI", "Excel", "Python", "SQL"],
  },
  {
    year: "January 2024 - May 2024",
    role: "Machine Learning Intern",
    company: "BISAG-N",
    description: `Designed and deployed a retail shelf monitoring system using YOLO and Streamlit, achieving 90% accuracy while improving demand forecasting accuracy by 10%. Led a team to implement agile methodologies and develop data-driven solutions, optimizing project timelines by 40% and enhancing decision-making processes.`,
    technologies: ["Python", "YOLO", "Agile", "Machine Learning Algorithms"],
  },
  {
    year: "November 2023 - January 2024",
    role: "Artificial Intelligence Engineer Intern",
    company: "RadicalX",
    description: `Leveraged AI technologies and frameworks, including OpenAI, Llama 2, TensorFlow, and Google Gen AI Studio, to develop innovative solutions and achieve project objectives efficiently.`,
    technologies: ["Python", "OpenAI", "Tensorflow", "Google Gen Ai Studio", "Llama 2"],
  },
  {
    year: "July 2023 - August 2023",
    role: "Data Analytics and Machine Learning Intern ",
    company: "Infolabz",
    description: `Enhanced preprocessing efficiency and predictive capabilities by automating data workflows and implementing CNNs for image classification. Refined regression models and leveraged API-based data extraction to support informed decision-making.`,
    technologies: ["Python", "Tensorflow", "Keras", "APIs","Regression Models"],
  },
];

export const PROJECTS = [
  {
  title: "Algorithm Validation Study – linedanceAI (via UTD Biotech Club)",
  image: project7,
  description: 
    "Collaborated on a cross-functional team to collect and analyze movement and health data from 179 participants using Movality®, performing feature engineering, statistical analysis (Python, R), and delivering insights through data visualization and reporting."
  ,
  technologies: ["Python", "R", "Pandas", "Matplotlib", "Seaborn", "Movality®", "Statistical Analysis"],
  githubLink: "https://github.com/yash2118/LineDanceAI"
},

  {
    title: "Gamora Labs - AI Academic Assistant and Mentor Platform",
    image: project1,
    description:
      "Developed an AI-powered assistant using Google's Gemini 1.5 Pro to enable natural language queries on UTD's academic data via the Nebula API. Built a secure Streamlit interface with MySQL backend to fetch course, professor, and scheduling information. Integrated a Mentor-Mentee matching system to foster peer-to-peer academic support, with features for mentor registration, session booking, and secure authentication using bcrypt.",
    technologies: ["Python", "Streamlit", "Gemini 1.5 Pro", "MySQL", "Pandas", "bcrypt"],
    githubLink: "https://github.com/yash2118/GamoraLabs"
  },
  {
    title: "Healthcare Cost Prediction & Insurance Optimization Tool",
    image: project2,
    description:
      "Developed an AI-powered app using Python, Streamlit, and Scikit-learn to predict individual healthcare costs, classify patients into risk tiers, and recommend proactive care strategies. Integrated SHAP for explainable AI, a premium optimization module, and smoking cessation impact analysis to support data-driven insurance pricing and portfolio management.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "SHAP", "Matplotlib", "Pandas", "Joblib"],
    githubLink: "https://github.com/yash2118/Healthcare_Cost_Predictor"
  },
  {
    title: "Linkedin Posts Generator",
    image: project3,
    description:
      "Developed a LinkedIn Post Generator using LLM and MongoDB to dynamically create posts based on influencer data and topics, integrating a Streamlit interface for real-time customization and content generation.",
    technologies: ["LLM", "MongoDB", "Streamlit", "Python", "APIs"],
    githubLink: "https://github.com/yash2118/LinkedinPostGenerator",
  },
  {
    title: "Real Time Stock Market Data Analysis",
    image: project4,
    description:
      "Built a real-time stock market analysis data engineering pipeline using Apache Kafka and AWS services (S3, Glue, Athena) for efficient storage, querying, and continuous data flow to analyze stock trends.",
    technologies: ["Apache Kafka", "AWS (S3, Glue, Athena)", "Python"],
    githubLink: "https://github.com/yash2118/LinkedinPostGenerator",
  },
  {
    title: "Movie Recommendation System",
    image: project5,
    description:
      "Developed a personalized movie recommendation system using cosine similarity on Kaggle datasets, and implemented a Flask web interface to provide seamless user interaction and movie suggestions.",
    technologies: ["Python", "Flask", "Cosine Similarity", "Data Processing"],
    githubLink: "https://github.com/yash2118/MovieRecommendation",
  },
  {
    title: "NewsApp",
    image: project6,
    description:
      "A React-based News Web App that fetches real-time news using NewsAPI, allowing users to explore articles across multiple categories like Business, Health, Technology, and more for a seamless browsing experience.",
    technologies: ["APIs", "MongoDB", "React.js", "Node.js"],
    githubLink: "https://github.com/yash2118/NewsApp",
  },
];

export const CONTACT = {
  address: "7575 Frankford Road, Dallas, TX 75252 ",
  phoneNo: "+1-469-216-4089 ",
  email: "yashjain2118@gmail.com",
};
