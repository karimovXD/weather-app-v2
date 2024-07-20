"use client";
import React from "react";

import { useWeatherData } from "@/hook/useWeatherData";
import TemperatureChart from "./charts/temperatureChart";
import HumidityChart from "./charts/humidityChart";
import PrecipitationSumChart from "./charts/precipitationSumChart";
import PrecipitationProbabilityChart from "@/components/charts/precipitationPercentageChart";

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
          temperatureChartData={temperatureChartData}
          currentTemp={currentTemp}
          currentApparentTemp={currentApparentTemp}
          weatherCode={weatherCode}
          loading={loading}
          error={error}
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="w-[50%] h-auto">
          <PrecipitationSumChart
            precipitationSumChartData={precipitationSumChartData}
            loading={loading}
          />
        </div>
        <div className="w-[50%] h-auto">
          <PrecipitationProbabilityChart
            loading={loading}
            precipitationProbabilityChartData={
              precipitationProbabilityChartData
            }
          />
        </div>
      </div>
      <div>
        <HumidityChart
          humidityChartData={humidityChartData}
          currentHumidity={currentHumidity}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChartPanel;
