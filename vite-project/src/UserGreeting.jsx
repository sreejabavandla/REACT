import Button from "./Button"
function UserGreeting(props){
  return(
    props.isLoggedin ? <h2> Welcome {props.username}</h2> : <Button />
  )
}

export default UserGreeting