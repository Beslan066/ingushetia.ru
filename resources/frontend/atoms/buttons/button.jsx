import './button.css';

export default function Button ({ handleClick, text, children }) {
  return <button className="button" onClick={ handleClick }>{ text ?? children }</button>
}
