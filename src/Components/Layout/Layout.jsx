import AppBar from "Components/AppBar/AppBar";
const Layout = ({children}) => {
    return(<>
        <AppBar/>
        {children}
        </>
        )
};

export default Layout;
