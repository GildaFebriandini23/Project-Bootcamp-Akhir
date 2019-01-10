import { Account } from '../account/account';

export class Transfer{
    transferId: number;
    nameBank: string;
    recepient: string;
    amount: string;
    date: Date;
    accountId: any;
    account: Account;
}