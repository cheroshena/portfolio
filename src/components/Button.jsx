export const Button = ({
  className = "",
  size = "default",
  children,
  onClick, // add this
  type = "button" // optional: allows form buttons
}) => {

  const baseClass = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm cursor-pointer",
    default: "px-6 py-3 text-base cursor-pointer",
    lg: "px-8 py-4 text-lg cursor-pointer",
  };

  const classes = `${baseClass} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick} type={type}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};
