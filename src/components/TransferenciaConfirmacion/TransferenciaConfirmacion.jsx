import sty from './transferenciaConfirmacion.module.scss'

function TransferenciaConfirmacion() {

    return (
        <div className={sty.transferencia}>
            <header className={sty.encabezado}>
                <img className={sty.encabezado__flecha} src="./imgTransferenciaConfirmacion/flecha.svg" alt="Flecha izquierda" />
                <h2 className={sty.encabezado__titulo}>Transferencia</h2>
            </header>
            <section className={sty.datos}>
                <div className={sty.datos__fondo}>
                    <div className={sty.datos__fondo__caja1}>
                        <div className={sty.datos__fondo__caja1__titulo}>Confirmación de datos</div>
                        <div className={sty.datos__fondo__caja1__subtitulo}>Monto a transferir</div>
                        <div className={sty.datos__fondo__caja1__cuadro}>
                            <div className={sty.datos__fondo__caja1__cuadro__monto}>$ 10.000</div>
                        </div>
                    </div>
                    <div className={sty.datos__fondo__caja2}>
                        <div className={sty.datos__fondo__caja2__datos}>Destinatario</div>
                        <div className={sty.datos__fondo__caja2__cuadro}>Nicolás</div>
                        <div className={sty.datos__fondo__caja2__datos}>Banco</div>
                        <div className={sty.datos__fondo__caja2__cuadro}>Nicolás</div>
                        <div className={sty.datos__fondo__caja2__datos}>Cuenta destino</div>
                        <div className={sty.datos__fondo__caja2__cuadro}>Nicolás</div>
                    </div>
                </div>
            </section>
            <section className={sty.botones}>
                <div className={sty.botones__fondo}>
                    <button className={sty.botones__fondo__boton1}>Confirmar transferencia</button>
                    <button className={sty.botones__fondo__boton2}>Modificar datos</button>
                </div>
            </section>
        </div>
    )
}

export default TransferenciaConfirmacion