'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Omkar Hegde',
      content: 'Attending Sister Niveditha School has been a transformative experience for me. The dedicated teachers and the supportive environment have greatly contributed to my academic and personal growth.',
      role: 'Alumni',
    },
    {
      name: 'Rachita Ram',
      content: 'The diverse set of activities and the strong academic curriculum at Sister Niveditha School have not only helped me excel in my studies but also in extracurriculars, shaping me into a well-rounded individual.',
      role: 'Alumni',
    },
    {
      name: 'Nikhil Raghu',
      content: 'I am grateful for the opportunities Sister Niveditha School has provided me, from leadership roles in various clubs to participating in international competitions, which have been instrumental in building my confidence and skills.',
      role: 'Alumni',
    },
  ];

  const achievements = [
    'Participation in National and International Olympiads',
    'Prizes in NTSE and KTSE competitions',
    'Success in Science Talent Exams',
    'Victories in Quiz Contests',
    'Outstanding Academic Performance',
    'Excellence in Sports and Cultural Activities',
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Testimonials & Achievements
        </h1>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary opacity-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">
                {testimonial.content}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Student Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
