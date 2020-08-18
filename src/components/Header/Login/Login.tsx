import React, {FC} from 'react';
import styles from "./Login.module.css"

const Login: FC = () => {
    return ( <div className={styles.login}>
            <i className="fa fa-user-circle-o" aria-hidden={true}></i>
                <span style={{margin: "0 2px"}}>Alex</span>
            <i className="fa fa-arrow-down" aria-hidden={true}></i>
        </div>
    )
}

export default Login;