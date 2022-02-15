import '../CSS/ErrorComponents.css';
import {useEffect} from "react";
const ErrorComponents =()=>{
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Invalid url!");
            window.location = "/";
        }, 10000);
        console.log(timer);
        return () => clearTimeout(timer);
    }, []);
    return(
        <div className={"error"}>
            <div
                className="d-flex justify-content-center align-items-center"
                id="main"
            >
                <p className="err-icon mr-3 pr-3 align-top border-right inline-block align-content-center">
                    404
                </p>
                <div className={"divider3 shadow"}/>
                <div className="inline-block align-middle">
                    <p className="err-msg font-weight-normal lead" id="desc">
                        The page you requested was not found.
                    </p>
                    <div className={"pro-box"}>
                        <p className={"m"}>Return into Home Pages . . .</p>
                        <div className={"progress"}>
                            <div className={"progress-value"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ErrorComponents;