import Image from 'next/image';

const logosData = [
    {
        logo: 'https://www.datocms-assets.com/22695/1715843667-netflix-c.svg',
        description: 'Series of visual concepts for improving the user experience',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859094-cbre-c.svg',
        description: 'Marketing website for a subsidiary of the CBRE Group\'s co-working space company',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843686-stripe-c.svg',
        description: 'Iconography design for a payments infrastructure company with 250M+ API requests per day',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859145-nbc-c.svg',
        description: 'Official Apple tvOS app user interface development',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843699-mozilla-c.svg',
        description: 'Official Firefox rebrand and ongoing support for design projects at Mozilla',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859179-universal-music-c.svg',
        description: 'Brand identity design for an internal App Store by Universal Music',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843712-adobe-c.svg',
        description: 'Collaborative work for digital asset management tools at Adobe',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859200-crunchbase.svg',
        description: 'Website redesign and user interface improvements for Crunchbase',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843733-opera-c.svg',
        description: 'UI and brand identity overhaul for Opera browser',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859220-redis-c.svg',
        description: 'Illustrations and UI components for Redis Labs developer resources',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843747-okta-c.svg',
        description: 'Design and identity branding for security software company Okta',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859240-cellebrite-c.svg',
        description: 'Corporate website design for data analysis software provider Cellebrite',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843760-turo-c.svg',
        description: 'User experience design for the car-sharing company Turo',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859258-forward-c.svg',
        description: 'UI design and branding for a healthcare technology startup',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843777-citrix-c.svg',
        description: 'Redesign of Citrix\'s enterprise-level solutions branding',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859328-cypress-c.svg',
        description: 'Identity and website design for testing framework Cypress.io',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843789-descript-c.svg',
        description: 'Interface and branding for video editing software Descript',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859342-flatfile-c.svg',
        description: 'Product design and marketing material for data onboarding platform Flatfile',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843801-clearbit-c.svg',
        description: 'Branding and UI components for Clearbit\'s API dashboard',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859358-streamlit-c.svg',
        description: 'UI design and brand identity for machine learning tool Streamlit',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843813-volusion-c.svg',
        description: 'eCommerce platform redesign for Volusion',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859371-flecoin-c.svg',
        description: 'Marketing and branding for cryptocurrency Flecoin',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843826-xero-c.svg',
        description: 'User interface and dashboard designs for Xero\'s financial tools',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859384-healthtap-c.svg',
        description: 'UI and UX improvements for healthcare app HealthTap',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843839-oppo-c.svg',
        description: 'Visual identity and interface design for OPPO mobile',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859397-kindercare-c.svg',
        description: 'Website design for educational institution Kindercare',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843855-salesforce-c.svg',
        description: 'User interface overhaul for Salesforce CRM platform',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859421-iterable-c.svg',
        description: 'UI and marketing content for Iterable\'s automation platform',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715843866-kyber-network-c.svg',
        description: 'Visual branding and interface design for Kyber Network',
    },
    {
        logo: 'https://www.datocms-assets.com/22695/1715859443-xsolla-c.svg',
        description: 'Marketing website for gaming commerce company Xsolla',
    }
];


const Logo = () => {
    return (
        <div className="flex-wrap justify-center grid grid-cols-5">
            {logosData.map((item, index) => (
                index <= 14 && (
                    <div key={index} className="item animated m-4 max-w-xs">
                        <a href={item.link || '#'} className="block text-center" aria-label="Partner Logo">
                            <div className="logo mb-2">
                                <Image
                                    src={item.logo}
                                    width={202}
                                    height={108}
                                    alt=""
                                    className="mx-auto"
                                    priority // Use for critical images
                                />
                            </div>
                            <div className="description">
                                {/* You can add a description here if needed */}
                            </div>
                        </a>
                    </div>
                )
            ))}
        </div>
    );
};

export default Logo;

