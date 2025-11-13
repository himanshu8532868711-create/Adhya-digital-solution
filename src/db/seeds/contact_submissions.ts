import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

async function main() {
    const sampleContactSubmissions = [
        {
            name: 'Rajesh Kumar',
            email: 'rajesh.kumar@techstart.in',
            phone: '+91-9876543210',
            message: 'I am looking to redesign my e-commerce website for better user experience. Can you provide a detailed quote and timeline?',
            status: 'new',
            createdAt: new Date('2024-12-15').toISOString(),
            updatedAt: new Date('2024-12-15').toISOString(),
        },
        {
            name: 'Sarah Mitchell',
            email: 'sarah.mitchell@globalventures.com',
            phone: '+1-555-0123',
            message: 'Interested in your mobile app development services for a fintech startup. We need both iOS and Android platforms.',
            status: 'contacted',
            createdAt: new Date('2024-12-10').toISOString(),
            updatedAt: new Date('2024-12-12').toISOString(),
        },
        {
            name: 'Priya Sharma',
            email: 'priya.sharma@boutique.in',
            phone: '+91-8765432109',
            message: 'Need help with SEO and digital marketing for my small business. Looking to improve online visibility and sales.',
            status: 'new',
            createdAt: new Date('2024-12-18').toISOString(),
            updatedAt: new Date('2024-12-18').toISOString(),
        },
        {
            name: 'Michael Chen',
            email: 'michael.chen@innovatetech.com',
            message: 'Would like to discuss a collaboration opportunity for enterprise software development. We have several projects in pipeline.',
            status: 'contacted',
            createdAt: new Date('2024-12-05').toISOString(),
            updatedAt: new Date('2024-12-08').toISOString(),
        },
        {
            name: 'Amit Patel',
            email: 'amit.patel@startupindia.in',
            phone: '+91-9988776655',
            message: 'Looking for a full-stack development team to build a SaaS product from scratch. Timeline is 6 months.',
            status: 'resolved',
            createdAt: new Date('2024-11-28').toISOString(),
            updatedAt: new Date('2024-12-01').toISOString(),
        },
        {
            name: 'Emma Rodriguez',
            email: 'emma.rodriguez@designstudio.com',
            phone: '+44-20-7946-0958',
            message: 'Interested in your UI/UX design services for rebranding our company website. Can we schedule a consultation call?',
            status: 'contacted',
            createdAt: new Date('2024-12-08').toISOString(),
            updatedAt: new Date('2024-12-11').toISOString(),
        },
        {
            name: 'Vikram Singh',
            email: 'vikram.singh@retailhub.in',
            message: 'We need technical support for our existing website. Facing performance issues and need optimization services.',
            status: 'new',
            createdAt: new Date('2024-12-19').toISOString(),
            updatedAt: new Date('2024-12-19').toISOString(),
        },
        {
            name: 'Jessica Thompson',
            email: 'jessica.thompson@healthcare.us',
            phone: '+1-555-0198',
            message: 'Looking to develop a healthcare management system with patient portal and appointment scheduling. Please share your portfolio.',
            status: 'resolved',
            createdAt: new Date('2024-11-25').toISOString(),
            updatedAt: new Date('2024-11-30').toISOString(),
        },
    ];

    await db.insert(contactSubmissions).values(sampleContactSubmissions);
    
    console.log('✅ Contact submissions seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});