import React from "react";
import { SelectItem } from "@/components/ui/select";

const CityItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <>
      <SelectItem value={label}>{label}</SelectItem>
    </>
  );
};

export default CityItem;
