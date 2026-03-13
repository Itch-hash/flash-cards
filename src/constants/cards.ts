export interface FlashCard {
  id: number;
  question: string;
  answer: string;
  category: "JavaScript" | "React" | "TypeScript" | "CSS" | "HTML";
  difficulty: "easy" | "medium" | "hard";
}

export const FLASH_CARDS: FlashCard[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    answer: "O(log n), because the search range is halved at every step.",
    category: "JavaScript",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is the main purpose of React state?",
    answer: "State stores data that changes over time and triggers re-renders.",
    category: "React",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What is the difference between type and interface in TypeScript?",
    answer: "Both define shapes; interfaces are extendable by declaration merging, while types are more flexible for unions and mapped types.",
    category: "TypeScript",
    difficulty: "medium",
  },
  {
    id: 4,
    question: "What does useEffect with an empty dependency array do?",
    answer: "It runs once after the component mounts.",
    category: "React",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is event bubbling in the DOM?",
    answer: "An event starts at the target element and propagates upward through ancestor elements.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: 6,
    question: "What is the box model in CSS?",
    answer: "It is the layout model composed of content, padding, border, and margin.",
    category: "CSS",
    difficulty: "easy",
  },
  {
    id: 7,
    question: "What does keyof do in TypeScript?",
    answer: "It creates a union type of an object's property names.",
    category: "TypeScript",
    difficulty: "medium",
  },
  {
    id: 8,
    question: "What is the purpose of semantic HTML?",
    answer: "To give elements meaningful structure that improves accessibility and SEO.",
    category: "HTML",
    difficulty: "easy",
  },
  {
    id: 9,
    question: "What is memoization?",
    answer: "Caching function results based on inputs to avoid repeated expensive work.",
    category: "JavaScript",
    difficulty: "hard",
  },
  {
    id: 10,
    question: "Why should React lists use stable keys?",
    answer: "Stable keys help React correctly identify changed items and avoid UI bugs during reconciliation.",
    category: "React",
    difficulty: "medium",
  },
];
