export interface User{
  nick: string, 
  subnick?: string, // el ? significa que este dato puede ir o NO al momento de usar la interfaz
  age?: number, 
  email: string, 
  friend: boolean, 
  uid: any 
}