import { useState } from 'react';
import { Activity, TrendingUp, Users, DollarSign, ArrowUpRight } from 'lucide-react';

const ANALYTICS_DATA = [
    {
        id: 'avg_session',
        title: 'AVG. SESSION',
        value: '8m 42s',
        trend: '+12%',
        icon: Activity,
        bgClasses: 'bg-[#E66D3D12]',
        iconColor: '#EF4444'
    },
    {
        id: 'bounce_rate',
        title: 'BOUNCE RATE',
        value: '24.3%',
        trend: '-3.2%', // Note: In the design the text is -3.2% but it shows an up arrow next to it inside a green tag
        icon: TrendingUp,
        bgClasses: 'bg-[#F0FDF4]',
        iconColor: '#22C55E'
    },
    {
        id: 'new_signups',
        title: 'NEW SIGNUPS',
        value: '4,280',
        trend: '+18%',
        icon: Users,
        bgClasses: 'bg-[#F5F3FF]',
        iconColor: '#8B5CF6'
    },
    {
        id: 'conversion',
        title: 'CONVERSION',
        value: '6.8%',
        trend: '+0.9%',
        icon: DollarSign,
        bgClasses: 'bg-[#FFFBEB]',
        iconColor: '#F59E0B'
    }
];

const TRAFFIC_DATA = [
    { label: 'Organic Search', value: 22, color: '#EA580C' },
    { label: 'Direct', value: 24, color: '#6366F1' },
    { label: 'Social', value: 18, color: '#22C55E' },
    { label: 'Referral', value: 11, color: '#F59E0B' },
    { label: 'Email', value: 5, color: '#06B6D4' }
];

const DAILY_STATS_DATA = [
    { day: 1, signups: 500, hires: 80 },
    { day: 2, signups: 430, hires: 90 },
    { day: 3, signups: 350, hires: 100 },
    { day: 4, signups: 270, hires: 120 },
    { day: 5, signups: 230, hires: 160 },
    { day: 6, signups: 350, hires: 180 },
    { day: 7, signups: 480, hires: 170 },
    { day: 8, signups: 490, hires: 110 },
    { day: 9, signups: 250, hires: 160 },
    { day: 10, signups: 240, hires: 170 },
    { day: 11, signups: 230, hires: 150 },
    { day: 12, signups: 240, hires: 110 },
    { day: 13, signups: 280, hires: 70 },
    { day: 14, signups: 360, hires: 70 },
    { day: 15, signups: 220, hires: 80 },
    { day: 16, signups: 400, hires: 80 },
    { day: 17, signups: 280, hires: 60 },
    { day: 18, signups: 430, hires: 120 },
    { day: 19, signups: 380, hires: 170 },
    { day: 20, signups: 390, hires: 160 },
    { day: 21, signups: 320, hires: 110 },
    { day: 22, signups: 250, hires: 100 },
    { day: 23, signups: 320, hires: 110 },
    { day: 24, signups: 340, hires: 170 },
    { day: 25, signups: 450, hires: 100 },
    { day: 26, signups: 500, hires: 130 },
    { day: 27, signups: 480, hires: 60 },
    { day: 28, signups: 240, hires: 80 }
];

const generatePath = (data, key) => {
    return data.map((point, index) => {
        const x = (index / (data.length - 1)) * 800; // 800 is the viewBox width
        const y = 240 - (point[key] / 600) * 240; // 240 is the viewBox height, 600 is max Y value
        return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
    }).join(' ');
};

