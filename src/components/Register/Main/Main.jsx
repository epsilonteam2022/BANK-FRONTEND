import styles from './styles/Main.module.scss'
import profilePhoto from '../../../img/profile-test.webp'

const Main = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.nav}>
                <div className={styles.saldo}>
                    <p className={styles.montoActual}>$2,598.00</p>
                    <p className={styles.subTitle}>Saldo Disponible</p>
                </div>
                <div className={styles.profile}>
                    <img
                        className={styles.notificationIcon}
                        src='/icons/bell.svg'
                        alt='icono de notificaciones'
                    />
                    <img
                        className={styles.profilePhoto}
                        src={profilePhoto}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Main
