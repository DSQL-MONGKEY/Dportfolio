export const CONTACT_EMAIL = 'dimasprasetyo.work@gmail.com'

export const LINKEDIN = {
   title: 'LinkedIn',
   handle: 'dimaspfe',
   link: 'https://www.linkedin.com/in/dimaspfe',
}

export const serviceOptions = [
   'Website Development',
   'Mobile Development',
   'IoT (Internet of Things)',
   'Software Testing',
]

export const budgetOptions = ['< $500', '$500 – $1.5k', '$1.5k – $5k', '$5k+', 'Not sure yet']

export const timelineOptions = ['ASAP', '1–2 weeks', '1 month', 'Flexible']

export const contactTemplates = [
   {
      id: 'project',
      label: 'Project inquiry',
      description: 'Tell me about the website or app you need built.',
      subject: 'Project inquiry — [project name]',
      body: `Hi Dimas,\n\nI'd like to talk about a project.\n\nWhat I need:\n- ...\n\nTimeline:\n- ...\n\nBudget range:\n- ...\n\nThanks,\n[your name]`,
      accent: '#F4CE14',
      shadow: 'shadow-[4px_4px_0px_0px_#F4CE14]',
   },
   {
      id: 'hire',
      label: 'Hire me',
      description: 'Full-time or contract role? Let’s talk.',
      subject: 'Job opportunity — [role] at [company]',
      body: `Hi Dimas,\n\nWe're hiring for [role] at [company] and your profile looks like a great fit.\n\nRole:\n- ...\n\nLocation / remote:\n- ...\n\nNext steps:\n- ...\n\nBest,\n[your name]`,
      accent: '#8ad451',
      shadow: 'shadow-[4px_4px_0px_0px_#8ad451]',
   },
   {
      id: 'collab',
      label: 'Collaboration',
      description: 'Open source, content, or community collab.',
      subject: 'Collaboration idea — [topic]',
      body: `Hi Dimas,\n\nI have a collaboration idea I'd love to run by you.\n\nIdea:\n- ...\n\nWhat I bring:\n- ...\n\nBest,\n[your name]`,
      accent: '#25F4EE',
      shadow: 'shadow-[4px_4px_0px_0px_#25F4EE]',
   },
   {
      id: 'hello',
      label: 'Just saying hi',
      description: 'Feedback, questions, or a random hello.',
      subject: 'Hello from [your name]',
      body: `Hi Dimas,\n\n...\n\nBest,\n[your name]`,
      accent: '#E1306C',
      shadow: 'shadow-[4px_4px_0px_0px_#E1306C]',
   },
]

export const contactSteps = [
   {
      title: 'Send the brief',
      description: 'Use the form or a template — it lands straight in my inbox.',
      accent: '#F4CE14',
   },
   {
      title: 'I reply in ~24h',
      description: 'You get a real answer with questions, scope, and feasibility.',
      accent: '#25F4EE',
   },
   {
      title: 'Call & proposal',
      description: 'We hop on a short call, then you get a clear proposal and timeline.',
      accent: '#8ad451',
   },
]
