import { useState } from 'react';
// Icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Named import
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import { Dropdown } from 'primereact/dropdown';
import { createTheme, ThemeProvider } from '@mui/material'; // To config MUI icons breakpoints
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import scanner from '../assets/scan1.png'; // Default import
import scanner1 from '../assets/scan.png';
// ******************* Redux imports *******************
import { useSelector, useDispatch } from 'react-redux';
import { setIcon } from '../actions';
// CHarts
import ReactApexChart from 'react-apexcharts';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Dashboard = () => {
    const num = useSelector((state) => state.number.value);  // For demo only.
    // console.log("Dashboard :- ", num);
    const dispatch = useDispatch();
    const selected_icon = useSelector((state) => state.icon); // To chnage styles when icons get clicked.
    const [open, setOpen] = useState(false); // Navbar menu for xs devices
    const [options, setOptions] = useState('Last Week');


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

    const [options1] = useState({
        chart: {
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'category',
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
        },
        yaxis: {
            min: 0,
            max: 6
        },
        tooltip: {
            theme: 'dark'
        },
        colors: ["#F9769D","#96A7FF"]
    });

    const [series] = useState([
        {
            name: 'Income',
            data: [3, 4, 3, 5, 3.8, 3.2, 4],
        },
        {
            name: 'Expense',
            data: [2.5, 2.9, 1.5, 3.5, 1, 2.9, 1],
        },
    ]);

    return (
        <>
            {/* Dashboard and Search area */}
            <div className='flex sm:flex-row xs:flex-col sm:mt-8 xs:mt-[90px] lg:ml-[8%] md:ml-[8%] sm:ml-[8%] xs:ml-[7%] lg:max-w-[59%] md:max-w-[59%] sm:max-w-[62%] xs:max-w-[87%] justify-between sm:items-center xs:items-start sm:gap-x-2 xs:gap-y-2 border-none border-black'>
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
                <div className={`flex justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Home" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'}  w-full`}>
                    <FontAwesomeIcon icon={faHouse} className={`${selected_icon === "Home" ? 'text-[#F9769D]' : ''} icon-shadowed  lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Home"))} />
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Brief" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${selected_icon === "Brief" ? 'text-[#F9769D]' : ''} icon-shadowed lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Brief"))} />
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Chart" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <ThemeProvider theme={theme}><InsertChartOutlinedRoundedIcon sx={{ width: { lg: '32px', md: '30px', sm: '28px' }, height: { lg: '32px', md: '30px', sm: '28px' } }} className={`${selected_icon === "Chart" ? 'text-[#F9769D]' : ''} icon-shadowed cursor-pointer`} onClick={() => dispatch(setIcon("Chart"))} /></ThemeProvider>
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Scan" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <img src={`${selected_icon === "Scan" ? scanner1 : scanner}`} className={`icon-shadowed font-bold lg:w-[30px] lg:h-[30px] md:w-[28px] md:h-[28px] sm:w-[26px] sm:h-[26px] cursor-pointer`} onClick={() => dispatch(setIcon("Scan"))} />
                </div>
                <div className={`flex mt-20 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Logout" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <FontAwesomeIcon icon={faSignOut} className={`${selected_icon === "Logout" ? 'text-[#F9769D]' : ''} icon-shadowed lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Logout"))} />
                </div>
            </div>
            {/* ******************************************** */}

            {/* ******** Side bar for xs devices ********** */}
            <div className={`absolute sm:hidden ${open ? 'xs:flex' : 'xs:hidden'} flex-col h-full top-0 min-w-[50%] bg-slate-400 z-20 border-none border-black`}>
                <CloseIcon sx={{ width: '30px', height: '30px', marginTop: '10px' }} className=' ml-[5%]' onClick={() => setOpen(!open)} />
                <div className={`flex items-center pl-4 py-2 gap-x-4 mt-10 ${selected_icon === "Home" ? 'icon-shadowed-scanner' : ''} border-none border-black`} onClick={() => dispatch(setIcon("Home"))}>
                    <FontAwesomeIcon icon={faHouse} className={`${selected_icon === "Home" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Home" ? 'text-[#48515e] font-bold' : ''}`}>Home</p>
                </div>
                <div className={`flex items-center pl-4 py-2 gap-x-4 mt-6 ${selected_icon === "Brief" ? 'icon-shadowed-scanner' : ''} border-none border-black`} onClick={() => dispatch(setIcon("Brief"))}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${selected_icon === "Brief" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Brief" ? 'text-[#48515e] font-bold' : ''}`}>Wallet</p>
                </div>
                <div className={`flex items-center pl-3.5 py-2 gap-x-4 mt-6 ${selected_icon === "Chart" ? 'icon-shadowed-scanner' : ''} border-none border-black`} onClick={() => dispatch(setIcon("Chart"))}>
                    <ThemeProvider theme={theme}>
                        <InsertChartOutlinedRoundedIcon sx={{ width: '20px', height: '20px' }} className={`${selected_icon === "Chart" ? 'text-[#6e7888]' : ''}`} />
                    </ThemeProvider>
                    <p className={`${selected_icon === "Chart" ? 'text-[#48515e] font-bold' : ''}`}>Analytics</p>
                </div>
                <div className={`flex items-center pl-4 py-2 gap-x-4 mt-6 ${selected_icon === "Scan" ? 'icon-shadowed-scanner' : ''} border-none border-black`} onClick={() => dispatch(setIcon("Scan"))}>
                    <img src={`${selected_icon === "Scan" ? scanner1 : scanner}`} className='w-[18px] h-[18px]' />
                    <p className={`${selected_icon === "Scan" ? 'text-[#48515e] font-bold' : ''}`}>Settings</p>
                </div>

                <div className={`flex items-center pl-5 py-2 gap-x-4 mt-20 ${selected_icon === "Logout" ? 'icon-shadowed-scanner' : ''} border-none border-black`} onClick={() => dispatch(setIcon("Logout"))}>
                    <FontAwesomeIcon icon={faSignOut} className={`${selected_icon === "Logout" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Logout" ? 'text-[#48515e] font-bold' : ''}`}>Logout</p>
                </div>
            </div>
            {/* ****************************************** */}

            {/* ************ Tracker Section ***************** */}
            <div className="flex md:flex-row xs:flex-col justify-between mt-8 sm:ml-[8%] xs:ml-[7%] md:w-[59%] sm:w-[62%] xs:w-[87%] lg:p-7 md:p-5 xs:p-7 lg:gap-x-[3rem] md:gap-x-[2rem] xs:gap-y-[1rem] circle-gradient border-none rounded-3xl" >

                {/* ********** Total income ************* */}
                <div className='flex justify-between lg:gap-x-4 md:gap-x-2 xs:gap-x-4'>
                    <div className='flex flex-col w-fit lg:mt-4 md:mt-2 xs:mt-4'>
                        <p className='text-[#6e7888] lg:text-[15px] md:text-[13px] sm:text-[18px] xs:text-[22px] lora'>Total Income</p>
                        <h1 className='text-white lg:text-[20px] md:text-[13px] sm:text-[18px] xs:text-[26px]'>$2100</h1>
                    </div>
                    {/* 
                        stroke-dasharray is an attribute in SVG that specifies the pattern of dashes and gaps used to paint the outline of shapes.
                        Syntax: stroke-dasharray: length1, length2, ...;
                        Example: stroke-dasharray: 5, 10; will create a pattern of 5 units of dash followed by 10 units of gap.
                        strokeDasharray={2 * Math.PI * 40} means the entire circumference of the circle is one complete dash.

                        stroke-dashoffset specifies the starting point of the dash pattern on the path.
                        Syntax: stroke-dashoffset: length;
                        Example: stroke-dashoffset: 5; will start the dash pattern 5 units from the beginning of the path. By default from middle.
                        */}
                    <svg className='lg:size-20 md:size-16 xs:size-24' viewBox='0 0 100 100'>
                        <g>
                            <circle cx='50%' cy='50%' stroke='#48515e' strokeWidth={10} r={40} fill='transparent' />
                            <circle cx='50%' cy='50%' stroke='#F9769D' strokeWidth={10} r={40} fill='transparent'
                                strokeDasharray={2 * Math.PI * 40}
                                strokeDashoffset={2 * Math.PI * 40 - 2 * Math.PI * 40 * (50) / 100}
                                transform="rotate(-90 50 50)" // To rotate circle anti-clockwise 90 degree around its center.
                                strokeLinecap='round'
                            >
                                <animate attributeName="stroke-dashoffset"
                                    from={2 * Math.PI * 40}
                                    to={2 * Math.PI * 40 - 2 * Math.PI * 40 * (50) / 100}
                                    dur="2s"
                                />
                            </circle>
                            {/* textAnchor="middle" aligns the text to the middle of the specified x position.
                                dy=".3em" vertically centers the text more accurately.
                                */}
                            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px" fill="#48515e" className=''>
                                {50}%
                            </text>
                        </g>
                    </svg>
                </div>

                {/* ********* Total Expense *********** */}
                <div className='flex justify-between lg:gap-x-4 md:gap-x-2 xs:gap-x-4'>
                    <div className='flex flex-col w-fit lg:mt-4 md:mt-2 xs:mt-4'>
                        <p className='text-[#6e7888] lg:text-[15px] md:text-[13px] sm:text-[18px] xs:text-[22px] lora'>Total Expense</p>
                        <h1 className='text-white lg:text-[20px] md:text-[13px] sm:text-[18px] xs:text-[26px]'>$7400</h1>
                    </div>
                    <svg className='lg:size-20 md:size-16 xs:size-24' viewBox='0 0 100 100'>
                        <g>
                            <circle cx='50%' cy='50%' stroke='#48515e' strokeWidth={10} r={40} fill='transparent' />
                            <circle cx='50%' cy='50%' stroke='#96A7FF' strokeWidth={10} r={40} fill='transparent'
                                strokeDasharray={2 * Math.PI * 40}
                                strokeDashoffset={2 * Math.PI * 40 - 2 * Math.PI * 40 * (25) / 100}
                                transform="rotate(-90 50 50)" // To rotate circle anti-clockwise 90 degree around its center.
                                strokeLinecap='round'
                            >
                                <animate attributeName="stroke-dashoffset"
                                    from={2 * Math.PI * 40}
                                    to={2 * Math.PI * 40 - 2 * Math.PI * 40 * (25) / 100}
                                    dur="2s"
                                />
                            </circle>
                            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px" fill="#48515e" className=''>
                                {25}%
                            </text>
                        </g>
                    </svg>
                </div>
                {/* ********* Total Bonus ************* */}
                <div className='flex justify-between lg:gap-x-4 md:gap-x-2 xs:gap-x-4'>
                    <div className='flex flex-col w-fit lg:mt-4 md:mt-2 xs:mt-4'>
                        <p className='text-[#6e7888] lg:text-[15px] md:text-[13px] sm:text-[18px] xs:text-[22px] lora'>Total Income</p>
                        <h1 className='text-white lg:text-[20px] md:text-[13px] sm:text-[18px] xs:text-[26px]'>$6000</h1>
                    </div>
                    <svg className='lg:size-20 md:size-16 xs:size-24' viewBox='0 0 100 100'>
                        <g>
                            <circle cx='50%' cy='50%' stroke='#48515e' strokeWidth={10} r={40} fill='transparent' />
                            <circle cx='50%' cy='50%' stroke='#b376f9' strokeWidth={10} r={40} fill='transparent'
                                strokeDasharray={2 * Math.PI * 40}
                                strokeDashoffset={2 * Math.PI * 40 - 2 * Math.PI * 40 * (68) / 100}
                                transform="rotate(-90 50 50)" // To rotate circle anti-clockwise 90 degree around its center.
                                strokeLinecap='round'
                            >
                                <animate attributeName="stroke-dashoffset"
                                    from={2 * Math.PI * 40}
                                    to={2 * Math.PI * 40 - 2 * Math.PI * 40 * (68) / 100}
                                    dur="2s"
                                />
                            </circle>
                            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px" fill="#48515e" className=''>
                                {68}%
                            </text>
                        </g>
                    </svg>
                </div>
            </div>
            {/* ************************************************ */}

            {/* Income Expense Graph */}
            <div className='flex flex-col mt-8 sm:ml-[8%] xs:ml-[7%] lg:px-7 lg:pt-8 md:px-6 md:pt-6 sm:px-5 sm:pt-5 xs:px-6 xs:pt-6 md:w-[59%] sm:w-[62%] xs:w-[87%] circle-gradient sm:rounded-3xl xs:rounded-3xl'>

                {/* Income, Expense, Last Week Select option */}
                <div className='flex items-center justify-between w-full'>

                    {/* Only Income and Expense */}
                    <div className='flex justify-between items-center sm:gap-x-4 xs:gap-x-2 text-white'>

                        {/* Seprate div for Income and Expense */}
                        <div className='flex items-center justify-between gap-x-2'>
                            <div className='bg-[#F9769D] p-1 rounded-full'></div>
                            <p className='lora font-light lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[13px]'>Income</p>
                        </div>
                        <div className='flex items-center justify-between gap-x-2'>
                            <div className='w-full bg-[#96A7FF] p-1 rounded-full'></div>
                            <p className='lora font-light lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[13px]'>Expense</p>
                        </div>
                        {/* ********************************** */}

                    </div>

                    <Dropdown placeholder='Last Week' optionLabel='period' value={options} options={[{ period: 'This week', code: 1 }, { period: 'Last Week', code: 2 }, { period: 'This month', code: 3 }]} onChange={(e) => setOptions(e.target.value)} className='border-none icon-shadowed-scanner lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[13px] bg-[#6a5c6c44] gap-x-2 text-white lg:px-3 md:px-2 sm:px-2 xs:px-2 py-1 rounded-lg' />
                </div>

                <div className="flex mt-4 w-full">
                    <ReactApexChart className="w-[100%]" options={options1} series={series} type="area" />
                </div>
            </div>

        </>
    )
}


export default Dashboard