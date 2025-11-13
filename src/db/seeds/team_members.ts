import { db } from '@/db';
import { teamMembers } from '@/db/schema';

async function main() {
    const sampleTeamMembers = [
        {
            name: 'Rahul Sharma',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 12+ years in digital innovation, passionate about transforming businesses through technology. Rahul founded Hum Digital Studio with a mission to help businesses thrive in the digital age. His expertise spans strategic planning, product development, and building high-performing teams that deliver exceptional results.',
            imageUrl: 'https://i.pravatar.cc/300?img=12',
            linkedinUrl: 'https://linkedin.com/in/rahulsharma',
            twitterUrl: 'https://twitter.com/rahulsharma',
            email: 'rahul@humdigital.studio',
            orderPosition: 1,
            createdAt: new Date('2023-01-15').toISOString(),
            updatedAt: new Date('2023-01-15').toISOString(),
        },
        {
            name: 'Priya Patel',
            role: 'Creative Director',
            bio: 'Award-winning designer specializing in brand identity and user experience, 10+ years creating memorable digital experiences. Priya leads our creative team with a keen eye for detail and a passion for storytelling through design. Her work has been recognized internationally, helping brands stand out in crowded markets through innovative visual solutions.',
            imageUrl: 'https://i.pravatar.cc/300?img=47',
            linkedinUrl: 'https://linkedin.com/in/priyapatel',
            twitterUrl: null,
            email: 'priya@humdigital.studio',
            orderPosition: 2,
            createdAt: new Date('2023-02-01').toISOString(),
            updatedAt: new Date('2023-02-01').toISOString(),
        },
        {
            name: 'Amit Kumar',
            role: 'Head of Development',
            bio: 'Full-stack architect with expertise in React, Next.js, and cloud solutions, leading technical excellence for 8+ years. Amit brings deep technical knowledge and a pragmatic approach to building scalable, maintainable applications. He is passionate about clean code, performance optimization, and mentoring developers to reach their full potential.',
            imageUrl: 'https://i.pravatar.cc/300?img=33',
            linkedinUrl: 'https://linkedin.com/in/amitkumar',
            twitterUrl: 'https://twitter.com/amitkumar',
            email: 'amit@humdigital.studio',
            orderPosition: 3,
            createdAt: new Date('2023-02-15').toISOString(),
            updatedAt: new Date('2023-02-15').toISOString(),
        },
        {
            name: 'Neha Singh',
            role: 'Marketing Manager',
            bio: 'Data-driven marketer specializing in SEO and growth strategies, helping brands achieve 10x growth in competitive markets. Neha combines analytical thinking with creative campaign execution to drive measurable results. Her expertise in digital marketing, content strategy, and conversion optimization has helped numerous clients scale their online presence.',
            imageUrl: 'https://i.pravatar.cc/300?img=45',
            linkedinUrl: 'https://linkedin.com/in/nehasingh',
            twitterUrl: null,
            email: 'neha@humdigital.studio',
            orderPosition: 4,
            createdAt: new Date('2023-03-01').toISOString(),
            updatedAt: new Date('2023-03-01').toISOString(),
        },
    ];

    await db.insert(teamMembers).values(sampleTeamMembers);
    
    console.log('✅ Team members seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});