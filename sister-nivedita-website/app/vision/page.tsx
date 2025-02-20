export default function Vision() {
  const leftColumnPoints = [
    {
      title: 'The Sister Nivedita Credo',
      points: [
        'EXCELLENCE IS OUR GOAL',
        'PERFECTION IS OUR ENDEAVOUR',
        'EDUCATION & KNOWLEDGE IS',
      ],
    },
    {
      title: 'OUR MOTTO',
      description: '"Education & Knowledge is Power"',
    },
    {
      title: 'OUR ETHOS',
      description: '"Care for each one care for everyone"',
    },
    {
      title: 'OUR MISSION',
      description: '"To impart education & Knowledge without discrimination"',
    },
    {
      title: 'OUR VISION',
      description: '"Personal enrichment of all Nivedian\'s intellectually physically, morally spiritually"',
    },
  ];

  const rightColumnPoints = [
    {
      title: 'OUR AIM',
      description: 'To bring about the total integration of the human person ie to bring out the best in her/his physically morally, intellectually, psychologically, and socially and to be an agent of change for the better in the world of today. Through a Preventive, Promotional, and Personalized education.',
    },
    {
      title: 'OUR METHOD',
      description: 'Those are most in need of education.',
    },
    {
      title: 'The BENEFICIARIES',
      description: 'To strike a delicate balance between Amiability and Firmness',
    },
    {
      title: 'OUR STYLE',
      description: 'The Crown and glory of the whole Nivedian system of education is the resplendent Example of the Nivedian Educator herself/himself',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <h2 className="text-2xl font-bold text-blue-700 mb-3 hover:text-blue-800">
                  {point.title}
                </h2>
                {point.description ? (
                  <p className="text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                ) : (
                  <ul className="space-y-2 text-gray-700">
                    {point.points?.map((item, idx) => (
                      <li key={idx} className="leading-relaxed font-semibold hover:text-blue-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
              >
                <h2 className="text-2xl font-bold text-green-700 mb-3 hover:text-green-800">
                  {point.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
