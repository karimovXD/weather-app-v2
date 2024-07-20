export type CountryType = {
    value: {
        latitude: string;
        longtidude: string;
        isoCode: string;
        name: string
    };
    label: string;
};

export type StateType = {
    value: {
        latitude: string;
        longtidude: string;
        counrtyCode: string;
        isoCode: string;
        name: string;
    };
    label: string;
};

export type CityType = {
    value: {
        latitude: string;
        longtidude: string;
        counrtyCode: string;
        stateCode: string;
        name: string;
    };
    label: string;
};