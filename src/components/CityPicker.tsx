"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

//country-state
import { City, State, Country } from "country-state-city";
//shadcn
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

//types
import { CountryType, StateType, CityType } from "@/types/selectTypes";
//components
import CityItem from "@/components/CityItem";

const CityPicker: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null
  );
  const [selectedState, setSelectedState] = useState<StateType | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const router = useRouter();

  const countries = Country.getAllCountries().map((item) => ({
    value: {
      latitude: item.latitude,
      longtidude: item.longitude,
      isoCode: item.isoCode,
      name: item.name,
    },
    label: item.name,
  }));

  const handleGetCountry = (countryName: string) => {
    const country = countries.find(
      (item) => item.label === countryName
    ) as CountryType;
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (stateName: string) => {
    if (selectedCountry) {
      const state = State.getStatesOfCountry(
        selectedCountry.value.isoCode
      )?.find((item) => item.name === stateName);
      if (state) {
        setSelectedState({
          value: {
            latitude: state.latitude!,
            longtidude: state.longitude!,
            counrtyCode: state.countryCode,
            name: state.name,
            isoCode: state.isoCode,
          },
          label: state.name,
        });
      }
    }
  };

  const handleCityChange = (stateName: string) => {
    if (selectedCountry) {
      const state = City.getCitiesOfCountry(
        selectedCountry.value.isoCode
      )?.find((item) => item.name === stateName);
      if (state) {
        setSelectedCity({
          value: {
            latitude: state.latitude!,
            longtidude: state.longitude!,
            counrtyCode: state.countryCode,
            name: state.name,
            stateCode: state.stateCode,
          },
          label: state.name,
        });
      }
    }
  };

  const handleSubmit = () => {
    if (selectedCountry || selectedState || selectedCity) {
      router.push(
        `/weather/${selectedCountry?.label}/${selectedState?.value.latitude}/${selectedCity?.value.longtidude}`
      );
    } else {
      alert("please fill all poly");
    }
  };

  return (
    <>
      <Card className="w-full sm:w-[450px] bg-green shadow-xl border-none">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-1 text-xl">
            <MapPin /> Select Country
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Select onValueChange={handleGetCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent position="popper">
              {countries.map((item, i: number) => {
                return <CityItem key={i} label={item.label} />;
              })}
            </SelectContent>
          </Select>
          <Select onValueChange={handleStateChange} disabled={!selectedCountry}>
            <SelectTrigger>
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent position="popper">
              {selectedCountry &&
                State.getStatesOfCountry(selectedCountry.value.isoCode)?.map(
                  (item, i: number) => <CityItem key={i} label={item.name} />
                )}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleCityChange}
            disabled={!selectedCountry || !selectedState}
          >
            <SelectTrigger>
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent position="popper">
              {selectedCountry &&
                City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(
                  (item, i: number) => <CityItem key={i} label={item.name} />
                )}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter className="flex justify-end items-center">
          <Button onClick={handleSubmit}>Search</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CityPicker;
