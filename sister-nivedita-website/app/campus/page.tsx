export default function Campus() {
  const facilities = [
    {
      title: 'Academic Facilities',
      items: [
        {
          name: 'Classrooms',
          description: 'Spacious, well-ventilated classrooms equipped with modern teaching aids',
        },
        {
          name: 'Science Laboratories',
          description: 'Well-equipped labs for Physics, Chemistry, and Biology practical sessions',
        },
        {
          name: 'Library',
          description: 'Extensive collection of books, reference materials, and digital resources',
        },
        {
          name: 'Computer Lab',
          description: 'Modern computer lab with latest technology and internet connectivity',
        },
      ],
    },
    {
      title: 'Sports & Recreation',
      items: [
        {
          name: 'Sports Ground',
          description: 'Large playground for outdoor sports and physical activities',
        },
        {
          name: 'Indoor Games',
          description: 'Facilities for indoor sports and recreational activities',
        },
      ],
    },
    {
      title: 'Additional Facilities',
      items: [
        {
          name: 'Language Labs',
          description: 'Special facilities for learning Kannada, English, Hindi, and Sanskrit',
        },
        {
          name: 'Music & Dance Room',
          description: 'Dedicated space for cultural activities and performing arts',
        },
        {
          name: 'Discussion Halls',
          description: 'Spaces for group activities and interactive learning sessions',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Our Campus
        </h1>

        <div className="mb-12">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Our campus is designed to provide a conducive environment for learning and growth,
            featuring modern facilities and infrastructure that support both academic and
            extracurricular activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary p-4">
                <h2 className="text-xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <h3 className="font-bold text-primary mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Location Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Location
          </h2>
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Sister Nivedita Convent is conveniently located in Ashoknagar, Bangalore.
              Our campus provides a peaceful environment conducive to learning while
              being easily accessible from all parts of the city.
            </p>
            <address className="not-italic text-gray-600">
              Sister Nivedita Convent<br />
              Ashoknagar, Bengaluru - 560 050
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
