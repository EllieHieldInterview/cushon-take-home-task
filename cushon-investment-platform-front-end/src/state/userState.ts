import { atom } from "jotai";

export enum AccountType {
  CushonISA = "Cushon ISA",
  CushonPension = "Cushon Pension",
}

// some example funds for users to invest in
export const funds = [
  "Global Tracker",
  "Cushon High Risk",
  "Cushon Medium Risk",
  "Cushon Low Risk",
] as const;

// I might consider moving types and interfaces to types.ts files to keep files small and readable
export type FundTypes = (typeof funds)[number];

export interface Account {
  accountId: string;
  accountType: AccountType;
  totalValue: number;
  // I should consider how to show pending transactions and other account info
}

export interface User {
  firstName: string;
  lastName: string;
  userId: string;
  dob: string;
  accounts: Account[];
}

// a sample user in the absense of a user database
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

/** I could consider splitting the user info into different atoms to make controlling
 * state more granular  */
export const userAtom = atom<User>(testUser);
