export interface IServerItem {
  addr: string;
  key_file: string;
  name: string;
  typeAuth?: "key" | "password";
  user: string;
}
