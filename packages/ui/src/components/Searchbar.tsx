

import { Button, Grid, Group, MultiSelect, Paper, TextInput, Title, TitleOrder, useMantineTheme } from "@mantine/core";
import { ReactChild } from "react";
import { Search } from "tabler-icons-react";

type SearchbarProps = {

}
const Searchbar = () => {
    const data = [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
        { value: 'riot', label: 'Riot' },
        { value: 'next', label: 'Next.js' },
        { value: 'blitz', label: 'Blitz.js' },
    ];

    const theme = useMantineTheme();

    return (
        <Paper m="lg" p="lg">
            <Grid>
                <Grid.Col xs={10}>
                    <TextInput placeholder="Search for teammates..." />
                </Grid.Col>
                <Grid.Col xs={2} style={{ display: "flex", justifyContent: "center" }}>
                    <Button fullWidth><Search /></Button>
                </Grid.Col>
            </Grid>
            <Group grow>
                <MultiSelect
                    data={data}
                    label="Role"
                    placeholder="Filter by roles"
                />
                <MultiSelect
                    data={data}
                    label="Skills"
                    placeholder="Filter by skills"
                />
            </Group>
        </Paper>
    )
};

export default Searchbar;
