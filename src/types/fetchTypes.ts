export type temperatureChartType = {
    date: string;
    temperature: string;
    apparent_temperature: string;
}[]

export type humidityChartType = {
    date: string;
    humidity: number;
}[]

export type precipitationSumChartType = {
    date: string;
    precipitation: string;
}[]

export type precipitationProbabilityChartType = {
    date: string;
    precipitationProbability: number;
}[]