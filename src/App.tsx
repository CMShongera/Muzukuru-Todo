import { ThemeProvider } from "./components/ThemeProvider"
import { Toaster } from "sonner"
import Home from "./pages/Home"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background p-6 relative">
        <Home />
      </div>
      <Toaster position="top-center" theme="system" />
    </ThemeProvider>
  )
}

export default App
