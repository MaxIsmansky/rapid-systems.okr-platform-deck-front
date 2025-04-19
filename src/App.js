import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="content">
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
