interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className = '',
  ...props
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'main-colored':
        return 'text-white border-none bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
      default:
        return 'border'
    }
  }

  return (
    <button
      className={`${className} ${getVariant()} inline-flex h-11 cursor-pointer items-center justify-center rounded-md border px-8 py-2 text-sm font-medium transition-colors`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
