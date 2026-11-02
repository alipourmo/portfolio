/**
 * Single source of truth for all portfolio copy.
 * Edit this file to update the site; components only handle layout.
 */

export const profile = {
  name: "Nahid Abdollahi",
  firstName: "Nahid",
  role: "AI Product Developer",
  degree: "MSc Artificial Intelligence",
  heroTagline:
    "Building products where machine learning, natural language, and real-world impact meet.",
  siteDescription:
    "AI product developer and researcher building production knowledge-graph, RAG and prompt-optimization systems. MSc in Artificial Intelligence, author of DPPROMPT (ICAART 2026).",
  email: "nahidabdollahi1998@gmail.com",
  github: "https://github.com/nahidabdollahi1998",
  githubHandle: "nahidabdollahi1998",
  linkedin: "https://linkedin.com/in/nahidabdollahi",
  linkedinHandle: "nahidabdollahi",
  phoneDisplay: "+98 914 096 4611",
  phoneHref: "tel:+989140964611",
  /**
   * Drop your photo into /public and set the path here (e.g. "/nahid.webp").
   * Optionally add `hoverSrc` with the same dimensions for the morph effect.
   * While this is null the hero shows a monogram card instead.
   */
  portrait: null as { src: string; hoverSrc?: string } | null,
} as const;

export const stats = [
  { value: "4+", label: "Years experience" },
  { value: "1", label: "Published paper" },
  { value: "30+", label: "GitHub projects" },
  { value: "3", label: "Prompt algorithms" },
] as const;

export const bio = {
  heading: "Research-driven. Production-focused.",
  paragraphs: [
    [
      "I'm an AI engineer and researcher who builds systems that work beyond the lab. My path has taken me from Android development to ",
      ["designing production knowledge-graph pipelines used by domain experts"],
      ", and every step has sharpened my core belief: the best AI is the kind that is efficient, reliable, and practically deployable.",
    ],
    [
      "At IREX, I built a full document-intelligence system: raw PDFs processed through OCR, spaCy, coreference resolution, and NER, feeding a knowledge graph that lets geologists query complex structured data in plain language. I chose to ",
      ["fine-tune a smaller RoBERTa model for NER rather than depend on hallucination-prone LLMs"],
      ", a decision that reflects my engineering philosophy.",
    ],
    [
      "In parallel, my academic work on automated prompt engineering led to a ",
      ["published paper at ICAART 2026"],
      ", introducing DPPROMPT, a method that finds high-performing prompts with significantly fewer LLM calls than prior art.",
    ],
  ],
  philosophy:
    "I don't just implement algorithms. I question whether a simpler, more efficient approach exists. An algorithmic mind applied to real products is what I bring to every team.",
} as const;

