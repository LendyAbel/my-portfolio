const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className} rounded-lg border shadow-sm`} {...props}>
      {children}
    </div>
  )
}

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className} flex flex-col space-y-1.5 p-6`} {...props}>
      {children}
    </div>
  )
}

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} text-2xl leading-none font-semibold tracking-tight`}
      {...props}
    >
      {children}
    </div>
  )
}

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className} text-sm`} {...props}>
      {children}
    </div>
  )
}

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className} p-6 pt-0`} {...props}>
      {children}
    </div>
  )
}

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className} flex items-center p-6 pt-0`} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
