/**
 * Personalize the entire experience here — no need to edit other files.
 * Paths are relative to the site root (works on GitHub Pages project URLs).
 */

export const gameConfig = {
  recipientName: "Parul",

  meta: {
    pageTitle: "Something for you",
    description: "I made something for you. Open it when you have a minute.",
    ogTitle: "I made something for you.",
    ogDescription: "Five questions. No cheating. (Trust me.)",
    ogImage: "assets/og-preview.png",
  },

  intro: {
    line1: "I have a very important question for you.",
    line2: "How well do you think you know what I think about you?",
    supporting: "5 questions. No cheating.",
    button: "Let's see →",
  },

  questions: [
    {
      question: "What do I think is your best feature?",
      options: ["Your smile", "Your eyes", "Your laugh", "Your hair"],
      preferredIndex: 0,
      reactions: {
        preferred: "Obviously your smile.",
        byOption: {
          0: "Obviously your smile.",
          1: "Your eyes are dangerous in the best way — but still, your smile.",
          2: "I love your laugh. Your smile still wins.",
          3: "Your hair is unfairly perfect. I’m still picking your smile.",
        },
        fallback: [
          "Interesting choice… 👀",
          "Hmmm. Noted.",
          "I had a feeling you'd pick that.",
        ],
      },
    },
    {
      question: "What is something you do that I find ridiculously adorable?",
      options: [
        "The way you laugh",
        "The little expressions you make",
        "The way you get excited about things",
        "The way you pretend you're not annoyed",
      ],
      preferredIndex: 1,
      reactions: {
        preferred: "Those tiny expressions. Every single time.",
        byOption: {
          0: "Your laugh melts me — but it’s the faces you make when you think no one’s looking.",
          1: "Those tiny expressions. Every single time.",
          2: "Your excitement is contagious. The expressions still get me.",
          3: "The ‘I'm fine’ face is elite comedy. Still, those little looks win.",
        },
        fallback: ["Okay, okay… I'll let that one slide.", "You're getting closer."],
      },
    },
    {
      question: "If I had to pick one thing I could never get tired of…",
      options: [
        "Talking to you",
        "Seeing you smile",
        "Going on little adventures with you",
        "Watching you do absolutely nothing",
      ],
      preferredIndex: 1,
      reactions: {
        preferred: "Seeing you smile. I’d choose it again every day.",
        byOption: {
          0: "Talking to you is my favourite pastime — but watching you smile? Unmatched.",
          1: "Seeing you smile. I’d choose it again every day.",
          2: "Our little adventures are everything. Your smile is still my constant.",
          3: "You doing ‘nothing’ is somehow my favourite show. Smile still takes it.",
        },
        fallback: ["Close… but I have thoughts. 😌", "Noted."],
      },
    },
    {
      question: "What is one thing about you that I think makes you… you?",
      options: [
        "Your kindness",
        "Your stubbornness",
        "Your curiosity",
        "Your sense of humour",
      ],
      preferredIndex: 2,
      reactions: {
        preferred: "Your curiosity. The way you light up when something catches your mind.",
        byOption: {
          0: "Your kindness is quiet and real — and your curiosity is what pulls me in.",
          1: "Your stubbornness is… charming. Your curiosity is pure you.",
          2: "Your curiosity. The way you light up when something catches your mind.",
          3: "Your humour saves every day. Curiosity is the thread in all of it.",
        },
        fallback: ["I knew you'd say that.", "Hmmm. Noted."],
      },
    },
    {
      question: "Okay, last one. What do you think I love most about you?",
      options: [
        "The way you care about people",
        "The way you smile at me",
        "The way you make ordinary days feel special",
        "The way you’re unapologetically yourself",
      ],
      preferredIndex: 1,
      reactions: {
        preferred: "The way you smile at me. That’s the one I see first.",
        byOption: {
          0: "How you care is beautiful — and yes, that smile when you look at me.",
          1: "The way you smile at me. That’s the one I see first.",
          2: "You make days feel like gifts. Your smile is still my anchor.",
          3: "Being yourself is why I fell harder — your smile is what I notice first.",
        },
        fallback: ["Interesting choice… 👀"],
      },
    },
  ],

  surprise: {
    leadIn: "One last thing…",
    line1: "You got all the important ones wrong.",
    line2: "Because the answer was never one thing.",
    line3: "It's you.",
  },

  fakeScore: {
    calculating: "Calculating your score…",
    pivot: "Actually…",
    noScore: "There is no score.",
    bridge: "I just wanted an excuse to tell you what I think about you.",
  },

  finalReveal: {
    label: "Okay.\nEnough questions.",
    headline: "There was never really a test.",
    subhead:
      "I just wanted to see if you could guess\nwhat I see when I look at you.",
    mainAnswer: "It's your smile.",
    bridge: "But honestly…",
    coda: "It's all of it.",
    personalMessage: `YOUR PERSONAL MESSAGE GOES HERE

Somehow, you make ordinary days feel a little less ordinary.
And I don't think I tell you that enough.`,
    photo: "assets/photo.jpg",
    restartLabel: "Start over ↗",
  },
};

export default gameConfig;
