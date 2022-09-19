import { useState, useEffect } from "react";

import { Map } from "./components/Map";
import { Search } from "./components/Search";
import { InfoBox } from "./components/InfoBox";

import { checkIfValidIP, fetchUserIpData } from "./utils/utils";

function App() {
  const [userIpData, setUserIpData] = useState<any>(null);
  const [search, setSearch] = useState<string>("");
  const [searchUserIpData, setSearchuserIpData] = useState<any>([]);
  const [prevSearches, setPrevSearches] = useState<string[]>([]);
  const [inputError, setInputError] = useState<string>("");

  useEffect(() => {
    fetchUserIpData().then((response) => setUserIpData(response));
    setPrevSearches(() =>
      sessionStorage.getItem("prevSearches")?.split(",").length
        ? sessionStorage.getItem("prevSearches")?.split(",")
        : []
    );
  }, []);

  const handleClickSearch = () => {
    // INFORMATION: Access Restricted - Your current Subscription Plan does not support HTTPS Encryption.
    // FREE PLAN OF API DOES NOT SUPPORT DOMAIN URLS
    if (!checkIfValidIP(search)) {
      setInputError("Provide valid IP addres");
      return;
    }
    setInputError("");
    setPrevSearches((prevSearches) => [...prevSearches, search]);
    fetchUserIpData(search).then((response) => setSearchuserIpData(response));
    sessionStorage.setItem("prevSearches", String([...prevSearches, search]));
  };

  return (
    <div className="p-4 md:p-6 h-screen">
      <div className="md:flex h-full">
        <div className="border h-[200px] md:h-full w-full md:w-96 mr-6 mb-4 md:mb-0 p-4">
          <h3 className="font-bold">Previous searches:</h3>
          <ul>
            {prevSearches.map((search, index) => (
              <li key={search + index}>{search}</li>
            ))}
          </ul>
        </div>

        <div className="h-fullw-full md:w-full md:flex md:flex-col md:justify-between">
          <div className="md:flex md:h-[45%]">
            <Map
              latitude={userIpData?.latitude}
              longitude={userIpData?.longitude}
            />
            <InfoBox
              ip={userIpData ? userIpData.ip : ""}
              country={userIpData ? userIpData.country_name : ""}
              country_flag_emoji={
                userIpData ? userIpData.country_flag_emoji : ""
              }
              city={userIpData ? userIpData.city : ""}
              type={userIpData ? userIpData.type : ""}
              continent={userIpData ? userIpData.continent_name : ""}
              latitude={userIpData ? userIpData.latitude : ""}
              longitude={userIpData ? userIpData.longitude : ""}
            />
          </div>

          <Search
            search={search}
            setSearch={setSearch}
            inputError={inputError}
            handleClickSearch={handleClickSearch}
          />

          <div className="md:flex md:h-[45%]">
            <Map
              latitude={searchUserIpData?.latitude}
              longitude={searchUserIpData?.longitude}
            />
            <InfoBox
              ip={searchUserIpData ? searchUserIpData.ip : ""}
              country={searchUserIpData ? searchUserIpData.country_name : ""}
              country_flag_emoji={
                searchUserIpData ? searchUserIpData.country_flag_emoji : ""
              }
              city={searchUserIpData ? searchUserIpData.city : ""}
              type={searchUserIpData ? searchUserIpData.type : ""}
              continent={
                searchUserIpData ? searchUserIpData.continent_name : ""
              }
              latitude={searchUserIpData ? searchUserIpData.latitude : ""}
              longitude={searchUserIpData ? searchUserIpData.longitude : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
