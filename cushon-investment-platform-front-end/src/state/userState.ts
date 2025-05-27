import { atom } from "jotai";

export enum AccountType {
  CushonISA = "Cushon ISA",
  CushonPension = "Cushon Pension",
}

export const Funds = [
  "Global Tracker",
  "Cushon High Risk",
  "Cushon Medium Risk",
  "Cushon Low Risk",
];

export interface Account {
  accountId: string;
  accountType: AccountType;
  totalValue: number;
}

export interface User {
  firstName: string;
  lastName: string;
  userId: string;
  dob: string;
  accounts: Account[];
}

const testUser: User = {
  firstName: "Test",
  lastName: "User",
  userId: "exampleUserUUID1234",
  dob: "1970-01-30",
  accounts: [
    {
      accountId: "0",
      accountType: AccountType.CushonISA,
      totalValue: 1250,
    },
    {
      accountId: "1",
      accountType: AccountType.CushonPension,
      totalValue: 10000,
    },
  ],
};

export const userAtom = atom<User>(testUser);
