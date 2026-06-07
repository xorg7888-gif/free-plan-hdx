/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvitePlan, PremiumPlan, Testimonial, FeatureItem, FAQItem } from "./types";

export const INVITE_PLANS: InvitePlan[] = [
  {
    id: "inv-2",
    name: "2 INV PLAN",
    invitesRequired: 2,
    cpu: "1 Core Intel CPU",
    ram: "1GB DDR4 RAM",
    disk: "5GB NVMe SSD",
    supportedVers: "Java / Paper / Fabric",
    features: ["Plugin Support", "Version Changer", "24/7 Uptime", "Full Panel Access"],
    recommended: false,
    tag: "Starter Tier"
  },
  {
    id: "inv-4",
    name: "4 INV PLAN",
    invitesRequired: 4,
    cpu: "2 Core Intel CPU",
    ram: "2GB DDR4 RAM",
    disk: "10GB NVMe SSD",
    supportedVers: "Java + Bedrock Support",
    features: ["Mods + Plugins", "Smooth Performance", "24/7 Guaranteed Uptime", "Full File Admin Access"],
    recommended: false,
    tag: "Small Co-op"
  },
  {
    id: "inv-6",
    name: "6 INV PLAN",
    invitesRequired: 6,
    cpu: "3 Core Intel CPU",
    ram: "3GB DDR4 RAM",
    disk: "15GB NVMe SSD",
    supportedVers: "Java & Bedrock Crossplay",
    features: ["Java & Bedrock Support", "Better Performance", "DDoS Protection", "Backup Support"],
    recommended: true,
    tag: "POPULAR VALUE"
  },
  {
    id: "inv-8",
    name: "8 INV PLAN",
    invitesRequired: 8,
    cpu: "4 Core Intel CPU",
    ram: "4GB DDR4 RAM",
    disk: "20GB NVMe SSD",
    supportedVers: "Supports Heavier Mods/Plugins",
    features: ["Heavy Plugins Supported", "Fast Performance", "Automated Backups", "1Gbps Port Uplink"],
    recommended: false,
    tag: "Pro-Gamer Tier"
  },
  {
    id: "inv-10",
    name: "10 INV PLAN",
    invitesRequired: 10,
    cpu: "5 Core Intel CPU",
    ram: "5GB DDR4 RAM",
    disk: "25GB NVMe SSD",
    supportedVers: "Large Modpacks / Networks",
    features: ["Multi-Version Support", "Ultra Smooth Gameplay", "Priority Node Allocation", "Discord Server Sync"],
    recommended: false,
    tag: "Power Community"
  },
  {
    id: "inv-12",
    name: "12 INV PLAN",
    invitesRequired: 12,
    cpu: "6 Core Intel CPU",
    ram: "6GB DDR4 RAM",
    disk: "30GB NVMe SSD",
    supportedVers: "Ultimate Heavy Modpack Spec",
    features: ["Mods & Heavy Plugins", "Extreme Low-Latency Performance", "Dedicated CPU Resources", "Priority VIP Support"],
    recommended: false,
    tag: "BEST VALUE TIER"
  }
];

