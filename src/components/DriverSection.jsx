import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { UserIcon, AwardIcon, ClockIcon } from 'lucide-react';

const DriverSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center gap-8 my-12">
      <div className="w-full md:w-1/2">
        <img src="/placeholder.svg" alt="Our Drivers" className="rounded-lg shadow-lg w-full h-64 object-cover" />
      </div>
      <Card className="w-full md:w-1/2">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Drivers</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <AwardIcon className="mr-2 h-5 w-5 text-primary" />
              <span>Class 1 (Category C+E) Drivers</span>
            </li>
            <li className="flex items-center">
              <AwardIcon className="mr-2 h-5 w-5 text-primary" />
              <span>Class 2 (Category C) Drivers</span>
            </li>
            <li className="flex items-center">
              <ClockIcon className="mr-2 h-5 w-5 text-primary" />
              <span>Experienced and professional team</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default DriverSection;