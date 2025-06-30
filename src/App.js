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
          The Next Financial Collapse Is Coming. Will You Survive?
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-gray-300">
          Ray Dalio warned: “We’re heading toward a historic shift.” Michael Burry — the man who predicted the 2008 crash — is betting billions against the market. Are you ready?
        </p>
        <p className="mt-4 text-base max-w-xl text-red-400 italic">
          What you do today will decide whether you protect your money — or watch it disappear.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#modules">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium">
              See What You'll Learn
            </button>
          </a>
        </div>
      </div>

      <section id="modules" className="bg-white text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What You'll Master in This Course:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Module title="1. Financial Storm Warning" desc="The ignored signs before every collapse — and how to spot them early." />
          <Module title="2. Crisis Indicators" desc="How to predict market movements before they hit your wallet." />
          <Module title="3. What Really Happens in a Collapse" desc="How average families lose everything — and how to avoid that fate." />
          <Module title="4. Golden Wealth Rules" desc="The timeless principles millionaires use to protect and grow their money." />
          <Module title="5. Protection Strategies" desc="The financial armor banks don't want you to know about." />
          <Module title="6. Recession-Proof Income" desc="Sources of income that thrive even in economic chaos." />
          <Module title="7. 30-Day Action Plan" desc="A step-by-step playbook to turn fear into financial power." />
          <Module title="8. Hidden Tools & Resources" desc="Secret sites, calculators, and platforms that help preserve wealth." />
        </div>

        <a href="https://pay.hotmart.com/R100533553K" target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-24 py-12 rounded-md font-semibold shadow-lg animate-pulse text-xl">
            🔥 PROTECT YOUR MONEY NOW FOR JUST $12 🔥
          </button>
        </a>
        <p className="mt-6 text-gray-700 text-md max-w-xl mx-auto italic">
          * You can't stop the coming collapse. But you can choose whether you'll be a victim — or a survivor.
        </p>
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
