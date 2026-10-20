/**
 * Personalize the entire experience here — no need to edit other files.
 * Paths are relative to the site root (works on GitHub Pages project URLs).
 */

export const gameConfig = {
  recipientName: "Parul",

  meta: {
    pageTitle: "Parul, Something for You",
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
    line1: "You got all the important ones right.",
    line2: "But the answer was never one thing.",
    line3: "It's everything you.",
  },

  fakeScore: {
    calculating: "Calculating your score…",
    pivot: "Actually…",
    noScore: "There is no score.",
    bridge: "I just wanted an excuse to tell you what I think about you.",
  },

  finalReveal: {
    label: "Happy Birthday {{wife_name_short}}, my love.\nOne last little thing.",
    headline: "You are the brightest part of my universe.",
    subhead:
      "I just wanted to show you\nwhat I see when I look at you.",
    mainAnswer: "It's the smiles you bring into my universe.",
    bridge: "The ones that make every place feel like home.",
    coda: "And honestly… it's all of you.",
    personalMessage: `Happy Birthday {{wife_name_short}}, my love.

From surreal Bali mornings to dreamy Swiss rides and every serene sunset in between, my entire world has found its home in you. Through the sartorial elegance of your sarees and anarkalis, your stolen glances, and sweet candour, you remain the epitome of ebullience, optimism, and my greatest joy.

This year feels quietly special. Whatever waits beyond it, I want to meet it with you. You mean more to me than words can hold. You are the smile that doesn’t just light up a room—it lights up my entire universe.

I wish you a lifetime of boundless success, endless laughter, and vibrant warmth. Never lose that endearing spark, winsome smile, and radiant grace that make you so endlessly cherished by everyone around you. Here’s to you, and to your brightest tomorrows. Happy Birthday, Meri Pyaari Tweety :)!`,
    signoff: "From {{husband_name_short}}",
    // Add your own bold, short memory below each photo (keep each one under 10 words).
    // The gallery automatically uses every image in public/assets/photos/.
    photos: [
      { src: "assets/photos/img_dp_bali_1.jpeg", caption: "Bintang Bali Resort— Chill vibes and slow mornings" },
      { src: "assets/photos/img_dp_ind_1.jpeg", caption: "Elan Mall — the Fire, Water, Earth, Roses and Us" },
      { src: "assets/photos/img_dp_ind_2.jpg", caption: "Humari Engagement — Our Hearts Always Dancing Together" },
      { src: "assets/photos/img_parul_bali_1.jpg", caption: "Lake Batur Bali — Boats, Topiaries, Mountains and You" },
      { src: "assets/photos/img_parul_bali_2.jpeg", caption: "Tanah Lot Bali — Getting Lost in the Ocean of your Eyes" },
      { src: "assets/photos/img_parul_cool_1.jpeg", caption: "American look — Epitome of Modernity and Elegance" },
      { src: "assets/photos/img_parul_cool_2.jpeg", caption: "Swings and You — A little ephemeral, a lot unforgettable" },
      { src: "assets/photos/img_parul_cool_3.jpeg", caption: "Sterling - Drenched in the Depths of BLYOU" },
      { src: "assets/photos/img_parul_trad_1.png", caption: "Meri Sohniye teri saree wali adaa wich main kho jawaan" },
      { src: "assets/photos/img_dp_cool_1.png", caption: "Purple elements, black shades, and me falling for you" },
      { src: "assets/photos/img_dp_bern_1.jpeg", caption: "Snowy mountains, deep lakes, and my Swiss resides in you" },
      { src: "assets/photos/img_parul_tulip.jpg", caption: "Petals in the glass, all my universe in your eyes." },
    ],
    restartLabel: "Start over ↗",
  },
};

export default gameConfig;
