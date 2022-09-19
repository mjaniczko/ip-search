type InfoBoxProps = {
  ip: string;
  country: string;
  country_flag_emoji: string;
  city: string;
  type: string;
  continent: string;
  latitude: string;
  longitude: string;
};

export function InfoBox ({
  ip,
  country,
  country_flag_emoji,
  city,
  type,
  continent,
  latitude,
  longitude,
}: InfoBoxProps) {
  return (
    <div className="w-full md:w-2/5 border rounded-lg min-h-[300px] h-full mt-4 md:mt-0 p-4">
      <div className="font-bold mb-4 text-lg break-all">Ip: {ip}</div>
      <div className="my-2">
        <span className="font-bold">Type: </span>
        {type}
      </div>
      <div className="my-2">
        <span className="font-bold">Continent: </span>

        {continent}
      </div>
      <div className="my-2">
        <span className="font-bold">Country: </span>
        {country_flag_emoji}
        {country}
      </div>
      <div className="my-2">
        <span className="font-bold">City: </span>
        {city}
      </div>
      <div className="my-2">
        <span className="font-bold">Latitude: </span>

        {latitude}
      </div>
      <div className="my-2">
        <span className="font-bold">Longitude: </span>

        {longitude}
      </div>
    </div>
  );
};
