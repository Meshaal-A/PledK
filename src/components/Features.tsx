import { features } from '../data/features';

export function Features() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How PledgeIt Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Making volunteering accessible and impactful for everyone
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6">
                <div className="rounded-full bg-rose-100 p-3">
                  <feature.icon className="h-6 w-6 text-rose-600" />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}