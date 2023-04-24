import styles from './Button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  colorClasses?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, colorClasses, onClick, children }) => {
  const combinedClasses = `${styles.button} ${colorClasses}`;

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};
