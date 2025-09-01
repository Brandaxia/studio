
import type { Program, Course, LearningPath, Instructor, Testimonial, FaqItem, Student, Integration, AcademyApiKey } from './types';

// =================================================================
// 1. PROGRAMS OF STUDY
// =================================================================
// These are the core academic programs. Each represents a major discipline within AI.

export const initialPrograms: Program[] = [
  // --- Foundational & General Audience Programs ---
  {
    id: 'p8',
    title: 'AI Fundamentals: A Practical Introduction',
    description: 'A program for everyone. Demystify artificial intelligence and understand its real-world impact on society, business, and daily life. No coding background required. Learn the key concepts, recognize different types of AI, and discuss its future. Audience: General public, students, non-technical professionals.',
    image: 'https://picsum.photos/600/400?random=18',
    aiHint: 'abstract shapes',
    courseIds: ['c22', 'c23'],
  },
  {
    id: 'p9',
    title: 'Creative AI: Art, Design, and Storytelling',
    description: 'Unleash your creativity with AI. This program is for artists, designers, writers, and marketers who want to leverage generative tools for image creation, music composition, and narrative generation. Focus is on practical application and creative workflows. Audience: Artists, designers, marketers, storytellers.',
    image: 'https://picsum.photos/600/400?random=19',
    aiHint: 'digital art',
    courseIds: ['c24', 'c25', 'c26'],
  },
  {
    id: 'p10',
    title: 'AI for Young Innovators',
    description: 'A fun, interactive introduction to the world of AI for younger learners. Through visual programming tools and engaging projects, students will learn the basic ideas behind machine learning, build simple models, and see how AI can be used to solve problems. Audience: Middle and high school students (Ages 12-17).',
    image: 'https://picsum.photos/600/400?random=20',
    aiHint: 'kids learning code',
    courseIds: ['c27', 'c30'],
  },
  {
    id: 'p12',
    title: 'Computational Thinking Foundations',
    description: 'The essential prerequisite for a technical career in AI. This program builds the foundational mental models of computing, including logic, algorithms, data structures, and problem decomposition, without deep diving into a specific programming language. Audience: Aspiring programmers, pre-engineering students, anyone preparing for technical AI studies.',
    image: 'https://picsum.photos/600/400?random=22',
    aiHint: 'flowchart diagram',
    courseIds: ['c31', 'c32', 'c33'],
  },
  {
    id: 'p15',
    title: 'AI Strategy & Leadership',
    description: 'Go beyond the technology to master the strategy. This program is designed for current and future leaders who need to make informed decisions about AI adoption, investment, and governance in their organizations. Audience: Executives, product managers, consultants, business leaders.',
    image: 'https://picsum.photos/600/400?random=26',
    aiHint: 'business strategy meeting',
    courseIds: ['c42', 'c43'],
  },

  // --- Technical & Specialization Programs ---
  {
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'For aspiring engineers and developers. This program provides a comprehensive foundation in building, deploying, and maintaining machine learning systems at scale. It covers the end-to-end ML lifecycle, from data ingestion and model training to MLOps and production monitoring. Audience: Developers, software engineers, aspiring ML engineers.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning engineer',
    courseIds: ['c1', 'c2', 'c3', 'c4', 'c46'],
  },
  {
    id: 'p2',
    title: 'Natural Language Processing (NLP)',
    description: 'Dive deep into the theory and practice of building models that understand, process, and generate human language. This program covers linguistic fundamentals, classic NLP techniques, and the transformer architectures powering modern LLMs. Audience: Engineers, linguists, data scientists.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c5', 'c6', 'c7'],
  },
  {
    id: 'p3',
    title: 'Computer Vision & Image Analysis',
    description: 'Learn to build systems that "see" and interpret the visual world. This program spans from fundamental image processing to advanced deep learning techniques for object detection, segmentation, and video analysis. Audience: Engineers, data scientists, robotics specialists.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision',
    courseIds: ['c8', 'c9', 'c10'],
  },
   {
    id: 'p4',
    title: 'Generative AI & Large Language Models',
    description: 'Explore the cutting-edge of content creation and reasoning. This program is for those who want to understand, build, and utilize generative models like VAEs, GANs, and especially LLMs for novel applications. Audience: AI researchers, creative technologists, product leaders.',
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'generative ai',
    courseIds: ['c11', 'c12', 'c13'],
  },
  {
    id: 'p5',
    title: 'AI Ethics & Governance',
    description: 'A critical program for a new generation of responsible AI practitioners. It covers frameworks for fairness, accountability, transparency, and the societal impact of AI systems, preparing students to lead and implement responsible AI policies. Audience: Ethicists, policy makers, product managers, AI engineers.',
    image: 'https://picsum.photos/600/400?random=15',
    aiHint: 'ethics governance',
    courseIds: ['c14', 'c15', 'c16', 'c48'],
  },
  {
    id: 'p6',
    title: 'Reinforcement Learning (RL)',
    description: 'Master the science of building agents that learn to make optimal decisions through trial and error. This program covers everything from foundational Markov Decision Processes to deep RL algorithms like DQN and PPO. Audience: AI researchers, robotics engineers, game developers.',
    image: 'https://picsum.photos/600/400?random=16',
    aiHint: 'reinforcement learning',
    courseIds: ['c17', 'c18', 'c19'],
  },
  {
    id: 'p7',
    title: 'AI for Finance (FinTech)',
    description: 'A specialized program applying AI to the financial industry. It covers algorithmic trading, credit scoring, fraud detection, and risk management using machine learning and time-series analysis. Audience: Financial analysts, data scientists, FinTech developers.',
    image: 'https://picsum.photos/600/400?random=17',
    aiHint: 'ai finance',
    courseIds: ['c20', 'c21', 'c47'],
  },
  {
    id: 'p11',
    title: 'AI for Health (HealthTech)',
    description: 'Discover how AI is revolutionizing healthcare, from diagnostic imaging and drug discovery to personalized medicine. This program is designed for medical professionals, data scientists, and engineers looking to innovate in the HealthTech space. Audience: Clinicians, researchers, medical informaticists, developers.',
    image: 'https://picsum.photos/600/400?random=21',
    aiHint: 'ai healthcare',
    courseIds: ['c28', 'c29', 'c44', 'c45'],
  },
  {
    id: 'p13',
    title: 'AI for Science & Research',
    description: 'Accelerate discovery by applying AI to scientific challenges. This program covers the use of machine learning for data analysis, hypothesis generation, and simulation in fields like biology, physics, and climate science. Audience: PhDs, academic researchers, R&D scientists.',
    image: 'https://picsum.photos/600/400?random=23',
    aiHint: 'scientific research',
    courseIds: ['c34', 'c35', 'c36'],
  },
  {
    id: 'p14',
    title: 'Advanced Robotics & Embodied AI',
    description: 'Explore the intersection of AI and robotics. This program focuses on algorithms for perception, navigation, manipulation, and control, enabling the creation of intelligent physical systems. Audience: Robotics engineers, PhD students in robotics/AI.',
    image: 'https://picsum.photos/600/400?random=24',
    aiHint: 'robotics arm',
    courseIds: ['c37', 'c38', 'c39', 'c40', 'c41', 'c49'],
  },
];


