import type { Metadata } from "next";
import React from "react";

type WeatherPropsType = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

export const metadata: Metadata = {
  title: "country",
};

//components
import Aside from "@/components/Aside";
import ChartPanel from "@/components/ChartPanel";

const Weather = ({ params: { city, lat, long } }: WeatherPropsType) => {
  metadata.title = city;

  return (
    <section className="flex flex-col min-h-screen lg:flex-row gap-y-4">
      <div className="w-full lg:w-auto px-4 bg-gradient-to-b from-slate-100 via-green-100/90 to-green-200/90">
        <Aside params={{ city, lat, long }} />
      </div>
      <div className="w-full lg:w-[80%] h-full p-4">
        <ChartPanel lat={lat} long={long} />
      </div>
    </section>
  );
};

export default Weather;
