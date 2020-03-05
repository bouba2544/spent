import { Origin } from './origin';
import { Convert } from './convert';

export class Spent{
    id:String;
    purchasedOn:Date;
    nature:string;
    comment:string;
    originalAmount:Origin;
    convertedAmount:Convert;
}