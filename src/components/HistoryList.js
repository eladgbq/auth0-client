import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react"

function HistoryList() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const getDates = async () => {
            const domain = "dev-6twpx43d.us.auth0.com";

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://login-history-server.herokuapp.com`,
                    scope: "read:logins",
                });

                const datesResponse = await fetch(`https://login-history-server.herokuapp.com/loginHistory/${user.name}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const datesArr = await datesResponse.json();

                setDates(datesArr);
            } catch (e) {
                console.log(e.message);
            }
        };

        getDates();
    }, [getAccessTokenSilently, user?.sub]);


    return (isAuthenticated && (
        <ul>
            {dates.map((date) => (
                <li>{new Date(date).toString()}</li>
            ))}
        </ul>
    ));
}

export default HistoryList;
