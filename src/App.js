import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Promesa</title>
                <link rel="icon" sizes="32x32" type="image/png" href="/A7616FB7-CE87-4704-8928-BB821E352019.png"/>
            </Helmet>
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
