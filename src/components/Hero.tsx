export function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Make a Difference</span>
          <span className="block text-rose-600">One Pledge at a Time</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Make Impact a Habit, Earn Rewards for Your Impact
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 font-medium">
            Start Volunteering
          </button>
          <button className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 font-medium">
            Post Opportunity
          </button>
        </div>
      </div>
      <div className="relative h-64 sm:h-72 md:h-96 mt-4">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
          alt="Volunteers working together"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
      </div>
    </div>
  );
}
