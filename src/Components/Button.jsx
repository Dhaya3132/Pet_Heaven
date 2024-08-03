function Button({children}){
    return (
        <button className="px-6 py-2 bg-Primary rounded-full text-white shadow-2xl hover:scale-90">{children}</button>
    )
}

export default Button;