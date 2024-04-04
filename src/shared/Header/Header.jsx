import logo from '../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center mb-2'>
            <img className='mx-auto mb-2' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;