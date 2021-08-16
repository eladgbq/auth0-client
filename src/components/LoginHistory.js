import HistoryList from "./HistoryList";
import Logout from "./Logout";

function LoginHistory() {

    return (
        <div>
            <p>Your login history:</p>
            <HistoryList></HistoryList>
            <Logout></Logout>
        </div>
    );
}

export default LoginHistory;
