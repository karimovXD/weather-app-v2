import React from "react";
import CityPicker from "@/components/CityPicker";

const page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center sm:p-24 bg-gradient-to-b from-slate-100/90 via-green-100/90 to-violet-200/90">
      <CityPicker />
    </section>
  );
};

export default page;
