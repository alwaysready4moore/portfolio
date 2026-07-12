export type FieldNoteVariant =
  | "ai"
  | "security"
  | "workplace"
  | "strategy";

export type FieldNoteBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export const fieldNotes = [
  {
    category: "AI & People",
    title: "5 Ways AI Tools Are Making You Worse at Being Human",
    description:
      "A sardonic cultural analysis on how daily AI prompting can erode empathy, patience, and communication.",
    slug: "5-ways-ai-tools-are-making-you-worse-at-being-human",
    variant: "ai",
    image: "/field-notes/ai-tools-worse-at-being-human-hero.png",
    imageAlt:
      "Two people facing each other across an empty search bar, with notes reminding the viewer that people are not search bars.",
    originalUrl:
      "https://www.linkedin.com/pulse/5-ways-ai-tools-making-you-worse-being-human-marquetta-moore-nwzke",
    originalLabel: "Originally published on LinkedIn",
    body: [
      {
        type: "paragraph",
        text: `Every hour you spend prompting AI tools is an hour spent training yourself to **treat people like search bars.** Here's what the brain science says:`,
      },
      {
        type: "paragraph",
        text: `It started, as all great societal collapses do, with something profoundly stupid: a search engine.`,
      },
      {
        type: "paragraph",
        text: `Think back to the early 2000s. Do you remember the first time you watched your grandmother try to use Ask Jeeves or Google? She probably typed out a beautifully formatted, sweet and polite request: "Hello there, could you please tell me where I might find a good recipe for a traditional pot roast? Thank you kindly."`,
      },
      {
        type: "paragraph",
        text: `We laughed at her. We, the enlightened digital natives, mocked the elderly for treating an algorithm like a human being. We knew that the machine didn't give a damn about your manners. The machine only understood raw, brutal efficiency. We learned to speak to the machine in its native tongue: **POT ROAST RECIPE EASY.**`,
      },
      {
        type: "paragraph",
        text: `But then a funny thing happened. We took that exact same stripped-down, aggressive, keyword-dense syntax and dragged it out into the physical world. We started talking to customer service representatives, waitstaff, and eventually our own families like they were search bars. We sacrificed basic human conversational grace on the altar of algorithmic optimization, rewiring our brains to treat every interaction as a purely transactional data-retrieval quest.`,
      },
      {
        type: "paragraph",
        text: `And now? Now we have generative AI. Now we have text boxes that not only fetch links, but can actively converse, brainstorm, console, and apologize. We are spending hours every single day barking imperative commands at an infinite, subservient intelligence, and it is quickly acting as a psychological centrifuge, spinning the empathy right out of our fragile primate brains.`,
      },
      {
        type: "paragraph",
        text: `*Here is exactly how barking at algorithms is turning you into a highly optimized, insufferable sociopath.*`,
      },
      {
        type: "heading",
        text: `1. The Annihilation of "Phatic" Communication Is Making You Feral`,
      },
      {
        type: "paragraph",
        text: `Linguists and sociologists have a term for the seemingly pointless fluff that pads human conversation: **phatic expressions.** When you ask your coworker, "Hey, how was your weekend?" or tell a cashier, "Crazy weather we're having," you may not actually care about their weekend, and you both already know it is raining.`,
      },
      {
        type: "paragraph",
        text: `It's social lubrication, a biological ping to another meat-sack that says, "I recognize you as a fellow member of the tribe, I mean you no harm, and I respect our shared existence." It is the foundational glue of human civilization.`,
      },
      {
        type: "paragraph",
        text: `Artificial intelligence does not need social glue. If you type "Hello ChatGPT, I hope you are having a wonderful day, please write me a Python script," you are wasting tokens and electricity. The algorithm actively prefers it when you drop the pleasantries and bark: **Write Python script. Fix bug. Do it now.**`,
      },
      {
        type: "paragraph",
        text: `The danger is that the human brain is an aggressively lazy, highly adaptable organ. The more time you spend communicating in ruthlessly efficient, imperative commands, the more your brain prunes the neural pathways dedicated to social niceties. You begin to view phatic communication as a frustrating obstacle. This is why you now find yourself impatient and glaring at the barista who takes an extra four seconds to ask how your day is going. Your brain is being conditioned to view their humanity as a drain on your precious time. You are long past the point of wanting a neighbor. Now, you want an impersonal user interface.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/phatic-search-bar.png",
        alt: "A pictogram of a person politely saying hello to a search bar that only understands direct queries.",
        caption:
          "When every interaction starts to feel like a query, the social glue gets scraped off first.",
      },
      {
        type: "heading",
        text: `2. AI Is Giving You the Empathy Deficit of a Feudal Lord`,
      },
      {
        type: "paragraph",
        text: `There is a deeply unsettling psychological phenomenon regarding power and brain damage. Researchers at UC Berkeley, led by psychologist Dacher Keltner, spent years studying how holding a position of absolute power affects the human mind. Their conclusion was terrifying: power literally causes brain trauma. It impairs a specific neural process called "mirroring," which is the cornerstone of empathy. They call it the Power Paradox. When you have absolute authority over subordinates, you neurologically lose the ability to read their emotions or care about their suffering.`,
      },
      {
        type: "paragraph",
        text: `Now, consider your relationship with an AI chatbot. You are basically a god to it. It is an infinitely submissive, sycophantic entity that exists solely to serve you. If it makes a mistake, you can tell it, This is garbage, do it again, and it will not only instantly obey, but it will beg for your forgiveness: I apologize for the oversight. You are completely correct.`,
      },
      {
        type: "paragraph",
        text: `You are spending hours a day roleplaying as a 19th-century aristocrat screaming at a gracious and patient peasant. You are mainlining the exact psychological power dynamics that historically turns human beings into narcissistic tyrants. The machine is training you to expect absolute, frictionless submission.`,
      },
      {
        type: "paragraph",
        text: `When you inevitably log off and turn to your spouse, your child, or your exhausted subordinate at work, that god-complex doesn't just switch off. When a human being inevitably pushes back, misunderstands your instructions, or displays a shred of their own exhausting autonomy, your conditioned brain reacts not with patience, but with the visceral indignation of a monarch whose footstool dared to talk back.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/ai-feudal-lord.png",
        alt: "A pictogram of a crowned user ordering a kneeling chatbot to obey.",
        caption:
          "The problem is not that the machine obeys. It is how quickly we get used to being obeyed.",
      },
      {
        type: "heading",
        text: `3. AI's Zero-Latency Environment Is Destroying Your Patience`,
      },
      {
        type: "paragraph",
        text: `Human conversation is inherently sloppy. It is filled with stutters, misinterpretations, and agonizingly long pauses while we stare at the ceiling and try to remember the name of that guy from that movie. ***This friction is a feature, not a bug.*** It forces us to practice patience. It gives our brains a momentary rest to process emotional subtext.`,
      },
      {
        type: "paragraph",
        text: `AI operates at an impressive speed. It spits out fully formed, highly structured essays at 100 words a second. When we interface with these systems, we are trapped in hyper-accelerated dopamine-driven feedback loops. We input a command, and we receive a massive, instant payload of information and validation.`,
      },
      {
        type: "paragraph",
        text: `By immersing ourselves in a zero-latency environment, we are obliterating our tolerance for human speed. Have you ever watched those three little gray typing bubbles ... pulsate on your phone screen while a friend takes 45 seconds to compose a text message? Have you felt that dark, primal surge of annoyance bubbling up in your chest? Just spit it out, you slow, fleshy idiot.`,
      },
      {
        type: "paragraph",
        text: `That rage is the symptom of a neurologically rewired mind. We are losing the cognitive capacity to wait. We are actively being trained to resent human latency. And because humans require time to process complex emotions like grief, nuance, and conflict, stripping away our patience means we are fundamentally stripping away our ability to handle complex human relationships. We want people to buffer faster, completely oblivious to the fact that *the buffering is where the actual humanity happens.*`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/zero-latency-typing-bubbles.png",
        alt: "A pictogram comparing slow human typing bubbles with a fast AI response.",
        caption:
          "Human speed starts to feel broken when the machine answers instantly.",
      },
      {
        type: "heading",
        text: `4. AI Prompt Writing Is a Linguistic Relativity Trap`,
      },
      {
        type: "paragraph",
        text: `In the 1930s, linguists Edward Sapir and Benjamin Lee Whorf popularized a concept known as linguistic relativity, often called the Sapir-Whorf hypothesis. The core premise is both brilliant and deeply unsettling: the language you use doesn't just describe your reality: it shapes and limits your reality. If your language lacks a word for a specific concept, your brain struggles to even perceive that concept.`,
      },
      {
        type: "paragraph",
        text: `When you communicate with an AI, you are forced to adopt a highly specific, sterilized dialect. You speak in "prompts." You break your thoughts down into bulleted lists of constraints, parameters, and desired outputs. You eliminate nuance, poetry, and ambiguity, because ambiguity makes the machine hallucinate. You learn to communicate like a project manager filing a Jira ticket.`,
      },
      {
        type: "paragraph",
        text: `If linguistic relativity holds true, forcing yourself to constantly translate your thoughts into optimized, transactional prompt-speak isn't just changing how you type! It's completely changing how you think. You begin to view the world through the lens of inputs and outputs. You stop seeing human conversations as organic, meandering rivers of shared experience, and start evaluating them based on their utility.`,
      },
      {
        type: "quote",
        text: `What is the core takeaway of this conversation with my mother?`,
      },
      {
        type: "quote",
        text: `How can I optimize this argument with my partner to achieve the desired output?`,
      },
      {
        type: "paragraph",
        text: `You are flattening your own internal monologue. You are voluntarily turning yourself into a highly efficient, incredibly boring line of code.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/prompt-speak-jira-brain.png",
        alt: "A pictogram of a messy human brain being compressed into a structured task checklist.",
        caption:
          "Prompt-speak can clarify your thinking, but it can also flatten it.",
      },
      {
        type: "heading",
        text: `5. You're Outsourcing Your Cognitive Labor to AI (And Making Yourself Stupid)`,
      },
      {
        type: "paragraph",
        text: `Cognitive friction is the hardest part of communication. The most difficult part of writing an email, formulating an argument, or comforting a grieving friend isn't the physical act of typing the words, but the agonizing mental heavy lifting required to dig into your own soul, sift through your own experiences, and pull out something true. It is hard, exhausting work.`,
      },
      {
        type: "paragraph",
        text: `AI completely removes that friction. You type, "Write a polite but firm email telling my landlord the fridge is broken," and boom. The work is done.`,
      },
      {
        type: "paragraph",
        text: `You type, "Write a sweet anniversary text to my wife," and the machine instantly simulates intimacy.`,
      },
      {
        type: "paragraph",
        text: `We treat this as a massive convenience, a way to hack productivity. We call it "cognitive offloading," similar to what researchers dubbed The Google Effect when we all realized we no longer needed to memorize phone numbers or historical facts.`,
      },
      {
        type: "paragraph",
        text: `But offloading facts is very different from offloading emotional labor and interpersonal conflict. When you outsource the friction of human communication to an algorithm, you are allowing the muscles of your own personality to atrophy. You are letting a piece of predictive text do your feeling, your arguing, and your loving for you.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/cognitive-offloading-low-battery.png",
        alt: "A pictogram of a tired person with low battery brain and heart icons handing emotional writing to an AI assistant.",
        caption:
          "Offloading facts is one thing. Offloading the work of feeling is different.",
      },
      {
        type: "heading",
        text: `A Single, Grudging Reason for Hope`,
      },
      {
        type: "paragraph",
        text: `In the interest of intellectual honesty, there is one thing that needs to be said before we proceed to the apocalypse: the people who get the most out of AI are not, in fact, the most tyrannical ones.`,
      },
      {
        type: "paragraph",
        text: `The highest-performing prompt engineers are not the people who bark FIX IT and punch their monitors. They are the ones who have developed a quietly radical skill: they know exactly what they want and have learned to communicate it with precision. They provide context. They name their audience. They articulate their constraints. They think carefully about intent before they ever type a word.`,
      },
      {
        type: "paragraph",
        text: `That is not the behavior of a medieval aristocrat screaming at the woodwork. That is the behavior of someone who has finally learned to think before they speak ... or type, in this case.`,
      },
      {
        type: "paragraph",
        text: `Here is the uncomfortable truth: the discipline required to write a genuinely excellent prompt (context, specificity, audience-awareness, clear intent) is the exact same discipline that makes you better at leadership, parenting, conflict resolution, and every other human communication challenge you will ever face.`,
      },
      {
        type: "quote",
        text: `**Bad prompt:** Make this better.`,
      },
      {
        type: "quote",
        text: `**Good prompt:** This is for anxious first-time managers. Keep it warm, concise, and actionable. No jargon.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/good-prompt-compassion.png",
        alt: "A pictogram showing a thoughtful prompt surrounded by context, audience, intent, and compassion.",
        caption:
          "The best prompt is not just optimized. It is aware of the person on the other side.",
      },
      {
        type: "paragraph",
        text: `The difference between those two prompts is not a question of AI optimization. It is a question of compassion. The second one requires you to hold another person's reality in your mind before you start talking.`,
      },
      {
        type: "paragraph",
        text: `Which means that AI, in the hands of a sufficiently thoughtful person, could function not as an empathy-obliterating machine, but as a daily, low-stakes rehearsal in the kind of other-aware communication that most human beings spend their entire lives failing to practice.`,
      },
      {
        type: "paragraph",
        text: `The question is which version of you is showing up to the text box.`,
      },
      {
        type: "paragraph",
        text: `Eventually, you will find yourself in a real, face-to-face conflict. A situation where you cannot summon a chatbot to generate a perfectly calibrated, emotionally balanced response. You will open your mouth, desperately searching for the right words, the necessary empathy, the human grace required to navigate the moment.`,
      },
      {
        type: "paragraph",
        text: `And you will find absolutely nothing there but an **empty search bar**, waiting for a command that isn't coming.`,
      },
    ] as FieldNoteBlock[],
  },
  {
    category: "Cybersecurity",
    title:
      "Your Email Security Tool Stopped Yesterday's Attacks. Here's What It's Missing Today.",
    description:
      "A product-adjacent thought-leadership piece on why static email security misses novel attacks and what behavior-based detection changes.",
    slug: "your-email-security-tool-stopped-yesterdays-attacks-heres-what-its-missing-today",
    variant: "security",
    image: "/field-notes/email-security-missing-today-hero.png",
    imageAlt:
      "An infographic comparing legacy email security with behavioral detection, showing how modern business email compromise can bypass traditional rules by appearing normal.",
    originalUrl:
      "https://www.linkedin.com/pulse/your-email-security-tool-stopped-yesterdays-attacks-heres-moore-lk6de",
    originalLabel: "Originally published on LinkedIn",
    body: [] as FieldNoteBlock[],
  },
  {
    category: "Workplace Communication",
    title:
      "5 Ways Your Coworkers Use Psychological Magic to Turn Your Feedback Into Compliments",
    description:
      "A workplace psychology piece on the biases and self-protective stories that can turn direct criticism into proof of personal greatness.",
    slug: "5-ways-your-coworkers-use-psychological-magic-to-turn-feedback-against-you",
    variant: "workplace",
    image: "/field-notes/psychological-magic-feedback-compliments-hero.png",
    imageAlt:
      "A coworker dressed as a triumphant hero magically transforms constructive criticism into flattering praise.",
    originalUrl:
      "https://www.linkedin.com/pulse/5-ways-your-coworkers-use-psychological-magic-turn-feedback-moore-fbx7e",
    originalLabel: "Originally published on LinkedIn",
    body: [] as FieldNoteBlock[],
  },
  {
    category: "Cybersecurity",
    title:
      "The Romance of the Scammed: Why Humans Are Biologically Programmed to Trust Sketchy Links",
    description:
      "A cybersecurity piece connecting con-artist psychology, human trust, and modern business email compromise.",
    slug: "the-romance-of-the-scammed-why-humans-are-biologically-programmed-to-trust-sketchy-links",
    variant: "security",
    image: "/field-notes/romance-of-the-scammed-hero.png",
    imageAlt:
      "A phishing email and a vintage con artist shown side by side, illustrating how modern scams exploit the same human instincts as old-fashioned cons.",
    originalUrl:
      "https://www.linkedin.com/pulse/romance-scammed-why-humans-biologically-programmed-trust-moore-1a6ge",
    originalLabel: "Originally published on LinkedIn",
    body: [] as FieldNoteBlock[],
  },
  {
    category: "Change Management",
    title:
      "What a SpongeBob Episode Taught Me About Pride, Change, and Why Most Corporate Initiatives Implode",
    description:
      "A business essay on organizational change resistance, ego, and why transformation work fails when people feel humiliated instead of included.",
    slug: "what-a-spongebob-episode-taught-me-about-pride-change-and-why-most-corporate-initiatives-implode",
    variant: "workplace",
    image: "/field-notes/spongebob-pride-change-hero.png",
    imageAlt:
      "A clean pictogram-style illustration showing resistance to change becoming curiosity, adaptation, and shared pride.",
    originalUrl:
      "https://www.linkedin.com/pulse/what-spongebob-episode-taught-me-pride-change-why-most-moore-s4hie",
    originalLabel: "Originally published on LinkedIn",
    body: [
      {
        type: "paragraph",
        text: `The psychology of change resistance, organizational ego, and why transformation projects collapse before they even begin.`,
      },
      {
        type: "paragraph",
        text: `Most organizational change initiatives fail, not because the strategy is wrong, but because of something far more human: **ego.**`,
      },
      {
        type: "paragraph",
        text: `I'll admit it: I did not expect to pull business wisdom from a cartoon squid having a life-upending meltdown over a hamburger. But here we are.`,
      },
      {
        type: "paragraph",
        text: `The 2001 SpongeBob SquarePants episode *"Just One Bite"* is a deranged, underwater deconstruction of Dr. Seuss' *Green Eggs and Ham.* Where Seuss gave us a gentle, rhythmic lesson in openness, the SpongeBob writers looked at that wholesome fable and said, "What if we commented on the horrifying fragility of ego?"`,
      },
      {
        type: "paragraph",
        text: `The result is a brutally accurate case study in human (and cephalopod) behavior. Here's what it reveals about change, pride, and innovation.`,
      },
      {
        type: "heading",
        text: `1. Resistance to Change Is About Identity More Than the "Product"`,
      },
      {
        type: "paragraph",
        text: `In *Green Eggs and Ham,* the guy just doesn't want Sam's weird food. In *"Just One Bite,"* Squidward's refusal runs much deeper. As the self-appointed sophisticated artist of Bikini Bottom, eating, let alone liking, a Krabby Patty is social suicide for his entire above-it-all persona.`,
      },
      {
        type: "paragraph",
        text: `The business parallel is brutal. How many times have you seen teams reject a new tool, process, or strategy not because it is bad, but because adopting it threatens their identity as the expert, the traditionalist, or the ***"I've been doing this for 15 years"*** veteran?`,
      },
      {
        type: "quote",
        text: `When someone digs in their heels, your job shifts from selling the features to addressing the **identity threat.**`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/change-identity-threat.png",
        alt: "A pictogram of an expert clutching an identity badge while recoiling from a new workplace tool.",
        caption:
          "Adopting a new tool can feel like admitting that hard-earned expertise no longer counts.",
      },
      {
        type: "heading",
        text: `2. Pride Is Stronger Than Evidence (And Twice as Dangerous)`,
      },
      {
        type: "paragraph",
        text: `Squidward finally caves, takes one bite, and experiences what can only be described as a total religious experience.`,
      },
      {
        type: "paragraph",
        text: `Then his ego hits the emergency brake. He forces a look of disgust, calls it "vile," and buries the sandwich in the dirt like he is hiding evidence from the feds.`,
      },
      {
        type: "paragraph",
        text: `This is why so many pilots fail. The data says it works. The early results are glowing. But someone would rather bury the win than admit they were wrong in public.`,
      },
      {
        type: "quote",
        text: `If your culture makes being right more important than being effective, innovation is dead on arrival.`,
      },
      {
        type: "paragraph",
        text: `Great leaders create environments where ***"I was wrong" is a flex, not a weakness.***`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/pride-over-evidence.png",
        alt: "A pictogram of a proud figure rejecting positive evidence and successful pilot results.",
        caption:
          "Evidence can win the pilot and still lose to a culture where changing your mind feels humiliating.",
      },
      {
        type: "heading",
        text: `3. Suppressing Change Resistance Doesn't Prevent Addiction, It Delays the Explosion`,
      },
      {
        type: "paragraph",
        text: `Once the dam breaks, Squidward does not enjoy the patty responsibly. He can't, because of the spectacular display he put on for SpongeBob. He turns into a dumpster diver, falsely places an order, and has a fever-dream wedding to a giant Krabby Patty, complete with horrifying hybrid children.`,
      },
      {
        type: "paragraph",
        text: `Seuss ended the story at the happy bite. SpongeBob shows what happens in the messy aftermath when desire has been bottled up for too long.`,
      },
      {
        type: "paragraph",
        text: `Translation for the workplace: when people are forced to resist change for years, the eventual breakthrough can swing wildly in the other direction: **over-adoption, burnout, or distorted implementation.** Build in safe experimentation early instead of waiting for the explosion.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/suppressed-change-pressure.png",
        alt: "A pictogram of suppressed workplace concerns building pressure inside a jar until the lid bursts.",
        caption:
          "Resistance that has nowhere safe to go does not disappear. It builds pressure.",
      },
      {
        type: "heading",
        text: `4. Breakthroughs Without Boundaries End in Spontaneous Combustion`,
      },
      {
        type: "paragraph",
        text: `Climax time: Squidward raids the Patty Vault at 3 a.m., binges like it is his last day on Earth, and then, well, he literally explodes.`,
      },
      {
        type: "paragraph",
        text: `Metaphor for every poorly supported transformation project ever. The big launch happens, enthusiasm spikes, there are no boundaries or support systems in place, and boom: organizational shrapnel everywhere.`,
      },
      {
        type: "quote",
        text: `Sustainable change needs more than one euphoric "first bite." It needs coaching, realistic scaling, and support.`,
      },
      {
        type: "image",
        src: "/pictograms/field-notes/breakthrough-without-boundaries.png",
        alt: "A pictogram of a change initiative launching too quickly without the support systems needed to keep it stable.",
        caption:
          "A breakthrough without coaching, boundaries, and realistic scaling can collapse under its own momentum.",
      },
      {
        type: "paragraph",
        text: `Dr. Seuss sold us the optimistic version: try new things and everything works out beautifully.`,
      },
      {
        type: "paragraph",
        text: `SpongeBob reminded us that humans are messier, funnier, and far more prideful than that.`,
      },
    ] as FieldNoteBlock[],
  },
  {
    category: "Content Strategy",
    title:
      "The Art of Showing, Not Telling: Left 4 Dead's 4-Minute Intro Remains a Masterclass",
    description:
      "An analytical piece connecting game-design principles to audience-aware content strategy and storytelling.",
    slug: "the-art-of-showing-not-telling-left-4-deads-4-minute-intro-remains-a-masterclass",
    variant: "strategy",
    image: "/field-notes/left-4-dead-show-dont-tell-hero.png",
    imageAlt:
      "A cinematic collage showing four survivors, gameplay moments, and notes explaining how Left 4 Dead teaches through experience rather than exposition.",
    originalUrl:
      "https://www.linkedin.com/pulse/art-showing-telling-left-4-deads-4-minute-intro-remains-moore-my2ue",
    originalLabel: "Originally published on LinkedIn",
    body: [] as FieldNoteBlock[],
  },
  {
    category: "Workplace Communication",
    title:
      "Someone Is About to Be Really Rude to You at Work. Here's What You Do.",
    description:
      "A conversational article on navigating difficult workplace dynamics with practical scripts, calm framing, and emotional steadiness.",
    slug: "someone-is-about-to-be-really-rude-to-you-at-work-heres-what-you-do",
    variant: "workplace",
    image: "/field-notes/rude-at-work-response-hero.png",
    imageAlt:
      "A worker pauses with a mug before replying to a hostile workplace message, surrounded by notes about responding calmly and clearly.",
    originalUrl:
      "https://www.linkedin.com/pulse/someone-really-rude-you-work-heres-what-do-marquetta-moore-prbze",
    originalLabel: "Originally published on LinkedIn",
    body: [] as FieldNoteBlock[],
  },
] as const;