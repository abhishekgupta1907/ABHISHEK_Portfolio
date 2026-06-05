import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Helmet>
                <title>Abhishek Gupta | Full Stack Developer</title>

                <meta
                    name="description"
                    content="MERN Stack Developer Portfolio"
                />
            </Helmet>

            <Home />
        </>
    );
}

export default App;
