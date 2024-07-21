"use client";
import React from "react";

//hookAndOthers
import { useWeatherData } from "@/hook/useWeatherData";
import TemperatureChart from "./charts/temperatureChart";
import HumidityChart from "./charts/humidityChart";
import PrecipitationSumChart from "./charts/precipitationSumChart";
import PrecipitationProbabilityChart from "@/components/charts/precipitationPercentageChart";

//types
import {
  temperatureChartType,
  humidityChartType,
  precipitationSumChartType,
  precipitationProbabilityChartType,
} from "@/types/fetchTypes";

type Props = {
  lat: string;
  long: string;
};

const ChartPanel: React.FC<Props> = ({ lat, long }) => {
  const {
    currentApparentTemp,
    currentHumidity,
    currentTemp,
    temperatureChartData,
    error,
    humidityChartData,
    loading,
    precipitationSumChartData,
    precipitationProbabilityChartData,
    weatherCode,
  } = useWeatherData(lat, long);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <TemperatureChart
          temperatureChartData={temperatureChartData as temperatureChartType}
          currentTemp={currentTemp}
          currentApparentTemp={currentApparentTemp}
          weatherCode={weatherCode}
          loading={loading}
          error={error}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="w-full sm:w-[50%] h-auto">
          <PrecipitationSumChart
            precipitationSumChartData={
              precipitationSumChartData as precipitationSumChartType
            }
            loading={loading}
          />
        </div>
        <div className="w-full sm:w-[50%] h-auto">
          <PrecipitationProbabilityChart
            loading={loading}
            precipitationProbabilityChartData={
              precipitationProbabilityChartData as precipitationProbabilityChartType
            }
          />
        </div>
      </div>
      <div>
        <HumidityChart
          humidityChartData={humidityChartData as humidityChartType}
          currentHumidity={currentHumidity}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChartPanel;
