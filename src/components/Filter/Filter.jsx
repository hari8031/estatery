import React, { useEffect, useState } from "react";
import { dataProperty } from "../../constants";

const Filter = ({ handleItem }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [listAll, setListAll] = useState(true);

  const handleFilter = () => {
    const rangeString = price;
    const [minPrice, maxPrice] = rangeString.split("-").map(Number);
    const filterPrice = dataProperty.property.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    const filterDate = dataProperty.property.filter(
      (item) => item.date === date
    );
    const filterLocation = dataProperty.property.filter(
      (item) => item.location === location
    );
    const filterPropertyType = dataProperty.property.filter(
      (item) => item.house_type.toLowerCase() === propertyType
    );

    const combinedFilteredData = [
      ...filterPrice,
      ...filterDate,
      ...filterLocation,
      ...filterPropertyType,
    ];

    const uniqueFilteredData = new Set(combinedFilteredData);
    const uniqueFilteredDataArray = Array.from(uniqueFilteredData);
    const finalFilteredData =
      uniqueFilteredDataArray.length === 0
        ? dataProperty.property
        : uniqueFilteredDataArray;

    console.log(uniqueFilteredDataArray, "uniqueFilteredData");
    console.log(finalFilteredData.length, "finalFilteredData");
    setListAll(false);
    handleItem(finalFilteredData);
  };
  useEffect(() => {
    if (listAll) {
      handleItem(dataProperty.property);
    }
  }, [listAll]);

  return (
    <div className="shadow-2xl rounded-lg mt-[32px]">
      <div className="flex justify-between font-medium p-4 ">
        <div className="flex flex-col justify-center  font-normal  text-gray-600 border-r border-black pr-32 ">
          <label htmlFor="location" className=" font-semibold pl-2">
            Location
          </label>
          <select
            name="location"
            id=""
            className="font-bold  p-1.5 rounded-xl  bg-transparent"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="all">Select location</option>
            <option value="US">USA</option>
            <option value="CA">CANADA</option>
            <option value="DE">DENMARK</option>
          </select>
        </div>

        <div className="flex flex-col justify-center  font-normal  text-gray-600 border-r border-black pr-32 ">
          <label htmlFor="date" className=" font-semibold pl-2">
            When
          </label>
          <select
            name="date"
            id=""
            className="font-bold  p-1.5 rounded-xl  bg-transparent"
            onChange={(e) => setDate(e.target.value)}
          >
            <option value="all">Select move-in Date</option>
            <option value="1w">In One Week</option>
            <option value="1m">In One Month</option>
            <option value="now">Immediatly</option>
          </select>
        </div>

        <div className="flex flex-col justify-center  font-normal  text-gray-600 border-r border-black pr-32 ">
          <label htmlFor="price" className=" font-semibold pl-2">
            Price
          </label>
          <select
            name="price"
            id=""
            className="font-bold  p-1.5 rounded-xl  bg-transparent"
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="all">All</option>
            <option value="500-2500">$500-$2500</option>
            <option value="2500-5000">$2500-$5000</option>
            <option value="5000-7000">$5000-$7000</option>
          </select>
        </div>

        <div className="flex flex-col justify-center  font-normal  text-gray-600 border-r border-black pr-32 ">
          <label htmlFor="propertyType" className=" font-semibold pl-2">
            Property Type
          </label>
          <select
            name="propertyType"
            id=""
            className="font-bold  p-1.5 rounded-xl  bg-transparent"
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="house">Houses</option>
            <option value="villa">Villa</option>
            <option value="flat">Flat</option>
          </select>
        </div>
        <div className="flex">
          <button
            className=" bg-btnBlue p-3 rounded-xl text-white font-semibold"
            onClick={handleFilter}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
