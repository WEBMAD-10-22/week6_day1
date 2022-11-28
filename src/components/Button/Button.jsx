import './button.css';

const Button = ({ text, color='red' }) => {
  return (
    <div className={`button ${color}`}>
      <p>{text}</p>
    </div>
  )
};

export default Button;
