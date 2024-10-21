import AppBar from "Components/AppBar/AppBar";
import Footer from "Components/Footer/Footer";
const Layout = ({children}) => {
    return(<>
        <AppBar/>
        {children}
        <Footer></Footer>
        </>
        )
};

export default Layout;
