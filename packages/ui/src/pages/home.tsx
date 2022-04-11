import { Grid } from "@mantine/core";

const Home = () => {

    return (
        <Grid>
            <Grid.Col md={3} >Sign Up</Grid.Col>
            <Grid.Col md={3} >Discover</Grid.Col>
            <Grid.Col md={3} >Connect</Grid.Col>
        </Grid>
    );
}

export default Home;