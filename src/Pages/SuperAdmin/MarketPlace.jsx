import { useState, useEffect } from 'react';
import { ArrowUpRight, Briefcase, Users, DollarSign, TrendingUp } from 'lucide-react';
import { getMarketplaceStats } from '../../utils/api';
import JobDetailsSidebar from '../../components/superAdmin/JobDetailsSidebar';

const FALLBACK_STATS = {
    activeJobs: { value: '12,847', change: '+342 today' },
    totalProposals: { value: '48.2K', change: '+1.2K today' },
    avgJobValue: { value: '$4,280', change: '+8% this week' },
    hireRate: { value: '34.7%', change: '+2.1% this month' },
};

const CATEGORY_COLORS = ['#E66D3D', '#6366F1', '#22C55E', '#F59E0B', '#06B6D4', '#EC4899'];

const FALLBACK_CATEGORIES = [
    { label: 'Web Dev', count: 3200 },
    { label: 'Design', count: 2100 },
    { label: 'Data/AI', count: 1700 },
    { label: 'Mobile', count: 1400 },
    { label: 'DevOps', count: 680 },
    { label: 'Writing', count: 320 },
];

const FALLBACK_JOB_TYPE = {
    hourly: 58,
    fixed: 42,
};

const FALLBACK_RECENT_JOBS = [
    { title: 'Senior React Developer', company: 'TechCorp Inc.', location: 'Remote', time: '12 min ago', type: 'Hourly', price: '$80-120/hr', proposals: 8 },
    { title: 'Brand Identity Designer', company: 'StartupXYZ', location: 'US Only', time: '34 min ago', type: 'Fixed', price: '$5,000', proposals: 14 },
    { title: 'Machine Learning Engineer', company: 'DataViz Corp', location: 'Remote', time: '1 hr ago', type: 'Hourly', price: '$150-200/hr', proposals: 3 },
    { title: 'WordPress Developer', company: 'BlogMedia LLC', location: 'Remote', time: '2 hr ago', type: 'Fixed', price: '$2,500', proposals: 22 },
    { title: 'iOS App Developer', company: 'FinPay Solutions', location: 'EU Only', time: '3 hr ago', type: 'Hourly', price: '$100-140/hr', proposals: 6 },
    { title: 'Technical Writer', company: 'DocuFlow Inc.', location: 'Remote', time: '4 hr ago', type: 'Fixed', price: '$3,000', proposals: 11 }
];

