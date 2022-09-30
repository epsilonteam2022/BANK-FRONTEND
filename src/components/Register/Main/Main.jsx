import styles from './styles/Main.module.scss'
import profilePhoto from '../../../img/profile-test.webp'
import { historial } from './historial'
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
            <div className={styles.history}>
                <div className={styles.historyNav}>
                    <p>Movimientos</p>
                    <img src='/icons/glass.svg' alt='' width={18} height={18} />
                </div>
                <div className={styles.history_list}>
                    <ul>
                        {historial &&
                            historial.map((item, index) => (
                                <li key={index}>
                                    <p className={styles.date}>
                                        {item.transf_date.split(' ')[0]}{' '}
                                        <span>
                                            {item.transf_date.split(' ')[1]}
                                        </span>
                                    </p>
                                    <p className={styles.desc}>
                                        {item.transf_desc}
                                    </p>
                                    <p className={styles.mount}>
                                        ${item.transf_mount}
                                    </p>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main
