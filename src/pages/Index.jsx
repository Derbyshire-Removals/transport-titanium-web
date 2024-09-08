import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TruckIcon, UserIcon, PackageIcon, ShieldCheckIcon, ClockIcon, AwardIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">RSB Transport Ltd</h1>
        </div>
      </header>

      <div className="relative h-[60vh] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start p-8">
          <h2 className="text-4xl font-bold mb-4">Efficient Transport Solutions</h2>
          <p className="text-xl mb-6">Specializing in artic and tipper services with Class 1 and Class 2 drivers</p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>

      <main className="container mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to RSB Transport Ltd</h2>
          <p className="text-lg">
            We are a leading transport company specializing in artic and tipper services. 
            With our fleet of vehicles and skilled drivers, we provide efficient and reliable 
            transportation solutions for your needs.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center text-2xl">
                <TruckIcon className="mr-2 h-6 w-6" /> Our Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center text-2xl">
                <UserIcon className="mr-2 h-6 w-6" /> Our Drivers
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <Button size="lg">Contact Us</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 RSB Transport Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;