import React from 'react';
import { Button } from "@/components/ui/button";
import VehicleSection from '../components/VehicleSection';
import DriverSection from '../components/DriverSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">RSB UK Transport Ltd</h1>
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

      <main>
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to RSB UK Transport Ltd</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We are a leading transport company specializing in artic and tipper services. 
            With our fleet of vehicles and skilled drivers, we provide efficient and reliable 
            transportation solutions for your needs.
          </p>
        </section>

        <VehicleSection />
        <DriverSection />

        <section className="text-center py-16 bg-gray-100">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl">Contact us at: RSB.uktransport@hotmail.com</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 RSB UK Transport Ltd. All rights reserved.</p>
          <p>Company number: 10310660</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;