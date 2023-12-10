import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.Loader}>
    <RotatingLines
      strokeColor="#f39014"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);

export default Loader;
