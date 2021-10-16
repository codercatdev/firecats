import { AppTopbar } from '@/layout/AppTopbar';
import Footer from '@/layout/Footer';
import { Site, SocialType } from '@/models/site.model';

// This could come from Firebase
const site: Site = {
  id: 'ccd-starter-nextjs-tailwind-firebase',
  title: 'Reactive Cats',
  slogan: 'A catty firebase example',
  pageLinks: [
    { slug: '/', title: 'Home' },
    { slug: '/clientside', title: 'Cats' },
  ],
  socialLinks: [
    {
      type: SocialType.twitter,
      href: 'https://twitter.com/codingcatdev',
    },
    {
      type: SocialType.github,
      href: 'https://github.com/codingcatdev',
    },
    {
      type: SocialType.linkedin,
      href: 'https://linkedin.com/in/codingcatdev',
    },
    {
      type: SocialType.youtube,
      href: 'https://youtube.com/c/codingcatdev',
    },
  ],
};

const Layout = ({ children }: { children: any }): JSX.Element => {
  return (
    <>
      <section className="mb-10">
        <AppTopbar />
      </section>
      <div className="grid grid-cols-1 justify-items-center calc-height-wrapper lg:mx-auto lg:w-80 lg:max-w-8xl lg:justify-items-stretch">
        <main className="grid justify-center w-full grid-cols-1 gap-10 bg-primary-50 dark:bg-basics-700">
          {children}
        </main>

        <section className="mt-10">
          <Footer site={site} />
        </section>
      </div>
    </>
  );
};

export default Layout;
