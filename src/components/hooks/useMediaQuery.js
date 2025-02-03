import { useEffect, useState } from "react";

/*Useful hook to check for media query change*/

export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        //console.log(media);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        // Define the listener as a separate function to avoid recreating it on each render
        const listener = () => setMatches(media.matches);

        // Use 'change' instead of 'resize' for better performance
        media.addEventListener("change", listener);

        // Cleanup function to remove the event listener
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);       // Only recreate the listener when 'matches' or 'query' changes

    return matches;
}