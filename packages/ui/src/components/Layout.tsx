import { AppShell, Navbar, Header, useMantineTheme, Text, Footer, Container, Avatar, Button, Group, Menu, Divider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import { ArrowsLeftRight, MessageCircle, Photo, Search, Settings, Trash } from 'tabler-icons-react';
import Home from '../pages/home';

const Layout = () => {
    const theme = useMantineTheme();

    return (<AppShell
        styles={{
            main: {
                background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
            },
        }}
        fixed
        header={
            <Header height={70} p="md" >
                <Container size="lg" style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                    <Text>Hackathon LFT</Text>
                    <Group>
                        <Button>Login</Button>
                        <Menu control={<Avatar color="cyan" radius="xl">CB</Avatar>}>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item icon={<Settings size={14} />}>Profile</Menu.Item>
                            <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
                            <Divider />
                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item color="red" icon={<Trash size={14} />}>Delete my account</Menu.Item>
                        </Menu>
                    </Group>
                </Container>
            </ Header >
        }
        footer={
            <Footer height={60} p="md" >
                <Container size="lg">
                    <Text color="dimmed">test 2</Text>
                </Container>
            </Footer >
        }
    >
        <Container size="lg">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Container>
    </AppShell >
    );
}

export default Layout;