'use client';

import { motion } from 'framer-motion';

export default function Admissions() {
  const admissionSteps = [
    {
      title: 'Check Eligibility',
      content: [
        'Nursery (LKG, UKG, and Infants): Minimum age criteria as per state education rules',
        'Primary to High School: Previous school records required',
        'Transfer students must provide a Leaving Certificate',
      ],
    },
    {
      title: 'Required Documents',
      content: [
        'Birth certificate issued by an authority (for new admissions)',
        'Previous school records',
        'Leaving certificate (LC) for transfer students',
        'Passport-size photographs',
        'Address proof',
      ],
    },
    {
      title: 'Application Process',
      content: [
        'Fill out the admission form with complete details',
        'Submit all required documents',
        'Schedule an interview',
        'Await admission confirmation',
      ],
    },
  ];

  const feeInfo = {
    title: 'Fee Structure',
    content: [
      'Fees must be paid in advance between 1st and 12th of each month',
      'Annual fees for April and May are collected in March',
      'Various payment modes available',
      'Fee concessions available for deserving candidates',
    ],
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Admissions
        </h1>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Sister Nivedita Convent welcomes students to join our community of learners.
            We provide quality education following the Karnataka State Syllabus, nurturing
            students to become well-rounded individuals.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-primary p-4">
                <h2 className="text-xl font-bold text-white">
                  {step.title}
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {step.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fee Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">
            {feeInfo.title}
          </h2>
          <ul className="space-y-4">
            {feeInfo.content.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Contact our admissions office for more information or to schedule a visit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
