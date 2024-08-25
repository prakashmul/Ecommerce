import Cookies from 'js-cookie';

export const useAuth = () => {
    const accessToken = Cookies.get("accessToken");
    const role = Cookies.get("role");

    return { accessToken, role };
}
