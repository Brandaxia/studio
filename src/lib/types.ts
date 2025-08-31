/**
 * @fileOverview Defines the core data structures for the Ainsophic Academy application.
 */

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  aiHint: string;
  syllabus?: string[];
  moodleCourseId?: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  aiHint: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  program: string;
  avatar: string;
  aiHint: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledDate: string;
  avatar: string;
  aiHint: string;
}

export interface AppContent {
  programs: Program[];
  instructors: Instructor[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
}
