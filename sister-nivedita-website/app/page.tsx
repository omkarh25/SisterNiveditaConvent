import HeroSlider from './components/sections/HeroSlider';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

/**
 * Home page component
 * Features hero slider and key sections about the school
 */
export default function Home() {
  const highlights = [
    {
      title: 'Academic Excellence',
      description: 'Following Karnataka S.S.L.C Board curriculum with rigorous academic standards',
    },
    {
      title: 'Holistic Development',
      description: 'Focus on physical, moral, intellectual, psychological, and social growth',
    },
    {
      title: 'Rich Heritage',
      description: 'Established in 1990, nurturing generations of successful students',
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped classrooms, laboratories, and sports facilities',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
            Welcome to Sister Nivedita Convent
          </h2>
          <p className="text-gray-700 mb-8">
            Since 1990, Sister Nivedita Convent has been a beacon of educational excellence,
            nurturing young minds and shaping future leaders. Our commitment to holistic
            development and academic rigor has made us one of the leading educational
            institutions in Bangalore.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Learn more about our journey
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-serif">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Begin Your Child&apos;s Journey With Us
          </h2>
          <p className="mb-8 text-lg">
            Join our community of learners and give your child the gift of quality education
          </p>
          <Link
            href="/admissions"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
