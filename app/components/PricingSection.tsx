import { pricingPlans } from "../data";

const PricingSection = async () => {
  return (
    <section className="container">
      <div className="mx-auto text-center">
        {/* Header */}
        <h4 className="text-lg font-bold text-primary">Pricing Plans</h4>
        <h2 className="mt-2 text-3xl font-bold">Affordable Care Packages</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam
          adipiscing.
        </p>

        {/* Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-primaryBG"
                  : "border border-gray-200 bg-white shadow-md"
              }`}
            >
              <h3 className="mb-4 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-gray-500">{plan.description}</p>
              <div className="mb-1 text-3xl font-bold text-primary">
                {plan.price}
              </div>
              <div className="text-gray-500">{plan.duration}</div>

              {/* Features */}
              <ul className="my-4 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-green-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
