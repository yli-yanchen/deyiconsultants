import { useCookies } from 'react-cookie';

const useGetToken = () => {
  const [cookies, , removeCookie] = useCookies(['accessToken']);

  return {
    headers: { authorization: cookies.accessToken },
    removeToken: () => removeCookie('accessToken'),
  };
};

export default useGetToken;