// =================================================================
// 2. INDIVIDUAL COURSES
// =================================================================
// These are the modular courses that make up each program.

export const initialCourses: Course[] = [
  // P1: Machine Learning Engineering
  { id: 'c1', programId: 'p1', title: 'C1: Statistical & Mathematical Foundations', description: 'Grasp the core statistical concepts—probability, inference, and linear algebra—that underpin modern machine learning algorithms. (Introductory)'},
  { id: 'c2', programId: 'p1', title: 'C2: Supervised & Unsupervised Learning Models', description: 'A deep dive into classic models, from regression and classification to clustering and dimensionality reduction. (Intermediate)'},
  { id: 'c3', programId: 'p1', title: 'C3: Deep Learning & Neural Network Architectures', description: 'Build and understand deep neural networks, including ANNs, CNNs, and RNNs, using modern frameworks. (Intermediate)'},
  { id: 'c4', programId: 'p1', title: 'C4: MLOps: Deployment & Productionization', description: 'Learn to deploy, monitor, and maintain ML models in production environments using CI/CD pipelines and cloud infrastructure. (Advanced)'},
  { id: 'c46', programId: 'p1', title: 'C46: Graph Models and Graph Neural Networks (GNNs)', description: 'A specialization in modeling and learning from relational and graph-structured data, crucial for social networks, molecular biology, and recommendation systems. (Advanced/Specialization)' },

  // P2: Natural Language Processing (NLP)
  { id: 'c5', programId: 'p2', title: 'C5: Text Processing & Representation', description: 'Master techniques to clean, process, and represent text data for machine learning models, from Bag-of-Words and TF-IDF to Word2Vec and GloVe. (Introductory)'},
  { id: 'c6', programId: 'p2', title: 'C6: Transformers & the Attention Mechanism', description: 'Uncover the core architecture behind modern LLMs, focusing on the self-attention mechanism that revolutionized NLP. (Intermediate)'},
  { id: 'c7', programId: 'p2', title: 'C7: Advanced NLP: Fine-Tuning & Evaluation', description: 'Adapt pre-trained models like BERT for specific tasks (e.g., sentiment analysis, NER) and learn to evaluate their performance rigorously. (Advanced)'},
  
  // P3: Computer Vision & Image Analysis
  { id: 'c8', programId: 'p3', title: 'C8: Fundamentals of Digital Image Processing', description: 'Learn about pixels, color spaces, filtering, and geometric transformations as the basis for all computer vision tasks. (Introductory)'},
  { id: 'c9', programId: 'p3', title: 'C9: Convolutional Neural Networks (CNNs)', description: 'Build and train deep learning models for classifying images, understanding convolutional layers, pooling, and optimization. (Intermediate)'},
  { id: 'c10', programId: 'p3', title: 'C10: Advanced Vision: Object Detection & Segmentation', description: 'Go beyond classification to identify and segment objects within images and video using architectures like YOLO, R-CNN, and UNet. (Advanced)'},

  // P4: Generative AI & Large Language Models
  { id: 'c11', programId: 'p4', title: 'C11: Theory of Generative Models (VAEs & GANs)', description: 'Understand the mathematical principles behind generative AI, including Variational Autoencoders and Generative Adversarial Networks. (Intermediate)'},
  { id: 'c12', programId: 'p4', title: 'C12: LLM Architecture & In-Context Learning', description: 'A detailed look at the internal workings of large-scale models like GPT, including training strategies, scaling laws, and the mechanics of in-context learning. (Advanced)'},
  { id: 'c13', programId: 'p4', title: 'C13: Prompt Engineering & LLM Application Design', description: 'Master the art and science of crafting effective prompts and design patterns for building reliable and powerful applications on top of LLMs. (Intermediate)'},

  // P5: AI Ethics & Governance
  { id: 'c14', programId: 'p5', title: 'C14: Foundations of AI Ethics', description: 'Explore the philosophical and practical foundations of ethical AI, including bias, fairness, and accountability. (Introductory)'},
  { id: 'c15', programId: 'p5', title: 'C15: Auditing & Mitigating Algorithmic Bias', description: 'Learn technical methods to detect and mitigate bias in datasets and models to ensure equitable outcomes. (Advanced)'},
  { id: 'c16', programId: 'p5', title: 'C16: AI Governance & Regulatory Frameworks', description: 'Understand the global landscape of AI regulation, risk management, and how to implement governance structures within an organization. (Intermediate)'},
  { id: 'c48', programId: 'p5', title: 'C48: Differential Privacy and Secure Computation', description: 'Explore cutting-edge techniques to train AI models on sensitive data while providing mathematical guarantees of privacy. (Advanced/Research)' },

  // P6: Reinforcement Learning (RL)
  { id: 'c17', programId: 'p6', title: 'C17: Markov Decision Processes & Dynamic Programming', description: 'Master the mathematical framework that underpins modern RL, including value and policy iteration. (Intermediate)'},
  { id: 'c18', programId: 'p6', title: 'C18: Deep Q-Networks (DQN) and Policy Gradients', description: 'Implement foundational deep reinforcement learning algorithms to solve complex control tasks. (Advanced)'},
  { id: 'c19', programId: 'p6', title: 'C19: Advanced RL: Actor-Critic Methods & Multi-Agent Systems', description: 'Explore state-of-the-art actor-critic models (A2C, PPO) and delve into the complexities of multi-agent reinforcement learning. (Advanced)'},

  // P7: AI for Finance (FinTech)
  { id: 'c20', programId: 'p7', title: 'C20: Time-Series Analysis & Forecasting for Finance', description: 'Apply statistical and machine learning models (ARIMA, LSTMs) to predict financial market trends. (Intermediate)'},
  { id: 'c21', programId: 'p7', title: 'C21: ML for Algorithmic Trading & Fraud Detection', description: 'Design and backtest trading strategies and build robust systems to detect fraudulent financial activities using machine learning. (Advanced)'},
  { id: 'c47', programId: 'p7', title: 'C47: NLP for Financial Analysis', description: 'Utilize NLP to analyze financial news, earnings reports, and social media sentiment to gain a competitive market edge. (Advanced/Specialization)' },
  
  // P8: AI Fundamentals
  { id: 'c22', programId: 'p8', title: 'C22: AI in Everyday Life', description: 'Discover the AI you already use, from streaming recommendations to navigation apps, and understand the basic concepts that power them. (Introductory)'},
  { id: 'c23', programId: 'p8', title: 'C23: The Big Picture: AI, Ethics, and the Future', description: 'Discuss the societal impact of AI, the importance of ethical considerations, and what the future might hold for an AI-powered world. (Introductory)'},
  
  // P9: Creative AI
  { id: 'c24', programId: 'p9', title: 'C24: Visual Art with AI: From Prompts to Masterpieces', description: 'Learn to use text-to-image models like Midjourney and Stable Diffusion to create stunning visual art, illustrations, and designs. (Introductory/Creative)'},
  { id: 'c25', programId: 'p9', title: 'C25: AI for Writers: Co-writing with Language Models', description: 'Explore how to use LLMs as creative partners for brainstorming, drafting, and refining written content, from marketing copy to fiction. (Introductory/Creative)'},
  { id: 'c26', programId: 'p9', title: 'C26: Introduction to AI-Powered Music and Sound', description: 'Experiment with tools that generate melodies, beats, and soundscapes, opening new avenues for musical creativity. (Introductory/Creative)'},
  
  // P10: AI for Young Innovators
  { id: 'c27', programId: 'p10', title: 'C27: Build Your First AI Project', description: 'A project-based course where students will use block-based coding and simple AI tools to create a fun, interactive project, like a game or a chatbot. (Introductory/Youth)'},
  { id: 'c30', programId: 'p10', title: 'C30: What is a Neural Network?', description: 'A visual and intuitive explanation of how neural networks learn, designed specifically for young minds with no math prerequisites. (Introductory/Youth)' },

  // P11: AI for Health (HealthTech)
  { id: 'c28', programId: 'p11', title: 'C28: Medical Data & AI: Challenges and Opportunities', description: 'Understand the unique types of data in healthcare (EHRs, imaging) and the ethical and regulatory challenges of using AI in medicine. (Intermediate/Specialization)'},
  { id: 'c29', programId: 'p11', title: 'C29: ML for Medical Imaging and Diagnostics', description: 'Apply computer vision techniques to analyze medical images like X-rays and MRIs to assist in diagnostics. (Advanced/Specialization)'},
  { id: 'c44', programId: 'p11', title: 'C44: Computational Genomics and Drug Discovery', description: 'Learn how AI is used to analyze genomic data and accelerate the development of new medicines. (Advanced/Research)' },
  { id: 'c45', programId: 'p11', title: 'C45: Predictive Models for Clinical Outcomes', description: 'Develop machine learning models to predict patient outcomes and support clinical decision-making. (Advanced/Specialization)' },

  // P12: Computational Thinking Foundations
  { id: 'c31', programId: 'p12', title: 'C31: Logic and Algorithmic Thinking', description: 'Learn to think like a programmer by breaking down complex problems into logical steps and sequences. (Absolute Beginner)' },
  { id: 'c32', programId: 'p12', title: 'C32: Introduction to Data Structures', description: 'Understand the fundamental ways data is organized, from simple lists and dictionaries to more complex trees and graphs. (Absolute Beginner)' },
  { id: 'c33', programId: 'p12', title: 'C33: The Basics of Programming in Python', description: 'A gentle introduction to the Python programming language, covering variables, loops, functions, and the core syntax needed for AI. (Beginner)' },

  // P13: AI for Science & Research
  { id: 'c34', programId: 'p13', title: 'C34: AI-Powered Scientific Data Analysis', description: 'Use machine learning to find patterns and insights in large scientific datasets. (Advanced/Academic)' },
  { id: 'c35', programId: 'p13', title: 'C35: Simulating Complex Systems with AI', description: 'Explore how AI models can simulate and predict outcomes in fields like climate science, physics, and chemistry. (Advanced/Academic)' },
  { id: 'c36', programId: 'p13', title: 'C36: Automating Research with Language Models', description: 'Leverage LLMs to summarize literature, generate hypotheses, and assist in writing scientific papers. (Advanced/Academic)' },

  // P14: Advanced Robotics & Embodied AI
  { id: 'c37', programId: 'p14', title: 'C37: Robotic Perception & Sensor Fusion', description: 'Learn how robots perceive their environment by fusing data from cameras, LiDAR, and other sensors. (Advanced/Specialization)' },
  { id: 'c38', programId: 'p14', title: 'C38: Navigation, Pathfinding, and SLAM', description: 'Implement algorithms for robot navigation, including Simultaneous Localization and Mapping (SLAM). (Advanced/Specialization)' },
  { id: 'c39', programId: 'p14', title: 'C39: AI for Manipulation and Control', description: 'Develop intelligent systems for robotic arms and grippers to perform complex physical tasks. (PhD Level)' },
  { id: 'c40', programId: 'p14', title: 'C40: Cognitive Robotics & Human-Robot Interaction', description: 'Explore architectures for robot consciousness and how to design safe and intuitive interactions between humans and robots. (PhD Level)' },
  { id: 'c41', programId: 'p14', title: 'C41: Introduction to Quantum AI', description: 'A forward-looking course on the intersection of quantum computing and machine learning for solving currently intractable problems. (PhD Level/Research)' },
  { id: 'c49', programId: 'p14', title: 'C49: Imitation and Transfer Learning for Robotics', description: 'Go beyond RL to train robots by demonstrating tasks, enabling them to acquire complex skills more efficiently. (PhD Level/Research)' },

  // P15: AI Strategy & Leadership
  { id: 'c42', programId: 'p15', title: 'C42: AI-Driven Business Transformation', description: 'Learn to identify opportunities for AI integration, build a business case, and manage large-scale AI projects. (Strategic)' },
  { id: 'c43', programId: 'p15', title: 'C43: Leading AI Teams & Fostering Innovation', description: 'Develop the skills to build, manage, and retain high-performing AI teams and cultivate a culture of data-driven innovation. (Strategic)' },
];


