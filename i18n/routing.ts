import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'de', 'sk'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/convert': '/convert',
    '/validate': '/validate',
    '/registry': '/registry',
    '/author': '/author',
    '/search': '/search'
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);