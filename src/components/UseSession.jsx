import { useState, useEffect } from 'react';

const useSession = () => {
    const [session, setSession] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setSession(true);
        }, 300);
    }, []);

    return { session };
};

export default useSession;