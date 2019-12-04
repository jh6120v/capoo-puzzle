import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery) => {
    /** @type {MediaQueryList} */
    const query = window.matchMedia(mediaQuery);
    const [match, setMatch] = useState(query.matches);

    useEffect(() => {
        const handleMatch = q => setMatch(q.matches);
        query.addEventListener('change', handleMatch);

        return () => query.removeEventListener('change', handleMatch)
    }, [query]);

    return match
};

export default useMediaQuery;