const Analytics = () => {
    const [timeFilter, setTimeFilter] = useState('6m');

    return (
        <div className=" w-full mx-auto ">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-[700] text-[#0F172A] mb-1">Analytics</h1>
                    <p className="text-[13px] text-[#94A3B8]">Platform performance & growth metrics</p>
                </div>

                <div className="flex  bg-white border border-[#E2E8F0] rounded-[12px]">
                    {['7d', '30d', '6m', '1y'].map((filter, index, arr) => (
                        <button
                            key={filter}
                            onClick={() => setTimeFilter(filter)}
                            className={`px-3 py-2 text-[12px] font-[500] transition-colors ${index === 0 ? 'rounded-l-[10px] ' : ''} ${index === arr.length - 1 ? 'rounded-r-[10px]' : ''} ${timeFilter === filter
                                ? 'bg-[#E66D3D0F] text-[#E66D3D]'
                                : 'text-[#64748B] hover:bg-[#F8FAFC]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-6">
                {ANALYTICS_DATA.map((kpi) => {
                    const Icon = kpi.icon;
                    return (
                        <div key={kpi.id} className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 hover:shadow-sm transition-all duration-200">
                            <div className="flex justify-between items-center mb-6">
                                <div className={`w-[36px] h-[36px] rounded-[12px] flex items-center justify-center ${kpi.bgClasses}`}>
                                    <Icon className="w-[16px] h-[16px]" color={kpi.iconColor} strokeWidth={2} />
                                </div>

                                <div className="flex items-center gap-1 bg-[#ECFDF5] text-[#22C55E] px-2.5 py-1 rounded-full">
                                    <ArrowUpRight className="w-[11px] h-[11px]" strokeWidth={2} />
                                    <span className="text-[11px] font-[500]">{kpi.trend}</span>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-1">{kpi.title}</span>
                                <span className="text-[24px] font-[700] text-[#0F172A]">{kpi.value}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Revenue & User Growth Chart */}
            <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-7 pb-10 mt-8 hover:shadow-sm transition-all duration-200">
                <h2 className="text-[15px] font-[600] text-[#0F172A] mb-8">Revenue & User Growth</h2>

                <div className="relative w-full h-[320px]">
                    {/* Y-Axis Labels */}
                    <div className="absolute left-[26px] top-0 bottom-8 flex flex-col justify-between text-[11px]  text-[#94A3B8]">
                        <span>$1.4M</span>
                        <span>$1.1M</span>
                        <span>$0.7M</span>
                        <span>$0.3M</span>
                        <span>$0.0M</span>
                    </div>

                    {/* Chart Area */}
                    <div className="absolute left-[67px] right-[20px] top-[6px] bottom-0">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 280" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Grid Lines (Optional - none in screenshot, leaving empty) */}

                            {/* Area Fill */}
                            <path
                                d="M0,144 L200,130 L400,110 L600,90 L800,60 L1000,20 L1000,280 L0,280 Z"
                                fill="url(#chartGradient)"
                            />

                            {/* Line */}
                            <path
                                d="M0,144 L200,130 L400,110 L600,90 L800,60 L1000,20"
                                fill="none"
                                stroke="#F97316"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Data Points */}
                            <circle cx="0" cy="144" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                            <circle cx="200" cy="130" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                            <circle cx="400" cy="110" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                            <circle cx="600" cy="90" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                            <circle cx="800" cy="60" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                            <circle cx="1000" cy="20" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>

                        {/* X-Axis Labels */}
                        <div className="absolute left-0 right-0 bottom-0 flex justify-between text-[11px]  text-[#94A3B8] translate-y-full ">
                            <span className="-translate-x-1/2">Sep</span>
                            <span className="-translate-x-1/2">Oct</span>
                            <span className="-translate-x-1/2">Nov</span>
                            <span className="-translate-x-1/2">Dec</span>
                            <span className="-translate-x-1/2">Jan</span>
                            <span className="-translate-x-1/2">Feb</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Charts Row */}
            <div className="grid grid-cols-3 gap-6 mt-6">

                {/* Daily Signups & Hires */}
                <div className="col-span-2 bg-white border border-[#E2E8F0] rounded-[24px] p-7  hover:shadow-sm transition-all duration-200">
                    <h2 className="text-[15px] font-[600] text-[#0F172A] mb-8">Daily Signups & Hires (Last 28 Days)</h2>

                    <div className="relative w-full h-[280px] ">
                        {/* Y-Axis Labels */}
                        <div className="absolute left-[26px] top-0 bottom-[50px] flex flex-col justify-between text-[11px]  text-[#94A3B8]">
                            <span>600</span>
                            <span>450</span>
                            <span>300</span>
                            <span>150</span>
                            <span>0</span>
                        </div>

                        {/* Chart Area */}
                        <div className="absolute left-[67px] right-[10px] top-[6px] bottom-[50px]">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 240" preserveAspectRatio="none">
                                {/* Blue Line (Signups) */}
                                <path
                                    d={generatePath(DAILY_STATS_DATA, 'signups')}
                                    fill="none"
                                    stroke="#6366F1"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {/* Orange Line (Hires) */}
                                <path
                                    d={generatePath(DAILY_STATS_DATA, 'hires')}
                                    fill="none"
                                    stroke="#EA580C"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            {/* X-Axis Labels */}
                            <div className="absolute left-0 right-0 bottom-0 flex justify-between text-[11px] font-[500] text-[#94A3B8] translate-y-full mb-5 pt-4">
                                <span className="-translate-x-1/2">Day 1</span>
                                <span className="-translate-x-1/2">Day 8</span>
                                <span className="-translate-x-1/2">Day 15</span>
                                <span className="-translate-x-1/2">Day 22</span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="absolute left-0 bottom-0 flex items-center gap-6 text-[12px] font-[500] text-[#64748B]">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-[2px] bg-[#6366F1] rounded-full"></span>
                                Signups
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-[2px] bg-[#EA580C] rounded-full"></span>
                                Hires
                            </div>
                        </div>
                    </div>
                </div>

                {/* Traffic Sources */}
                <div className="col-span-1 bg-white border border-[#E2E8F0] rounded-[24px] p-7 hover:shadow-sm transition-all duration-200">
                    <h2 className="text-[15px] font-[600] text-[#0F172A] mb-8">Traffic Sources</h2>

                    <div className="flex flex-col gap-6 mt-2">
                        {TRAFFIC_DATA.map(item => (
                            <div key={item.label} className="flex flex-col gap-2.5">
                                <div className="flex justify-between items-center text-[12px] ">
                                    <span className="text-[#475569]">{item.label}</span>
                                    <span className="text-[#0F172A] font-[600]">{item.value}%</span>
                                </div>
                                <div className="w-full h-[8px] bg-[#F1F5F9] rounded-full overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Analytics;