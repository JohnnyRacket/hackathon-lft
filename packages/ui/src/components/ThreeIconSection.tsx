
import { Grid, Title, useMantineTheme } from "@mantine/core";
import { Bolt, LineDashed, UserPlus, WritingSign } from "tabler-icons-react";

const ThreeIconSection = () => {

    const theme = useMantineTheme();

    return (
        <Grid grow m="xl" p="lg" style={{ color: theme.colors.gray[3] }}>
            <Grid.Col md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <WritingSign size={70} />
                <Title order={2} p="md">Sign Up</Title>
            </Grid.Col>
            <Grid.Col md={1} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <LineDashed size={70} />
            </Grid.Col>
            <Grid.Col md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Bolt size={70} />
                <Title order={2} p="md">Discover</Title>
            </Grid.Col>
            <Grid.Col md={1} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <LineDashed size={70} />
            </Grid.Col>
            <Grid.Col md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <UserPlus size={70} />
                <Title order={2} p="md">Connect</Title>
            </Grid.Col>
        </Grid>
    )
};

export default ThreeIconSection;