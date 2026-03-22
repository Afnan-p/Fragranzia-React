import { useContext } from "react"
import { Authcontext } from "../context/Authcontext"

const useAuth = () => {
    return useContext(Authcontext)
}

export default useAuth