export type ExperienceEntry = {
  id: string;
  company: string;
  mark: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "irex-kg",
    company: "IREX",
    mark: "IX",
    role: "AI Specialist, Knowledge Graph & NER",
    period: "Dec 2025 – May 2026",
    duration: "6 mo",
    location: "Remote, Australia",
    description:
      "Leading development of a Relation Extraction model for automated knowledge graph construction. Combining fine-tuned NER (RoBERTa) with rule-based relation extraction to produce structured, queryable graphs from unstructured geological documents, deliberately avoiding LLMs in the extraction layer to eliminate hallucination risk.",
    tags: [
      "Relation Extraction",
      "NER (RoBERTa)",
      "Knowledge Graphs",
      "Rule-based NLP",
      "JanusGraph",
    ],
  },
  {
    id: "freelance-hr",
    company: "Freelance",
    mark: "FL",
    role: "AI Developer, HR chatbot",
    period: "Apr 2026 – May 2026",
    duration: "1 mo",
    location: "Remote",
    description:
      "Developed a customized HR intelligence chatbot that transforms structured human resources data into a graph-based knowledge system. Implemented graph data modeling and LLM-driven querying to answer technical, statistical, and organizational questions about employees, departments, and company structure.",
    tags: [
      "Neo4j",
      "Knowledge Graphs",
      "LLM-based Systems",
      "Few-shot Prompting",
      "Cosine Similarity",
      "Prompt Engineering",
      "Graph Modeling",
      "NLP",
    ],
  },
  {
    id: "irex-rag",
    company: "IREX",
    mark: "IX",
    role: "AI Specialist, RAG System Architecture",
    period: "Jul 2025 – Dec 2025",
    duration: "6 mo",
    location: "Remote, Australia",
    description:
      "Redesigned the document intelligence pipeline to scale. Migrated from Neo4j to Cassandra + JanusGraph for performance. Built the full NLP pipeline end-to-end: PDF ingestion, OCR, spaCy text cleaning, coreference resolution, sentence/chunk splitting, and knowledge graph construction.",
    tags: [
      "Cassandra",
      "JanusGraph",
      "LangChain",
      "spaCy",
      "Coreference Resolution",
      "RAG",
    ],
  },
  {
    id: "texoul",
    company: "Texoul",
    mark: "TX",
    role: "AI Developer",
    period: "Jul 2025 – Aug 2025",
    duration: "1 mo",
    location: "Remote",
    description:
      "Built a customized AI shopping assistant capable of understanding customer intent through interactive question-driven conversations. The system reads online-shop product databases, infers the user's underlying needs, and recommends the most suitable products using semantic retrieval and LLM-based reasoning.",
    tags: [
      "LLMs",
      "Conversational AI",
      "Semantic Search",
      "Recommendation Systems",
      "Prompt Engineering",
      "Python",
      "Vector Search",
      "Chatbot Systems",
    ],
  },
  {
    id: "irex-mvp",
    company: "IREX",
    mark: "IX",
    role: "AI (LLMs) Developer",
    period: "Sep 2024 – Dec 2024",
    duration: "3 mo",
    location: "Remote, Australia",
    description:
      "Built the first MVP of the document intelligence system: a RAG-based chatbot processing 100+ PDFs into a Neo4j graph database using LangChain and SBERT embeddings.",
    tags: ["Neo4j", "Mistral LLM", "LangChain", "SBERT", "RAG"],
  },
  {
    id: "digitais",
    company: "DigitAIs",
    mark: "DA",
    role: "AI & LLMs Intern",
    period: "Mar 2024 – Aug 2024",
    duration: "6 mo",
    location: "Remote, Australia",
    description:
      "First professional AI role. Gained hands-on experience with LLM application development, prompt engineering, and LangChain-based pipelines.",
    tags: ["LLMs", "LangChain", "Prompt Engineering"],
  },
  {
    id: "freelance-yolo",
    company: "Freelance",
    mark: "FL",
    role: "AI Developer, crop disease detection",
    period: "Jul 2024 – Aug 2024",
    duration: "1 mo",
    location: "Remote",
    description:
      "Developed a computer vision system for agricultural disease detection using a fine-tuned YOLOv5 CNN model. The model analyzes pistachio tree leaf images to determine whether the tree is infected and classifies the specific parasite or illness type. Built and optimized the training pipeline for real-world image conditions and dataset variability.",
    tags: [
      "YOLOv5",
      "CNN",
      "Computer Vision",
      "PyTorch",
      "Image Classification",
      "Object Detection",
      "Deep Learning",
    ],
  },
  {
    id: "freelance-unity",
    company: "Freelance",
    mark: "FL",
    role: "Unity Developer",
    period: "Apr 2021 – Oct 2022",
    duration: "1.5 yr",
    location: "Rafsanjan, Iran",
    description:
      "Game and simulation development in Unity with C#. Built the systematic thinking and software architecture skills that now underpin my AI engineering work.",
    tags: ["Unity", "C#"],
  },
  {
    id: "flyap",
    company: "Flyap",
    mark: "FY",
    role: "Android Developer",
    period: "Nov 2019 – Apr 2021",
    duration: "1.5 yr",
    location: "Rafsanjan, Iran",
    description:
      "Mobile application development for Android. First professional software engineering role.",
    tags: ["Android", "Java", "Mobile Dev"],
  },
];

