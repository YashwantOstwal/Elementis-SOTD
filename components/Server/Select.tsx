import React from "react";
import SelectClient from "../Client/SelectClient";

interface CountryData {
  name: string;
  dial_code: string;
  code: string;
}

interface SelectProps {
  options: "countries" | "dial code";
}

const COUNTRY_DATA_URL =
  "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json";

export default async function Select({ options }: SelectProps) {
  const response = await fetch(COUNTRY_DATA_URL, { cache: "force-cache" });
  const countryData: CountryData[] = await response.json();

  const fieldToMap = options === "countries" ? "name" : "dial_code";
  const arrayOfProperty = countryData.map((country) => country[fieldToMap]);

  return (
    <SelectClient
      defaultSelection={countryData[0].name}
      options={arrayOfProperty}
    />
  );
}
