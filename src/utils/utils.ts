import axios from "axios";

export const BASE_URL = "http://api.ipstack.com";

export function checkIfValidIP(str: string) {
  // Regular expression to check if string is a IP address
  const regexExp =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  return regexExp.test(str);
}

export const fetchUserIpData = async (ipForUrl = "/check") => {
  const url = `${BASE_URL}/${ipForUrl}?access_key=${process.env.REACT_APP_IP_STACK_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error)
  }
};