// =================================================================
// 3. LEARNING PATHS
// =================================================================
// These are curated sequences of programs designed for specific career goals and audiences.

export const initialLearningPaths: LearningPath[] = [
  // --- Foundational Level (For General Audience & Beginners) ---
  { 
    id: 'lp1', 
    title: 'AI Literacy for All', 
    description: 'For the general public, students, and non-technical professionals. This path demystifies AI, focusing on core concepts, real-world applications, and ethical considerations without requiring programming knowledge. Ideal for anyone curious about the AI revolution. (Introductory)', 
    programIds: ['p8', 'p5'] 
  },
  {
    id: 'lp8',
    title: 'AI for Creatives & Artists',
    description: 'A path for artists, designers, writers, and marketers. Learn to use generative AI tools for text, image, and sound creation. This path focuses on practical application and creative workflows, not deep coding. (Introductory / Creative)',
    programIds: ['p9', 'p4']
  },
  {
    id: 'lp13',
    title: 'My First Journey into AI (Young Innovators)',
    description: 'A fun and engaging path designed for middle and high school students. This itinerary introduces the core ideas of AI and computational thinking through interactive projects and visual tools, building a strong foundation for future learning. (Youth)',
    programIds: ['p10', 'p12']
  },

  // --- Professional Level (For Aspiring AI Practitioners) ---
  {
    id: 'lp2',
    title: 'AI for Business & Product Leaders',
    description: 'For managers, executives, and entrepreneurs. This path focuses on the strategic implications of AI, how to identify opportunities for innovation, and how to lead AI-driven projects without getting lost in the technical weeds. (Introductory / Strategic)',
    programIds: ['p8', 'p15', 'p1']
  },
  { 
    id: 'lp3', 
    title: 'Data Scientist with AI Specialization', 
    description: 'For aspiring data scientists and analysts. This path provides a robust foundation in machine learning and NLP, equipping you to extract insights, build predictive models, and work with complex text data. (Professional)', 
    programIds: ['p12', 'p1', 'p2'] 
  },
  {
    id: 'lp4',
    title: 'Prompt Engineering & LLM Applications',
    description: 'A specialized, high-demand track for a broad audience. It provides a deep dive into prompt design, context optimization, and the architecture of LLM-powered applications, from simple chatbots to complex agents. (All Levels)',
    programIds: ['p2', 'p4']
  },
  {
    id: 'lp9',
    title: 'Specialist in MLOps',
    description: 'A highly technical path for engineers focused on the operational lifecycle of machine learning. Covers CI/CD for models, automated monitoring, infrastructure as code, and ensuring the reliability of AI systems in production. (Advanced / Engineering)',
    programIds: ['p1']
  },
  {
    id: 'lp12',
    title: 'AI Engineer for FinTech',
    description: 'A career-focused path for developers aiming to enter the financial technology sector. This route combines core ML engineering with specialized financial applications, preparing you for high-impact roles. (Professional / Specialization)',
    programIds: ['p12', 'p1', 'p7'],
  },

  // --- Advanced / Specialization Level ---
  {
    id: 'lp5',
    title: 'AI Architect (Computer Vision Focus)',
    description: 'For experienced engineers aiming for senior roles. This path covers the full stack of building advanced computer vision systems, from foundational ML to deploying complex object detection and analysis pipelines. (Advanced / Engineering)',
    programIds: ['p1', 'p3']
  },
  {
    id: 'lp6',
    title: 'Full-Stack AI Developer',
    description: 'The complete journey for a versatile AI developer. This path covers the four core pillars—ML Engineering, NLP, Computer Vision, and Generative AI—preparing you to design, build, and deploy end-to-end AI products. (Professional / Engineering)',
    programIds: ['p12', 'p1', 'p2', 'p3', 'p4']
  },
  {
    id: 'lp7',
    title: 'AI Research Scientist',
    description: 'For academics, graduate students, and R&D professionals. This path delves into the theoretical underpinnings of NLP and Generative AI, focusing on model architecture, training methodologies, and areas of active research. (Advanced / Academic)',
    programIds: ['p1', 'p2', 'p4', 'p6', 'p13']
  },
  {
    id: 'lp10',
    title: 'AI Ethics & Risk Officer',
    description: 'For professionals in governance, risk, and compliance. This path combines foundational ML and NLP with a deep dive into ethical frameworks, bias auditing, and governance, preparing leaders to navigate the complex landscape of responsible AI. (Advanced / Strategic)',
    programIds: ['p8', 'p5', 'p1']
  },
  {
    id: 'lp11',
    title: 'Reinforcement Learning Specialist',
    description: 'A deep specialization for engineers and researchers focused on building intelligent agents. This path combines general ML engineering with advanced RL theory and application, ideal for fields like robotics, gaming, and optimization. (Advanced / Research)',
    programIds: ['p1', 'p6']
  },
  {
    id: 'lp14',
    title: 'AI for Scientists and Academics',
    description: 'A path designed for PhDs and researchers in non-CS fields (e.g., Biology, Physics, Social Sciences). Learn to leverage AI as a powerful tool for data analysis, simulation, and accelerating scientific discovery. (Advanced / Academic)',
    programIds: ['p1', 'p13']
  },
  {
    id: 'lp15',
    title: 'Architect of Intelligent Robotics',
    description: 'An expert-level path for those aiming to design the next generation of autonomous systems. This itinerary covers everything from low-level control and perception to cognitive architectures. (PhD Level / Research)',
    programIds: ['p1', 'p3', 'p6', 'p14']
  },
  {
    id: 'lp16',
    title: 'Chief AI Officer (CAIO)',
    description: 'An executive path for future leaders. This route combines a high-level understanding of core AI technologies with deep strategic, ethical, and leadership training to guide enterprise-wide AI transformation. (Executive / Strategic)',
    programIds: ['p8', 'p1', 'p4', 'p5', 'p15']
  }
];

