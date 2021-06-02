import moment from "moment";
import { Cookies } from "react-cookie";

export enum AvailableCookies {
  AppAuth = "appAuth",
}

export class CookieHelper {
  private static cookies = new Cookies();
  static set = (
    cookieName: AvailableCookies,
    value: Record<string, any>,
    expiresIn: string,
    expiresInUnit: string
  ) => {
    const date = moment().add(Number.parseInt(expiresIn), expiresInUnit as any);
    debugger;
    CookieHelper.cookies.set(cookieName, value, { expires: date.toDate() });
  };

  static get = <T>(cookieName: AvailableCookies): T | undefined => {
    return CookieHelper.cookies.get<T>(cookieName);
  };

  static delete = (cookieName: AvailableCookies) => {
    CookieHelper.cookies.remove(cookieName);
  };
}
