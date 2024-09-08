import React from 'react';
import { UserIcon, AwardIcon, ClockIcon } from 'lucide-react';

const DriverSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src="/placeholder.svg" alt="Our Drivers" className="rounded-lg shadow-lg w-full h-96 object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Drivers</h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <AwardIcon className="mr-4 h-8 w-8 text-primary" />
              <span className="text-xl">Class 1 (Category C+E) Drivers</span>
            </li>
            <li className="flex items-center">
              <AwardIcon className="mr-4 h-8 w-8 text-primary" />
              <span className="text-xl">Class 2 (Category C) Drivers</span>
            </li>
            <li className="flex items-center">
              <ClockIcon className="mr-4 h-8 w-8 text-primary" />
              <span className="text-xl">Experienced and professional team</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;