export const PREMIUM_PLANS: PremiumPlan[] = [
  {
    id: "prem-starter",
    name: "STARTER SPEC",
    price: "$2.99",
    cpu: "2 Core Intel Premium Node",
    ram: "2GB DDR4 Dedicated RAM",
    disk: "20GB NVMe SSD",
    supportedVers: "All Java/Bedrock Versions",
    features: ["One-Click Mods Installer", "Full SFTP Database", "Daily Automated Backups", "Instance Uptime 99.99%"],
    recommended: false,
    tag: "Budget Friendly"
  },
  {
    id: "prem-pro",
    name: "PRO SPEC",
    price: "$5.99",
    cpu: "4 Core Intel Premium Node",
    ram: "4GB DDR4 Dedicated RAM",
    disk: "40GB NVMe SSD",
    supportedVers: "All Versions + Crossplay",
    features: ["Heavy Plugins & Mods", "Dedicated IPv4 Option", "Priority Technical Support", "Custom Domain Linker"],
    recommended: true,
    tag: "MOST POPULAR"
  },
  {
    id: "prem-elite",
    name: "ELITE SPEC",
    price: "$10.99",
    cpu: "6 Core Intel Premium Node",
    ram: "8GB DDR4 Dedicated RAM",
    disk: "80GB NVMe SSD",
    supportedVers: "Perfect for Large Streamers",
    features: ["Unlimited Player Slots", "Sub-10ms Network Routings", "Instant Setup Provisioning", "Custom Branding Panel"],
    recommended: false,
    tag: "Streamer Choice"
  },
  {
    id: "prem-ultimate",
    name: "ULTIMATE SPEC",
    price: "$19.99",
    cpu: "8 Core Intel Premium Node",
    ram: "16GB DDR4 Dedicated RAM",
    disk: "160GB NVMe Ultra SSD",
    supportedVers: "Ultimate Network Core",
    features: ["No-Lag Premium Engine", "Dedicated Enterprise Core", "VIP Personal Account Manager", "White-Gloved 24/7 Support"],
    recommended: false,
    tag: "ELITE PERFORMANCE"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    username: "Alex_Builds",
    role: "Minecraft Server Owner (12 Inv Spec)",
    avatarSeed: "alex",
    rating: 5,
    comment: "Initially skeptical about free invite-based hosting, but HDX-INVITE honestly blew me away. Reached 12 invites in two days, opened a ticket, and got my server up instantly. Our survival multiplayer has 15 active players and zero lag!",
    date: "2 days ago"
  },
  {
    id: "t-2",
    username: "NeonViper",
    role: "Modpack Community Manager",
    avatarSeed: "neon",
    rating: 5,
    comment: "The Intel CPU performance is fantastic. We are running a custom RLcraft server of 8 invites, and chunk loading is incredibly smooth. The control panel is robust, giving full SFTP and console accesses without arbitrary lockdowns.",
    date: "1 week ago"
  },
  {
    id: "t-3",
    username: "MineGamer_99",
    role: "Bedrock/Java Crossplay Host",
    avatarSeed: "mine",
    rating: 5,
    comment: "Incredible uptime and stellar support staff! Whenever I run into an error with custom plugin configs, staff replies on Discord within 5 minutes. Strongly recommend HDX-INVITE to everyone looking for reliable Minecraft hosts.",
    date: "3 weeks ago"
  },
  {
    id: "t-4",
    username: "SagaStream",
    role: "Twitch Streamer & Community Coordinator",
    avatarSeed: "saga",
    rating: 5,
    comment: "We upgraded to the Premium Pro plan for our subscriber community server, and it's a steal for $5.99. Low latency pathings and powerful DDR4 handles the massive mob farms with ease. Brilliant customer support!",
    date: "1 month ago"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "f-intel",
    title: "Intel Powered CPUs",
    description: "Every plan runs on top-shelf Intel Xeon or Core gaming processors with elevated single-core performance, ensuring fast tick rate calculations.",
    iconName: "Cpu"
  },
  {
    id: "f-ram",
    title: "Premium DDR4 RAM",
    description: "Experience massive chunk rendering and stable memory buffers under high stress with raw DDR4 high-speed server memory.",
    iconName: "HardDrive"
  },
  {
    id: "f-plugin",
    title: "Plugin Installer",
    description: "One-click installs for thousands of popular plugins. Instantly upload EssentialsX, WorldEdit, Vault, Geyser, ClearLag, and more.",
    iconName: "Zap"
  },
  {
    id: "f-mods",
    title: "Mod Support",
    description: "Fully supports all custom mod loaders like Forge, NeoForge, Fabric, Quilt, and server modpacks with zero custom workarounds.",
    iconName: "Binary"
  },
  {
    id: "f-version",
    title: "Version Switcher",
    description: "Freely change your jar file or server core in a single click: Spigot, Paper, Purpur, BungeeCord, Vanilla, Bedrock, and older releases.",
    iconName: "RefreshCw"
  },
  {
    id: "f-panel",
    title: "Full Panel Access",
    description: "Take absolute charge with full real-time console streaming, SFTP access, file explorers, task schedulers, and backup tools.",
    iconName: "Terminal"
  },
  {
    id: "f-network",
    title: "Fast Low-Latency Network",
    description: "Rest assured with full DDoS mitigation filters and 1Gbps network gateways routed globally to lower your ping to the absolute minimum.",
    iconName: "Activity"
  },
  {
    id: "f-support",
    title: "Active 24/7 Discord Support",
    description: "Need a hand? Our stellar Discord community and dedicated support agents are available around the clock to guide your server management.",
    iconName: "MessageSquare"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-what",
    question: "What is an invite plan?",
    answer: "An invite plan is our unique tier of Minecraft hosting that you can claim entirely for free! Instead of paying with cash, you invite active players and friends to our community Discord server. Once you reach the invite target (ranging from 2 to 12), we instantly provision your server on our high-performance hardware clusters."
  },
  {
    id: "faq-mods",
    question: "Do you support plugins and mods?",
    answer: "Absolutely! All HDX-INVITE server plans support customized plugins and massive modpacks. You can run Forge, Fabric, Paper, Spigot, Purpur, or BungeeCord, easily manageable through our premium game control panel."
  },
  {
    id: "faq-uptime",
    question: "Is 24/7 uptime included?",
    answer: "Yes, we guarantee 24/7 uptime. Our nodes are hosted in state-of-the-art enterprise server environments with back-up power, optimal temperature regulations, and carrier-grade DDoS filters to protect against interruptions."
  },
  {
    id: "faq-version",
    question: "Can I switch versions?",
    answer: "Yes. With our built-in single-click version switcher, you can upgrade, downgrade, or switch server engines instantly (e.g., from Vanilla 1.20 to Paper 1.21 or Forge 1.12) without losing your world data."
  },
  {
    id: "faq-join",
    question: "How do I claim a server with invites?",
    answer: "It is simple: 1) Join our Discord (https://discord.gg/s9cd4UrnqP). 2) Create your unique, permanent invites link. 3) Invite fellow gamers. 4) Use our Discord command or panel bot to tally valid invites. 5) Once you meet the target, open a ticket to receive logins for your powerful server control panel!"
  },
  {
    id: "faq-is-support-avail",
    question: "Is technical support available?",
    answer: "Yes, 24/7! We pride ourselves on fast support. You can raise a ticket inside our active Discord community to receive advice with plugins, modpack installations, server crashes, and Bedrock cross-play configurations."
  },
  {
    id: "faq-diff",
    question: "What makes HDX-INVITE stand out?",
    answer: "We don't limit performance just because plans are free or low cost. Unlike other hosts that use outdated legacy servers or throttle bandwidth, we operate custom-built, enterprise-level Intel gamer rigs. We couple this with real full file (SFTP) control, making it a professional hosting experience from day one."
  }
];
