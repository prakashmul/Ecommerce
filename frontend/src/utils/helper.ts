import { AxiosError } from "axios";

export function errorMessage(error: unknown) {
    const errorMessage =
        error instanceof AxiosError
    ?error.response?.data?.error: "Something went wrong";
    return errorMessage;
}