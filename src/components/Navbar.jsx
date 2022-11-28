import LinkRect from "./LinkReact";

function Navbar (props) {
  return(
    <div>
      <h1>Navbar</h1>
      <LinkRect text={props.text} href='https://reactjs.org'/>
    </div>
  )
}

export default Navbar;