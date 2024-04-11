export interface ITransaction {
  id: string;
  value: number;
  type: boolean;
  description: string;
}

export type TCreateTransaction = Omit<ITransaction, 'id'>
