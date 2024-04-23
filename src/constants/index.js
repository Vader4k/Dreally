import { link, security, idea,
    affiliate,
    analist,
    blog,
    booking,
    code,
    enquiry,
    gallery,
    iframe,
    instagram,
    ladder,
    listing,
    payment,
    save,
    seo,
    service,
    social,
    tales,
    vcard,
    insta,
    tiktok, 
    twitter, 
    dreally,
    freeCheck,
    freeDisabled,
    paid

 } from '../assets'

export const navLinks = [
    {
        id: 1,
        name: 'About',
        path: '/about'
    },
    {
        id: 2,
        name: 'Discover',
        path: '/#'
    },
    {
        id: 3,
        name: 'Learn',
        item: [
            {
                id:1,
                name: 'Blog',
                url: 'https://blog.dreally.com/'
            },
        ]
    },
]

export const why = [
    {
        id:1,
        icon: link,
        title: 'Portfolio Showcase',
        text: 'Showcase your skills, projects, and achievements with ease using our customizable portfolio templates. Impress clients and employers with a professional online presence that highlights your expertise and experience.'
    },
    {
        id:2,
        icon: idea,
        title: 'Seamless Connections',
        text: 'Connect with confidence using Dreally seamless networking tools. From click-to-call functionality to instant sharing of contact information, networking has never been easier. Build meaningful connections and grow your network effortlessly with Dreally.'
    },
    {
        id:3,
        icon: security,
        title: 'Digital Business Cards',
        text: 'Unlock the power of digital networking with our sleek and professional digital business cards. Stand out from the crowd and make a lasting impression with customizable designs and seamless sharing capabilities.'
    },
]

export const features = [
    {
        id:1,
        title: 'Service Showcases',
        text: 'Highlight your offerings or expertise with dedicated service sections.',
        icon: service
    },
    {
        id:2,
        title: 'Testimonial Tales',
        text: 'Showcase client feedback and build trust with testimonials.',
        icon: tales
    },
    {
        id:3,
        title: 'Analytics',
        text: 'Gain insights into your accounts performance with built-in analytics tools.',
        icon: analist
    },
    {
        id:4,
        title: 'Enquiry Form',
        text: 'Capture leads and inquiries easily with customizable enquiry forms',
        icon: enquiry
    },
    {
        id:5,
        title: 'Social Links',
        text: 'Add links to your website and other social media profiles',
        icon: social
    },
    {
        id:6,
        title: 'IFrame',
        text: 'Embed external content seamlessly with customizable iframe options',
        icon: iframe

    },
    {
        id:7,
        title: 'SEO Sage',
        text: 'Optimze your account for search engines to improve visibility and reach',
        icon: seo
    },
    {
        id:8,
        title: 'Click to save contact',
        text: 'Allow visitors to save your contact information with a single click, making it effortless for them to connect and stay in touch',
        icon: save
    },
    {
        id: 9,
        title: 'Blog Beacon',
        text: 'Share your thoughts and expertise with a built-in blogging platform',
        icon: blog
    },
    {
        id: 10,
        title: 'Appointment Booking',
        text: 'Schedule apointments and manage bookings effortlessly',
        icon: booking
    },
    {
        id:11,
        title: 'Affiliate Amalgamator',
        text: 'Partner with other brands or businesses through affiliate marketing',
        icon: affiliate
    },
    {
        id:12,
        title: 'Gallery Glimpse',
        text: 'Display images and visuals beautifully with customizable gallery options',
        icon: gallery
    },
    {
        id:13,
        title: 'Product Listing',
        text: 'Showcase and sell your products directly from your Dreally account',
        icon: listing
    },
    {
        id:14,
        title: 'Payment Setup',
        text: 'Streamline your billing process with automated invoicing for your services or product and Choose from a variety of payment gateways to accept payments seamlessly.',
        icon: payment
    },
    {
        id:15,
        title: 'Link Ladder',
        text: 'Create different personalized links for different profiles and Easily manage and organize all your important links in one place.',
        icon: ladder
    },
    {
        id:16,
        title: 'Customize QR Code',
        text: 'Generate custom QR code to promote your Dreally account',
        icon: code
    },
    {
        id:17,
        title: 'Instagram Feed',
        text: 'Showcase your latest instagram posts directly on your Dreally account',
        icon: instagram
    },
    {
        id:18,
        title: 'vCard Templates',
        text: 'Choose from a variety of templates to create your digital vCard',
        icon: vcard
    }
]

