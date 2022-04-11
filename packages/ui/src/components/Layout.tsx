import { AppShell, Navbar, Header, useMantineTheme, Text, Footer, Container, Avatar, Button, Group, Menu, Divider, Title } from '@mantine/core';
import { Link, Route, Routes } from 'react-router-dom';
import { ArrowsLeftRight, MessageCircle, Photo, Search, Settings, Trash } from 'tabler-icons-react';
import Home from '../pages/home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';

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
                    <Link to="/" style={{ textDecoration: 'none' }}><Title style={{ color: 'white' }}>Hackathon LFT</Title></Link>
                    <Group>
                        <Link to="/login" ><Button color="violet">Create Account</Button></Link>
                        <Menu control={<Avatar color="cyan" radius="xl">CB</Avatar>}>
                            <Menu.Label>Application</Menu.Label>
                            <Link to="/profile" ><Menu.Item icon={<Settings size={14} />}>Profile</Menu.Item></Link>
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
        <Container size="lg" style={{ height: "100%" }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    </AppShell >
    );
}

export default Layout;