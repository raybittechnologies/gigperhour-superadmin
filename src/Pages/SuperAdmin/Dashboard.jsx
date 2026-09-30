import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Users, TriangleAlert, TrendingUp, Globe, Star, MapPin, Clock, Eye, CheckCircle2, Download, ShieldAlert, UserPlus, RefreshCw, Zap, ExternalLink, MoreHorizontal, X, Send } from 'lucide-react';
import actionIcon from '../../assets/action.icon.svg';
import DateRangePicker from '../../components/superAdmin/DateRangePicker';

const generatePath = (data, width = 200, height = 32, padding = 4) => {
  if (!data || data.length === 0) return '';

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const stepX = width / (data.length - 1);
  const yRatio = (height - padding * 2) / range;

  const points = data.map((val, i) => {
    const x = i * stepX;

    const y = height - padding - ((val - min) * yRatio);
    return { x, y };
  });

  // Generate smooth cubic bezier curve path
  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const cp1X = points[i].x + stepX / 2;
    const cp1Y = points[i].y;
    const cp2X = points[i + 1].x - stepX / 2;
    const cp2Y = points[i + 1].y;

    path += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${points[i + 1].x} ${points[i + 1].y}`;
  }

  return path;
};

const getStatusStyles = (status) => {
  switch (status) {
    case 'Active':
      return {
        progressBg: 'linear-gradient(90deg, #22C55E 0%, #4ADE80 100%)',
        textColor: '#22C55E',
        bgColor: '#22C55E10',
        dotClass: 'bg-[#22C55E]'
      };
    case 'Final Review':
      return {
        progressBg: 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)',
        textColor: '#F59E0B',
        bgColor: '#F59E0B10',
        dotClass: 'bg-[#F59E0B]'
      };
    case 'Under Dispute':
      return {
        progressBg: 'linear-gradient(90deg, #E66D3D 0%, #F09060 100%)',
        textColor: '#E66D3D',
        bgColor: '#E66D3D10',
        dotClass: 'bg-[#E66D3D]'
      };
    default:
      return {
        progressBg: '#CBD5E1',
        textColor: '#64748B',
        bgColor: '#F1F5F9',
        dotClass: 'bg-[#64748B]'
      };
  }
};

const Dashboard = () => {
  const [showAllVerification, setShowAllVerification] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState('Full Platform');
  const [selectedFormat, setSelectedFormat] = useState('PDF');
  const [dateRange, setDateRange] = useState({
    start: new Date(2026, 0, 28),
    end: new Date(2026, 1, 27)
  });
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('All Users');
  const [broadcastMessage, setBroadcastMessage] = useState('');

  const [stats, setStats] = useState({
    gmv: {
      value: '$24.8M',
      change: '+18.2%',
      subtitle: 'vs. $20.9M last month',
      chartData: [20.1, 21.5, 20.8, 22.4, 23.1, 24.8]
    },
    users: {
      value: '128.4K',
      change: '+8.6%',
      subtitle: '72K Freelancers · 56K Clients',
      freelancerPercentage: 56,
      clientPercentage: 41
    },
    disputes: {
      value: '23',
      change: '+5',
      subtitle: '7 critical · 16 moderate'
    },
    revenue: {
      value: '$1.24M',
      change: '+22.1%',
      subtitle: '5% platform commission rate',
      chartData: [0.95, 1.05, 1.1, 1.08, 1.15, 1.24]
    },
  });

  const [marketplaceStats, setMarketplaceStats] = useState({
    regions: [
      { label: 'N. America', p: 5100, h: 3120 }, // `p` = job postings, `h` = hires
      { label: 'Europe', p: 3900, h: 2520 },
      { label: 'S. Asia', p: 2880, h: 2160 },
      { label: 'SE Asia', p: 2100, h: 1560 },
      { label: 'S. America', p: 1560, h: 1200 },
      { label: 'Africa', p: 1080, h: 840 },
      { label: 'Oceania', p: 720, h: 1080 },
    ],
    today: {
      peakTime: '12pm',
      jobs: '1,847',
      hires: '642',
      chartData: [15, 17, 25, 28, 30, 35, 25]
    }
  });

  const [verificationQueue, setVerificationQueue] = useState({
    pendingCount: 23,
    users: [
      {
        id: 1,
        name: 'Maria Santos',
        rating: 4.9,
        role: 'Full-Stack Developer',
        location: 'Lisbon, PT',
        timeAgo: '2 hours ago',
        passed: 3,
        totalPassed: 3,
        portfolioCount: 12,
        avatar: 'https://i.pravatar.cc/150?img=47'
      },
      {
        id: 2,
        name: 'James Chen',
        rating: 4.7,
        role: 'UI/UX Designer',
        location: 'Toronto, CA',
        timeAgo: '4 hours ago',
        passed: 2,
        totalPassed: 3,
        portfolioCount: 24,
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      {
        id: 3,
        name: 'Aisha Patel',
        rating: 4.8,
        role: 'Data Scientist',
        location: 'Mumbai, IN',
        timeAgo: '6 hours ago',
        passed: 3,
        totalPassed: 3,
        portfolioCount: 8,
        avatar: 'https://i.pravatar.cc/150?img=32'
      },
      {
        id: 4,
        name: 'Erik Johansson',
        rating: 5,
        role: 'DevOps Engineer',
        location: 'Stockholm, SE',
        timeAgo: '1 day ago',
        passed: 3,
        totalPassed: 3,
        portfolioCount: 6,
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      {
        id: 5,
        name: 'Erik Johansson',
        rating: 5,
        role: 'DevOps Engineer',
        location: 'Stockholm, SE',
        timeAgo: '1 day ago',
        passed: 3,
        totalPassed: 3,
        portfolioCount: 6,
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      {
        id: 6,
        name: 'Erik Johansson',
        rating: 5,
        role: 'DevOps Engineer',
        location: 'Stockholm, SE',
        timeAgo: '1 day ago',
        passed: 3,
        totalPassed: 3,
        portfolioCount: 6,
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      {
        id: 7,
        name: 'Erik Johansson',
        rating: 5,
        role: 'DevOps Engineer',
        location: 'Stockholm, SE',
        timeAgo: '1 day ago',
        passed: 3,
        totalPassed: 3,
        portfolioCount: 6,
        avatar: 'https://i.pravatar.cc/150?img=12'
      }
    ]
  });

  const [quickActions, setQuickActions] = useState([
    {
      id: 1,
      title: 'Broadcast Announcement',
      description: 'Send to all users',
      icon: 'Megaphone',
      bgColor: 'bg-[#FFF2EB]',
      textColor: 'text-[#E66D3D]'
    },
    {
      id: 2,
      title: 'Export Financials',
      description: 'Monthly report',
      icon: 'Download',
      bgColor: 'bg-[#F4F2FF]',
      textColor: 'text-[#6B4EFE]'
    },
    {
      id: 3,
      title: 'Review Flagged',
      description: '7 flagged accounts',
      icon: 'ShieldAlert',
      bgColor: 'bg-[#FEF2F2]',
      textColor: 'text-[#EF4444]'
    },
    {
      id: 4,
      title: 'Invite Admin',
      description: 'Add team member',
      icon: 'UserPlus',
      bgColor: 'bg-[#ECFDF5]',
      textColor: 'text-[#10B981]'
    },
    {
      id: 5,
      title: 'Sync Analytics',
      description: 'Last: 5 min ago',
      icon: 'RefreshCw',
      bgColor: 'bg-[#F0F9FF]',
      textColor: 'text-[#0EA5E9]'
    },
    {
      id: 6,
      title: 'Run Audit',
      description: 'System health check',
      icon: 'Zap',
      bgColor: 'bg-[#FEFCE8]',
      textColor: 'text-[#EAB308]'
    }
  ]);

  const [highValueContracts] = useState([
    {
      id: 1,
      project: 'Enterprise CRM Platform Rebuild',
      phase: 'Phase 3 of 4',
      client: 'Salesforce Inc.',
      freelancer: 'Maria Santos',
      value: '$148,000',
      progress: 72,

      status: 'Active',

    },
    {
      id: 2,
      project: 'AI-Powered Analytics Dashboard',
      phase: 'Phase 2 of 5',
      client: 'DataViz Corp',
      freelancer: 'James Chen',
      value: '$92,500',
      progress: 45,

      status: 'Active',

    },
    {
      id: 3,
      project: 'Mobile Banking App Redesign',
      phase: 'Phase 4 of 4',
      client: 'FinPay Solutions',
      freelancer: 'Aisha Patel',
      value: '$76,000',
      progress: 88,

      status: 'Final Review',

    },
    {
      id: 4,
      project: 'Cloud Migration & DevOps',
      phase: 'Phase 1 of 3',
      client: 'NetSecure Ltd.',
      freelancer: 'Erik Johansson',
      value: '$124,000',
      progress: 5,

      status: 'Active',

    },
    {
      id: 5,
      project: 'E-Commerce Platform Scaling',
      phase: 'Phase 1 of 6',
      client: 'ShopGlobal Inc.',
      freelancer: 'Team Alpha',
      value: '$210,000',
      progress: 15,

      status: 'Under Dispute',

    }
  ]);

  useEffect(() => {
    // Example: fetch('/api/dashboard-stats').then(res => res.json()).then(data => setStats(data));
    // Example: fetch('/api/marketplace-stats').then(res => res.json()).then(data => setMarketplaceStats(data));
  }, []);

  // Pre-calculate paths
  const activityPath = generatePath(marketplaceStats.today.chartData, 300, 90, 8);
  const gmvPath = generatePath(stats.gmv.chartData);
  const revenuePath = generatePath(stats.revenue.chartData);

  return (
    <div className="">


      {/* Header section  */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 ">
        <div>
          <h1 className="text-[22px] font-[700] text-[#0F172A] leading-tight tracking-[-0.01em]">Platform Overview</h1>
          <p className="text-[13px] text-[#94A3B8] mt-1  tracking-wide">Real-time marketplace health & operations</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 border border-[#E2E8F0] rounded-[12px] text-[13px]  font-medium text-[#475569] transition-colors">
            Last 30 days
          </button>
          <button
            className="h-10 px-4 shadow-[0_4px_12px_rgba(230,109,61,0.25)] rounded-[12px] text-[13px] font-medium text-white "
            style={{ background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)' }}
            onClick={() => setShowReportModal(true)}
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Card 1: Total Platform GMV */}
        <div className="bg-white rounded-[16px] p-6 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between ">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="w-[40px] h-[40px] rounded-[12px] text-[#FF5A36] flex items-center justify-center " style={{ background: 'linear-gradient(135deg, rgba(230, 109, 61, 0.12) 0%, rgba(230, 109, 61, 0.04) 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 5h-5m0 0H9.5a3.5 3.5 0 1 0 0 7H12m0-7V3m0 2v7m0 0h2.5a3.5 3.5 0 1 1 0 7H12m0-7v7m0 0H6m6 0v2" /></svg>
              </div>
              <div className="flex items-center gap-1 bg-[#E8F8EE] text-[#22C55E] px-2.5 py-1 rounded-full text-xs font-[600]">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{stats.gmv.change}</span>
              </div>
            </div>

            <div className="mb-1.5">
              <h3 className="text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">Total Platform GMV</h3>
            </div>
            <div className="mb-1.5">
              <h2 className="text-[28px] font-[700] text-[#1A1F36] leading-none tracking-tight">{stats.gmv.value}</h2>
            </div>
            <div className="mb-6">
              <p className="text-[12px] text-[#94A3B8]">{stats.gmv.subtitle}</p>
            </div>
          </div>

          <div className="mt-auto -mx-2 -mb-2">
            <svg width="100%" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d={gmvPath} stroke="#E66D3D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d={`${gmvPath} L 200 32 L 0 32 Z`} fill="url(#gradient-orange)" />
              <defs>
                <linearGradient id="gradient-orange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E66D3D" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#E66D3D" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Card 2: Active Users */}
        <div className="bg-white rounded-[16px] p-6 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between ">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="w-[40px] h-[40px] rounded-[12px] bg-[#F4F2FF] text-[#6366F1] flex items-center justify-center">
                <Users className="w-[18px] h-[18px]" strokeWidth={2} />
              </div>
              <div className="flex items-center gap-1 bg-[#E8F8EE] text-[#22C55E] px-2.5 py-1 rounded-full text-[11px] font-[600]">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{stats.users.change}</span>
              </div>
            </div>

            <div className="mb-1.5">
              <h3 className="text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">Active Users</h3>
            </div>
            <div className="mb-1.5">
              <h2 className="text-[28px] font-[700] text-[#1A1F36] leading-none tracking-tight">{stats.users.value}</h2>
            </div>
            <div className="mb-6">
              <p className="text-[12px] text-[#94A3B8]">{stats.users.subtitle}</p>
            </div>
          </div>

          <div className="mt-auto pb-2.5">
            <div className="flex h-[5px] w-full rounded-full overflow-hidden">
              <div className={`bg-[#6B4EFE] rounded-full`} style={{ width: `${stats.users.freelancerPercentage}%` }}></div>
              <div className="bg-transparent w-[3%]"></div>
              <div className={`bg-[#EAE6FF] rounded-full`} style={{ width: `${stats.users.clientPercentage}%` }}></div>
            </div>
          </div>
        </div>

        {/* Card 3: Pending Disputes */}
        <div className="bg-white rounded-[16px] p-6 border border-[#FFE2D4] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between ">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="w-[40px] h-[40px] rounded-[12px] bg-[#FFF2EB] text-primary flex items-center justify-center">
                <TriangleAlert className="w-[18px] h-[18px]" strokeWidth={2} />
              </div>
              <div className="flex items-center gap-1 bg-[#FFF2EB] text-primary px-2.5 py-1 rounded-full text-xs font-[600]">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{stats.disputes.change}</span>
              </div>
            </div>

            <div className="mb-1.5">
              <h3 className="text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">Pending Disputes</h3>
            </div>
            <div className="mb-1.5">
              <h2 className="text-[28px] font-[700] text-[#1A1F36] leading-none tracking-tight">{stats.disputes.value}</h2>
            </div>
            <div className="mb-6">
              <p className="text-[12px] text-[#94A3B8]">{stats.disputes.subtitle}</p>
            </div>
          </div>

          <div className="mt-auto pb-1.5">
            <div className="flex items-center gap-2 text-[11px] font-medium text-primary">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_3px_#FFF2EB]"></div>
              Requires immediate attention
            </div>
          </div>
        </div>

        {/* Card 4: Commission Revenue */}
        <div className="bg-white rounded-[16px] p-6 border border-[#D1F1DF] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between ">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="w-[40px] h-[40px] rounded-[12px] bg-[#E8F8EE] text-[#22C55E] flex items-center justify-center">
                <TrendingUp className="w-[18px] h-[18px]" strokeWidth={2} />
              </div>
              <div className="flex items-center gap-1 bg-[#E8F8EE] text-[#22C55E] px-2.5 py-1 rounded-full text-xs font-[600]">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{stats.revenue.change}</span>
              </div>
            </div>

            <div className="mb-1.5">
              <h3 className="text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">Commission Revenue</h3>
            </div>
            <div className="mb-1.5">
              <h2 className="text-[28px] font-[700] text-[#1A1F36] leading-none tracking-tight">{stats.revenue.value}</h2>
            </div>
            <div className="mb-6">
              <p className="text-[12px] text-[#94A3B8]">{stats.revenue.subtitle}</p>
            </div>
          </div>

          <div className="mt-auto -mx-2 -mb-2">
            <svg width="100%" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d={revenuePath} stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d={`${revenuePath} L 200 32 L 0 32 Z`} fill="url(#gradient-green)" />
              <defs>
                <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>

      {/* Marketplace Activity Section */}
      <div className="mt-6 bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex items-center gap-4">
            <div className="w-[36px] h-[36px] rounded-[12px] text-primary flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(230, 109, 61, 0.1) 0%, rgba(230, 109, 61, 0.03) 100%)" }}>
              <Globe className="w-[17px] h-[17px]" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-[15px] font-[700] text-[#0F172A]">Marketplace Activity</h2>
              <p className="text-[12px] text-[#94A3B8] mt-0.5">Real-time job postings & hires by region</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11.5px] font-medium text-[#64748B]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              Job Postings
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#818CF8]"></div>
              Hires
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bar Chart Area (col-span-2) */}
          <div className="lg:col-span-2 flex flex-col justify-end h-[240px] relative">
            {/* Y-axis labels */}
            <div className="absolute left-6 top-0 bottom-6 flex flex-col justify-between text-[11px] text-[#94A3B8] ">
              <span>6.0k</span>
              <span>4.5k</span>
              <span>3.0k</span>
              <span>1.5k</span>
              <span>0</span>
            </div>

            {/* Bars container */}
            <div className="ml-12 flex justify-between items-end h-[calc(100%-24px)]  pb-0">
              {marketplaceStats.regions.map((region, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 w-full">
                  <div className="flex items-end gap-1.5 w-full justify-center h-[200px]">
                    <div className="w-[14px] md:w-[18px] bg-[#E66D3DD9]  rounded-t-[7px]" style={{ height: `${(region.p / 6000) * 100}%` }}></div>
                    <div className="w-[14px] md:w-[18px] bg-[#818CF8B2] rounded-t-[7px]" style={{ height: `${(region.h / 6000) * 100}%` }}></div>
                  </div>
                  <span className="text-[11px] text-[#94A3B8]  truncate">{region.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Area: Line Chart & Stats */}
          <div className="flex flex-col justify-between pb-6">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[12px] font-[500] text-[#64748B]">Today's Activity</h3>
                <div className="flex items-center gap-1 text-[#22C55E] text-[11px] font-[500]">
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} />
                  <span>Peak at {marketplaceStats.today.peakTime}</span>
                </div>
              </div>

              {/* Small Line Chart */}
              <div className="h-[90px] w-full relative">
                <svg width="100%" height="100%" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d={activityPath} stroke="#E66D3DD9" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d={`${activityPath} L 300 90 L 0 90 Z`} fill="url(#gradient-activity)" />
                  <defs>
                    <linearGradient id="gradient-activity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E66D3DD9" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#E66D3DD9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* X-axis labels for line chart */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[11px] text-[#94A3B8] font-medium px-1">
                  <span>12am</span>
                  <span>6am</span>
                  <span>12pm</span>
                  <span>6pm</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-12">
              <div className="border border-[#E2E8F0] rounded-[12px]   py-[5px] px-[13px]  bg-[#F8FAFC]">
                <p className="text-[11px] text-[#94A3B8] mb-1">Jobs Today</p>
                <p className="text-[20px] font-[700] text-[#0F172A]">{marketplaceStats.today.jobs}</p>
              </div>
              <div className="border border-[#E2E8F0] rounded-[12px]  py-[5px] pl-[13px]  bg-[#F8FAFC]">
                <p className="text-[11px] text-[#94A3B8] mb-1">Hires Today</p>
                <p className="text-[20px] font-[700] text-[#0F172A]">{marketplaceStats.today.hires}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Queue & Quick Actions Section */}
      <div className="mt-6 flex flex-col lg:flex-row gap-4">

        {/* Verification Queue */}
        <div className="lg:w-[65%] bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-[17px] font-[700] text-[#0F172A]">Verification Queue</h2>
              <span className="bg-[#FFF2EB] text-[#E66D3D] text-[12px] font-medium px-2.5 py-[3px] rounded-full">{verificationQueue.pendingCount} pending</span>
            </div>
            {verificationQueue.users.length > 4 && (
              <button
                onClick={() => setShowAllVerification(!showAllVerification)}
                className="text-[#E66D3D] text-[13px] font-medium hover:underline transition-all"
              >
                {showAllVerification ? 'Show less' : 'View all'}
              </button>
            )}
          </div>

          {/* List */}
          <div className="flex flex-col gap-3">
            {(showAllVerification ? verificationQueue.users : verificationQueue.users.slice(0, 4)).map(user => (
              <div key={user.id} className="flex flex-col xl:flex-row xl:items-center justify-between p-4 border border-[#F1F5F9] rounded-[12px] hover:border-[#E2E8F0] transition-colors gap-4 xl:gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                <div className="flex items-start sm:items-center gap-4">
                  <img src={user.avatar} alt={user.name} className="w-[38px] h-[38px] rounded-full object-cover" />

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[12px] font-[600] text-[#0F172A]">{user.name}</h3>
                      <div className="flex items-center text-[#F59E0B] text-[12px] font-[600]">
                        <Star className="w-[11px] h-[11px] fill-current mr-[3px]" />
                        <span className='text-[#64748B]'>{user.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-row  items-center gap-x-4 gap-y-2 text-[10px] text-[#94A3B8]">
                      <span className="text-[#64748B] ">{user.role}</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-[10px] h-[10px]" />
                        {user.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-[10px] h-[10px]" />
                        {user.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-5 sm:gap-8 justify-between xl:justify-end mt-2 xl:mt-0 xl:w-[320px]">
                  <div className="flex flex-col items-center min-w-[90px]">
                    <span className={`text-[10px] font-[600] px-2.5 py-0.5 rounded-full mb-1 ${user.passed === user.totalPassed ? 'text-[#05A660] bg-[#E8F8EE]' : 'text-[#D97706] bg-[#FEF3C7]'}`}>
                      {user.passed}/{user.totalPassed} passed
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">{user.portfolioCount} portfolio items</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-[#F1F5F9] text-[#475569] text-[11px] font-[500] rounded-[8px] hover:bg-[#F1F5F9] transition-colors border border-[#E2E8F0]">
                      <Eye className="w-[12px] h-[12px]" />
                      Review
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-primary text-white text-[11px] font-[500] rounded-[8px]  transition-colors shadow-[0_2px_8px_rgba(230,109,61,0.2)] border-none">
                      <CheckCircle2 className="w-[12px] h-[12px]" />
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}

        <div className="lg:w-[35%] bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col max-h-fit">
          <h2 className="text-[14px] font-[600] text-[#0F172A] mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map(action => (
              <button key={action.id} className="flex flex-row gap-1 items-start p-3 border border-[#E2E8F0] rounded-[8px] text-left  hover:shadow-sm transition-all bg-white"
                onClick={() => { if (action.icon === 'Megaphone') setShowBroadcastModal(true); }}
              >
                <div className={`w-[32px] h-[32px] rounded-[8px] flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${action.bgColor} ${action.textColor}`}>
                  {action.icon === 'Megaphone' && <img src={actionIcon} className="w-[13px] h-[13px]" alt="Megaphone" />}
                  {action.icon === 'Download' && <Download className="w-[14px] h-[14px]" />}
                  {action.icon === 'ShieldAlert' && <ShieldAlert className="w-[14px] h-[14px]" />}
                  {action.icon === 'UserPlus' && <UserPlus className="w-[14px] h-[14px]" />}
                  {action.icon === 'RefreshCw' && <RefreshCw className="w-[14px] h-[14px]" />}
                  {action.icon === 'Zap' && <Zap className="w-[14px] h-[14px]" />}
                </div>
                <div className="flex flex-col justify-between  w-14">
                  <h3 className="text-[12px] font-[500] text-[#0F172A] leading-snug mb-1.5 ">{action.title}</h3>
                  <p className="text-[10px] text-[#94A3B8] leading-tight">{action.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>


      </div>

      {/* High-Value Contracts Section */}
      <div className="mt-6 bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
        <div className="flex justify-between items-start   border-[#E2E8F0] pb-6">
          <div>
            <h2 className="text-[15px] font-[600] text-[#0F172A]">High-Value Contracts</h2>
            <p className="text-[12px] text-[#94A3B8]  mt-1">Monitoring top projects by contract value</p>
          </div>
          <button className="flex items-center gap-1.5 h-9 px-4 border border-[#E2E8F0] rounded-[10px] text-[12px] font-[500] text-[#64748B]  transition-colors">
            <ExternalLink className="w-[13px] h-[13px]" />
            Export
          </button>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[#F1F5F9] block md:table-row pb-2 mb-3 md:mb-0 md:pb-0">
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[28%] pl-2">Project</th>
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[15%]">Client</th>
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[15%]">Freelancer</th>
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[12%]">Value</th>
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[15%]">Progress</th>
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[12%]">Status</th>
                <th className="pb-4 text-[11px] font-[500] text-[#94A3B8] tracking-wider uppercase w-[3%]"></th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {highValueContracts.map((contract, index) => {
                const styles = getStatusStyles(contract.status);
                return (
                  <tr key={contract.id} className={`block md:table-row ${index !== highValueContracts.length - 1 ? 'border-b border-[#F1F5F9]' : ''}`}>
                    <td className="py-4 pr-4 pl-2 block md:table-cell">
                      <p className="text-[13px] font-[500] text-[#0F172A] mb-0.5">{contract.project}</p>
                      <p className="text-[11px] text-[#94A3B8]">{contract.phase}</p>
                    </td>
                    <td className="py-4 pr-4 text-[12px] text-[#475569]  block md:table-cell">{contract.client}</td>
                    <td className="py-4 pr-4 text-[12px] text-[#475569]block md:table-cell">{contract.freelancer}</td>
                    <td className="py-4 pr-4 text-[13px] font-[600] text-[#0F172A] block md:table-cell">{contract.value}</td>
                    <td className="py-4 pr-4 block md:table-cell">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${contract.progress}%`, background: styles.progressBg }}></div>
                        </div>
                        <span className="text-[11px] font-[500] text-[#64748B]">{contract.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 pr-4 block md:table-cell">
                      <div className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-full text-[12px] font-[500]" style={{ color: styles.textColor, backgroundColor: styles.bgColor }}>
                        <div className={`w-1.5 h-1.5 rounded-full ${styles.dotClass}`}></div>
                        {contract.status}
                      </div>
                    </td>
                    <td className="py-4 text-right block md:table-cell">
                      <button className="text-[#94A3B8] hover:text-[#0F172A] transition-colors p-1">
                        <MoreHorizontal className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Generate Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setShowReportModal(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-[20px] shadow-[0_24px_80px_-16px_rgba(0,0,0,0.18)] w-full max-w-[520px] mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <div
                  className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(230, 109, 61, 0.12) 0%, rgba(230, 109, 61, 0.04) 100%)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E66D3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h2 className="text-[16px] font-[700] text-[#0F172A]">Generate Report</h2>
              </div>
              <button
                onClick={() => setShowReportModal(false)}
                className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-[#F1F5F9] transition-colors text-[#94A3B8] hover:text-[#475569]"
              >
                <X className="w-[18px] h-[18px]" />
              </button>
            </div>

            {/* Report Type */}
            <div className="mb-6">
              <label className="text-[12px] font-[500] text-[#475569] mb-3 block">Report Type</label>
              <div className="flex flex-wrap gap-2.5">
                {['Full Platform', 'Revenue Only', 'User Growth', 'Disputes Summary'].map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedReportType(type)}
                    className={`px-4 py-2 rounded-[10px] text-[12px] font-[500] transition-all border border-[#E2E8F0] ${selectedReportType === type
                      ? ' bg-[#E66D3D0F] text-[#475569] '
                      : ' bg-white text-[#475569] hover:border-[#CBD5E1]'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Range */}
            <div className="mb-6">
              <label className="text-[12px] font-[500] text-[#475569] mb-3 block">Date Range</label>
              <DateRangePicker
                startDate={dateRange.start}
                endDate={dateRange.end}
                onChange={(start, end) => setDateRange({ start, end })}
              />
            </div>

            {/* Format */}
            <div className="mb-8">
              <label className="text-[12px] font-[500] text-[#475569] mb-3 block">Format</label>
              <div className="flex gap-2.5">
                {['PDF', 'CSV', 'Excel'].map(fmt => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`px-4 py-2 rounded-[10px] text-[12px] font-[500] transition-all border border-[#E2E8F0] ${selectedFormat === fmt
                      ? ' bg-[#E66D3D0F] text-[#475569] '
                      : ' bg-white text-[#475569] '
                      }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowReportModal(false)}
                className="px-6 py-2.5 rounded-[12px] text-[12px] font-[500] text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-6 py-2.5 rounded-[10px] text-[12px] font-[500] text-white shadow-[0_4px_12px_rgba(230,109,61,0.3)] transition-all hover:shadow-[0_6px_18px_rgba(230,109,61,0.35)]"
                style={{ background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)' }}
                onClick={() => setShowReportModal(false)}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Broadcast Announcement Modal */}
      {showBroadcastModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setShowBroadcastModal(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-[20px] shadow-[0_24px_80px_-16px_rgba(0,0,0,0.18)] w-full max-w-[520px] mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <div
                  className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(230, 109, 61, 0.12) 0%, rgba(230, 109, 61, 0.04) 100%)' }}
                >
                  <img src={actionIcon} className="w-[18px] h-[18px]" alt="Broadcast" />
                </div>
                <div>
                  <h2 className="text-[16px] font-[700] text-[#0F172A]">Broadcast Announcement</h2>
                  <p className="text-[12px] text-[#94A3B8] mt-0.5">Send to all 128.4K platform users</p>
                </div>
              </div>
              <button
                onClick={() => setShowBroadcastModal(false)}
                className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-[#F1F5F9] transition-colors text-[#94A3B8] hover:text-[#475569]"
              >
                <X className="w-[18px] h-[18px]" />
              </button>
            </div>

            {/* Target Audience */}
            <div className="mb-5 mt-5">
              <label className="text-[12px] font-[500] text-[#475569] mb-3 block">Target Audience</label>
              <div className="flex flex-wrap gap-2.5">
                {['All Users', 'Freelancers', 'Clients'].map(audience => (
                  <button
                    key={audience}
                    onClick={() => setSelectedAudience(audience)}
                    className={`px-4 py-2 rounded-[10px] text-[12px] font-[500] transition-all border border-[#E2E8F0] ${selectedAudience === audience
                      ? ' bg-[#E66D3D0F] text-[#475569] '
                      : ' bg-white text-[#475569] hover:border-[#CBD5E1]'
                      }`}
                  >
                    {audience}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-[12px] font-[500] text-[#475569] mb-3 block">Message</label>
              <textarea
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                placeholder="Type your announcement..."
                className="w-full h-[130px] px-4 py-3 border border-[#E2E8F0] rounded-[12px] text-[13px] text-[#334155] placeholder-[#94A3B8] resize-none focus:outline-none focus:border-[#CBD5E1] transition-colors"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowBroadcastModal(false)}
                className="px-6 py-2.5 rounded-[12px] text-[12px] font-[500] text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors"
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-2 px-6 py-2.5 rounded-[10px] text-[12px] font-[500] text-white shadow-[0_4px_12px_rgba(230,109,61,0.3)] transition-all hover:shadow-[0_6px_18px_rgba(230,109,61,0.35)]"
                style={{ background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)' }}
                onClick={() => setShowBroadcastModal(false)}
              >
                <Send className="w-[13px] h-[13px]" />
                Broadcast
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Dashboard;