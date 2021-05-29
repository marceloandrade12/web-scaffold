import axios, { AxiosRequestConfig } from "axios";
import { message } from "antd";

export enum AvailableMethods {
  login = "login",
}

export const apiUrl = process.env.REACT_APP_API_ENDPOINT || "";

const axiosConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const throwError = (): void => {
  message.error("Não foi possivel obter informações. Tente Novamente.");
};

export class ApiManager {
  static login = async (
    user: string,
    password: string
  ): Promise<{ auth: boolean; token: string }> => {
    const url = `${apiUrl}/${AvailableMethods.login}`;
    let data = { auth: false, token: "" };
    await axios
      .post(url, { user, password }, axiosConfig)
      .then((response) => {
        if (!response.data.sucess) {
          throw new Error("we got an error");
        }
        data = response.data.data;
      })
      .catch((): void => {
        // how to return error
        throwError();
      });
    return data;
  };
}
