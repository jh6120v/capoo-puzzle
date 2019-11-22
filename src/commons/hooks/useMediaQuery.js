import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
    if (typeof window !== `undefined`) {
        query = window.matchMedia(query);

        const [match, setMatch] = useState(query.matches);

        useEffect(() => {
            const handleMatch = q => setMatch(q.matches);
            query.addListener(handleMatch);

            return () => query.removeListener(handleMatch)
        }, [query]);

        return match
    }
};

export default useMediaQuery;
