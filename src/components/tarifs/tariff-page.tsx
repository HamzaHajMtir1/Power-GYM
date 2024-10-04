'use client';

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function TariffPageComponent() {
  const fitness = [
    {
      name: "1 Month",
      price: "60 DT",
    },
    {
      name: "2 Months",
      price: "100 DT",
    },
    {
      name: "3 Months",
      price: "150 DT",
    },
  ];

  const kingBoxing = [
    {
      name: "1 Month",
      price: "45 DT",
    },
    {
      name: "2 Months",
      price: "75 DT",
    },
    {
      name: "3 Months",
      price: "135 DT",
    },
  ];

  const karate = [
    {
      name: "1 Month",
      price: "40 DT",
    },
    {
      name: "2 Months",
      price: "70 DT",
    },
    {
      name: "3 Months",
      price: "130 DT",
    },
  ];

  return (
    <div className="py-12 bg-power mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-custom-yellow sm:text-4xl">
            Choose Your Membership Plan
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Select the perfect plan to achieve your fitness goals
          </p>
        </div>
        {/* Fitness Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-custom-yellow sm:text-4xl text-center mt-12">
            Fitness
          </h2>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {fitness.map((plan) => (
            <Card key={plan.name} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-300">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <span className="text-4xl font-extrabold text-custom-yellow">{plan.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gray-400 text-black font-bold hover-text-custom-yellow">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
        

        {/* King Boxing Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-custom-yellow sm:text-4xl text-center mt-12">
            King Boxing
          </h2>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {kingBoxing.map((plan) => (
              <Card key={plan.name} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-300">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="text-4xl font-extrabold text-custom-yellow">{plan.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full bg-gray-400 text-black font-bold hover-text-custom-yellow">Get Started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Karate Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-custom-yellow sm:text-4xl text-center mt-12">
            Karate
          </h2>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {karate.map((plan) => (
              <Card key={plan.name} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-300">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="text-4xl font-extrabold text-custom-yellow">{plan.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full bg-gray-400 text-black font-bold hover-text-custom-yellow">Get Started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}