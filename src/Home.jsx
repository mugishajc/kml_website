import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blueviolet">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-red-500">
        <div className="text-lg font-bold">Logo</div>
        <nav className="space-x-4">
          <button className="">Sign In</button>
          <button className="">Sign Up</button>
        </nav>
      </header>

      {/* Main Section */}
      <section className="py-20 text-center bg-red-500">
        <h1 className="mb-6 text-4xl font-bold">
          Instant Communication for Businesses.
        </h1>
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 rounded-md"
        />
        <button className="p-2 ml-4 text-red-500 bg-blueviolet rounded-md">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="mb-10 text-2xl font-bold text-center">
          Communicate Seamlessly with our Channels
        </h2>
        <div className="flex flex-col items-center space-y-10">
          <div className="flex items-center space-x-4">
            <div className="p-10 bg-gray-100 rounded-lg">Messaging</div>
            <div className="p-10 bg-gray-100 rounded-lg">Video</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-10 bg-gray-100 rounded-lg">Phone</div>
            <div className="p-10 bg-gray-100 rounded-lg">Email</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-10 bg-gray-100 rounded-lg">SMS</div>
            <div className="p-10 bg-gray-100 rounded-lg">USSD</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-10 bg-gray-100 rounded-lg">Airtime</div>
            <div className="p-10 bg-gray-100 rounded-lg">Data</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="mb-10 text-2xl font-bold text-center">
          What Our Clients Say
        </h2>
        <div className="flex justify-center">
          <div className="p-10 bg-white rounded-lg shadow-lg">
            <p className="text-dimgray">
              "Amazing product. It has revolutionized our communication."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Client"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-bold text-dimgray">John Doe</p>
                <p className="text-dimgray">CEO, Example Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">20,593,830</h2>
          <p className="text-dimgray">Messages sent worldwide</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-800">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
