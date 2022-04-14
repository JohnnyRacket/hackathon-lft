import { Container, Grid, Text, Title } from "@mantine/core";
import { Bolt, LineDashed, UserPlus, WritingSign } from "tabler-icons-react";
import Searchbar from "../components/Searchbar";
import SkeletonCard from "../components/SkeletonCard";
import ThreeIconSection from "../components/ThreeIconSection";
import UserCard from "../components/UserCard";

const Home = () => {

    return (
        <>
            <Container size="sm" pt="6rem">
                <Searchbar />
                <UserCard></UserCard>
                <SkeletonCard></SkeletonCard>
            </Container>
        </>
    );
}

export default Home;