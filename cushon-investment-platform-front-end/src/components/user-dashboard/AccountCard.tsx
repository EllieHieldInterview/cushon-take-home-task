import {
  Button,
  Card,
  Modal,
  NumberInput,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import type { Account } from "../../state/userState";

export interface AccountCardProps {
  account: Account;
}

/* I should consider whether it is appropriate for every account to use the same 
account card layout. Some may have non standard requirements. This is where I would
start until those requirements had been uncovered as it would be easy to create a 
consistent background and layout that I could then expand with additional features
*/
export function AccountCard({ account }: AccountCardProps) {
  const [depositFormOpen, setDepositFormOpen] = useState<boolean>(false);

  const depositForm = useForm({
    initialValues: {
      depositAmount: 0,
      fundType: undefined,
    },
  });

  return (
    <Card bg="#bdd3db" mt="1rem">
      <Title order={3}>{account.accountType}</Title>
      <Text c="var(--mantine-color-dark-3)">Total Value</Text>£
      {account.totalValue}
      <Button onClick={() => setDepositFormOpen(true)} w="fit-content" mt="md">
        Make Deposit
      </Button>
      <Modal
        opened={depositFormOpen}
        onClose={() => setDepositFormOpen(false)}
        title={`${account.accountType} Deposit`}
      >
        <form onSubmit={depositForm.onSubmit((values) => window.alert(values))}>
          <Select></Select>
          <NumberInput
            {...depositForm.getInputProps("depositAmount")}
          ></NumberInput>
          <Button>Confirm </Button>
          <Button>Cancel </Button>
        </form>
      </Modal>
    </Card>
  );
}
