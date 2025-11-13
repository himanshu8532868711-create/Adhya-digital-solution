import { db } from '@/db';
import { clientProjects } from '@/db/schema';

async function main() {
    const sampleProjects = [
        {
            clientId: 1,
            projectName: 'E-commerce Platform Redesign',
            description: 'Modernizing the shopping experience with improved UX and mobile responsiveness. Complete overhaul of the checkout process and integration of new payment gateways.',
            status: 'in_progress',
            budget: 35000,
            startDate: new Date('2024-03-15').toISOString(),
            endDate: null,
            createdAt: new Date('2024-03-01').toISOString(),
            updatedAt: new Date('2024-03-15').toISOString(),
        },
        {
            clientId: 2,
            projectName: 'Healthcare Portal Development',
            description: 'Building a HIPAA-compliant patient management system with secure messaging and appointment scheduling. Integration with existing EHR systems required.',
            status: 'in_progress',
            budget: 48000,
            startDate: new Date('2024-02-01').toISOString(),
            endDate: null,
            createdAt: new Date('2024-01-20').toISOString(),
            updatedAt: new Date('2024-02-01').toISOString(),
        },
        {
            clientId: 3,
            projectName: 'Mobile Banking App',
            description: 'Creating a secure and intuitive mobile banking experience with biometric authentication. Features include real-time notifications, budget tracking, and peer-to-peer payments.',
            status: 'completed',
            budget: 42000,
            startDate: new Date('2024-01-10').toISOString(),
            endDate: new Date('2024-04-30').toISOString(),
            createdAt: new Date('2024-01-05').toISOString(),
            updatedAt: new Date('2024-04-30').toISOString(),
        },
        {
            clientId: 4,
            projectName: 'Online Learning Platform',
            description: 'Developing an interactive education platform with video streaming, live classes, and progress tracking. Includes student dashboard and instructor tools for course management.',
            status: 'in_progress',
            budget: 28000,
            startDate: new Date('2024-04-01').toISOString(),
            endDate: null,
            createdAt: new Date('2024-03-20').toISOString(),
            updatedAt: new Date('2024-04-01').toISOString(),
        },
        {
            clientId: 5,
            projectName: 'Real Estate Listing Website',
            description: 'Building a comprehensive property listing platform with advanced search filters and virtual tour integration. Features 3D floor plans and mortgage calculator.',
            status: 'planning',
            budget: 22000,
            startDate: null,
            endDate: null,
            createdAt: new Date('2024-05-10').toISOString(),
            updatedAt: new Date('2024-05-10').toISOString(),
        },
        {
            clientId: 6,
            projectName: 'Restaurant Management System',
            description: 'Creating an all-in-one solution for restaurant operations including POS, inventory management, and online ordering. Integration with delivery services and loyalty program.',
            status: 'completed',
            budget: 18000,
            startDate: new Date('2024-01-15').toISOString(),
            endDate: new Date('2024-03-20').toISOString(),
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-03-20').toISOString(),
        },
        {
            clientId: 7,
            projectName: 'Fitness Tracking Mobile App',
            description: 'Developing a comprehensive fitness application with workout tracking, nutrition logging, and social features. Integration with wearable devices and AI-powered coaching.',
            status: 'in_progress',
            budget: 32000,
            startDate: new Date('2024-03-01').toISOString(),
            endDate: null,
            createdAt: new Date('2024-02-20').toISOString(),
            updatedAt: new Date('2024-03-01').toISOString(),
        },
        {
            clientId: 8,
            projectName: 'Corporate Intranet Portal',
            description: 'Building an enterprise-level intranet solution with document management, employee directory, and collaboration tools. Single sign-on integration with existing systems.',
            status: 'completed',
            budget: 50000,
            startDate: new Date('2024-01-05').toISOString(),
            endDate: new Date('2024-05-15').toISOString(),
            createdAt: new Date('2024-01-01').toISOString(),
            updatedAt: new Date('2024-05-15').toISOString(),
        },
        {
            clientId: 2,
            projectName: 'Insurance Quote Calculator',
            description: 'Creating an intelligent insurance quote system with real-time pricing and comparison features. Integration with underwriting APIs and automated policy generation.',
            status: 'planning',
            budget: null,
            startDate: null,
            endDate: null,
            createdAt: new Date('2024-05-20').toISOString(),
            updatedAt: new Date('2024-05-20').toISOString(),
        },
        {
            clientId: 4,
            projectName: 'Event Management Platform',
            description: 'Developing a comprehensive event planning solution with ticket sales, attendee management, and virtual event capabilities. Features include networking tools and analytics dashboard.',
            status: 'on_hold',
            budget: 15000,
            startDate: new Date('2024-02-15').toISOString(),
            endDate: null,
            createdAt: new Date('2024-02-10').toISOString(),
            updatedAt: new Date('2024-04-01').toISOString(),
        },
    ];

    await db.insert(clientProjects).values(sampleProjects);
    
    console.log('✅ Client projects seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});