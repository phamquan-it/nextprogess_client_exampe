import { useRouter } from "next/navigation"
import { type ReactElement } from "react"

export interface indexProps {
    
}

export default function index(props: indexProps): ReactElement {
    const router = useRouter();
    return <>
    <h1>Hello  world</h1>
        <button onClick={()=>{
            router.push("/")
        }}> click me</button>
    </>
}
