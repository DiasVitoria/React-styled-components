import { Provider, ThemeProvider } from './contexto';
import "@fontsource/roboto"
import "./index.css"
import { LoteriaRoutes } from './routes';

function App() {

  return (
    <Provider>
      <ThemeProvider>
        <LoteriaRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
