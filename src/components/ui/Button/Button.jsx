import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Button.module.scss';

const Button = ({ text, variant = 'default', href, to, target = '_self', rel = 'noreferrer' }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'solid':
        return `${s.btn_solid}`;
      case 'default':
      default:
        return `${s.btn_default}`;
    }
  };

  const content = (
    <>
      {text}
      <svg width="44" height="44" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2002 43.3059L43.1233 18.3828" stroke="#E69AA4" strokeWidth="3.11538" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.2002 18.3828H43.1233V43.3059" stroke="#E69AA4" strokeWidth="3.11538" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link className={`${s.btn} ${getButtonStyle()}`} to={to}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={`${s.btn} ${getButtonStyle()}`} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return <button className={`${s.btn} ${getButtonStyle()}`}>{content}</button>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};
