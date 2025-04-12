export interface IServerItem {
  id: number;
  name: string
  adress: string;
  typeAuth: "key" | "password";
  password?: string;
}
