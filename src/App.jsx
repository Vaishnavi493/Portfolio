import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainPage />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#151320",
            color: "#fff",
            border: "1px solid rgba(124,92,252,0.4)",
          },
        }}
      />
    </>
  );
}

export default App;
