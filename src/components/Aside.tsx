import React from "react";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

import CityPicker from "./CityPicker";
const Aside = ({ params: { city, lat, long } }: Props) => (
  <div className="py-5 sm:p-10 flex flex-col items-center justify-center lg:items-start lg:justify-start max-w-[480px]]">
    <div className="pb-5 flex flex-col gap-3">
      <h1 className="text-6xl font-bold text-center sm:text-left">
        {decodeURI(city)}
      </h1>
      <p className="text-xs text-gray-950">
        Lat/Long: {decodeURI(lat)}, {decodeURI(long)}
      </p>
    </div>

    <div className="w-full sm:w-auto pt-16">
      <CityPicker />
    </div>
  </div>
);

export default Aside;
