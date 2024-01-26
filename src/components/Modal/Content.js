import './style.css';
import teacup from '../../icons/teacup.png';

const Content = ({setIsOpen}) => {
    return (
        <div className="modal-content">
            <div>
                <img src={teacup} alt='cup' className='tea-cup-logo'/>
                <p className='modal-logo'>Tea Land</p>
            </div>
            <p className='modal-text'>Enjoy a 10% discount as a first-time buyer! Your discount will be automatically applied to your cart.</p>
            <button className='close-btn' onClick={() => setIsOpen(false)}>Close</button>
        </div>
    )
}

export default Content;