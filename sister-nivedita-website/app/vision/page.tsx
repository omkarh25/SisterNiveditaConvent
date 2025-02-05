export default function Vision() {
  const visionPoints = [
    {
      title: 'Our Mission',
      description: 'To promote, support, and protect the dignity of each individual as a Child of God. We are committed to ensuring students&apos; academic, moral, and personal growth.',
    },
    {
      title: 'Our Vision',
      description: 'To integrate physical, moral, intellectual, psychological, and social aspects of a child&apos;s growth. We aim to nurture future leaders and independent thinkers while making education accessible to students from all backgrounds.',
    },
    {
      title: 'Our Values',
      points: [
        'Education as Power - Following the motto "Education and Knowledge is Power"',
        'Discipline and Respect - Maintaining high standards of conduct',
        'Academic Excellence - Pursuing rigorous academic standards',
        'Spiritual Growth - Encouraging moral and spiritual development',
        'Inclusive Learning - Creating opportunities for all students',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Our Vision & Mission
        </h1>

        <div className="space-y-12">
          {visionPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {point.title}
              </h2>
              {point.description ? (
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              ) : (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {point.points?.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-serif text-primary italic">
            &ldquo;Education and Knowledge is Power&rdquo;
          </blockquote>
          <p className="mt-4 text-gray-600">
            - Sister Nivedita Convent&apos;s Motto
          </p>
        </div>
      </div>
    </div>
  );
}
