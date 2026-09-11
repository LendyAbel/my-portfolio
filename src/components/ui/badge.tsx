const Badge: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`${className} inline-flex cursor-default items-center rounded-full border px-2.5 py-0.5 font-mono text-xs transition-colors`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Badge
