import { Button, Card, Text, Badge, Group, Image, useMantineTheme, Avatar, Grid, Title, Spoiler } from "@mantine/core";
import { User } from "tabler-icons-react";
const UserCard = () => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <Card shadow="md" p="2rem" m="lg">
            <Card.Section>
                <Grid>
                    <Grid.Col md={3} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
                            <Avatar color="cyan" radius="lg" size="lg" m="sm" style={{ marginLeft: 0 }}>CB</Avatar>
                            <Title order={4} m="sm" style={{ marginLeft: 0 }}>John Harrison</Title>
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

            <Text weight={500} m="sm" style={{ marginLeft: 0 }}>About me</Text>

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

            <Button variant="outline" color="violet" fullWidth style={{ marginTop: 20 }}>
                <User style={{ padding: "3px" }} /> <Text >Check out this user</Text>
            </Button>
        </Card>
    );
}

export default UserCard;