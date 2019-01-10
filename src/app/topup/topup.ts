import { Account } from '../account/account';

export class Topup{
    id: number;
    amount: number;
    method: string;
    date: Date;
    accountId: any;
    account: Account;
}