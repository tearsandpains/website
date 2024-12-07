export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: "Benedicta and Sonnie's Tears and Pains",
    // subtitle: 'Minimal Astro.js theme',
    description: 'Charity for widows of Ghana.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        //{
        //    text: 'Contact',
        //    href: '/contact'
        //},
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        // {
        //     text: 'Instagram',
        //     href: 'https://instagram.com/'
        // },
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@WidowAndSon-yy8zt'
        }
    ],
    hero: {
        // title: 'Hi There & Welcome to My Corner of the Web!',
        text: "Benedicta and Sonnie's Tears and Pains is a charity working to help abused and overlooked widows in Ghana get back on their feet. See the <a href='/about'>about page</a> or the <a href='https://www.youtube.com/@WidowAndSon-yy8zt'>YouTube channel</a> to learn more or <a href='/donate'>donate</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Donate',
                href: '/donate'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
