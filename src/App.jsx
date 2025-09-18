import MainMenu from './components/MainMenu'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <MainMenu />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
