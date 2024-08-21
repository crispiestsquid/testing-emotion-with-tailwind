import tw from 'twin.macro'
import Button from './components/Button'

function App() {
  return (
    <>
      <h1 css={tw`bg-gray-100`}>Hello Vite + React!</h1>
      <Button primary>Click me</Button>
    </>
  )
}

export default App
