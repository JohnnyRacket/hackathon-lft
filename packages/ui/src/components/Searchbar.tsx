

import { Button, Grid, Group, Paper, TextInput, Title, TitleOrder, useMantineTheme } from "@mantine/core";
import { ReactChild } from "react";
import { Search } from "tabler-icons-react";

type SearchbarProps = {

}
const Searchbar = () => {

    const theme = useMantineTheme();

    return (
        <Paper m="lg" p="lg">
            <Grid>
                <Grid.Col xs={10}>
                    <TextInput />
                </Grid.Col>
                <Grid.Col xs={2} style={{ display: "flex", justifyContent: "center" }}>
                    <Button fullWidth><Search /></Button>
                </Grid.Col>


            </Grid>
        </Paper>
    )
};

export default Searchbar;
