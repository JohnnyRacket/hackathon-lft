import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout';


const App = () => {

  return (
    <MantineProvider theme={{
      colorScheme: 'dark'
    }} withGlobalStyles>
      <Layout />
    </MantineProvider >
  )
}

export default App