export type ProjectVisualKind =
  | "pipeline"
  | "dpp"
  | "reasoning"
  | "annealing"
  | "retrieval";

export type Project = {
  id: string;
  label: string;
  visual: ProjectVisualKind;
  title: string;
  description: string;
  meta: string;
  tags: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    id: "terramind",
    label: "IREX TerraMind",
    visual: "pipeline",
    title:
      "An intelligent document processor that lets geologists query reports in plain language.",
    description:
      "A full-stack expert knowledge system that transforms unstructured geological PDFs into a queryable knowledge graph. Key engineering decision: a fine-tuned RoBERTa model for NER rather than LLMs, eliminating hallucination in the extraction layer entirely.",
    meta: "Production system, IREX",
    tags: ["LangChain", "RoBERTa", "JanusGraph", "Cassandra", "spaCy", "SBERT"],
    link: { href: "https://github.com/nahidabdollahi1998", label: "GitHub" },
  },
  {
    id: "dpprompt",
    label: "DPPROMPT",
    visual: "dpp",
    title: "Finding high-performing prompts with far fewer LLM calls.",
    description:
      "A prompt optimization algorithm that uses Determinantal Point Processes as a local search strategy to select diverse, high-quality prompts. Reaches PromptBreeder-level performance on 10 benchmarks across Mistral, Llama, and Qwen.",
    meta: "Published, ICAART 2026",
    tags: ["DPP", "Prompt Optimization", "Local Search", "Mistral", "Llama"],
    link: {
      href: "https://github.com/nahidabdollahi1998/GA_Search_Prompting",
      label: "GitHub",
    },
  },
  {
    id: "autoreasoning",
    label: "AutoReasoning",
    visual: "reasoning",
    title: "Teaching smaller models to reason more deeply, without fine-tuning.",
    description:
      "Extends DPPROMPT by generating a “reflection wait” prompt that enforces deeper chain-of-thought reasoning in smaller models, closing the gap between compact LLMs and full reasoning-scale models.",
    meta: "Research",
    tags: ["Chain-of-Thought", "Small LLMs", "Prompt Engineering"],
  },
  {
    id: "mmr-sa",
    label: "MMR + Simulated Annealing",
    visual: "annealing",
    title: "Balancing diversity and similarity while exploring prompt space.",
    description:
      "An alternative to DPPROMPT that integrates Maximal Marginal Relevance with Simulated Annealing to explore the space of candidate prompts.",
    meta: "Research",
    tags: ["MMR", "Simulated Annealing", "Optimization"],
  },
  {
    id: "shop-assistant",
    label: "Shop Assistant Chatbot",
    visual: "retrieval",
    title:
      "A conversational shopping assistant that matches both meaning and exact terms.",
    description:
      "Hybrid retrieval for cosmetics e-commerce, combining FAISS vector search, Elasticsearch keyword search, and SBERT embeddings so results are relevant semantically and by exact match.",
    meta: "Product",
    tags: ["FAISS", "Elasticsearch", "SBERT", "LangChain"],
    link: {
      href: "https://github.com/saeedamiri1997/shop_assistant_chatbot",
      label: "GitHub",
    },
  },
];

