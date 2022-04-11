import { Container, Grid } from "@mantine/core";
import UserCard from "../components/UserCard";

const Home = () => {

    return (
        <>
            <Grid>
                <Grid.Col md={3} >Sign Up</Grid.Col>
                <Grid.Col md={3} >Discover</Grid.Col>
                <Grid.Col md={3} >Connect</Grid.Col>
            </Grid>
            <Container size="sm">
                <UserCard></UserCard>
            </Container>
        </>
    );
}

export default Home;