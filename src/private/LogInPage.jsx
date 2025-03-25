import { LogInForm } from "../components/LogInForm";
import { NavBarLogIn } from "../components/NavBarLogIn";

export const LogInPage = () => {
    return(
        <>
            <NavBarLogIn/>
            <div className="logFormSeparator">
            <LogInForm/>
            </div>
        </>
    )
}



