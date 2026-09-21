import { CONTACT_EMAIL } from '@/common/constants/contact'

export interface MailTemplate {
   subject: string
   body: string
}

export interface LeadFormValues {
   name: string
   email: string
   service: string
   budget: string
   timeline: string
   message: string
}

const encode = (value: string) => encodeURIComponent(value)

export const buildMailto = ({ subject, body }: MailTemplate) =>
   `mailto:${CONTACT_EMAIL}?subject=${encode(subject)}&body=${encode(body)}`

export const buildGmailCompose = ({ subject, body }: MailTemplate) =>
   `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encode(CONTACT_EMAIL)}&su=${encode(subject)}&body=${encode(body)}`

export const buildLeadTemplate = (values: LeadFormValues): MailTemplate => ({
   subject: `Project inquiry — ${values.service || 'General'}${values.name ? ` (${values.name})` : ''}`,
   body: [
      'Hi Dimas,',
      '',
      `My name is ${values.name || '[your name]'}${values.email ? ` (${values.email})` : ''}.`,
      '',
      `Service needed: ${values.service || '...'}`,
      `Budget range: ${values.budget || '...'}`,
      `Timeline: ${values.timeline || '...'}`,
      '',
      'Project details:',
      values.message || '- ...',
      '',
      'Thanks,',
      values.name || '[your name]',
   ].join('\n'),
})

export const buildServiceTemplate = (service: string): MailTemplate => ({
   subject: `${service} — project inquiry`,
   body: [
      'Hi Dimas,',
      '',
      `I'm interested in your ${service} service.`,
      '',
      'What I need:',
      '- ...',
      '',
      'Timeline:',
      '- ...',
      '',
      'Budget range:',
      '- ...',
      '',
      'Thanks,',
      '[your name]',
   ].join('\n'),
})
