const logState = process.env.REACT_APP_LOG || false;

export class Logger {
  static log = (text: string, objects: Record<string, any>): void => {
    logState && console.log(text, objects);
  };
  static error = (text: string, objects: Record<string, any>): void => {
    logState && console.error(text, objects);
  };
}
