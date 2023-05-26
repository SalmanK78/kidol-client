import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Kidlo - ${title}`
    },[title])
}
export default useTitle