import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery) => {
    /** @type {MediaQueryList} */
    const query = window.matchMedia(mediaQuery);
    const [match, setMatch] = useState(query.matches);

    useEffect(() => {
        const handleMatch = q => setMatch(q.matches);
        // safari not support addEventListener and removeEventListener yet
        query.addListener(handleMatch);

        return () => query.removeListener(handleMatch)
    }, [query]);

    return match
};

export default useMediaQuery;
