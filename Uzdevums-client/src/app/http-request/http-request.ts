//Nodefinēti pieprasījuma parametri
export  class HttpRequest {
  public url: string;
  public body?: any;
  public params?: any;
  public responseType?: 'json';
  public onSuccess?: (response: any) => void;

}
