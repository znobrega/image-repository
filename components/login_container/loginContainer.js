import styles from './layout.module.css'

export default function LoginContainer({ children }) {
    return <div className={styles["login-container"]}>{children}</div>
}