import { useEffect } from "react";

const useTitle = (title) => {
useEffect(()=>{
    document.title = `${title} | Chill Gamers`
}, [title]);
return null;
}

export default useTitle;