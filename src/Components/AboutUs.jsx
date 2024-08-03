import Dog2 from '../assets/AboutImage1.png';
import Dog3 from '../assets/AboutImage3.png';
import Button from './Button';

function About(){
    return(
        <div className='flex bg-white font-Poppins justify-center items-center mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <img src={Dog2} alt="DOG" className='w-2/3 h-2/3' />
            </div>
            <div>
                <h2 className='font-bold text-8xl mb-3'>YOUR PUPP'S BEST FRIEND</h2>
                <p className='font-light text-lg text-slate-500 mb-3'>Our veterinary care goes beyond just treating and the a pets, preventive care, wellness and campassionate you and your pet</p>
                <Button>Shop now</Button>
            </div>
        </div>
    )
}

export default About;