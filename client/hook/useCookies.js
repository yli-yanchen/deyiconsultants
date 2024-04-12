import { useCookies } from "react-cookie";

export const useGetToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const deleteToken = () => {
    // Delete the accessToken cookie
    removeCookie("accessToken");
  };

  const setToken = (token) => {
    // Set the accessToken cookie
    setCookie("accessToken", token);
  };

  return {
    headers: { authorization: cookies.accessToken },
    deleteToken: deleteToken,
    setToken: setToken,
  };
};
