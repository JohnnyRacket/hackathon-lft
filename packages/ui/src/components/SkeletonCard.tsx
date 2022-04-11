import { Button, Card, Text, Badge, Group, Image, useMantineTheme, Avatar, Grid, Title, Spoiler, Skeleton } from "@mantine/core";

const SkeletonCard = () => {
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
                            <Skeleton height={56} width={56} radius="lg" m="sm" ml={0} />
                            <Skeleton height={16} radius="xl" width={150} m="sm" ml={0} />
                        </div>
                    </Grid.Col>
                    <Grid.Col md={2} >
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Skeleton height={56} width={56} m="sm" ml={0} radius="lg" />
                        </div>
                    </Grid.Col>
                    <Grid.Col md={2} ></Grid.Col>
                    <Grid.Col md={5} >


                        <div style={{ display: "flex", flexDirection: "row", alignContent: "center", flexWrap: "wrap", height: "100%", gap: ".25rem" }}>
                            <Skeleton height={12} m={5} ml={0} radius="xl" />
                            <Skeleton height={12} radius="xl" width="60%" m={5} ml={0} />
                        </div>
                    </Grid.Col>
                </Grid>

            </Card.Section>

            <Skeleton height={16} radius="xl" m="lg" ml={0} width="15%" />

            <Skeleton height={12} m="sm" ml={0} radius="xl" />
            <Skeleton height={12} m="sm" ml={0} radius="xl" />

            <Skeleton height={12} radius="xl" width="15%" m="sm" ml={0} />

            <Skeleton height={34} mt="xl" radius="sm" mb="sm" />
        </Card>
    );
}

export default SkeletonCard;