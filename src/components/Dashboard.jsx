import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = () => {
    const num = useSelector((state) => state.number.value);
    console.log("Dashboard :- ",num)
    return (
        <>
            <div className='flex flex-row mt-8 lg:ml-[8%] max-w-[59%] justify-between items-center gap-x-2 border-none border-black'>
                <h1 className='text-white lora text-[26px]'>Dashboard</h1>
                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256" className='absolute z-10 w-[2%] ml-[36%]'>
                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path></g></g>
            </svg> */}
                <FontAwesomeIcon className='absolute text-[#6e7888] ml-[36.5%]' icon={faSearch} />
                <input name='search' type='text' placeholder='Search' className='outline-none text-white caret-[#6e7888] w-[40%] items-center bg-[#21222d] px-10 py-2 rounded-lg' />
            </div>
        </>
    )
}

export default Dashboard
