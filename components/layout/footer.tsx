import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { FooterNewsletterForm } from '@/components/layout/footer-newsletter-form';
import { footerColumns } from '@/components/layout/nav-data';

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

const socialLinks: readonly SocialLink[] = [
  { label: 'Follow us on X', href: '#', icon: Twitter },
  { label: 'Follow us on LinkedIn', href: '#', icon: Linkedin },
  { label: 'Follow us on GitHub', href: '#', icon: Github },
  { label: 'Follow us on Instagram', href: '#', icon: Instagram },
];
const visibleSocialLinks = socialLinks.filter((link) => link.href !== '#');

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 py-20 md:gap-x-10 lg:grid-cols-6 lg:gap-x-8 lg:py-24">
          <div className="col-span-2 lg:pr-8">
            <Link
              aria-label="Arizonix home"
              className={`inline-flex rounded-lg ${focusStyles}`}
              href="/"
            >
              <span className="relative h-10 w-44 overflow-hidden rounded-lg sm:w-52">
                <Image
                  alt="Arizonix"
                  className="object-contain object-left"
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
                  src="/images/arizonix-navbar-logo-transparent-v2.png"
                />
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              We design, engineer, and deliver intelligent software and AI
              solutions for ambitious businesses worldwide.
            </p>

            {visibleSocialLinks.length ? (
            <div className="mt-6 flex items-center gap-3">
              {visibleSocialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  aria-label={label}
                  className={`glass-panel flex size-11 items-center justify-center !rounded-full text-slate-400 transition duration-200 hover:scale-105 hover:border-brand-cyan/30 hover:text-white hover:shadow-glow-blue ${focusStyles}`}
                  href={href}
                  key={label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
            ) : null}

            <div className="mt-9">
              <h3 className="text-sm font-semibold text-slate-100">
                Stay updated
              </h3>
              <p className="mb-4 mt-2 text-sm leading-6 text-slate-400">
                Product thinking, AI insights, and company news—occasionally.
              </p>
              <FooterNewsletterForm />
            </div>
          </div>

          {footerColumns.map((column) => {
            const headingId = `footer-${column.title.toLowerCase()}`;

            return (
              <nav aria-labelledby={headingId} key={column.title}>
                <h3
                  className="text-sm font-semibold text-slate-100"
                  id={headingId}
                >
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        className={`inline-block rounded text-sm leading-6 text-slate-400 transition-colors duration-200 hover:text-white ${focusStyles}`}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-7 text-center text-sm text-slate-400 sm:flex-row sm:justify-between sm:text-left">
          <p>© {currentYear} Arizonix. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              className={`rounded transition-colors duration-200 hover:text-white ${focusStyles}`}
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className={`rounded transition-colors duration-200 hover:text-white ${focusStyles}`}
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
