import { Button, Card, Text, Badge, Group, Image, useMantineTheme, Avatar, Grid, Title, Spoiler } from "@mantine/core";
const UserCard = () => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <Card shadow="md" p="2rem">
            <Card.Section>
                <Grid>
                    <Grid.Col md={3} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
                            <Avatar color="cyan" radius="lg" size="lg" m="sm">CB</Avatar>
                            <Title order={4} m="sm">John Harrison</Title>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={2} >
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Title order={3}>Role</Title>
                            <Badge size="lg">Web</Badge>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={2} ></Grid.Col>
                    <Grid.Col md={5} >


                        <div style={{ display: "flex", flexDirection: "row", alignContent: "center", flexWrap: "wrap", height: "100%", gap: ".25rem" }}>
                            <Badge size="sm" m="sxs" color="green">Node.js</Badge>
                            <Badge size="sm" m="sxs" color="lime">Python</Badge>
                            <Badge size="sm" m="sxs" color="cyan">React</Badge>
                            <Badge size="sm" m="xss" color="teal">Typescript</Badge>
                            <Badge size="sm" m="sxs" color="pink">Art</Badge>
                        </div>
                    </Grid.Col>
                </Grid>

            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>About me</Text>
            </Group>

            <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Spoiler>

            <Button variant="light" color="violet" fullWidth style={{ marginTop: 20 }}>
                Add this user to your team
            </Button>
        </Card>
    );
}

export default UserCard;