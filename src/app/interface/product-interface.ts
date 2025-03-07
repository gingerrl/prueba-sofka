export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}


export interface Response<T>{
  data:T
}