// =================================================================
// 4. INSTRUCTORS, TESTIMONIALS, FAQS, STUDENTS
// =================================================================
// This is supporting content and remains largely unchanged for now.

export const initialInstructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Principal AI Scientist, ML Engineering',
    avatar: 'https://picsum.photos/100/100?random=4',
    aiHint: 'female scientist',
  },
  {
    id: '2',
    name: 'Dr. Kenji Tanaka',
    title: 'Head of NLP Research',
    avatar: 'https://picsum.photos/100/100?random=5',
    aiHint: 'male researcher',
  },
  {
    id: '3',
    name: 'Dr. Lena Petrova',
    title: 'Computer Vision Architect',
    avatar: 'https://picsum.photos/100/100?random=6',
    aiHint: 'creative technologist',
  },
];

export const initialTestimonials: Testimonial[] = [
    {
      id: '1',
      quote: "The NLP course opened my eyes to the power of language models. Truly transformational.",
      name: 'Alex C.',
      program: 'p2',
      avatar: 'https://picsum.photos/100/100?random=7',
      aiHint: 'happy person'
    },
    {
      id: '2',
      quote: "The foundational knowledge from the ML course is invaluable. Ainsophic Academy is a beacon for aspiring engineers.",
      name: 'Brenda K.',
      program: 'p1',
      avatar: 'https://picsum.photos/100/100?random=8',
      aiHint: 'smiling student'
    },
    {
      id: '3',
      quote: "I applied the computer vision concepts to my startup and the results are amazing. My creativity has flourished.",
      name: 'Carlos M.',
      program: 'p3',
      avatar: 'https://picsum.photos/100/100?random=9',
      aiHint: 'joyful man'
    },
];

