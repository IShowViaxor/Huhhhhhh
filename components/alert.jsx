export function Alert({ children, className }) {
    return (
        <div className={['alert alert-info', className].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM11.016 6.984h1.969v6h-1.969v-6zM11.016 15h1.969v2.016h-1.969v-2.016z"></path>
            </svg>
            {children}
        </div>
    );
}
