import React from 'react';

const App = () => {
  return (
    <div
  className="bg-top sm:bg-center sm:bg-cover bg-no-repeat text-white scroll-smooth"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1603738115219-d2d66074819d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
      <div className="pt-20 bg-black/60 sm:min-h-screen flex flex-col justify-center items-center px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
          Financial Shield: How to Survive and Thrive in the Next Global Crisis
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-gray-300">
          An 8-module blueprint to protect your wealth, secure your income, and build financial immunity before the next collapse.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#modules">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium">
              Access the Course Now
            </button>
          </a>

        </div>
      </div>

      <section id="modules" className="bg-white text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Course Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Module title="1. Financial Storm Warning" desc="Prepare now before crisis hits with strategic economic insights." />
          <Module title="2. Warning Signs" desc="Identify early indicators of global financial collapse." />
          <Module title="3. What Happens in a Collapse" desc="Understand real-world effects of economic breakdown." />
          <Module title="4. Golden Rules" desc="Apply timeless principles to crisis-proof your finances." />
          <Module title="5. Protection Strategies" desc="Build your personal financial safety net with smart planning." />
          <Module title="6. Recession-Proof Income" desc="Discover income sources that thrive in downturns." />
          <Module title="7. 30-Day Action Plan" desc="A fast-track blueprint to secure your money and mindset." />
          <Module title="8. Tools & Resources" desc="The best platforms, calculators, and guides for success." />
        </div>

        <a href="https://pay.hotmart.com/R100533553K" target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-24 py-12 rounded-md text-lg font-semibold shadow-lg animate-pulse">
            🔥 Get the Full Course for Just $12
          </button>
        </a>
      </section>

      <footer id="footer" className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Financial Shield. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Module = ({ title, desc }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

export default App;
