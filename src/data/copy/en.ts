import type { CopyShape } from '../../types/content'

export const en: CopyShape = {
  meta: {
    title: 'Tamara and Friends — Sales and Marketing Automation Squad',
    description:
      'A full agentic AI squad that builds your business and sales automatically, 24 hours a day. Powered by Beobot.',
  },

  header: {
    navItems: [
      { id: 'ringkasan', label: 'Overview' },
      { id: 'squad', label: 'AI Squad' },
      { id: 'bukti', label: 'Proven Results' },
      { id: 'layanan', label: 'Services' },
      { id: 'kontak', label: 'Contact' },
    ],
    ctaLabel: 'Book a Demo',
    languageToggleLabel: 'Switch Language',
  },

  hero: {
    badge: '#AntiBoncosClub',
    title: 'Tamara and Friends',
    subtitle: 'Sales and Marketing Automation Squad',
    description: 'A full agentic AI squad that builds your business and sales automatically, 24 hours a day!',
    ctaPrimary: 'Book a Demo',
    ctaSecondary: 'Free Audit',
  },

  executiveSummary: {
    eyebrow: 'EXECUTIVE SUMMARY',
    title: 'One End-to-End Ecosystem, Not Just Separate Tools',
    description:
      'Most similar platforms only handle one piece — ads alone, or CRM alone. Tamara and Friends runs the entire journey from promotion to closing automatically, and actually generates sales.',
    steps: [
      {
        icon: 'megaphone',
        label: 'PROMOTION',
        title: 'Tamara AI',
        description: 'Runs your Meta Ads automatically and efficiently',
      },
      {
        icon: 'trendingUp',
        label: 'LEADS GENERATION',
        title: 'Tamara AI',
        description: 'Generates leads at scale from the campaigns that are running',
      },
      {
        icon: 'zap',
        label: 'SALES CONVERSION',
        title: 'Jessy AI',
        description: 'Revives chats and closes prospects into real transactions',
      },
      {
        icon: 'database',
        label: 'CRM MANAGEMENT',
        title: 'Salma AI',
        description: 'Manages and wakes your database into repeat buyers',
      },
    ],
    resultLabel: 'THE END RESULT',
    resultText: 'Prospects Become Actual Customers, Generating Actual Sales — All Running Automatically',
  },

  comparison: {
    eyebrow: 'WHAT SETS US APART',
    title: 'Similar Platforms vs Tamara and Friends',
    description: 'Most ads or CRM platforms are only good at one point in the funnel. Tamara and Friends closes the whole thing.',
    themLabel: 'SIMILAR PLATFORMS',
    themItems: [
      'Only handles one piece: ads OR CRM OR chatbot',
      'Disconnected tools, data that never talks to each other',
      'Leads come in, but conversion to sales stays manual',
      'Prospects easily get lost along the way',
    ],
    usLabel: 'TAMARA AND FRIENDS',
    usItems: [
      'End-to-end: promotion, leads, closing, and CRM in one ecosystem',
      '3 specialist AIs that are connected and work together',
      'Prospects are automatically converted into actual customers',
      'Runs automatically 24/7, generating actual sales',
    ],
  },

  agentSquad: {
    eyebrow: 'AI SQUAD',
    title: 'Meet the Tamara and Friends Squad',
    description:
      'Three specialist AIs working together — from running ads, to closing sales, to waking up your old customer database.',
    agents: [
      {
        id: 'tamara',
        name: 'Tamara',
        role: 'Meta Ads Manager',
        badge: 'LEADS GENERATION MACHINE',
        tagline: 'Meta Ads Manager · 100% Full Autonomous Agentic AI',
        description:
          'Tamara is a promotion and leads generation machine — an Agentic-AI-powered Meta Ads Manager that runs and manages your Meta Ads automatically and efficiently, generating leads at scale for your business. With CAPI implementation, the ad algorithm gets more accurate and sales conversion keeps improving.',
        bullets: ['Campaign Setup', 'Ad Optimization', 'Lead Qualification', 'Sales Follow-up', 'Closing Process'],
        quote: 'Full reconciliation and strategy are built in under 30 seconds — before a single ad setting is touched.',
        statBadges: [
          { value: '24/7', label: 'Actively Monitoring' },
          { value: 'Human', label: 'Approval Loop' },
        ],
      },
      {
        id: 'jessy',
        name: 'Jessy',
        role: 'Sales AI',
        badge: 'THE SALES CLOSING MACHINE',
        tagline: 'Sales AI · Conversation Reactivation Specialist',
        description:
          'Jessy is an AI built specifically for sales closing — its specialty is reviving chats and conversations that have gone dormant, even ones considered dead, into fresh closing conversations.',
        bullets: [
          'Detects WhatsApp/DM chats that stalled midway',
          'Automatic follow-up with messages that feel personal, not templated',
          'Re-reads chat history to pick the thread back up naturally',
          'Turns chats considered dead into new closings',
        ],
        quote: 'A chat that stopped doesn’t mean it’s over — it’s just waiting for the right opening line.',
        statBadges: [
          { value: '0', label: 'Chats Left Cold' },
          { value: '24/7', label: 'Automatic Follow-up' },
        ],
      },
      {
        id: 'salma',
        name: 'Salma',
        role: 'CRM AI',
        badge: 'THE DATABASE REVIVAL MACHINE',
        tagline: 'CRM AI · Database Reactivation Specialist',
        description:
          'Salma is the CRM AI that Tamara brings in to wake up your entire customer database that has been dormant or considered dead — turning it back into potential buyers.',
        bullets: [
          'Automatic segmentation of your entire old customer database by potential',
          'Personal reactivation campaigns to drive direct purchases',
          'Detects up-selling opportunities with existing customers',
          'Detects cross-selling opportunities into other products or business lines',
        ],
        quote: 'A sleeping database isn’t a dead asset — it’s sales that hasn’t been woken up yet.',
        statBadges: [
          { value: 'Multi', label: 'WhatsApp, SMS, Email, Call' },
          { value: 'Auto', label: 'Scored & Routed to Sales Reps' },
        ],
      },
    ],
  },

  proof: {
    eyebrow: 'PROVEN RESULTS — DSS MOTOR (MITSUBISHI)',
    title: 'Real Results in the Field, Not Just a Claim',
    subtitle: 'Total ad spend managed, Aug 1–6, 2026',
    stats: [
      { value: 'Rp34.87M', label: 'Total ad spend managed' },
      { value: '3,653', label: 'Total leads generated' },
      { value: 'Rp9,545', label: 'Average cost per lead' },
      { value: '47 / 89', label: 'Campaigns & ads monitored automatically' },
    ],
    comparisons: [
      { label: 'Ad Spend', before: 'Rp6.9M', after: 'Rp4.9M', change: '↓ 40.3% more efficient' },
      { label: 'Leads In', before: '635 leads', after: '665 leads', change: '↑ 30 more leads' },
    ],
    conclusionLabel: 'Conclusion',
    conclusionText: 'Spend goes down, results go up — pure efficiency from AI optimization.',
  },

  trust: {
    eyebrow: 'AUTONOMOUS, NOT UNCHECKED',
    title: 'You Still Hold Final Approval',
    description:
      'Every major recommendation — pausing a campaign, shifting budget, changing targeting — goes through your approval first. Tamara proposes with data, you decide.',
    steps: [
      {
        number: 1,
        title: 'Tamara detects an anomaly',
        description: 'A wasteful campaign, a spiking CPL, or low-quality leads get detected automatically.',
      },
      {
        number: 2,
        title: 'A recommendation is submitted',
        description: 'Complete with reasoning, supporting data, and an estimated saving.',
      },
      {
        number: 3,
        title: 'You Approve / Reject',
        description: 'One tap. No automatic action is taken on major decisions without your approval.',
      },
    ],
    exampleCard: {
      statusLabel: 'Pause',
      title: 'Pause #C024 — Mobix sharia car financing (Jul 15, ’26)',
      subtitle: 'Rp86,602/chat is too expensive · spend Rp1,299,037',
      campaignLabel: 'Campaign',
      campaignValue: 'Meta-Website-Leads-Mobix',
      adsetLabel: 'Ad Set',
      adsetValue: 'All Branch - Used Car',
      accountLabel: 'Account',
      accountValue: 'act_752604553578354',
      saveLabel: 'Savings',
      saveValue: 'Rp1,299,037',
      rejectLabel: 'Reject',
      approveLabel: 'Approve',
    },
  },

  services: {
    eyebrow: 'OUR SERVICES',
    title: 'Three Ways Tamara and Friends Grows Your Business',
    description: 'From running daily ads to waking up old customers — pick the service that fits your business.',
    items: [
      {
        icon: 'megaphone',
        label: 'SERVICE 1',
        title: 'Meta Ads Agency',
        description:
          'The Tamara AI team runs your Meta Ads directly — focused on campaign effectiveness and budget optimization, every day.',
      },
      {
        icon: 'settings',
        label: 'SERVICE 2',
        title: 'Ads Automation System',
        description:
          'Beobot leases or sells the Tamara system to companies who want their own ads automation engine, run by their internal team.',
      },
      {
        icon: 'database',
        label: 'SERVICE 3',
        title: 'CRM Implementation',
        description:
          'Tamara brings in Salma AI to wake up your entire dormant customer database — turning it into new sales opportunities.',
      },
    ],
  },

  goodFitFor: {
    eyebrow: 'GOOD FIT FOR',
    title: 'Anyone Who Needs Leads, Closing, or Active Customers Again',
    description: 'Pick the AI that best fits your business needs.',
    items: [
      { icon: 'car', label: 'Auto Dealers', description: 'New & used cars, multi-branch' },
      { icon: 'landmark', label: 'Multifinance', description: 'Leasing & vehicle financing' },
      { icon: 'store', label: 'SMEs & Retail', description: 'High lead volume, small team' },
      { icon: 'shoppingCart', label: 'E-commerce', description: 'Leads pouring in, closing has to be fast' },
      { icon: 'building2', label: 'Real Estate', description: 'High-value leads, long cycles' },
    ],
    footnote:
      'The main requirement: your business wants more leads, faster closing, or an active customer database again — pick the AI that fits your needs best.',
  },

  whyUs: {
    eyebrow: 'WHY TAMARA AND FRIENDS',
    title: 'Not Just a Dashboard — A Squad That Works',
    items: [
      { icon: 'bot', title: '100% Agentic', description: 'Executes decisions, not just presents reports.' },
      {
        icon: 'shield',
        title: 'Human-in-the-Loop',
        description: 'You still approve every major decision — safe and controlled.',
      },
      {
        icon: 'gauge',
        title: '< 30 Second Analysis',
        description: 'Reconciliation and strategy are built before a single ad setting changes.',
      },
      {
        icon: 'messagesSquare',
        title: 'Full Squad',
        description: 'Ads, closing, and database reactivation — one team, many strengths.',
      },
      {
        icon: 'checkCircle',
        title: 'Proven in the Field',
        description: 'Already in use and delivering real efficiency at DSS Motor (Mitsubishi).',
      },
    ],
  },

  ctaFooter: {
    eyebrow: 'READY TO START?',
    title: 'Let Tamara and Friends Get to Work Tonight.',
    description:
      'Start with a free audit, then see for yourself how much can be saved — and how many sleeping chats and customers can be woken back up.',
    ctaPrimary: 'Book a Demo',
    ctaSecondary: 'Free Audit',
    contactName: 'John — Sales Marketing, Tamara AI',
    aboutHeading: 'ABOUT BEOBOT',
    aboutDescription:
      'Beobot is an agentic AI and robotics company with years of experience building automation technology for businesses in Indonesia.',
    servicesLabel: 'OUR SERVICES',
    services: [
      { icon: 'brain', label: 'Agentic AI' },
      { icon: 'zap', label: 'Ads Automation' },
      { icon: 'database', label: 'Autopilot CRM' },
      { icon: 'bot', label: 'Robotic' },
      { icon: 'mic', label: 'Voice AI' },
      { icon: 'eye', label: 'Smart Vision' },
    ],
  },

  footer: {
    tagline: 'A full agentic AI squad that builds your business and sales automatically, 24 hours a day.',
    navHeading: 'Navigation',
    legalHeading: 'Legal',
    contactHeading: 'Contact',
    rightsReservedPrefix: '© 2026 Tamara and Friends · Powered by ',
    rightsReservedSuffix: '. All rights reserved.',
  },

  legal: {
    terms: {
      eyebrow: 'LEGAL',
      title: 'Terms of Service',
      lastUpdated: 'Last updated: October 7, 2026',
      intro: 'By accessing and using the Tamara and Friends website, you agree to the following terms of service.',
      sections: [
        {
          heading: 'Services Provided',
          body: [
            {
              type: 'paragraph',
              text: 'Tamara and Friends is an agentic AI product for sales and marketing automation — covering Tamara AI (Meta Ads automation), Jessy AI (sales closing), and Salma AI (CRM reactivation) — developed and operated by Beobot. Information on this website is general in nature and may change at any time without prior notice.',
            },
          ],
        },
        {
          heading: 'User Obligations',
          body: [
            {
              type: 'paragraph',
              text: 'By using this website, you agree not to misuse any content or services made available, including attempting to access our systems without authorization.',
            },
          ],
        },
        {
          heading: 'Human-in-the-Loop & Approval',
          body: [
            {
              type: 'paragraph',
              text: 'Tamara and Friends operates autonomously but still requires your approval for major decisions such as pausing a campaign, shifting budget, or changing targeting. You are responsible for the final decisions approved through our system.',
            },
          ],
        },
        {
          heading: 'Intellectual Property',
          body: [
            {
              type: 'paragraph',
              text: 'All content on this website — including text, logos, and design — belongs to Beobot and is protected under applicable law. Content may not be copied or reused without our written permission.',
            },
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            {
              type: 'paragraph',
              text: 'We strive to keep the information on this website accurate, but do not provide a full guarantee of its completeness or accuracy. Advertising performance results (such as in the DSS Motor case study) are actual client results and do not guarantee the same outcome for every business.',
            },
          ],
        },
        {
          heading: 'Changes to Services',
          body: [
            {
              type: 'paragraph',
              text: 'We reserve the right to change, discontinue, or update the services and content of this website at any time without prior notice.',
            },
          ],
        },
        {
          heading: 'Governing Law',
          body: [
            {
              type: 'paragraph',
              text: 'These terms of service are governed by and construed in accordance with the applicable laws of the Republic of Indonesia.',
            },
          ],
        },
      ],
      contactHeading: 'Contact',
      contactIntro: 'Questions about these terms of service can be sent via WhatsApp to',
    },

    privacy: {
      eyebrow: 'LEGAL',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 7, 2026',
      intro:
        'Tamara and Friends (operated by Beobot) respects the privacy of every visitor to this website. This policy explains what information we collect, how we use it, and your rights regarding that data.',
      sections: [
        {
          heading: 'Information We Collect',
          body: [
            {
              type: 'paragraph',
              text: 'When you contact us via WhatsApp on this page, we receive information you provide directly — such as your name, phone number, company name, and the content of your message. We may also collect basic technical data (such as IP address and device type) and use cookies or ad measurement tools such as Meta Pixel and Conversion API (CAPI) to understand the performance of our website and ads.',
            },
          ],
        },
        {
          heading: 'Legal Basis for Processing',
          body: [
            {
              type: 'paragraph',
              text: 'We process personal data based on your consent when contacting us, our legitimate interest in running and improving this website, and the legal obligations that apply to us as a business.',
            },
          ],
        },
        {
          heading: 'How We Use Information',
          body: [
            {
              type: 'list',
              items: [
                'Responding to questions or demo/audit requests you submit',
                'Running and optimizing ad campaigns on your behalf, if you use our Meta Ads Agency service',
                'Measuring and improving website and ad campaign performance',
                'Meeting legal obligations where required',
              ],
            },
          ],
        },
        {
          heading: 'Use of Meta Platforms',
          body: [
            {
              type: 'paragraph',
              text: 'This website and service use tools from Meta (Facebook & Instagram), including Meta Pixel and Conversion API (CAPI), to measure and improve ad effectiveness in accordance with Meta’s policies. If you arrive at this website through an ad or interact with a WhatsApp button on Facebook/Instagram, Meta may receive limited data related to that interaction as governed by Meta’s own privacy policy.',
            },
          ],
        },
        {
          heading: 'Sharing Information',
          body: [
            {
              type: 'paragraph',
              text: 'We do not sell your personal data. Information may be shared with service providers we use to run this website and service, such as hosting platforms, Meta (for ad measurement), and WhatsApp (for direct communication), or when required by law.',
            },
          ],
        },
        {
          heading: 'Cookies & Tracking Technology',
          body: [
            {
              type: 'paragraph',
              text: 'This website may use cookies and similar technologies to measure ad performance and website traffic. You can disable cookies through your browser settings at any time.',
            },
          ],
        },
        {
          heading: 'Data Retention',
          body: [
            {
              type: 'paragraph',
              text: 'We retain your personal data only for as long as necessary for the purposes described in this policy, or as required by law. After that, the data will be deleted or anonymized.',
            },
          ],
        },
        {
          heading: 'Your Rights',
          body: [
            {
              type: 'paragraph',
              text: 'You have the right to request access, correction, restriction, or deletion of the personal data we hold about you. See our Data Deletion page for how to submit a deletion request, or contact us directly via WhatsApp for other requests.',
            },
          ],
        },
        {
          heading: 'Links to Third-Party Sites',
          body: [
            {
              type: 'paragraph',
              text: 'This website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.',
            },
          ],
        },
        {
          heading: 'Children’s Privacy',
          body: [
            {
              type: 'paragraph',
              text: 'This website is not intended for children under 18. If we inadvertently collect data from a child, we will delete it as soon as we become aware of it.',
            },
          ],
        },
        {
          heading: 'Data Security',
          body: [
            {
              type: 'paragraph',
              text: 'We implement reasonable measures to protect your information, but no method of data transmission or storage is completely free of risk.',
            },
          ],
        },
        {
          heading: 'Changes to This Policy',
          body: [
            {
              type: 'paragraph',
              text: 'We may update this policy from time to time. Changes take effect as soon as they are published on this page.',
            },
          ],
        },
      ],
      contactHeading: 'Contact',
      contactIntro: 'Questions about this privacy policy can be sent via WhatsApp to',
    },

    dataDeletion: {
      eyebrow: 'LEGAL',
      title: 'Data Deletion',
      lastUpdated: 'Last updated: October 7, 2026',
      intro:
        'You have the right to request deletion of the personal data Tamara and Friends (Beobot) holds about you, free of charge and without condition, in accordance with applicable data protection rules in Indonesia.',
      sections: [
        {
          heading: 'How to Submit a Request',
          body: [
            {
              type: 'paragraph',
              text: 'Send a message via WhatsApp titled "Personal Data Deletion Request", including your full name and the phone number registered when you contacted us.',
            },
          ],
        },
        {
          heading: 'Information to Include',
          body: [
            {
              type: 'list',
              items: [
                'Full name',
                'Phone number registered when contacting us',
                'Company name (if related to business communication)',
                'Description of the data you want deleted (optional, if only partial)',
              ],
            },
          ],
        },
        {
          heading: 'Deletion Process',
          body: [
            {
              type: 'list',
              ordered: true,
              items: [
                'We receive and log your request',
                'We verify the requester’s identity',
                'We locate and identify the related data',
                'The data is permanently deleted from our systems',
                'We send written confirmation once complete',
              ],
            },
            {
              type: 'paragraph',
              text: 'Target completion time is 14 business days from when the request is received and identity is verified.',
            },
          ],
        },
        {
          heading: 'Data That Can Be Deleted',
          body: [
            {
              type: 'paragraph',
              text: 'This includes contact information, communication history with us, and other data we collect directly from you as described in the Privacy Policy.',
            },
          ],
        },
        {
          heading: 'Exceptions',
          body: [
            {
              type: 'paragraph',
              text: 'Under certain conditions, we may retain some data if required by law, needed to resolve a dispute, or if the data has been anonymized such that it can no longer be identified back to you personally.',
            },
          ],
        },
        {
          heading: 'Data from Meta Platforms',
          body: [
            {
              type: 'paragraph',
              text: 'Data stored directly on Facebook or Instagram (such as your interaction history with ads) is outside our control and must be requested directly through Meta’s privacy settings or help center. Data related to you that we receive from Meta will be deleted following the process above once your request is verified.',
            },
          ],
        },
      ],
      contactHeading: 'Further Questions',
      contactIntro: 'Questions about the data deletion process can be sent via WhatsApp to',
    },
  },

  notFound: {
    title: 'Page Not Found',
    description: 'The page you are looking for is unavailable or has been moved.',
    ctaLabel: 'Back to Home',
  },

  whatsappWidget: {
    ariaLabel: 'Chat via WhatsApp',
    title: 'Tamara and Friends',
    description: "Have a question? We're ready to help on WhatsApp.",
    message: "Hi, I'd like to ask about Tamara and Friends",
    chatLabel: 'Start Chat',
  },
}
