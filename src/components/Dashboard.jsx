import { useState } from 'react';
// ******************** Font Awesome Icons imports *******************************
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Named import
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import { faBell } from '@fortawesome/free-solid-svg-icons';
// ******************** Prime react imports *************************
import { Dropdown } from 'primereact/dropdown';
// import 'primereact/resources/themes/saga-blue/theme.css';  // Change the theme if needed
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
// ******************** MUI imports **********************************
import { createTheme, ThemeProvider } from '@mui/material'; // To config MUI icons breakpoints
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import scanner from '../assets/scan1.png'; // Default import
import scanner1 from '../assets/scan.png';
import scanner2 from '../assets/scan2.png';
import user from '../assets/man.png';
import master from '../assets/social-media.png';
import dribble from "../assets/dribble-logo.png";
import tinder from "../assets/tinder.png";
import cart from "../assets/shopping-cart.png";
import netflix from '../assets/netflix.png';
import airbnb from '../assets/airbnb.png';
import arrow from '../assets/down-arrow.png'
// ******************* Redux imports *******************
import { useSelector, useDispatch } from 'react-redux';
import { setIcon } from '../actions';
// ****************** Apex charts *********************
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {
    const num = useSelector((state) => state.number.value);  // For demo only.
    // console.log("Dashboard :- ", num);
    const dispatch = useDispatch();
    const selected_icon = useSelector((state) => state.icon); // To chnage styles when icons get clicked.
    const [open, setOpen] = useState(false); // Navbar menu for xs devices
    const [options, setOptions] = useState('Last Week');

    const transactions = [{
        id: "dribble",
        logo: dribble,
        title: "Dribbble",
        time: "11:55 AM",
        money: "$10.67"
    }, {
        id: "tinder",
        logo: tinder,
        title: "Tinder",
        time: "10:15 AM",
        money: "$12.01"
    }, {
        id: "ikea",
        logo: cart,
        title: "Ikea",
        time: "9:32 AM",
        money: "$112.43"
    }];

    const yesterday_transactions = [{
        id: 'netflix',
        logo: netflix,
        title: 'Netflix',
        time: '7:50 AM',
        money: '$13.63'
    }, {
        id: 'airbnb',
        logo: airbnb,
        title: 'Airbnb',
        time: '11:50 AM',
        money: '$200.12'
    }]

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
        colors: ["#F9769D", "#96A7FF"]
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

    const BorderLinearProgressInvestment = styled(LinearProgress)(({ theme }) => ({
        height: 7,
        borderRadius: 4,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#6e7888a5',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 4,
            backgroundColor: '#96A7FF',
        },
    }));

    const BorderLinearProgressDeposit = styled(LinearProgress)(({ theme }) => ({
        height: 7,
        borderRadius: 4,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#6e7888a5',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 4,
            backgroundColor: '#F9769D',
        },
    }));

    return (
        <>

            {/* ************* Side bar ******************** */}
            <div className='absolute sm:flex xs:hidden flex-col lg:w-[8%] md:w-[8%] sm:w-[6%] py-28 border-none border-black'>
                <div className={`flex justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Home" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'}  w-full`}>
                    <FontAwesomeIcon icon={faHouse} className={`${selected_icon === "Home" ? 'text-[#F9769D]' : 'text-[#6e7888]'} icon-shadowed  lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Home"))} />
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Brief" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${selected_icon === "Brief" ? 'text-[#F9769D]' : 'text-[#6e7888]'} icon-shadowed lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Brief"))} />
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Chart" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <ThemeProvider theme={theme}><InsertChartOutlinedRoundedIcon sx={{ width: { lg: '32px', md: '30px', sm: '28px' }, height: { lg: '32px', md: '30px', sm: '28px' } }} className={`${selected_icon === "Chart" ? 'text-[#F9769D]' : 'text-[#6e7888]'} icon-shadowed cursor-pointer`} onClick={() => dispatch(setIcon("Chart"))} /></ThemeProvider>
                </div>
                <div className={`flex mt-8 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Scan" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <img src={`${selected_icon === "Scan" ? scanner1 : scanner2}`} className={`icon-shadowed font-bold lg:w-[30px] lg:h-[30px] md:w-[28px] md:h-[28px] sm:w-[26px] sm:h-[26px] cursor-pointer`} onClick={() => dispatch(setIcon("Scan"))} />
                </div>
                <div className={`flex mt-20 justify-end items-end lg:pr-8 md:pr-6 sm:pr-0 ${selected_icon === "Logout" ? 'border-[3px] border-l-[#F9769D] border-r-0 border-y-0' : 'border-none border-black'} w-full`}>
                    <FontAwesomeIcon icon={faSignOut} className={`${selected_icon === "Logout" ? 'text-[#F9769D]' : 'text-[#6e7888]'} icon-shadowed lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] cursor-pointer`} onClick={() => dispatch(setIcon("Logout"))} />
                </div>
            </div>
            {/* ******************************************** */}

            {/* ******** Side bar for xs devices ********** */}
            <div className={`absolute sm:hidden ${open ? 'xs:flex' : 'xs:hidden'} flex-col top-0 min-w-[50%] bg-slate-400 z-20 border-none border-black`}>
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
                    <img src={`${selected_icon === "Scan" ? scanner2 : scanner}`} className='w-[18px] h-[18px]' />
                    <p className={`${selected_icon === "Scan" ? 'text-[#48515e] font-bold' : ''}`}>Settings</p>
                </div>

                <div className={`flex items-center pl-5 py-2 gap-x-4 mt-20 ${selected_icon === "Logout" ? 'icon-shadowed-scanner' : ''} border-none border-black`} onClick={() => dispatch(setIcon("Logout"))}>
                    <FontAwesomeIcon icon={faSignOut} className={`${selected_icon === "Logout" ? 'text-[#6e7888]' : ''}`} />
                    <p className={`${selected_icon === "Logout" ? 'text-[#48515e] font-bold' : ''}`}>Logout</p>
                </div>
            </div>
            {/* ****************************************** */}


            <div className="grid md:grid-cols-2 sm:mt-8 xs:mt-[90px] lg:ml-[8%] md:ml-[8%] sm:ml-[8%] xs:ml-[7%] h-[970px]">

                {/* ****************************************** Middle Section ************************************************************** */}
                <div className='flex flex-col md:w-[129%] sm:w-[94%] xs:w-[92%] border-none border-cyan-400'>
                    {/* Dashboard and Search area */}
                    <div className='flex sm:flex-row xs:flex-col justify-between sm:items-center xs:items-start sm:gap-x-2 xs:gap-y-2 border-none border-black'>
                        <h1 className='text-white lora text-[26px]'>Dashboard</h1>
                        <FontAwesomeIcon className='absolute text-[#6e7888] sm:top-auto xs:top-[150px] lg:ml-[36.5%] md:ml-[34%] sm:ml-[40.5%] xs:ml-[3%]' icon={faSearch} />
                        <input name='search' type='text' placeholder='Search' className='outline-none text-white lora caret-[#6e7888] lg:w-[40%] md:w-[45%] sm:w-[55%] xs:w-full items-center bg-[#21222d] px-10 py-2 rounded-lg' />
                    </div>

                    {/* ************ Menu bar for xs devices ******************* */}
                    <div className={`absolute sm:hidden xs:flex flex-row top-9 min-w-[86%] p-2.5 bg-cyan-200 shadow-md rounded-lg`} onClick={() => setOpen(!open)}>
                        <MenuIcon className=' ml-[1.5%] font-bold cursor-pointer' />
                    </div>
                    {/* ******************************************************** */}

                    {/* ************ Tracker Section ***************** */}
                    <div className="flex md:flex-row xs:flex-col justify-between mt-8 lg:p-7 md:p-5 xs:p-7 lg:gap-x-[3rem] md:gap-x-[2rem] xs:gap-y-[1rem] circle-gradient border-none rounded-3xl" >

                        {/* ********** Total income ************* */}
                        <div className='flex justify-between lg:gap-x-4 md:gap-x-2 xs:gap-x-4'>
                            <div className='flex flex-col w-fit lg:mt-4 md:mt-2 xs:mt-4'>
                                <p className='text-[#6e7888] lg:text-[15px] md:text-[13px] sm:text-[18px] xs:text-[22px] lora'>Total Income</p>
                                <h1 className='text-white lg:text-[20px] md:text-[13px] sm:text-[18px] xs:text-[26px] inter'>$2100</h1>
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
                                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px" fill="#48515e" className='inter'>
                                        {50}%
                                    </text>
                                </g>
                            </svg>
                        </div>

                        {/* ********* Total Expense *********** */}
                        <div className='flex justify-between lg:gap-x-4 md:gap-x-2 xs:gap-x-4'>
                            <div className='flex flex-col w-fit lg:mt-4 md:mt-2 xs:mt-4'>
                                <p className='text-[#6e7888] lg:text-[15px] md:text-[13px] sm:text-[18px] xs:text-[22px] lora'>Total Expense</p>
                                <h1 className='text-white lg:text-[20px] md:text-[13px] sm:text-[18px] xs:text-[26px] inter'>$7400</h1>
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
                                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px" fill="#48515e" className='inter'>
                                        {25}%
                                    </text>
                                </g>
                            </svg>
                        </div>
                        {/* ********* Total Bonus ************* */}
                        <div className='flex justify-between lg:gap-x-4 md:gap-x-2 xs:gap-x-4'>
                            <div className='flex flex-col w-fit lg:mt-4 md:mt-2 xs:mt-4'>
                                <p className='text-[#6e7888] lg:text-[15px] md:text-[13px] sm:text-[18px] xs:text-[22px] lora'>Total Income</p>
                                <h1 className='text-white lg:text-[20px] md:text-[13px] sm:text-[18px] xs:text-[26px] inter'>$6000</h1>
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
                                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px" fill="#48515e" className='inter'>
                                        {68}%
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </div>
                    {/* ************************************************ */}

                    {/* ******************* Income Expense Graph ************************* */}
                    <div className='flex flex-col mt-8 lg:px-7 lg:pt-8 md:px-6 md:pt-6 sm:px-5 sm:pt-5 xs:px-6 xs:pt-6 circle-gradient sm:rounded-3xl xs:rounded-3xl'>

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
                    {/* ****************************************************************** */}

                    {/* ******************** Investment and Deposit ********************* */}
                    <div className="flex mb-12 sm:flex-row xs:flex-col xs:gap-y-6 sm:justify-between mt-8">
                        <div className='flex flex-col sm:w-[48%] xs:w-full lg:px-8 lg:py-6 md:px-8 md:py-6 sm:px-6 sm:py-4 xs:px-8 xs:py-6 circle-gradient-investment rounded-3xl'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#6e7888] lora lg:text-[16px] sm:text-[15px]'>Investment</p>
                                <ThemeProvider theme={theme}><TrendingUpIcon sx={{ width: { lg: '25px', md: '22px', sm: 'normal' }, height: { lg: '25px', md: '22px', sm: 'normal' } }} className='text-[#6e7888]' /></ThemeProvider>
                            </div>
                            <div className='flex justify-between items-end mt-4'>
                                <p className='text-white lg:text-[21px] md:text-[19px] sm:text-[16px] xs:text-[19px] inter'>$12000</p>
                                <p className='text-emerald-500 lg:text-[16px] sm:text-[14px] inter'>+5%</p>
                            </div>
                            <BorderLinearProgressInvestment className='flex mt-4' variant="determinate" value={50} />
                        </div>
                        <div className='flex flex-col sm:w-[48%] xs:w-full lg:px-8 lg:py-6 md:px-8 md:py-6 sm:px-6 sm:py-4 xs:px-8 xs:py-6 circle-gradient-investment rounded-3xl'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#6e7888] lora lg:text-[16px] sm:text-[15px]'>Deposit</p>
                                <ThemeProvider theme={theme}><TrendingUpIcon sx={{ width: { lg: '25px', md: '22px', sm: 'normal' }, height: { lg: '25px', md: '22px', sm: 'normal' } }} className='text-[#6e7888]' /></ThemeProvider>
                            </div>
                            <div className='flex justify-between items-end mt-4'>
                                <p className='text-white lg:text-[21px] md:text-[19px] sm:text-[16px] xs:text-[19px] inter'>$19600</p>
                                <p className='text-emerald-500 lg:text-[16px] sm:text-[14px] inter'>+14%</p>
                            </div>
                            <BorderLinearProgressDeposit className='flex mt-4' variant="determinate" value={65} />
                        </div>
                    </div>
                    {/* ************************************************************************* */}
                </div>
                {/* ******************************************************** Middle Section END ********************************************************** */}

                {/* ################################################## Right Section ############################################################### */}
                <div className='flex flex-col h-[200px] md:ml-[35%] xs:ml-[1%] md:w-[60%] xs:w-[92%] border-none'>

                    {/* User profile, notification and mail section */}
                    <div className='flex pr-[4%] justify-between border-none'>
                        <div className='flex'>
                            <img src={user} className='rounded-3xl w-[2.4rem] border-[2px] border-cyan-600 cursor-pointer' />
                            <img src={arrow} />
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <FontAwesomeIcon icon={faBell} className='w-[1rem] h-[1.1rem] text-[#6e7888] cursor-pointer' />
                            <div className="md:absolute xs:hidden flex top-[2.6rem] ml-[2.95rem] w-[0.5rem] h-[0.5rem] rounded-full bg-[#F9769D]"></div>
                            <EmailIcon className='text-[#6e7888] cursor-pointer' sx={{ width: '1.3rem' }} />
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col mt-8'>

                        {/* Title My Cards */}
                        <div className='flex justify-between'>
                            <h1 className='text-white text-[18px] lora'>My Cards</h1>
                            <MoreVertIcon className='text-white cursor-pointer' sx={{ width: '1.3rem' }} />
                        </div>

                        {/* Credit Card preview purple #b376f9 blue #96A7FF */}
                        <div className='flex flex-col mt-6 pt-8 px-4 pb-6 card-gradient rounded-3xl'>
                            <div className='flex flex-col'>
                                <p className='lora text-white text-[15px]'>Balance</p>
                                <h1 className='inter text-white text-[28px]'>$13.564</h1>
                            </div>
                            {/* Card Number */}
                            <div className='flex mt-8 items-venter justify-between h-fit'>
                                <div className='flex lg:gap-x-3 md:gap-x-2 xs:gap-x-3 items-center'>
                                    <svg fill="#FFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='lg:w-[2.5rem] md:w-[1.7rem] xs:w-[2.5rem]' viewBox="0 0 972 972" xmlSpace="preserve">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <g> <path d="M90,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90H90c-49.7,0-90,40.3-90,90S40.3,576,90,576z" /> <path d="M617.5,576h1.1c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90S567.8,576,617.5,576z" /> <path d="M354.5,576c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90s40.3,90,90,90H354.5z" /> <path d="M881.5,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90h-0.5c-49.7,0-90,40.3-90,90S831.8,576,881.5,576z" /> </g> </g>
                                    </svg>
                                    <svg fill="#FFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='lg:w-[2.5rem] md:w-[1.7rem] xs:w-[2.5rem]' viewBox="0 0 972 972" xmlSpace="preserve">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <g> <path d="M90,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90H90c-49.7,0-90,40.3-90,90S40.3,576,90,576z" /> <path d="M617.5,576h1.1c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90S567.8,576,617.5,576z" /> <path d="M354.5,576c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90s40.3,90,90,90H354.5z" /> <path d="M881.5,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90h-0.5c-49.7,0-90,40.3-90,90S831.8,576,881.5,576z" /> </g> </g>
                                    </svg>
                                    <svg fill="#FFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='lg:w-[2.5rem] md:w-[1.7rem] xs:w-[2.5rem]' viewBox="0 0 972 972" xmlSpace="preserve">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <g> <path d="M90,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90H90c-49.7,0-90,40.3-90,90S40.3,576,90,576z" /> <path d="M617.5,576h1.1c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90S567.8,576,617.5,576z" /> <path d="M354.5,576c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90s40.3,90,90,90H354.5z" /> <path d="M881.5,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90h-0.5c-49.7,0-90,40.3-90,90S831.8,576,881.5,576z" /> </g> </g>
                                    </svg>
                                    <h1 className='text-white inter lg:text-[20px] md:text-[14px]'>2376</h1>
                                </div>
                                <img src={master} className='flex lg:w-[15%] md:w-[13%] xs:w-[15%]' />
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="flex flex-col mt-10 ">

                        {/* Title */}
                        <div className='flex justify-between'>
                            <h1 className='text-white text-[18px] lora'>Recent Transactions</h1>
                            <MoreVertIcon className='text-white cursor-pointer' sx={{ width: '1.3rem' }} />
                        </div>

                        {/* Today Transactions */}
                        <div className='flex flex-col mt-2'>
                            <p className='text-[#6e7888] lora'>Today</p>
                            {transactions.map((transaction) => (
                                <div key={transaction.id} className='flex mt-4'>
                                    <div className='flex bg-[#21222d] md:p-4 sm:p-5 xs:p-4 rounded-xl'>
                                        <img src={transaction.logo} className='lg:w-[2.2rem] md:w-[2.2rem] sm:w-[2.4rem] xs:w-[2rem]' />
                                    </div>
                                    <div className='flex flex-col w-full lg:ml-[6%] md:ml-[6%] sm:ml-[3%] xs:ml-[4%] self-end'>
                                        <h1 className='text-white lg:text-[16px] md:text-[14px] sm:text-[16px] xs:text-[14px] lora'>{transaction.title}</h1>
                                        <p className='text-[#6e7888] lg:text-[16px] md:text-[14px] sm:text-[16px] xs:text-[14px] inter'>{transaction.time}</p>
                                    </div>
                                    <div className='flex self-center'>
                                        <p className='text-white inter lg:text-[16px] md:text-[14px] sm:text-[16px] xs:text-[14px]'>{transaction.money}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Yesterday Transactions */}
                        <div className='flex flex-col mt-4 md:mb-0 xs:mb-8'>
                            <p className='text-[#6e7888] lora'>Yesterday</p>
                            {yesterday_transactions.map((transaction) => (
                                <div key={transaction.id} className='flex mt-4'>
                                    <div className='flex bg-[#21222d] md:p-4 sm:p-5 xs:p-4 rounded-xl'>
                                        <img src={transaction.logo} className='lg:w-[2.2rem] md:w-[2.2rem] sm:w-[2.4rem] xs:w-[2rem]' />
                                    </div>
                                    <div className='flex flex-col w-full lg:ml-[6%] md:ml-[6%] sm:ml-[3%] xs:ml-[4%] self-end'>
                                        <h1 className='text-white lg:text-[16px] md:text-[14px] sm:text-[16px] xs:text-[14px] lora'>{transaction.title}</h1>
                                        <p className='text-[#6e7888] lg:text-[16px] md:text-[14px] sm:text-[16px] xs:text-[14px] inter'>{transaction.time}</p>
                                    </div>
                                    <div className='flex self-center'>
                                        <p className='text-white inter lg:text-[16px] md:text-[14px] sm:text-[16px] xs:text-[14px]'>{transaction.money}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* ################################################## Right Section END ############################################################## */}
            </div>
        </>
    )
}


export default Dashboard