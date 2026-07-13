import { trackEvent } from '@/lib/analytics/gtag';

export const Analytics = {
  aiWorkflowStep(step: string) {
    trackEvent('ai_workflow_step', { step });
  },
  blogRead(slug: string, depth: number) {
    trackEvent('blog_read', { depth, slug });
  },
  contactFormError(service?: string) {
    trackEvent('form_error', { form_name: 'contact', service });
  },
  contactFormStart() {
    trackEvent('form_start', { form_name: 'contact' });
  },
  contactFormSubmit(service: string, budget: string) {
    trackEvent('form_submit', { budget, form_name: 'contact', service });
  },
  newsletterSubmit(location: string) {
    trackEvent('newsletter_submit', { location });
  },
  webVital(name: string, value: number, id: string) {
    trackEvent(name, {
      event_category: 'Web Vitals',
      event_label: id,
      non_interaction: true,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
    });
  },
};
