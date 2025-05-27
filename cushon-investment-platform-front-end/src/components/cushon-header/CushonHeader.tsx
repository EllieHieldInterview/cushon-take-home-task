import { Group, Image } from "@mantine/core";

export function CushonHeader() {
  return (
    <Group bg="#000f14" h="6rem" justify="flex-end">
      {/** If I had implemented routing I would add navigation to this header for example returning to a home page
       * or logging in and out plus access to user settings
       */}
      <Image
        src={"./public/cushon-logo.png"}
        h="6rem"
        fit="contain"
        w="fit-content"
        p="xs"
      ></Image>
    </Group>
  );
}
