import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import GithubContext from "../context/github/GithubContext"
import { useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"


function User() {
    const {getUser, user} = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    }, [])


  return (
    <div>
      User
    </div>
  )
}

export default User