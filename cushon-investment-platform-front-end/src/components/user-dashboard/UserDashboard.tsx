import { Card, Container, Text, Title } from "@mantine/core";
import { useAtomValue } from "jotai";
import type { JSX } from "react";
import { userAtom } from "../../state/userState";
import { AccountCard } from "./AccountCard";

export function UserDashboard(): JSX.Element {
  const user = useAtomValue(userAtom);
  return (
    <Container>
      <Title order={1}>Welcome, {user.firstName}!</Title>
      <Title order={2} mt="xl">
        Accounts Overview
      </Title>
      {user.accounts.map((account) => (
        <AccountCard account={account} />
      ))}
    </Container>
  );
}