export const initialFaqs: FaqItem[] = [
  {
    id: '1',
    question: 'What is "Ainsophic Academy"?',
    answer: 'Ainsophic Academy is a learning platform dedicated to providing cutting-edge education in Artificial Intelligence, from foundational concepts to advanced specializations, tailored for various professional and academic levels.',
  },
  {
    id: '2',
    question: 'Who are the programs for?',
    answer: 'Our programs are designed for a wide audience, including the general public, non-technical professionals, engineers, developers, and academic researchers. Each learning path indicates its intended audience and level.',
  },
  {
    id: '3',
    question: 'Do I need a background in programming to enroll?',
    answer: 'While our engineering and advanced paths require a background in Python, we offer introductory paths like "AI Literacy for All" that focus on concepts and do not require programming skills.',
  },
  {
    id: '4',
    question: 'What kind of support do I get as a student?',
    answer: 'We offer comprehensive support through community forums, Q&A sessions with instructors, and access to a personal mentor to guide you on your learning journey.',
  },
];

export const initialStudents: Student[] = [
  {
    id: '1',
    name: 'Kaelen',
    email: 'kaelen@email.com',
    avatar: 'https://picsum.photos/100/100?random=11',
    enrolledDate: '2023-10-15',
    aiHint: 'male student',
  },
  {
    id: '2',
    name: 'Seraphina',
    email: 'seraphina@email.com',
    avatar: 'https://picsum.photos/100/100?random=12',
    enrolledDate: '2023-11-01',
    aiHint: 'female student',
  },
   {
    id: '3',
    name: 'Max',
    email: 'max@email.com',
    avatar: 'https://picsum.photos/100/100?random=13',
    enrolledDate: '2023-11-20',
    aiHint: 'focused student',
  },
   {
    id: '4',
    name: 'Elara',
    email: 'elara@email.com',
    avatar: 'https://picsum.photos/100/100?random=14',
    enrolledDate: '2024-01-05',
    aiHint: 'smiling woman',
  },
];

export const initialIntegrations: Integration[] = [
  {
    id: '1',
    name: 'Google AI Studio',
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx1234',
    enabled: true,
  },
  {
    id: '2',
    name: 'Moodle',
    apiKey: 'moodle-token-xxxxxxxxxxxxxx',
    enabled: false,
  },
  {
    id: '3',
    name: 'n8n',
    apiKey: 'n8n-token-xxxxxxxxxxxxxxxx',
    enabled: false,
  },
  {
    id: '4',
    name: 'Google Colab',
    apiKey: 'not-required-for-basic-usage',
    enabled: true,
  },
];

export const initialApiKeys: AcademyApiKey[] = [
    {
      id: 'key-1',
      key: `secret_live_123...xyz`,
      createdAt: '2023-10-01',
      status: 'active',
    },
     {
      id: 'key-2',
      key: `secret_test_456...abc`,
      createdAt: '2024-01-15',
      status: 'inactive',
    },
];

    
