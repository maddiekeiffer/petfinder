import { useCallback, useState } from 'react';

const useAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    let userToken = '';
    let userTokenExpiry;

    const getToken = async () => {
        try {
            const response = await fetch('https://api.petfinder.com/v2/oauth2/token/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    grant_type: 'client_credentials', 
                    client_id: process.env.REACT_APP_PETFINDER_API,
                    client_secret: process.env.REACT_APP_PETFINDER_SECRET
                })
            });
            if (!response.ok) {
                throw new Error('Could not fetch token from petfinder. ');
            }

            const data = await response.json();
            console.log(data.access_token);
            userToken = data.access_token;
            const tokenExpiry = new Date().getTime() + data.expires_in *1000;

            return data.access_token;
        }
        catch (error) {
            setError(error.message);
        }
    }

    const fetchData = useCallback(async (url) => {
        setIsLoading(true);
        setError(null);

        if(userToken === '') {
            console.log('Getting a token...');
            userToken = await getToken();
        }
        else {
            console.log('Already have a token.');
            const currentTime = new Date().getTime();
            if (currentTime > userTokenExpiry) {
                userToken = await getToken();
            }
        }

        try {
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                }
            });

            const data = await response.json();

            setResult(data);
            return data;
        }
        catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    }, []);

    return {
        isLoading, 
        error, 
        fetchData, 
        result
    };
};

export default useAPI;