import { db } from '@/db';
import { careerApplications } from '@/db/schema';

async function main() {
    const sampleApplications = [
        {
            name: 'Sarah Chen',
            email: 'sarah.chen@email.com',
            phone: '+1 (555) 123-4567',
            position: 'Frontend Developer',
            experience: '5 years of experience in React, Next.js, and TypeScript development with focus on building scalable web applications and component libraries',
            portfolioUrl: 'https://sarahchen.dev',
            resumeUrl: 'https://drive.google.com/resume/sarah-chen',
            message: 'I am excited about the opportunity to join your team and contribute to building innovative web solutions. My experience in modern frontend frameworks aligns perfectly with your requirements.',
            status: 'new',
            createdAt: new Date('2024-12-15T10:30:00Z').toISOString(),
            updatedAt: new Date('2024-12-15T10:30:00Z').toISOString(),
        },
        {
            name: 'Michael Rodriguez',
            email: 'michael.rodriguez@email.com',
            phone: '+1 (555) 234-5678',
            position: 'UI/UX Designer',
            experience: '3 years as UI/UX designer with expertise in Figma, user research, design systems, and creating intuitive user experiences for web and mobile applications',
            portfolioUrl: 'https://michaelrodriguez-design.com',
            resumeUrl: 'https://drive.google.com/resume/michael-rodriguez',
            status: 'reviewing',
            createdAt: new Date('2024-12-12T14:20:00Z').toISOString(),
            updatedAt: new Date('2024-12-18T09:15:00Z').toISOString(),
        },
        {
            name: 'Emily Thompson',
            email: 'emily.thompson@email.com',
            phone: '+1 (555) 345-6789',
            position: 'Digital Marketing Specialist',
            experience: '4 years in digital marketing with proven track record in SEO, content strategy, social media campaigns, and analytics. Successfully increased organic traffic by 200% for previous clients.',
            portfolioUrl: 'https://emilythompson-marketing.com',
            resumeUrl: 'https://drive.google.com/resume/emily-thompson',
            message: 'I have been following your agency\'s work and am impressed by your creative campaigns. I would love to bring my expertise in digital marketing and data-driven strategies to your team.',
            status: 'new',
            createdAt: new Date('2024-12-18T16:45:00Z').toISOString(),
            updatedAt: new Date('2024-12-18T16:45:00Z').toISOString(),
        },
        {
            name: 'David Park',
            email: 'david.park@email.com',
            phone: '+1 (555) 456-7890',
            position: 'Backend Developer',
            experience: '6 years of backend development experience specializing in Node.js, Python, and cloud architecture. Built scalable APIs serving millions of users and implemented microservices architecture.',
            resumeUrl: 'https://drive.google.com/resume/david-park',
            message: 'Your tech stack matches perfectly with my expertise. I am particularly interested in contributing to your cloud infrastructure and API development projects.',
            status: 'accepted',
            createdAt: new Date('2024-12-08T11:00:00Z').toISOString(),
            updatedAt: new Date('2024-12-16T14:30:00Z').toISOString(),
        },
        {
            name: 'Jessica Williams',
            email: 'jessica.williams@email.com',
            phone: '+1 (555) 567-8901',
            position: 'Content Writer',
            experience: '3 years writing engaging content for tech companies and SaaS platforms. Specialized in blog posts, technical documentation, case studies, and email campaigns with focus on conversion optimization.',
            portfolioUrl: 'https://jessicawilliams-writer.com',
            resumeUrl: 'https://drive.google.com/resume/jessica-williams',
            status: 'reviewing',
            createdAt: new Date('2024-12-10T09:30:00Z').toISOString(),
            updatedAt: new Date('2024-12-17T10:00:00Z').toISOString(),
        },
        {
            name: 'Robert Martinez',
            email: 'robert.martinez@email.com',
            phone: '+1 (555) 678-9012',
            position: 'Project Manager',
            experience: '7 years managing complex digital projects for enterprise clients. Expert in Agile methodologies, stakeholder management, and delivering projects on time and within budget. PMP certified.',
            resumeUrl: 'https://drive.google.com/resume/robert-martinez',
            message: 'With my extensive experience in managing cross-functional teams and delivering successful digital projects, I am confident I can add significant value to your organization.',
            status: 'rejected',
            createdAt: new Date('2024-12-05T13:15:00Z').toISOString(),
            updatedAt: new Date('2024-12-14T15:45:00Z').toISOString(),
        },
    ];

    await db.insert(careerApplications).values(sampleApplications);
    
    console.log('✅ Career applications seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});