export const started = [
    {
        id:1,
        title: 'How to start creating my portfolio? ',
        text : [
            {
                id:1,
                text: 'Sign up and verify your Dreally account'
            },
            {
                id:2,
                text: 'Navigate to the Vcards section in your dashboard.'
            },
            {
                id:3,
                text: 'Click "Add New Vcard" and enter your desired URL name.'
            },
            {
                id:4,
                text: 'Complete your profile information.'
            },
            {
                id:5,
                text: 'Choose a Vcard template that suits your style.'
            },
            {
                id:6,
                text: ' Preview your Vcard and publish your portfolio.'
            }
        ]
    }
    ,
    {
        id:2,
        title: 'How to get your smart card for your link ',
        text : [
            {
                id:1,
                text: 'Go to your dashboard menu and click on "My NFC Card".'
            },
            {
                id:2,
                text: 'Choose "Order NFC" from the options'
            },
            {
                id:3,
                text: 'Click on the card image to select your desired NFC Card Type.'                
            },
            {
                id:4,
                text: 'From your link list, select a VCard Name.'
            },
            {
                id:5,
                text: ' Upload your logo to personalize your card.'
            },
            {
                id:6,
                text: 'Complete your order by clicking "Order" and proceed with payment to process your card'
            }
        ] 
    },
    {
        id:3,
        title: 'How to activate you payment gateway',
        text : [
            {
                id:1,
                text: 'Navigate to your settings.'
            },
            {
                id:2,
                text: 'Activate your preferred Payment Gateway.'
            },
            {
                id:3,
                text: ' Input your Merchant Key and Secret Key.'              
            },
            {
                id:4,
                text: 'Save your settings.'
            },
            {
                id:5,
                text: 'Begin selling on Dreally.'
            },
        ] 
    }
]

export const questions = [
    {
        id: 1,
        title: 'What is Dreally and how does it work?',
        reply: "Dreally is a comprehensive networking platform that allows users to create digital business cards, showcase their portfolios, and connect with others seamlessly. Users can customize their profiles, share contact information, and network effortlessly using Dreally's intuitive interface."
    },
    {
        id: 2,
        title: 'Can I use Dreally for personal and business purposes?',
        reply: "Yes, Dreally is designed to cater to both personal and business needs. Whether you're an individual looking to showcase your talents or a business owner seeking to expand your network, Dreally offers features and functionalities to suit your requirements."
    },
    {
        id: 3,
        title: 'How secure is my information on Dreally?',
        reply: "At Dreally, we prioritize the security and privacy of our users' information. We employ robust security measures to protect your data and ensure confidentiality. Additionally, users have control over their privacy settings and can choose what information to share and with whom."
    },
    {
        id: 4,
        title: 'Can I sell products on Dreally ?',
        reply: "Yes, Dreally offers a platform for users to showcase and sell their products or services directly from their profiles. Whether you're an artist, freelancer, or entrepreneur, you can leverage Dreally's e-commerce capabilities to reach potential customers and grow your business. Simply set up your products, add pricing and descriptions, and start selling hassle-free on Dreally."
    },
    {
        id: 5,
        title: "What are the benefits of using Dreally's digital business cards?",
        reply: "Dreally's digital business cards offer several advantages over traditional paper cards. They are eco-friendly, easily shareable via email or social media, customizable to reflect your branding, and provide analytics insights into engagement. Plus, they eliminate the need for printing and carrying physical cards"
    },
    {
        id: 6,
        title: "How can I get started with Dreally?",
        reply: "Getting started with Dreally is simple! Sign up for an account, customize your profile and digital business card, showcase your portfolio, and start connecting with others. Our intuitive interface and user-friendly features make it easy for you to elevate your networking game with Dreally."
    }
]

export const footerLinks = [
    {
        id:1,
        name: 'Blog',
        url: 'https://blog.dreally.com/'
    },
    {
        id:2,
        name: 'Pricing',
        url: '/pricing'
    },
    {
        id:3,
        name: 'About',
        url: '/about'
    },

]

export const socials = [
    {
        id:1,
        img: dreally ,
        url: 'https://app.dreally.com/Dreally'
    },
    {
        id:2,
        img: insta,
        url: 'https://www.instagram.com/getdreally?igsh=dTdrZWc4eGJnMGg0'
    },
    {
        id:3,
        img: twitter,
        url: 'http://X.com/getdreally'
    },
    {
        id:4,
        img: tiktok,
        url: 'https://www.tiktok.com/@thrive7group?_t=8ldPSIPYamM&_r=1'
    },

]

