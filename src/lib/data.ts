
import type { Program, Course, LearningPath, Instructor, Testimonial, FaqItem, Student } from './types';

// =================================================================
// 1. PROGRAMS OF STUDY
// =================================================================
// These are the core academic programs. Each represents a major discipline within AI.

export const initialPrograms: Program[] = [
  {
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'For aspiring engineers and developers. This program provides a comprehensive foundation in building, deploying, and maintaining machine learning systems at scale. It covers the end-to-end ML lifecycle, from data ingestion and model training to MLOps and production monitoring. Audience: Developers, software engineers, aspiring ML engineers.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning engineer',
    courseIds: ['c1', 'c2', 'c3', 'c4'],
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
];


// =================================================================
// 3. LEARNING PATHS
// =================================================================
// These are curated sequences of programs designed for specific career goals and audiences.

export const initialLearningPaths: LearningPath[] = [
  // --- Introductory Level ---
  { 
    id: 'lp1', 
    title: 'AI Literacy for All', 
    description: 'For the general public, students, and non-technical professionals. This path demystifies AI, focusing on core concepts, real-world applications, and ethical considerations without requiring programming knowledge. Ideal for anyone curious about the AI revolution. (Introductory)', 
    programIds: ['p4'] 
  },
  {
    id: 'lp2',
    title: 'AI for Business & Product Leaders',
    description: 'For managers, executives, and entrepreneurs. This path focuses on the strategic implications of AI, how to identify opportunities for innovation, and how to lead AI-driven projects without getting lost in the technical weeds. (Introductory / Strategic)',
    programIds: ['p1', 'p4']
  },
  {
    id: 'lp8',
    title: 'AI for Creatives & Artists',
    description: 'A path for artists, designers, writers, and marketers. Learn to use generative AI tools for text, image, and sound creation. This path focuses on practical application and creative workflows, not deep coding. (Introductory / Creative)',
    programIds: ['p4', 'p3']
  },
  
  // --- Professional / Engineering Level ---
  { 
    id: 'lp3', 
    title: 'Data Scientist with AI Specialization', 
    description: 'For aspiring data scientists and analysts. This path provides a robust foundation in machine learning and NLP, equipping you to extract insights, build predictive models, and work with complex text data. (Professional)', 
    programIds: ['p1', 'p2'] 
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
    programIds: ['p1', 'p2', 'p3', 'p4']
  },
  {
    id: 'lp7',
    title: 'AI Research Scientist',
    description: 'For academics, graduate students, and R&D professionals. This path delves into the theoretical underpinnings of NLP and Generative AI, focusing on model architecture, training methodologies, and areas of active research. (Advanced / Academic)',
    programIds: ['p2', 'p4']
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