export const research = {
  paper: {
    venue: "ICAART 2026 · Paper #713",
    title:
      "Optimizing Prompts Efficiently with Iterative Determinantal Point Processes",
    authors: [
      "Nahid Abdollahi",
      "Sahar Vahdati",
      "Mehdi Eftekhari",
      "Jens Lehmann",
    ],
    abstract:
      "Large language model performance depends heavily on effective prompt engineering. While methods like PromptBreeder introduced self-referential evolution of prompts via genetic algorithms, they introduce significant computational overhead. DPPROMPT addresses this using Determinantal Point Processes as a local search strategy to select diverse, high-quality prompts, balancing performance and diversity without complex self-referential mechanisms. Evaluated on ten benchmarks including GSM8K, MATH500, GPQA, MultiArith, and CSQA using Mistral, Llama, and Qwen, DPPROMPT achieves results comparable to PromptBreeder while significantly reducing computational requirements.",
  },
  thesis: {
    label: "Master's thesis · 2025",
    title: "Auto-Prompt Engineering: A Comprehensive Study and Novel Approaches",
    description:
      "A complete survey and experimental study of prompt engineering, from hand-crafted methods (Plan-and-Solve, Chain-of-Thought) to fully automated systems. Includes a working implementation of DeepMind's PromptBreeder and introduces two original optimization approaches: DPPROMPT and MMR+SA.",
    tags: [
      "Prompt Engineering Survey",
      "PromptBreeder Implementation",
      "DPP Optimization",
      "Simulated Annealing",
      "MMR",
    ],
  },
  inProgress: [
    {
      venue: "Review / Work in progress",
      title: "DynaMMR",
      authors: ["Nahid Abdollahi", "Sahar Vahdati", "Mehdi Eftekhari"],
      description:
        "A revised exploration of our previous prompt optimization approach combining Simulated Annealing with Maximal Marginal Relevance (MMR), focusing on improving local search stability and maintaining diversity in prompt candidate selection.",
    },
    {
      venue: "In progress",
      title: "Auto-Reflective Prompt Engineering",
      authors: [
        "Nahid Abdollahi",
        "Sahar Vahdati",
        "Mehdi Eftekhari",
        "Jens Lehmann",
      ],
      description:
        "A research direction on augmenting instruction prompts with structured self-reflection signals to improve reasoning quality in smaller language models. The goal is to reduce the performance gap between compact models and large-scale LLMs without fine-tuning.",
    },
  ],
} as const;

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Core AI",
    items: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Knowledge Graphs",
      "NLP",
      "Fine-tuning",
      "NER",
      "Relation Extraction",
      "Agent-based AI",
      "Generative AI",
    ],
  },
  {
    title: "Frameworks & libraries",
    items: [
      "LangChain",
      "LangGraph",
      "Transformers (HF)",
      "Sentence-Transformers",
      "PyTorch",
      "Keras",
      "TensorFlow",
      "spaCy",
      "OpenCV",
      "vllm",
    ],
  },
  {
    title: "Databases & search",
    items: [
      "Neo4j",
      "Cassandra",
      "JanusGraph",
      "FAISS",
      "Elasticsearch",
      "Vector Databases",
    ],
  },
  {
    title: "Models worked with",
    items: [
      "Mistral",
      "Llama",
      "GPT-4 / ChatGPT",
      "RoBERTa",
      "Gemini",
      "Qwen",
      "BERT",
      "Gemma",
      "Palm",
    ],
  },
  {
    title: "Languages & tools",
    items: [
      "Python",
      "C#",
      "C++",
      "Git",
      "Jupyter Notebook",
      "VSCode",
      "PyCharm",
      "Google Colab",
    ],
  },
  {
    title: "Spoken languages",
    items: ["English, Advanced", "German, Intermediate", "Persian, Native"],
  },
];

export type EducationEntry = {
  school: string;
  mark: string;
  degree: string;
  period: string;
  note: string;
};

export const education: EducationEntry[] = [
  {
    school: "Shahid Bahonar University, Kerman",
    mark: "SB",
    degree: "MSc, Artificial Intelligence & Robotics",
    period: "2022 – 2024",
    note: "Thesis: Auto-Prompt Engineering: A Comprehensive Study and Novel Approaches. Research resulted in DPPROMPT, published at ICAART 2026.",
  },
  {
    school: "Vali-e-asr University, Rafsanjan",
    mark: "VA",
    degree: "BSc, Computer Engineering (Software)",
    period: "2016 – 2020",
    note: "Foundation in software engineering, algorithms, and systems design. Developed early interest in intelligent systems and data-driven applications.",
  },
];

export const contact = {
  heading: "Let’s build something meaningful",
  blurb:
    "Open to international AI product roles, research collaborations, and interesting problems at the frontier of intelligent systems.",
  footerLine: "Built for international AI roles",
} as const;