export const freeDefault = [
    {
        id:1,
        img: freeCheck,
        text: 'Up to 2 vCards Links'
    },
    {
        id:2,
        img: freeCheck,
        text: 'Services Showcase'
    },
    {
        id:3,
        img: freeCheck,
        text: 'Testimonials'
    },
    {
        id:4,
        img: freeCheck,
        text: 'Analytics'
    },
    {
        id:5,
        img: freeCheck,
        text: 'Gallery'
    },
    {
        id:6,
        img: freeCheck,
        text: 'Social Links'
    },
    {
        id:7,
        img: freeCheck,
        text: 'Enquiry Form'
    },
    {
        id:8,
        img: freeCheck,
        text: 'Custom Fonts'
    },

]

export const freeExtended = [
    {
        id:1,
        img: freeCheck,
        text: 'Up to 2 vCards Links'
    },
    {
        id:2,
        img: freeCheck,
        text: 'Services Showcase'
    },
    {
        id:3,
        img: freeCheck,
        text: 'Testimonials'
    },
    {
        id:4,
        img: freeCheck,
        text: 'Analytics'
    },
    {
        id:5,
        img: freeCheck,
        text: 'Gallery'
    },
    {
        id:6,
        img: freeCheck,
        text: 'Social Links'
    },
    {
        id:7,
        img: freeCheck,
        text: 'Enquiry Form'
    },
    {
        id:8,
        img: freeCheck,
        text: 'Custom Fonts'
    },
    {
        id:9,
        img: freeDisabled,
        text: 'Products Listing'
    },
    {
        id:10,
        img: freeDisabled,
        text: 'Appointment Booking'
    },
    {
        id:11,
        img: freeDisabled,
        text: 'iFrame integration'
    },
    {
        id:12,
        img: freeDisabled,
        text: 'Instagram Feeds Integration'
    },
    {
        id:13,
        img: freeDisabled,
        text: 'Blog'
    },
    {
        id:14,
        img: freeDisabled,
        text: 'Custom QR Code'
    },
    {
        id:15,
        img: freeDisabled,
        text: 'Custom JS'
    },
    {
        id:17,
        img: freeDisabled,
        text: 'Custom Css'
    },
    {
        id:17,
        img: freeDisabled,
        text: 'Password Protection'
    },
    {
        id:18,
        img: freeDisabled,
        text: 'Affiliation'
    },
    {
        id:19,
        img: freeDisabled,
        text: 'SEO'
    },
    {
        id:20,
        img: freeDisabled,
        text: 'Payment Set Up'
    },
    {
        id:21,
        img: freeDisabled,
        text: 'And Many more'
    },

]

export const paidDefault = [
    {
        id:1,
        img: paid,
        text: 'Up to 15 vCards Links'
    },
    {
        id:2,
        img: paid,
        text: 'Services Showcase'
    },
    {
        id:3,
        img: paid,
        text: 'Testimonials'
    },
    {
        id:4,
        img: paid,
        text: 'Analytics'
    },
    {
        id:5,
        img: paid,
        text: 'Gallery'
    },
    {
        id:6,
        img: paid,
        text: 'Social Links'
    },
    {
        id:7,
        img: paid,
        text: 'Enquiry Form'
    },
    {
        id:8,
        img: paid,
        text: 'Products Listing'
    }

]

export const paidExtended = [
    {
        id:1,
        img: paid,
        text: 'Up to 15 vCards Links'
    },
    {
        id:2,
        img: paid,
        text: 'Services Showcase'
    },
    {
        id:3,
        img: paid,
        text: 'Testimonials'
    },
    {
        id:4,
        img: paid,
        text: 'Analytics'
    },
    {
        id:5,
        img: paid,
        text: 'Gallery'
    },
    {
        id:6,
        img: paid,
        text: 'Social Links'
    },
    {
        id:7,
        img: paid,
        text: 'Enquiry Form'
    },
    {
        id:8,
        img: paid,
        text: 'Products Listing'
    },
    {
        id:9,
        img: paid,
        text: 'Appointment Booking'
    },
    {
        id:10,
        img: paid,
        text: 'iFrame Integration'
    },
    {
        id:11,
        img: paid,
        text: 'Instagram Feeds Integration'
    },
    {
        id:12,
        img: paid,
        text: 'Blog'
    },
    {
        id:13,
        img: paid,
        text: 'Custom QR Code'
    },
    {
        id:14,
        img: paid,
        text: 'Custom Fonts'
    },
    {
        id:15,
        img: paid,
        text: 'Custom JS'
    },
    {
        id:16,
        img: paid,
        text: 'Custom CSS'
    },
    {
        id:17,
        img: paid,
        text: 'Password Protection'
    },
    {
        id:18,
        img: paid,
        text: 'Affiliation'
    },
    {
        id:19,
        img: paid,
        text: 'SEO'
    },
    {
        id:20,
        img: paid,
        text: 'Payment Set Up'
    },
    {
        id:21,
        img: paid,
        text: 'and many more.'
    }

]