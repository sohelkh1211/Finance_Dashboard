import { useState } from 'react';
// Icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Named import
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import { createTheme, ThemeProvider } from '@mui/material'; // To config MUI icons breakpoints
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import scanner from '../assets/scan1.png'; // Default import
import scanner1 from '../assets/scan.png'
// ******************* Redux imports *******************
import { useSelector, useDispatch } from 'react-redux';
import { setIcon } from '../actions';

const Dashboard = () => {
    const num = useSelector((state) => state.number.value);  // For demo only.
    // console.log("Dashboard :- ", num);
    const dispatch = useDispatch();
    const selected_icon = useSelector((state) => state.icon); // To chnage styles when icons get clicked.
    const [open, setOpen] = useState(false);

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024
            }
        }
    })

    return (
        <>
            {/* Dashboard and Search area */}
            <div className='flex sm:flex-row xs:flex-col sm:mt-8 xs:mt-[90px] lg:ml-[8%] md:ml-[8%] sm:ml-[6%] xs:ml-[7%] lg:max-w-[59%] md:max-w-[59%] sm:max-w-[62%] xs:max-w-[87%] justify-between sm:items-center xs:items-start sm:gap-x-2 xs:gap-y-2 border-none border-black'>
                <h1 className='text-white lora text-[26px]'>Dashboard</h1>
                <FontAwesomeIcon className='absolute text-[#6e7888] sm:top-auto xs:top-[150px] lg:ml-[36.5%] md:ml-[34%] sm:ml-[29.5%] xs:ml-[3%]' icon={faSearch} />
                <input name='search' type='text' placeholder='Search' className='outline-none text-white caret-[#6e7888] lg:w-[40%] md:w-[45%] sm:w-[55%] xs:w-full items-center bg-[#21222d] px-10 py-2 rounded-lg' />
            </div>

            {/* ************ Menu bar for xs devices ******************* */}
            <div className={`absolute sm:hidden xs:flex flex-row top-9 min-w-[87%] ml-[7%] p-2.5 bg-cyan-200 shadow-md rounded-lg`} onClick={() => setOpen(!open)}>
                <MenuIcon className=' ml-[1.5%] font-bold cursor-pointer' />
            </div>
            {/* ******************************************************** */}

            {/* ************* Side bar ******************** */}
            <div className='absolute sm:flex xs:hidden flex-col lg:w-[8%] md:w-[8%] sm:w-[6%] h-full py-28 border-none border-black'>
                <div className={`flex justify-end items-end lg:pr-4 md:pr-2 sm:pr-0 ${selected_icon === "Home" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'}  w-full`}>
                    <FontAwesomeIcon icon={faHouse} className={`${selected_icon === "Home" ? 'text-[#F9769D]' : ''} icon-shadowed  lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Home"))} />
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-4 md:pr-2 sm:pr-0 ${selected_icon === "Brief" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${selected_icon === "Brief" ? 'text-[#F9769D]' : ''} icon-shadowed lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Brief"))} />
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-4 md:pr-2 sm:pr-0 ${selected_icon === "Chart" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <ThemeProvider theme={theme}><InsertChartOutlinedRoundedIcon sx={{ width: { lg: '32px', md: '30px', sm: '28px' }, height: { lg: '32px', md: '30px', sm: '28px' } }} className={`${selected_icon === "Chart" ? 'text-[#F9769D]' : ''} icon-shadowed cursor-pointer`} onClick={() => dispatch(setIcon("Chart"))} /></ThemeProvider>
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-4 md:pr-2 sm:pr-0 ${selected_icon === "Scan" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <img src={`${selected_icon === "Scan" ? scanner1 : scanner}`} className={`icon-shadowed font-bold lg:w-[30px] lg:h-[30px] md:w-[28px] md:h-[28px] sm:w-[26px] sm:h-[26px] cursor-pointer`} onClick={() => dispatch(setIcon("Scan"))} />
                </div>
                <div className={`flex mt-20 justify-end items-end lg:pr-4 md:pr-2 sm:pr-0 ${selected_icon === "Logout" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <FontAwesomeIcon icon={faSignOut} className={`${selected_icon === "Logout" ? 'text-[#F9769D]' : ''} icon-shadowed lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Logout"))} />
                </div>
            </div>
            {/* ******************************************** */}

            {/* ******** Side bar for xs devices ********** */}
            <div className={`absolute sm:hidden ${ open ? 'xs:flex' : 'xs:hidden' } flex-col h-full top-0 min-w-[50%] bg-slate-400 z-20 border-none border-black`}>
                <CloseIcon sx={{ width: '30px', height: '30px', marginTop: '10px' }} className=' ml-[5%]' onClick={() => setOpen(!open)} />
                <div className={`flex items-center pl-4 py-2 gap-x-4 mt-10 ${selected_icon === "Home" ? 'icon-shadowed-scanner' : '' } border-none border-black`} onClick={() => dispatch(setIcon("Home"))}>
                    <FontAwesomeIcon icon={faHouse} className={`${selected_icon === "Home" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Home" ? 'text-[#48515e] font-bold' : ''}`}>Home</p>
                </div>
                <div className={`flex items-center pl-4 py-2 gap-x-4 mt-6 ${selected_icon === "Brief" ? 'icon-shadowed-scanner' : '' } border-none border-black`} onClick={() => dispatch(setIcon("Brief"))}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${selected_icon === "Brief" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Brief" ? 'text-[#48515e] font-bold' : ''}`}>Wallet</p>
                </div>
                <div className={`flex items-center pl-3.5 py-2 gap-x-4 mt-6 ${selected_icon === "Chart" ? 'icon-shadowed-scanner' : '' } border-none border-black`} onClick={() => dispatch(setIcon("Chart"))}>
                    <ThemeProvider theme={theme}>
                        <InsertChartOutlinedRoundedIcon sx={{ width: '20px', height: '20px' }} className={`${selected_icon === "Chart" ? 'text-[#6e7888]' : ''}`} />
                    </ThemeProvider>
                    <p className={`${selected_icon === "Chart" ? 'text-[#48515e] font-bold' : ''}`}>Analytics</p>
                </div>
                <div className={`flex items-center pl-4 py-2 gap-x-4 mt-6 ${selected_icon === "Scan" ? 'icon-shadowed-scanner' : '' } border-none border-black`} onClick={() => dispatch(setIcon("Scan"))}>
                    <img src={`${selected_icon === "Scan" ? scanner1 : scanner}`} className='w-[18px] h-[18px]' />
                    <p className={`${selected_icon === "Scan" ? 'text-[#48515e] font-bold' : ''}`}>Settings</p>
                </div>

                <div className={`flex items-center pl-5 py-2 gap-x-4 mt-20 ${selected_icon === "Logout" ? 'icon-shadowed-scanner' : '' } border-none border-black`} onClick={() => dispatch(setIcon("Logout"))}>
                    <FontAwesomeIcon icon={faSignOut} className={`${selected_icon === "Logout" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Logout" ? 'text-[#48515e] font-bold' : ''}`}>Logout</p>
                </div>
            </div>
            {/* ****************************************** */}

        </>
    )
}

export default Dashboard
