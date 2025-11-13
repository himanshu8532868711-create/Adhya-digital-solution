import { db } from '@/db';
import { testimonials } from '@/db/schema';

async function main() {
    const sampleTestimonials = [
        {
            clientName: 'Rajesh Kumar',
            clientRole: 'CEO',
            companyName: 'TechVista Solutions',
            clientImageUrl: 'https://i.pravatar.cc/150?img=12',
            quote: 'Hum Digital Studio transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations. The new website has increased our conversion rate by 40%. Highly recommended!',
            rating: 5,
            createdAt: new Date('2024-01-15').toISOString(),
            updatedAt: new Date('2024-01-15').toISOString(),
        },
        {
            clientName: 'Sarah Johnson',
            clientRole: 'Marketing Director',
            companyName: 'Global Retail Group',
            clientImageUrl: 'https://i.pravatar.cc/150?img=25',
            quote: 'Working with Hum Digital was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the results speak for themselves. Our online sales have tripled since the launch. Their communication throughout the project was exceptional.',
            rating: 5,
            createdAt: new Date('2024-02-20').toISOString(),
            updatedAt: new Date('2024-02-20').toISOString(),
        },
        {
            clientName: 'Priya Sharma',
            clientRole: 'Founder',
            companyName: 'HealthFirst Clinic',
            clientImageUrl: 'https://i.pravatar.cc/150?img=33',
            quote: 'The team at Hum Digital Studio understood our healthcare industry needs perfectly. They created a patient-friendly website with seamless appointment booking. Our patient engagement has improved significantly and the feedback has been overwhelmingly positive.',
            rating: 5,
            createdAt: new Date('2024-03-10').toISOString(),
            updatedAt: new Date('2024-03-10').toISOString(),
        },
        {
            clientName: 'Michael Chen',
            clientRole: 'CTO',
            companyName: 'FinanceHub Inc',
            clientImageUrl: 'https://i.pravatar.cc/150?img=42',
            quote: 'Exceptional work on our financial platform redesign. The new interface is intuitive and secure, exactly what we needed. The development team was professional and responsive to our security requirements. Very impressed with the quality delivered.',
            rating: 4,
            createdAt: new Date('2024-04-05').toISOString(),
            updatedAt: new Date('2024-04-05').toISOString(),
        },
        {
            clientName: 'Vikram Patel',
            clientRole: 'Product Manager',
            companyName: 'EduTech Innovations',
            clientImageUrl: 'https://i.pravatar.cc/150?img=51',
            quote: 'Hum Digital Studio brought our educational app vision to life with stunning design and flawless functionality. Their iterative approach and willingness to incorporate feedback made the collaboration smooth. Our student engagement metrics have doubled since launch.',
            rating: 5,
            createdAt: new Date('2024-05-12').toISOString(),
            updatedAt: new Date('2024-05-12').toISOString(),
        },
        {
            clientName: 'Emma Williams',
            clientRole: 'CEO',
            companyName: 'Creative Studio London',
            clientImageUrl: 'https://i.pravatar.cc/150?img=29',
            quote: 'Outstanding creative work and technical execution. The portfolio website they designed for us perfectly showcases our work and has attracted high-quality client inquiries. Their design sense is impeccable and delivery was right on time.',
            rating: 4,
            createdAt: new Date('2024-06-18').toISOString(),
            updatedAt: new Date('2024-06-18').toISOString(),
        },
    ];

    await db.insert(testimonials).values(sampleTestimonials);
    
    console.log('✅ Testimonials seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});