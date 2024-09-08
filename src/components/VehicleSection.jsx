import React from 'react';
import { PackageIcon, TruckIcon, ShieldCheckIcon } from 'lucide-react';

const VehicleSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src="/placeholder.svg" alt="Our Vehicles" className="rounded-lg shadow-lg w-full h-96 object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Vehicles</h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <PackageIcon className="mr-4 h-8 w-8 text-primary" />
              <span className="text-xl">Articulated Lorries (Artics)</span>
            </li>
            <li className="flex items-center">
              <TruckIcon className="mr-4 h-8 w-8 text-primary" />
              <span className="text-xl">Tippers</span>
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="mr-4 h-8 w-8 text-primary" />
              <span className="text-xl">Modern and well-maintained fleet</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;