const MarketPlace = () => {
    const [stats, setStats] = useState(FALLBACK_STATS);
    const [categories, setCategories] = useState(FALLBACK_CATEGORIES);
    const [jobType, setJobType] = useState(FALLBACK_JOB_TYPE);
    const [recentJobs, setRecentJobs] = useState(FALLBACK_RECENT_JOBS);
    const [jobFilter, setJobFilter] = useState('All'); // 'All', 'Hourly', 'Fixed'
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await getMarketplaceStats();
                if (res.data && res.data.data) {
                    if (res.data.data.stats) setStats(res.data.data.stats);
                    if (res.data.data.categories) setCategories(res.data.data.categories);
                    if (res.data.data.jobType) setJobType(res.data.data.jobType);
                    if (res.data.data.recentJobs) setRecentJobs(res.data.data.recentJobs);
                }
            } catch (err) {
                console.log('Using fallback marketplace stats');
            }
        };
        fetchStats();
    }, []);

    const CARD_COLORS = [
        { iconBg: 'rgba(230, 109, 61, 0.10)', iconColor: '#E66D3D' },
        { iconBg: 'rgba(107, 78, 254, 0.10)', iconColor: '#6B4EFE' },
        { iconBg: 'rgba(34, 197, 94, 0.10)', iconColor: '#22C55E' },
        { iconBg: 'rgba(230, 109, 61, 0.10)', iconColor: '#F59E0B' },
    ];

    const cards = [
        {
            label: 'ACTIVE JOBS',
            value: stats.activeJobs.value,
            change: stats.activeJobs.change,
            icon: <Briefcase className="w-[16px] h-[16px]" strokeWidth={1.8} />,
            ...CARD_COLORS[0]
        },
        {
            label: 'TOTAL PROPOSALS',
            value: stats.totalProposals.value,
            change: stats.totalProposals.change,
            icon: <Users className="w-[16px] h-[16px]" strokeWidth={1.8} />,
            ...CARD_COLORS[1]
        },
        {
            label: 'AVG. JOB VALUE',
            value: stats.avgJobValue.value,
            change: stats.avgJobValue.change,
            icon: <DollarSign className="w-[16px] h-[16px]" strokeWidth={1.8} />,
            ...CARD_COLORS[2]
        },
        {
            label: 'HIRE RATE',
            value: stats.hireRate.value,
            change: stats.hireRate.change,
            icon: <TrendingUp className="w-[16px] h-[16px]" strokeWidth={1.8} />,
            ...CARD_COLORS[3]
        },
    ];

    // Bar chart calculations
    const maxCount = Math.max(...categories.map(c => c.count));
    const yTicks = [0, 900, 1800, 2700, 3600];

    // Donut chart calculations
    const donutSize = 145;
    const donutStroke = 22;
    const donutRadius = (donutSize - donutStroke) / 2;
    const donutCircumference = 2 * Math.PI * donutRadius;
    const hourlyArc = (jobType.hourly / 100) * donutCircumference;
    const fixedArc = (jobType.fixed / 100) * donutCircumference;

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[22px] font-[700] text-[#0F172A] leading-tight tracking-[-0.01em]">Marketplace</h1>
                    <p className="text-[13px] text-[#94A3B8] mt-1 tracking-wide">Live job postings & marketplace activity</p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E14]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#22C55E]" />
                    <span className="text-[11px] font-[400] text-[#22C55E]">{stats.activeJobs.value} active jobs</span>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-[16px] p-6 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col"
                    >
                        {/* Top row: icon + change badge */}
                        <div className="flex justify-between items-center mb-5">
                            <div
                                className="w-[36px] h-[36px] rounded-[12px] flex items-center justify-center"
                                style={{ backgroundColor: card.iconBg, color: card.iconColor }}
                            >
                                {card.icon}
                            </div>

                            <div className="flex items-center gap-1 text-[#22C55E] text-[11px] ">
                                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                                <span>{card.change}</span>
                            </div>
                        </div>

                        {/* Label */}
                        <h3 className="text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase mb-2">{card.label}</h3>

                        {/* Value */}
                        <h2 className="text-[24px] font-[700] text-[#1A1F36] leading-none tracking-tight">{card.value}</h2>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-6">

                {/* Jobs by Category - Bar Chart */}
                <div className="lg:col-span-3 bg-white rounded-[16px] p-6 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
                    <h2 className="text-[15px] font-[700] text-[#0F172A] mb-8">Jobs by Category</h2>

                    <div className="flex items-end gap-0 h-[220px]">
                        {/* Y-axis labels */}
                        <div className="flex flex-col justify-between h-full pb-7 pr-3">
                            {[...yTicks].reverse().map((tick) => (
                                <span key={tick} className="text-[11px] text-[#94A3B8] leading-none">{tick}</span>
                            ))}
                        </div>

                        {/* Bars */}
                        <div className="flex-1 flex items-end justify-around h-full pb-0">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3 flex-1">
                                    <div className="w-full flex justify-center" style={{ height: '190px', alignItems: 'flex-end', display: 'flex' }}>
                                        <div
                                            className="w-[32px] rounded-t-[8px] transition-all duration-500"
                                            style={{
                                                height: `${(cat.count / maxCount) * 100}%`,
                                                backgroundColor: CATEGORY_COLORS[idx % CATEGORY_COLORS.length],
                                                opacity: 0.85,
                                            }}
                                        />
                                    </div>
                                    <span className="text-[11px] text-[#94A3B8] whitespace-nowrap">{cat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Job Type Distribution - Donut Chart */}
                <div className="lg:col-span-2 bg-white rounded-[16px] p-6 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col">
                    <h2 className="text-[15px] font-[700] text-[#0F172A] mb-6">Job Type Distribution</h2>

                    <div className="flex-1 flex items-center justify-center">
                        <svg width={donutSize} height={donutSize} viewBox={`0 0 ${donutSize} ${donutSize}`}>
                            {/* Fixed (blue) - background full circle */}
                            <circle
                                cx={donutSize / 2}
                                cy={donutSize / 2}
                                r={donutRadius}
                                fill="none"
                                stroke="#818CF8"
                                strokeWidth={donutStroke}
                                strokeDasharray={`${donutCircumference} ${donutCircumference}`}
                                strokeDashoffset={0}
                                transform={`rotate(-90 ${donutSize / 2} ${donutSize / 2})`}
                                strokeLinecap="butt"
                            />
                            {/* Hourly (orange) - foreground arc */}
                            <circle
                                cx={donutSize / 2}
                                cy={donutSize / 2}
                                r={donutRadius}
                                fill="none"
                                stroke="#E66D3D"
                                strokeWidth={donutStroke}
                                strokeDasharray={`${hourlyArc} ${donutCircumference - hourlyArc}`}
                                strokeDashoffset={0}
                                transform={`rotate(-90 ${donutSize / 2} ${donutSize / 2})`}
                                strokeLinecap="butt"
                            />
                        </svg>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-center gap-8 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#E66D3D]" />
                            <span className="text-[13px] font-[500] text-[#475569]">Hourly ({jobType.hourly}%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#818CF8]" />
                            <span className="text-[13px] font-[500] text-[#475569]">Fixed ({jobType.fixed}%)</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Recent Job Postings */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] mt-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[15px] font-[600] text-[#0F172A]">Recent Job Postings</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                className="w-[200px] h-[36px] pl-[34px] pr-3 text-[13px] border border-[#E2E8F0] rounded-[10px] outline-none focus:border-[#CBD5E1] transition-colors"
                            />
                        </div>
                        <div className="flex border border-[#E2E8F0] rounded-[10px] ">
                            <button
                                onClick={() => setJobFilter('All')}
                                className={`px-3 py-2 text-[11.5px] font-[500] rounded-l-[8px] transition-colors ${jobFilter === 'All' ? 'text-primary bg-[#E66D3D0F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : 'text-[#64748B] hover:text-[#334155]'}`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setJobFilter('Hourly')}
                                className={`px-3 py-2 text-[11.5px] font-[500] transition-colors ${jobFilter === 'Hourly' ? 'text-primary bg-[#E66D3D0F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : 'text-[#64748B] hover:text-[#334155]'}`}
                            >
                                Hourly
                            </button>
                            <button
                                onClick={() => setJobFilter('Fixed')}
                                className={`px-3 py-2 text-[11.5px] font-[500] rounded-r-[8px] transition-colors ${jobFilter === 'Fixed' ? 'text-primary bg-[#E66D3D0F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : 'text-[#64748B] hover:text-[#334155]'}`}
                            >
                                Fixed
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {recentJobs
                        .filter(job => jobFilter === 'All' || job.type === jobFilter)
                        .map((job, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedJob(job)}
                                className="flex items-center justify-between p-4 border border-[#F1F5F9] rounded-[12px] hover:border-[#E2E8F0] hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-[40px] h-[40px] rounded-[10px] bg-[#E66D3D14] text-primary flex items-center justify-center flex-shrink-0">
                                        <Briefcase className="w-[16px] h-[16px]" strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <h3 className="text-[13px] font-[500] text-[#0F172A] mb-1">{job.title}</h3>
                                        <div className="flex items-center gap-3 text-[12px]  text-[#94A3B8]">
                                            <span className='text-[#64748B]'>{job.company}</span>
                                            <div className="flex items-center text-[11px] gap-1">
                                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px]">
                                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {job.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12 text-right">
                                    <div className="flex items-center gap-6">
                                        <span className={`px-2.5 py-1 text-[11px] font-[500] rounded-full ${job.type === 'Hourly' ? 'bg-[#FFF2EB] text-primary' : 'bg-[#EEF2FF] text-[#6366F1]'}`}>
                                            {job.type}
                                        </span>
                                        <span className="text-[13px] font-[600] text-[#0F172A] w-[100px] text-left">{job.price}</span>
                                    </div>
                                    <div className="flex items-center gap-4 w-[120px] justify-end">
                                        <span className="text-[12px] text-[#64748B]">{job.proposals} proposals</span>
                                        <svg className="w-[14px] h-[14px] text-[#CBD5E1] group-hover:text-[#94A3B8] transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Job Details Sidebar Panel */}
            <JobDetailsSidebar selectedJob={selectedJob} setSelectedJob={setSelectedJob} />

        </div>
    );
};

export default MarketPlace;