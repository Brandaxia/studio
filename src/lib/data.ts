
import type { Program, Course, LearningPath, Instructor, Testimonial, FaqItem, Student } from './types';

export const initialPrograms: Program[] = [
  {
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'Build a solid foundation in machine learning, from statistical principles and core algorithms to model deployment and operation in production environments. This program is ideal for aspiring AI engineers.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning',
    courseIds: ['c1', 'c2', 'c3', 'c4'],
  },
  {
    id: 'p2',
    title: 'NLP: From Text to Transformers',
    description: 'Master the art of building models that understand and generate human language. This program starts with text preprocessing and culminates in the architecture of modern transformers like BERT and GPT.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c5', 'c6', 'c7'],
  },
  {
    id: 'p3',
    title: 'Computer Vision & Image Analysis',
    description: 'Teach computers to "see" and interpret the visual world. This program covers image processing fundamentals, convolutional neural networks (CNNs), and advanced object detection and segmentation techniques.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision',
    courseIds: ['c8', 'c9', 'c10'],
  },
   {
    id: 'p4',
    title: 'Generative AI & Large Language Models',
    description: 'Explore the cutting-edge of AI. This program covers the theory behind generative models like VAEs and GANs, the architecture of LLMs, and the art of prompt engineering to create novel content.',
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'generative ai',
    courseIds: ['c11', 'c12', 'c13'],
  },
];

export const initialCourses: Course[] = [
  // Program p1: Machine Learning Engineering
  { id: 'c1', programId: 'p1', title: 'Statistical Foundations for Machine Learning', description: 'Grasp the core statistical concepts—probability, inference, and regression—that underpin modern machine learning algorithms.'},
  { id: 'c2', programId: 'p1', title: 'Supervised Learning: From Regression to Classification', description: 'A deep dive into supervised learning models, including linear/logistic regression, decision trees, and support vector machines.'},
  { id: 'c3', programId: 'p1', title: 'Unsupervised Learning & Dimensionality Reduction', description: 'Explore clustering algorithms like K-Means, anomaly detection, and feature reduction techniques such as PCA.'},
  { id: 'c4', programId: 'p1', title: 'Introduction to Neural Networks & Deep Learning', description: 'Build your first neural networks from scratch and understand the principles of deep learning with TensorFlow and PyTorch.'},
  
  // Program p2: NLP: From Text to Transformers
  { id: 'c5', programId: 'p2', title: 'Text Preprocessing & Vectorization Techniques', description: 'Learn to clean, process, and represent text data for machine learning models using techniques like Bag-of-Words, TF-IDF, and Word2Vec.'},
  { id: 'c6', programId: 'p2', title: 'Understanding Transformers & the Attention Mechanism', description: 'Uncover the core architecture behind modern LLMs, focusing on the self-attention mechanism that revolutionized NLP.'},
  { id: 'c7', programId: 'p2', title: 'Fine-tuning Language Models for Downstream Tasks', description: 'Adapt pre-trained models like BERT for specific applications such as sentiment analysis, text classification, and named entity recognition.'},
  
  // Program p3: Computer Vision & Image Analysis
  { id: 'c8', programId: 'p3', title: 'Fundamentals of Digital Image Processing', description: 'Learn about pixels, color spaces, filtering, and geometric transformations as the basis for all computer vision tasks.'},
  { id: 'c9', programId: 'p3', title: 'Convolutional Neural Networks (CNNs) for Image Recognition', description: 'Build and train deep learning models for classifying images, understanding layers, and optimizing performance.'},
  { id: 'c10', programId: 'p3', title: 'Object Detection and Image Segmentation', description: 'Go beyond classification to identify and segment objects within images using architectures like YOLO and Mask R-CNN.'},

  // Program p4: Generative AI & Large Language Models
  { id: 'c11', programId: 'p4', title: 'Introduction to Generative Models: VAEs and GANs', description: 'Understand the principles behind generative AI, including Variational Autoencoders and Generative Adversarial Networks.'},
  { id: 'c12', programId: 'p4', title: 'The Architecture of Large Language Models (LLMs)', description: 'A detailed look at the internal workings of large-scale models like GPT, including training, scaling, and ethical considerations.'},
  { id: 'c13', programId: 'p4', title: 'Prompt Engineering & In-Context Learning', description: 'Master the art and science of crafting effective prompts to control and steer the output of LLMs for a wide variety of creative and analytical tasks.'},
];

