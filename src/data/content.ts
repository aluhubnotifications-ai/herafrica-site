/* ==================================================================
 * HerAfrica — all site content. Sourced from the HerAfrica E-Lab
 * Workbook (2024) + the challenge video transcripts. Edit copy here.
 * ================================================================== */

export const brand = {
  name: "HerAfrica",
  motto: "Africa 4 Her",
  tagline: "Breaking the silence. Protecting her future.",
  program: "ALU E-Lab",
  year: 2025,
};

export const nav = [
  { id: "mission", label: "Mission" },
  { id: "problem", label: "Problem" },
  { id: "team", label: "Team" },
  { id: "solution", label: "Solution" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const mission = {
  eyebrow: "Our Mission",
  statement:
    "To tackle the rising rates of teenage pregnancy in Kimironko, Rwanda by using our technical skills and experience in health to desensitize the cultural taboos in the African community that drive this issue — and to educate teenagers on sexual health and the value of informed choices.",
  attribution: "The HerAfrica Think Tank",
};

export const about = {
  eyebrow: "Who we are",
  heading: "A think tank with empathy at its core",
  lead: "HerAfrica is a student think tank born in the ALU E-Lab, on a mission to break the “Culture of Silence” around sexual and reproductive health — the silence that pulls young girls out of school and out of their futures.",
  sub: "We pair real-world experience in health with technology to give teenagers a safe place to learn, ask questions, and grow — free from stigma, shame, or judgement.",
  pillars: [
    {
      title: "Educate",
      text: "Accurate, judgement-free sexual-health knowledge for teens who are kept in the dark.",
    },
    {
      title: "Break the silence",
      text: "Disrupt the cultural taboos that drive early pregnancy and forced marriage.",
    },
    {
      title: "Protect",
      text: "Give girls a safe, private community to grow, bloom, and plan their futures.",
    },
  ],
};

export const problem = {
  eyebrow: "The challenge we tackle",
  heading: "The Problem",
  statement:
    "In Kimironko, Rwanda, young girls are forced to put down their academics as a striking rise in teenage pregnancies dims their futures and ambitions. It is driven mainly by backward cultural patterns — forced marriages and elopement — coupled with a lack of education about sexual health. HerAfrica exists to break the silence, disrupt these patterns, and give teenage girls a safe community to grow and bloom in — reducing school dropouts, curbing poverty, eradicating stigma, and empowering young women to build careers and plan their families with intention.",
  stats: [
    { value: "5% → 8%", label: "Teen pregnancy rate in Rwanda, 2020 → 2026 (RDHS7)" },
    { value: "~65", label: "Estimated new daily cases — derived from the RDHS7 increase" },
    { value: "3,000+", label: "Young mothers our partner has returned to school" },
  ],
  rootCause: [
    {
      why: "Why is there a rise in teenage pregnancies in Kimironko?",
      because: "Teenagers engage in unprotected sex.",
    },
    {
      why: "Why do they engage in unprotected sex?",
      because: "They don’t know the repercussions.",
    },
    {
      why: "Why don’t they know the repercussions?",
      because: "They lack education and knowledge about them.",
    },
    {
      why: "Why do they lack that education?",
      because: "Social stigma and embarrassment surround the topic.",
    },
    {
      why: "Why is there stigma around sexual education?",
      because: "The culture and social setting in Kimironko won’t allow openness about sex-ed.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  TEAM — to add a real headshot, drop it in public/team/ and set     */
/*  `photo` (e.g. "/team/jean.jpg"). Empty photo → colored initials.   */
/* ------------------------------------------------------------------ */
export type Member = {
  name: string;
  interests?: string; // verbatim from the Challenge 01 intro transcript; blank if they weren't profiled there
  country: string;
  email: string;
  photo?: string;
  lead?: boolean;
};

// No job titles/roles are assigned — the members never stated any. Names,
// countries and interests are taken from the Challenge 01 intro-video
// transcript. Kevine & Elina weren't profiled in that intro, so they have no
// stated interests here. Photos in public/team/ are placeholders — swap freely.
export const team: Member[] = [
  {
    name: "Kevine Umuganwa",
    country: "Rwanda",
    email: "k.umuganwa@alustudent.com",
    photo: "/team/kevine.jpeg",
    lead: true,
  },
  {
    name: "Jean Chretien Horugavye",
    interests: "Technology, Artificial Intelligence (AI)",
    country: "Burundi",
    email: "j.horugavye@alustudent.com",
    photo: "/team/chretien.jpeg",
  },
  {
    name: "Ian Misati",
    interests: "Healthcare, Women’s Healthcare",
    country: "Nairobi, Kenya",
    email: "i.misati@alustudent.com",
    photo: "/team/misati.jpeg",
  },
  {
    name: "Miriam Meles",
    interests: "Pan-Africanism, Tech, Fashion",
    country: "Eritrea",
    email: "m.meles@alustudent.com",
    photo: "/team/Miriam.jpeg",
  },
  {
    name: "Elina Mugiraneza",
    country: "Rwanda",
    email: "e.mugiranez@alustudent.com",
    photo: "/team/elina.jpeg",
  },
  {
    name: "Mutware Kayitare Chris",
    interests: "Tech, Basketball, Pan-Africanism",
    country: "DR Congo",
    email: "c.mutware@alustudent.com",
    photo: "/team/Chris.jpeg",
  },
];

export const teamStrengths = [
  "Professionalism — real health experience",
  "Logistics & planning",
  "Leadership & team coherence",
  "Interpersonal energy",
  "Technical execution",
];

/* ------------------------------------------------------------------ */
/*  SOLUTION / PROTOTYPE — HerSafe Space                                */
/* ------------------------------------------------------------------ */
export const solution = {
  eyebrow: "Our solution & prototype",
  name: "HerSafe Space",
  intro:
    "HerSafe Space is an anonymous, judgment-free digital community where teenagers can ask any sensitive question about sexual and reproductive health — with no fear of stigma or shame. It removes the “witness”: no one has to see you ask.",
  how: [
    {
      step: 1,
      title: "Reach out privately",
      text: "A teen sends a message on a channel they already trust — web chat, Telegram, WhatsApp, or basic SMS.",
    },
    {
      step: 2,
      title: "Get trusted answers",
      text: "An AI model, pre-prompted to act like a trusted older sister, instantly replies with accurate guidance.",
    },
    {
      step: 3,
      title: "Crisis? Escalate instantly",
      text: "If it detects danger, the system bypasses the AI and connects the user to verified emergency contacts.",
    },
  ],
  features: [
    {
      title: "Totally anonymous",
      text: "No name, phone number, or school. No personal data is stored — ever.",
    },
    {
      title: "Speaks their language",
      text: "Understands the local language and even everyday slang.",
    },
    {
      title: "Life-saving crisis mode",
      text: "Detects high-risk situations and redirects them to emergency responders.",
    },
    {
      title: "Zero-data offline access",
      text: "Works over USSD & SMS — no internet or smartphone required.",
    },
  ],
  usp: "HerSafe Space completely removes the “witness.” Going to a clinic means someone sees you; our platform guarantees absolute privacy from the very first text. And by building on basic USSD alongside a modern web app, we eliminate the data-cost barrier — reaching the most isolated, vulnerable teens on the most basic phone.",
  chat: [
    { from: "user", text: "Hi… I’m scared to ask anyone this." },
    {
      from: "bot",
      text: "Hey, you’re safe here 💛 Nothing you say is saved and no one will know. What’s on your mind?",
    },
    { from: "user", text: "How do I know if I’m at risk?" },
    {
      from: "bot",
      text: "Let’s talk it through together, step by step — no judgement. And if it’s urgent, I can connect you to a nurse right now.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  THE SIX E-LAB CHALLENGES                                            */
/*  Add each video's ID to `youtubeId` (the part after v= or youtu.be/).*/
/*  e.g. https://youtu.be/dQw4w9WgXcQ  →  youtubeId: "dQw4w9WgXcQ"      */
/* ------------------------------------------------------------------ */
export type Challenge = {
  number: string;
  title: string;
  definition: string;
  youtubeId: string;
  accent: string; // gradient classes for the placeholder
};

export const challenges: Challenge[] = [
  {
    number: "01",
    title: "Team Introductions",
    definition:
      "Meet HerAfrica — who we are, the countries we come from, the skills we bring, and our goals for the E-Lab program.",
    youtubeId: "gGj5F4bzrOo",
    accent: "from-gold/80 to-coral/80",
  },
  {
    number: "02",
    title: "Cultural Study: Kalenjin Earlobe Elongation",
    definition:
      "Exploring a respected Kalenjin (Kenya) rite of passage — its gradual process and its symbolism of maturity, beauty, and status — and why the “backward” label is a misconception.",
    youtubeId: "qHttSmr7Gqo",
    accent: "from-coral/80 to-plum/80",
  },
  {
    number: "03",
    title: "Community Visit: Heroes Daycare Center",
    definition:
      "A visit to a center caring for children with disabilities — donating supplies, offering encouragement and joy, and learning about “ability within disability.”",
    youtubeId: "1YYyw9Hj2TE",
    accent: "from-plum/80 to-gold/80",
  },
  {
    number: "04",
    title: "Hunt for Treasure — Organization Interview",
    definition:
      "Interviewing a community organization (founded 2017) working to save the young generation — and reflecting on empathy, strategy, partnerships, and local context.",
    youtubeId: "Cb36SMrn8GQ",
    accent: "from-gold/80 to-plum/80",
  },
  {
    number: "05",
    title: "Launch Your Mission — The Pitch",
    definition:
      "Pitching HerSafe Space: the teenage-pregnancy problem (5% → 8%), our AI + USSD solution, its impact, and a $10,000 plan to “save the future.”",
    youtubeId: "ukBj_VKrlO4",
    accent: "from-coral/80 to-gold/80",
  },
  {
    number: "06",
    title: "Your Digital Print",
    definition:
      "This very website — documenting HerAfrica's full E-Lab journey as our digital print, from team introductions through the HerSafe Space pitch.",
    youtubeId: "", // no video — the site itself is the deliverable
    accent: "from-gold/80 to-coral/80",
  },
];

/* ------------------------------------------------------------------ */
/*  IMPACT & MODEL (Lean Canvas + Budget highlights)                   */
/* ------------------------------------------------------------------ */
export const leanCanvas = [
  {
    title: "Problem",
    text: "Rising teen pregnancy (5%→8%) driven by a culture of silence and lack of sexual-health education.",
  },
  {
    title: "Solution",
    text: "HerSafe Space — an anonymous AI companion for accurate, judgement-free guidance.",
  },
  {
    title: "Unfair advantage",
    text: "Total anonymity + USSD/SMS access removes the “witness” and the data-cost barrier.",
  },
  {
    title: "Channels",
    text: "Web chat, WhatsApp, Telegram, SMS & USSD — plus schools and community health workers.",
  },
  {
    title: "Customers",
    text: "At-risk and pregnant teenagers across Kimironko who lack safe sexual-health guidance.",
  },
];

export const budget = {
  funding: [
    { source: "Google Nonprofit Grants", amount: "$10,000 / mo" },
    { source: "Donations", amount: "$2,000 / mo" },
    { source: "NGO partnerships", amount: "$400 / mo" },
  ],
  spend: [
    { item: "AI API credits", amount: "$500–1,000" },
    { item: "Messaging codes & WhatsApp", amount: "$1,000" },
    { item: "Cloud hosting", amount: "$20 / mo" },
    { item: "Community outreach & print", amount: "$140+ / mo" },
  ],
};
