import {
  Button,
  Card,
  Group,
  Modal,
  NumberInput,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { funds, type Account } from "../../state/userState";

export interface AccountCardProps {
  account: Account;
}

interface DepositFormValues {
  depositAmount: number;
  fundType: (typeof funds)[number] | undefined;
}

/* I should consider whether it is appropriate for every account to use the same 
account card layout. Some may have non standard requirements. This is where I would
start until those requirements had been uncovered as it would be easy to create a 
consistent background and layout that I could then expand with additional features
*/
export function AccountCard({ account }: AccountCardProps) {
  const [depositFormOpen, setDepositFormOpen] = useState<boolean>(false);

  const depositForm = useForm<DepositFormValues>({
    initialValues: {
      depositAmount: 0,
      fundType: undefined,
    },
    validate: {
      depositAmount: (value) =>
        value <= 0 ? "Deposit amount must be greater than £0" : null,
      fundType: (value) =>
        value === undefined ? "Please select a fund to proceed" : null,
    },
  });

  const resetAndClose = () => {
    depositForm.reset();
    setDepositFormOpen(false);
  };

  const submitDepositForm = (values: DepositFormValues) => {
    /** here is where I would call the api although I would use a helper function so this file
     * does not know anything about the api */
    window.alert(
      `depositing £${values.depositAmount} into ${values.fundType} fund`
    );
    resetAndClose();
  };

  return (
    <Card bg="#BDD3DB" mt="1rem">
      <Title order={3}>{account.accountType}</Title>
      {/** I used an online tool to check that the text contrast on this dimmed text
       * was compliant with my chosen background colour */}
      <Text c="#3B3B3B">Total Value</Text>£{account.totalValue}
      <Button onClick={() => setDepositFormOpen(true)} w="fit-content" mt="md">
        Make Deposit
      </Button>
      <Modal
        opened={depositFormOpen}
        onClose={resetAndClose}
        title={`${account.accountType} Deposit`}
        centered
      >
        <form
          onSubmit={depositForm.onSubmit((values) => submitDepositForm(values))}
        >
          <Stack align="flex-end" w="100%">
            <Select
              placeholder="select fund"
              data={funds}
              {...depositForm.getInputProps("fundType")}
              w="100%"
            ></Select>
            <Group w="100%" gap="0" grow preventGrowOverflow={false}>
              <Text>£</Text>
              <NumberInput
                {...depositForm.getInputProps("depositAmount")}
                min={0}
                flex={50}
              ></NumberInput>
            </Group>
            <Group>
              <Button onClick={resetAndClose} variant="outline" color="red">
                Cancel
              </Button>
              <Button type="submit">Confirm</Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Card>
  );
}
