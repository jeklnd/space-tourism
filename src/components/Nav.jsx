import logo from "../assets/images/shared/logo.svg";
import hamburger from "../assets/images/shared/icon-hamburger.svg"
import styles from "./Nav.module.css";

function Page(props) {
    return (
      <a className={props.className} href={props.href}><span>{props.number}</span> {props.page}</a>
    );
  }


function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" className={styles.logo}></img>
            <div id={styles.line}></div>
            <ul>
                <li><Page className={styles.active} href="#home" number="00" page="HOME"/></li>
                <li><Page href="#dest" number="01" page="DESTINATION"/></li>
                <li><Page href="#crew" number="02" page="CREW"/></li>
                <li><Page href="#tech" number="03" page="TECHNOLOGY"/></li>
            </ul>
            <img className={styles.hamburger} src={hamburger} alt="hamburger"></img>
        </nav>
    )
}

export default Nav;