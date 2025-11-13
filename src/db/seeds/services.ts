import { db } from '@/db';
import { services } from '@/db/schema';

async function main() {
    const sampleServices = [
        {
            categoryIcon: 'TrendingUp',
            categoryTitle: 'Digital Marketing',
            categoryDescription: 'Drive growth and engagement with data-driven marketing strategies that deliver measurable results.',
            categoryGradient: 'from-blue-500 to-indigo-600',
            displayOrder: 1,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            categoryIcon: 'Code',
            categoryTitle: 'Web Development',
            categoryDescription: 'Build powerful, scalable web applications with cutting-edge technologies and best practices.',
            categoryGradient: 'from-green-500 to-teal-600',
            displayOrder: 2,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            categoryIcon: 'Smartphone',
            categoryTitle: 'Mobile App Development',
            categoryDescription: 'Create seamless mobile experiences for iOS and Android that users love and engage with daily.',
            categoryGradient: 'from-purple-500 to-pink-600',
            displayOrder: 3,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            categoryIcon: 'Server',
            categoryTitle: 'Server',
            categoryDescription: 'Ensure optimal performance and security with enterprise-grade server infrastructure and management.',
            categoryGradient: 'from-orange-500 to-red-600',
            displayOrder: 4,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            categoryIcon: 'Palette',
            categoryTitle: 'Creative Designing',
            categoryDescription: 'Transform ideas into stunning visual experiences that captivate audiences and strengthen brand identity.',
            categoryGradient: 'from-yellow-500 to-orange-600',
            displayOrder: 5,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            categoryIcon: 'Video',
            categoryTitle: 'Video Production',
            categoryDescription: 'Bring stories to life with professional video content that engages, informs, and inspires action.',
            categoryGradient: 'from-cyan-500 to-blue-600',
            displayOrder: 6,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    await db.insert(services).values(sampleServices);
    
    console.log('✅ Services seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});