export const initialLearningPaths: LearningPath[] = [
  { 
    id: 'lp1', 
    title: 'Foundations of AI Engineering', 
    description: 'A comprehensive path covering foundational Machine Learning and Natural Language Processing to build a solid base for a career in AI engineering. It focuses on core algorithms, statistical principles, and practical model building.', 
    programIds: ['p1', 'p2'] 
  },
  { 
    id: 'lp2', 
    title: 'Advanced AI Specialization', 
    description: 'Deepen your expertise with advanced topics in computer vision and the latest in generative AI. This path is for those who want to push the boundaries of AI applications, from complex image analysis to creating novel content with generative models.', 
    programIds: ['p3', 'p4'] 
  },
  {
    id: 'lp3',
    title: 'AI for Business & Product Leaders',
    description: 'Understand the strategic implications of AI and how to lead AI-driven projects. This path focuses on identifying opportunities, managing AI teams, and understanding the business value of machine learning and generative AI without requiring deep technical expertise.',
    programIds: ['p1', 'p4']
  },
  {
    id: 'lp4',
    title: 'Prompt Engineering & LLM Apps',
    description: 'Master the art and science of prompt design to effectively communicate with and steer Large Language Models. This specialization covers advanced prompting techniques and the development of applications built on top of LLMs.',
    programIds: ['p2', 'p4']
  },
  {
    id: 'lp5',
    title: 'Deep Learning for Computer Vision',
    description: 'A specialized path for creating advanced computer vision systems. It covers the journey from foundational image processing and CNNs to complex tasks like object detection, segmentation, and real-time analysis.',
    programIds: ['p1', 'p3']
  },
  {
    id: 'lp6',
    title: 'Natural Language Processing Specialist',
    description: 'Become an expert in understanding and processing human language. This path covers everything from classic text analysis techniques to the sophisticated transformer architectures that power modern search, translation, and summarization systems.',
    programIds: ['p1', 'p2']
  },
  {
    id: 'lp7',
    title: 'Full-Stack AI Developer',
    description: 'A complete journey to become a well-rounded AI developer. This path covers Machine Learning, NLP, Computer Vision, and Generative AI, preparing you to build, integrate, and deploy end-to-end AI products.',
    programIds: ['p1', 'p2', 'p3', 'p4']
  }
];

export const initialInstructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Principal AI Scientist',
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
      program: 'NLP: From Text to Transformers',
      avatar: 'https://picsum.photos/100/100?random=7',
      aiHint: 'happy person'
    },
    {
      id: '2',
      quote: "The foundational knowledge from the ML course is invaluable. Ainsophic Academy is a beacon for aspiring engineers.",
      name: 'Brenda K.',
      program: 'Machine Learning Engineering',
      avatar: 'https://picsum.photos/100/100?random=8',
      aiHint: 'smiling student'
    },
    {
      id: '3',
      quote: "I applied the computer vision concepts to my startup and the results are amazing. My creativity has flourished.",
      name: 'Carlos M.',
      program: 'Computer Vision & Image Analysis',
      avatar: 'https://picsum.photos/100/100?random=9',
      aiHint: 'joyful man'
    },
];

export const initialFaqs: FaqItem[] = [
  {
    id: '1',
    question: 'What is "Ainsophic Academy"?',
    answer: 'Ainsophic Academy is a learning platform dedicated to providing cutting-edge education in Artificial Intelligence, from foundational concepts to advanced specializations.',
  },
  {
    id: '2',
    question: 'Do I need a background in programming to enroll?',
    answer: 'While our foundational courses are designed to be accessible, a basic understanding of Python is recommended to get the most out of the material. We offer prep courses for beginners.',
  },
  {
    id: '3',
    question: 'Are the programs online or in-person?',
    answer: 'Currently, all our programs are offered in a flexible online format, allowing students from around the world to join. We use a combination of recorded content, live sessions, and interactive notebooks.',
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
