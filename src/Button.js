function Button ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {
    return (
        <button className="bg-red-500"> { children } </button>
    )
}

Button.prototype = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {

        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);

        if (count > 1) {
            return new Error(
                'Only one of primary, secondary, success, warning and danger value can be true'
            );
        }
    },
}

export default Button;