import { db } from '@/db';
import { portfolioItems } from '@/db/schema';

async function main() {
    const samplePortfolioItems = [
        // Web Projects
        {
            title: 'FinPay Mobile Banking Platform',
            category: 'Web',
            imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
            description: 'Developed a comprehensive digital banking platform for FinPay, enabling seamless money transfers, bill payments, and investment tracking. The platform increased user engagement by 65% and reduced transaction time by 40%.',
            tags: JSON.stringify(['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']),
            projectLink: 'https://finpay-demo.example.com',
            createdAt: new Date('2023-03-15').toISOString(),
            updatedAt: new Date('2023-03-15').toISOString(),
        },
        {
            title: 'EcoShop Sustainable Marketplace',
            category: 'Web',
            imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
            description: 'Built an eco-friendly e-commerce platform connecting conscious consumers with sustainable brands. Features include carbon footprint tracking, green certification badges, and donation options. Achieved $2M in sales within first 6 months.',
            tags: JSON.stringify(['React', 'Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB', 'GraphQL']),
            projectLink: 'https://ecoshop-marketplace.example.com',
            createdAt: new Date('2023-06-20').toISOString(),
            updatedAt: new Date('2023-06-20').toISOString(),
        },
        {
            title: 'MediCare Healthcare Portal',
            category: 'Web',
            imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
            description: 'Created a comprehensive patient management system for MediCare Health Network, streamlining appointment scheduling, medical records access, and telemedicine consultations. Improved patient satisfaction scores by 45% and reduced administrative overhead by 30%.',
            tags: JSON.stringify(['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'WebRTC']),
            projectLink: null,
            createdAt: new Date('2023-09-10').toISOString(),
            updatedAt: new Date('2023-09-10').toISOString(),
        },
        // App Projects
        {
            title: 'FitTrack Fitness Companion',
            category: 'App',
            imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
            description: 'Designed and developed a comprehensive fitness tracking app with AI-powered workout recommendations, nutrition planning, and social challenges. Reached 100K+ downloads in first 3 months with 4.8-star rating on app stores.',
            tags: JSON.stringify(['React Native', 'TypeScript', 'Firebase', 'iOS', 'Android', 'Machine Learning']),
            projectLink: 'https://fittrack-app.example.com',
            createdAt: new Date('2023-04-25').toISOString(),
            updatedAt: new Date('2023-04-25').toISOString(),
        },
        {
            title: 'LearnHub Educational Platform',
            category: 'App',
            imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
            description: 'Built an interactive learning app for K-12 students featuring gamified lessons, progress tracking, and parent-teacher communication tools. Adopted by 500+ schools nationwide, helping students improve test scores by average of 25%.',
            tags: JSON.stringify(['Flutter', 'Dart', 'Firebase', 'iOS', 'Android', 'Cloud Functions']),
            projectLink: null,
            createdAt: new Date('2023-07-14').toISOString(),
            updatedAt: new Date('2023-07-14').toISOString(),
        },
        {
            title: 'TravelMate Trip Planner',
            category: 'App',
            imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
            description: 'Developed an intelligent travel planning app with AI itinerary generation, real-time booking, and collaborative trip planning features. Won "Best Travel App" award in 2024 and featured in App Store\'s "Apps We Love".',
            tags: JSON.stringify(['React Native', 'Expo', 'Firebase', 'Google Maps API', 'iOS', 'Android']),
            projectLink: 'https://travelmate-app.example.com',
            createdAt: new Date('2024-01-08').toISOString(),
            updatedAt: new Date('2024-01-08').toISOString(),
        },
        // Design Projects
        {
            title: 'TechStart Complete Brand Identity',
            category: 'Design',
            imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
            description: 'Created comprehensive brand identity for emerging AI startup including logo design, brand guidelines, marketing collateral, and digital assets. The rebrand helped TechStart secure $5M Series A funding and establish strong market presence.',
            tags: JSON.stringify(['Figma', 'Adobe Illustrator', 'Branding', 'Logo Design', 'Brand Strategy']),
            projectLink: 'https://techstart-brand.example.com',
            createdAt: new Date('2023-05-18').toISOString(),
            updatedAt: new Date('2023-05-18').toISOString(),
        },
        {
            title: 'UrbanEats Restaurant UI/UX Redesign',
            category: 'Design',
            imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
            description: 'Redesigned complete user experience for food delivery platform, focusing on intuitive navigation, faster checkout, and personalized recommendations. Increased conversion rate by 58% and reduced cart abandonment by 35%.',
            tags: JSON.stringify(['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Interaction Design']),
            projectLink: null,
            createdAt: new Date('2023-08-22').toISOString(),
            updatedAt: new Date('2023-08-22').toISOString(),
        },
        {
            title: 'GreenEnergy Sustainability Report Design',
            category: 'Design',
            imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
            description: 'Designed engaging annual sustainability report for renewable energy company, featuring interactive data visualizations, infographics, and compelling storytelling. The report won industry awards and increased stakeholder engagement by 80%.',
            tags: JSON.stringify(['Adobe InDesign', 'Adobe Illustrator', 'Data Visualization', 'Print Design', 'Infographics']),
            projectLink: 'https://greenenergy-report.example.com',
            createdAt: new Date('2023-11-05').toISOString(),
            updatedAt: new Date('2023-11-05').toISOString(),
        },
        // Marketing Projects
        {
            title: 'LuxeStyle Fashion Brand Launch Campaign',
            category: 'Marketing',
            imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
            description: 'Executed comprehensive digital marketing campaign for luxury fashion brand launch including SEO strategy, influencer partnerships, and social media management. Generated 2M+ impressions, 50K+ website visits, and $500K in first-month revenue.',
            tags: JSON.stringify(['SEO', 'Social Media Marketing', 'Influencer Marketing', 'Google Ads', 'Content Strategy']),
            projectLink: null,
            createdAt: new Date('2023-10-12').toISOString(),
            updatedAt: new Date('2023-10-12').toISOString(),
        },
        {
            title: 'PropertyPro Real Estate Lead Generation',
            category: 'Marketing',
            imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
            description: 'Developed data-driven lead generation campaign for luxury real estate agency using targeted Google Ads, Facebook marketing, and content marketing. Delivered 300+ qualified leads monthly with 15% conversion rate and 400% ROI.',
            tags: JSON.stringify(['Google Ads', 'Facebook Ads', 'Lead Generation', 'Analytics', 'Conversion Optimization']),
            projectLink: 'https://propertypro-case-study.example.com',
            createdAt: new Date('2024-02-01').toISOString(),
            updatedAt: new Date('2024-02-01').toISOString(),
        },
        {
            title: 'HealthPlus Wellness Content Strategy',
            category: 'Marketing',
            imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
            description: 'Created and executed comprehensive content marketing strategy for wellness brand including blog posts, video content, email campaigns, and social media. Grew organic traffic by 250%, email list by 40K subscribers, and established thought leadership in industry.',
            tags: JSON.stringify(['Content Marketing', 'SEO', 'Email Marketing', 'Social Media', 'Video Marketing', 'Analytics']),
            projectLink: 'https://healthplus-content.example.com',
            createdAt: new Date('2024-03-15').toISOString(),
            updatedAt: new Date('2024-03-15').toISOString(),
        },
    ];

    await db.insert(portfolioItems).values(samplePortfolioItems);
    
    console.log('✅ Portfolio items seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});