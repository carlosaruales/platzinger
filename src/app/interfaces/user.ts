export interface User{
  nick: string, 
  subnick?: string, // el ? significa que este dato puede ir o NO al momento de usar la interfaz
  age?: number, 
  email: string, 
  friend: boolean, 
  uid: any ,
  status: number //0: apagado; 1: en linea; 2: Ocupado; 3: Ausente
}