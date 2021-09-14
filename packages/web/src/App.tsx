import { Button, Title, Subtitle } from '@design-system/web'

import logo from './logo.svg'
import './App.css'

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={ logo } className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>

      <Button onClick={ () => window.open('https://reactjs.org', '_blank') }>
        Learn React
      </Button>

      <Title>
        meu título
      </Title>

      <Subtitle>
        meu subtítulo
      </Subtitle>

      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </header>
  </div>
)

export default App
