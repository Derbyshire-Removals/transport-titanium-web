import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PackageIcon, TruckIcon, ShieldCheckIcon } from 'lucide-react';

const VehicleSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 my-12">
      <div className="w-full md:w-1/2">
        <img src="/placeholder.svg" alt="Our Vehicles" className="rounded-lg shadow-lg w-full h-64 object-cover" />
      </div>
      <Card className="w-full md:w-1/2">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vehicles</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <PackageIcon className="mr-2 h-5 w-5 text-primary" />
              <span>Articulated Lorries (Artics)</span>
            </li>
            <li className="flex items-center">
              <TruckIcon className="mr-2 h-5 w-5 text-primary" />
              <span>Tippers</span>
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="mr-2 h-5 w-5 text-primary" />
              <span>Modern and well-maintained fleet</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default VehicleSection;