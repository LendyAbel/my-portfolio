interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'outline',
  children,
  className = '',
  ...props
}) => {
  const variants: Record<string, string> = {
    primary:
      'bg-accent text-white border-accent hover:bg-accent-strong hover:border-accent-strong',
    outline:
      'bg-transparent text-ink border-border hover:border-ink hover:bg-black/[0.03]',
  }

  return (
    <button
      className={`${variants[variant]} ${className} inline-flex h-11 cursor-pointer items-center justify-center rounded-md border px-7 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
