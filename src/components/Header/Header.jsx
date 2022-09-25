import sty from './Header.module.scss'

// Cada componente tendra su propia carpeta con su archivo jsx y su module.scss

function Header() {
    return (
        <div className={sty.header}>{/* Elemento padre con nombre de clase igual al componente */}
            <div className={sty.header__logo}></div> {/* Nombre de clases para hijos segun metodologia BEM con doble _ de separacion */}
            <div className={sty.header__navbar}></div>{' '}
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
