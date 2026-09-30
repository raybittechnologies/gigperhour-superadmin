import { useState, useEffect } from 'react';
import { Briefcase, DollarSign } from 'lucide-react';

const AVATAR_PALETTES = [
    { bg: '#FFEDD5', text: '#9A3412' }, // Orange/Peach (Alex)
    { bg: '#F7FEE7', text: '#4D7C0F' }, // Lime/Yellow-Green (Sarah)
    { bg: '#DCFCE7', text: '#15803D' }, // Green (James)
    { bg: '#E0F2FE', text: '#0369A1' }, // Blue
    { bg: '#FCE7F3', text: '#BE185D' }, // Pink
    { bg: '#F3E8FF', text: '#4338CA' }, // Purple
];

const getAvatarTheme = (index) => {
    if (typeof index !== 'number') return AVATAR_PALETTES[0];
    return AVATAR_PALETTES[index % AVATAR_PALETTES.length];
};

const MATCH_COLORS = ['#10B981', '#F59E0B', '#EA580C'];

const getMatchColor = (index) => {
    if (typeof index !== 'number') return MATCH_COLORS[0];
    // Use a multiplier to ensure match colors cycle somewhat independently of the avatar colors
    return MATCH_COLORS[(index * 7) % MATCH_COLORS.length];
};

const PROPOSALS_DATA = [
    { initial: 'B', name: 'Blex M.', rating: 4.9, price: '$95/hr', location: 'United States', jobs: '84 jobs done', match: 16, title: 'Senior React & TypeScript Developer', success: 99, coverLetter: "I'm excited about this opportunity at TechCorp. With 8+ years of React experience and a track record of building scalable SaaS platforms, I believe I'm an excellent fit. I've worked on similar projects involving real-time data dashboards and complex state management. I'd love to discuss how my experience at Stripe can benefit your team.", skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Jest', 'Tailwind CSS'], totalEarnings: '$142,000+', memberSince: 'Mar 2022', responseTime: '< 1 hour' },
    { initial: 'Y', name: 'Yarah K.', rating: 5, price: '$110/hr', location: 'Canada', jobs: '56 jobs done', match: 92, title: 'Senior Full Stack Developer', success: 100, coverLetter: "I specialize in the React ecosystem with extensive Node.js backend experience.", skills: ['React', 'Node.js', 'Express', 'MongoDB'], totalEarnings: '$89,000+', memberSince: 'Jun 2021', responseTime: '< 2 hours' },
    { initial: 'J', name: 'James L.', rating: 4.7, price: '$85/hr', location: 'United Kingdom', jobs: '42 jobs done', match: 88, title: 'React Performance Expert', success: 94, coverLetter: "I focus on high-performance React applications, optimizing rendering cycles and state management.", skills: ['React', 'Redux', 'Webpack', 'Performance Tuning'], totalEarnings: '$65,000+', memberSince: 'Jan 2023', responseTime: '< 1 hour' },
    { initial: 'J', name: 'James L.', rating: 4.7, price: '$85/hr', location: 'United Kingdom', jobs: '42 jobs done', match: 88, title: 'React Performance Expert', success: 94, coverLetter: "I focus on high-performance React applications, optimizing rendering cycles and state management.", skills: ['React', 'Redux', 'Webpack', 'Performance Tuning'], totalEarnings: '$65,000+', memberSince: 'Jan 2023', responseTime: '< 1 hour' }
    ,
    { initial: 'J', name: 'James L.', rating: 4.7, price: '$85/hr', location: 'United Kingdom', jobs: '42 jobs done', match: 88, title: 'React Performance Expert', success: 94, coverLetter: "I focus on high-performance React applications, optimizing rendering cycles and state management.", skills: ['React', 'Redux', 'Webpack', 'Performance Tuning'], totalEarnings: '$65,000+', memberSince: 'Jan 2023', responseTime: '< 1 hour' }
];

const PORTFOLIO_MOCK_DATA = [
    { title: 'SaaS Dashboard for FinTech', rating: 5 },
    { title: 'E-commerce Platform Rebuild', rating: 4.9 },
    { title: 'Real-time Analytics Tool', rating: 5 },
    { title: 'Real-time Analytics Tool new', rating: 5 },
];

const JobDetailsSidebar = ({ selectedJob, setSelectedJob }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isFlagModalOpen, setIsFlagModalOpen] = useState(false);
    const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
    const [flagCategory, setFlagCategory] = useState('Spam / Scam');
    const [activeTab, setActiveTab] = useState('Overview');
    const [selectedProposal, setSelectedProposal] = useState(null);
    const [activeModalTab, setActiveModalTab] = useState('Proposal');

    // Reset fullscreen when jumping between different selected jobs
    useEffect(() => {
        setIsFullScreen(false);
        setIsContactModalOpen(false);
        setIsFlagModalOpen(false);
        setIsSuspendModalOpen(false);
        setActiveTab('Overview');
        setSelectedProposal(null);
    }, [selectedJob]);

    return (
        <>
            {/* Backdrop */}
            {selectedJob && (
                <div
                    className={`fixed inset-0 z-40 transition-all duration-300 ${isFullScreen ? 'bg-black/40 backdrop-blur-md' : 'bg-white/50'}`}
                    onClick={() => {
                        setSelectedJob(null);
                        setIsFullScreen(false);
                    }}
                />
            )}

            {/* Container */}
            <div
                className={`fixed z-50 bg-white flex flex-col transition-all duration-300 ease-in-out ${isFullScreen
                    ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[90%] h-[90vh] rounded-[24px] shadow-2xl opacity-100'
                    : `top-0 right-0 h-screen w-[500px] shadow-[-8px_0_32px_rgba(0,0,0,0.08)] transform ${selectedJob ? 'translate-x-0' : 'translate-x-full'}`
                    }`}
            >
                {selectedJob && (
                    <>
                        {/* Header */}
                        <div className="flex flex-col p-6 border-b border-[#F1F5F9] relative flex-shrink-0">
                            <button
                                onClick={() => {
                                    setSelectedJob(null);
                                    setIsFullScreen(false);
                                }}
                                className="absolute top-6 right-6 p-1.5 text-[#94A3B8] hover:bg-[#F1F5F9] rounded-full transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="flex gap-2 mb-4">
                                <span className={`px-2 py-0.5 text-[11px] font-[500] rounded-full ${selectedJob.type === 'Hourly' ? 'bg-[#FFF2EB] text-[#E66D3D]' : 'bg-[#EEF2FF] text-[#6366F1]'}`}>
                                    {selectedJob.type}
                                </span>
                                <span className="px-2 py-0.5 text-[11px] font-[500] bg-[#ECFDF5] text-[#10B981] rounded-full">Active</span>
                                <span className="px-2 py-0.5 text-[11px] font-[500] text-[#94A3B8]">#00003</span>
                            </div>

                            <h2 className="text-[18px] font-[700] text-[#0F172A] mb-1.5">{selectedJob.title}</h2>
                            <div className="flex items-center gap-4 text-[12px] text-[#94A3B8]">
                                <span>{selectedJob.company}</span>
                                <div className="flex items-center gap-1 text-[11px]">
                                    <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {selectedJob.location}
                                </div>
                                <div className="flex items-center gap-1 text-[11px]">
                                    <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {selectedJob.time}
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex px-6 pt-2 border-b border-[#F1F5F9] gap-6 flex-shrink-0">
                            <button
                                onClick={() => setActiveTab('Overview')}
                                className={`pb-2 text-[12px] font-[500] ${activeTab === 'Overview' ? 'text-[#E66D3D] border-b-2 border-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}>Overview</button>
                            <button
                                onClick={() => setActiveTab('Proposals')}
                                className={`pb-2 text-[12px] font-[500] ${activeTab === 'Proposals' ? 'text-[#E66D3D] border-b-2 border-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}>Proposals ({selectedJob.proposals || 8})</button>
                            <button
                                onClick={() => setActiveTab('Activity')}
                                className={`pb-2 text-[12px] font-[500] ${activeTab === 'Activity' ? 'text-[#E66D3D] border-b-2 border-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}>Activity</button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">

                            {activeTab === 'Overview' && (
                                <>
                                    {/* Key Stats */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-[#F8FAFC] rounded-[12px] p-4 flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-[600] text-[#94A3B8] tracking-widest mb-1.5">Budget</span>
                                            <span className="text-[15px] font-[700] text-[#0F172A]">{selectedJob.price}</span>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-[12px] p-4 flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-[600] text-[#94A3B8] tracking-widest mb-1.5">Duration</span>
                                            <span className="text-[15px] font-[700] text-[#0F172A]">6+ months</span>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-[12px] p-4 flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-[600] text-[#94A3B8] tracking-widest mb-1.5">Experience</span>
                                            <span className="text-[15px] font-[700] text-[#0F172A]">Expert</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h3 className="text-[13px] font-[600] text-[#0F172A] mb-3">Description</h3>
                                        <p className="text-[13px] text-[#475569] leading-relaxed">
                                            We need a {selectedJob.title.toLowerCase()} to design and deploy production-grade pipelines for our data platform. The role involves building recommendation engines, anomaly detection systems, and NLP models for automated insights generation. Experience with large-scale data processing is essential.
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h3 className="text-[13px] font-[600] text-[#0F172A] mb-3">Required Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'AWS SageMaker', 'Spark'].map((skill, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-[#F1F5F9] text-[#475569] text-[12px] rounded-[8px] font-[500]">{skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Attachments */}
                                    <div className="flex items-center gap-2 border border-[#F1F5F9] bg-[#F8FAFC] p-4 rounded-[12px] text-[#64748B] text-[12px] ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        3 attachments
                                    </div>

                                    {/* Client Profile */}
                                    <div className="border border-[#E2E8F0] rounded-[16px] p-5 mt-2">
                                        <div className="flex items-center gap-2 text-primary text-[13px] font-[600] mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                            <span className='text-[#0F172A]'> Client Profile</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                                            <div>
                                                <p className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-wider mb-1">Company</p>
                                                <p className="text-[13px] font-[500] text-[#0F172A]">{selectedJob.company}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-wider mb-1">Country</p>
                                                <p className="text-[13px] font-[500] text-[#0F172A]">Germany</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-wider mb-1">Rating</p>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="flex text-[#F59E0B]">
                                                        {[1, 2, 3, 4].map(i => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                    </div>
                                                    <span className="text-[11px] text-[#64748B]">4.8</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-wider mb-1">Total Spent</p>
                                                <p className="text-[13px] font-[500] text-[#0F172A]">$520K+</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-wider mb-1">Total Hires</p>
                                                <p className="text-[13px] font-[500] text-[#0F172A]">31</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-wider mb-1">Category</p>
                                                <p className="text-[13px] font-[500] text-[#0F172A]">Data/AI</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === 'Proposals' && (
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-[13px] font-[500] text-[#64748B]">
                                            <span className="font-[700] text-[#0F172A]">{selectedJob.proposals || 8}</span> proposals submitted
                                        </h3>
                                        <button className="text-[12px] font-[500] text-[#E66D3D] hover:underline">
                                            Show all {selectedJob.proposals || 8}
                                        </button>
                                    </div>

                                    {PROPOSALS_DATA.map((prop, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => { setSelectedProposal({ ...prop, themeIndex: idx }); setActiveModalTab('Proposal'); }}
                                            className="border border-[#F1F5F9] rounded-[12px] p-4 bg-white hover:border-[#E2E8F0] hover:shadow-sm transition-all cursor-pointer flex items-center justify-between">
                                            <div className="flex gap-4 items-center">
                                                <div
                                                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[15px] font-[600] flex-shrink-0"
                                                    style={{ backgroundColor: getAvatarTheme(idx).bg, color: getAvatarTheme(idx).text }}
                                                >
                                                    {prop.initial}
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[13px] font-[500] text-[#0F172A]">{prop.name}</span>
                                                        <div className="flex items-center gap-1">
                                                            <div className="flex text-[#F59E0B]">
                                                                {[1, 2, 3, 4, 5].map(i => (
                                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill={i <= Math.floor(prop.rating) ? "currentColor" : "none"} stroke={i <= Math.floor(prop.rating) ? "none" : "currentColor"} strokeWidth={i <= Math.floor(prop.rating) ? "0" : "2"}>
                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span className="text-[11px]  text-[#64748B]">{prop.rating}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[11px]  text-[#64748B]">
                                                        <span>Proposed: <span className="">{prop.price}</span></span>
                                                        <span>·</span>
                                                        <span className="flex items-center gap-1 text-[#94A3B8] font-[300]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                            {prop.location}
                                                        </span>
                                                        <span>·</span>
                                                        <span className='text-[#94A3B8] font-[300]'>{prop.jobs}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex flex-col items-end gap-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-[47px] h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden">
                                                            <div className="h-full rounded-full" style={{ width: `${prop.match}%`, backgroundColor: getMatchColor(idx) }}></div>
                                                        </div>
                                                        <span className="text-[11px] font-[600]" style={{ color: getMatchColor(idx) }}>{prop.match}%</span>
                                                    </div>
                                                    <span className="text-[10px] uppercase text-[#94A3B8] tracking-wider">Match Score</span>
                                                </div>
                                                <svg className="text-[#CBD5E1]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer Actions */}
                        <div className="py-5 px-3 border-t border-[#F1F5F9] grid grid-cols-[1fr_1fr_1.2fr_1.5fr] gap-3 flex-shrink-0">
                            <button
                                onClick={() => setIsSuspendModalOpen(true)}
                                className="flex justify-center items-center gap-2 h-[40px] text-[12px] font-[500] text-[#EF4444] border border-[#FEE2E2] rounded-[8px] hover:bg-[#FEF2F2] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                Suspend
                            </button>
                            <button
                                onClick={() => setIsFlagModalOpen(true)}
                                className="flex justify-center items-center gap-2 h-[40px] text-[12px] font-[500] text-[#F59E0B] border border-[#FDE68A] rounded-[8px] hover:bg-[#FFFBEB] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                Flag
                            </button>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="flex justify-center items-center gap-2 h-[40px] text-[12px] font-[500] text-[#475569] border border-[#E2E8F0] rounded-[8px] hover:bg-[#F8FAFC] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                Contact Client
                            </button>
                            <button
                                onClick={() => setIsFullScreen(!isFullScreen)}
                                className="flex justify-center items-center gap-2 h-[40px] text-[12px] font-[500] text-white bg-[#E66D3D] rounded-[8px] hover:bg-[#D45A2A] shadow-[0_2px_8px_rgba(230,109,61,0.25)] transition-colors"
                            >
                                {isFullScreen ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>
                                        Minimize
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                        View Full Page
                                    </>
                                )}
                            </button>
                        </div>
                    </>
                )}
            </div>
            {/* Contact Client Modal */}
            {selectedJob && isContactModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 no-scrollbar">
                    <div
                        className="fixed inset-0 bg-black/20 no-scrollbar backdrop-blur-sm transition-opacity"
                        onClick={() => setIsContactModalOpen(false)}
                    />

                    <div className="relative w-full max-w-[580px] max-h-[85vh] flex flex-col bg-white rounded-[24px] shadow-2xl z-10 animate-in  fade-in duration-200 overflow-hidden no-scrollbar">
                        <div className="px-6 py-7 overflow-y-auto flex-1 no-scrollbar">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EEF2FF] text-[#818CF8] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-[600] text-[#0F172A] leading-tight mb-1">Contact Client</h2>
                                        <p className="text-[14px] text-[#94A3B8]">{selectedJob.company}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsContactModalOpen(false)}
                                    className="p-2 text-[#94A3B8] hover:bg-[#F1F5F9] rounded-full transition-colors mt-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            {/* Job Info Card */}
                            <div className="flex items-center gap-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[10px] p-4 mb-4">
                                <div className="w-[32px] h-[32px] rounded-full bg-[#FFF2EB] text-[#E66D3D] flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-[13px] font-[500] text-[#0F172A] mb-1.5">{selectedJob.title}</h3>
                                    <p className="text-[11px] text-[#94A3B8]">Job #00003 · {selectedJob.price}</p>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="mb-4">
                                <label className="block text-[12px] font-[500] text-[#475569] mb-3">Subject</label>
                                <input
                                    type="text"
                                    defaultValue="Regarding your job posting"
                                    className="w-full h-[40px] px-[14px] text-[12.5px] text-[#0F172A] border border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#93C5FD] focus:ring-1 focus:ring-[#93C5FD] transition-colors"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-[12px] font-[500] text-[#475569] mb-3">Message <span className="text-[#94A3B8]">*</span></label>
                                <textarea
                                    placeholder="Type your message to the client..."
                                    className="w-full h-[130px] p-[14px] text-[12.5px] text-[#0F172A80] border border-[#E2E8F0] rounded-[10px] resize-none focus:outline-none focus:border-[#93C5FD] focus:ring-1 focus:ring-[#93C5FD] transition-colors "
                                />
                            </div>

                            {/* Quick Templates */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[11px] text-[#94A3B8]">Quick templates:</span>
                                <div className="flex gap-2">
                                    <button className="px-3.5 py-1.5 text-[10.5px] font-[500] text-[#64748B] border border-[#F1F5F9] rounded-[6px] hover:bg-[#F8FAFC] transition-colors">Request Info</button>
                                    <button className="px-3.5 py-1.5 text-[10.5px] font-[500] text-[#64748B] border border-[#F1F5F9] rounded-[6px] hover:bg-[#F8FAFC] transition-colors">Policy Warning</button>
                                    <button className="px-3.5 py-1.5 text-[10.5px] font-[500] text-[#64748B] border border-[#F1F5F9] rounded-[6px] hover:bg-[#F8FAFC] transition-colors">Account Review</button>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsContactModalOpen(false)}
                                    className="px-[18px] py-[11px] text-[13px] font-[500] text-[#475569] border border-[#E2E8F0] rounded-[10px] hover:bg-[#F8FAFC] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    style={{ background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' }}
                                    className="flex items-center gap-2 px-[18px] py-[11px] opacity-[60%] text-[13px] font-[500] text-white hover:opacity-90 rounded-[10px] shadow-[0_2px_8px_rgba(99,102,241,0.25)] transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Flag Modal */}
            {selectedJob && isFlagModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 no-scrollbar">
                    <div
                        className="fixed inset-0 bg-black/20 no-scrollbar backdrop-blur-sm transition-opacity"
                        onClick={() => setIsFlagModalOpen(false)}
                    />

                    <div className="relative w-full max-w-[500px] flex flex-col bg-white rounded-[24px] shadow-2xl z-10 animate-in fade-in duration-200 overflow-hidden no-scrollbar">
                        <div className="px-7 py-7 overflow-y-auto flex-1 no-scrollbar">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F59E0B1A] text-[#F59E0B] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-[600] text-[#0F172A] leading-tight mb-1">Flag Job for Review</h2>
                                        <p className="text-[12px] text-[#94A3B8]">#00003 · {selectedJob.title}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsFlagModalOpen(false)}
                                    className="p-2 text-[#94A3B8] hover:bg-[#F1F5F9] rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            {/* Flag Category */}
                            <div className="mb-6 mt-2">
                                <label className="block text-[12px] font-[500] text-[#475569] mb-3">Flag Category</label>
                                <div className="flex flex-wrap gap-2.5">
                                    {[
                                        'Spam / Scam',
                                        'Inappropriate Content',
                                        'Policy Violation',
                                        'Misleading Info',
                                        'Duplicate Posting',
                                        'Other'
                                    ].map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFlagCategory(cat)}
                                            className={`px-4 py-2 text-[12px] font-[500] rounded-[8px] transition-colors ${flagCategory === cat
                                                ? 'text-[#92400E] border border-[#F59E0B] bg-[#F59E0B14]'
                                                : 'text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC]'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <div className="mb-6">
                                <label className="block text-[12px] font-[500] text-[#475569] mb-3">Additional Notes</label>
                                <textarea
                                    placeholder="Provide additional context for the review team..."
                                    className="w-full h-[90px] p-[14px] text-[12.5px] text-[#0F172A] border border-[#E2E8F0] rounded-[10px] resize-none focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors"
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsFlagModalOpen(false)}
                                    className="px-[18px] py-[11px] text-[13px] font-[500] text-[#475569] border border-[#E2E8F0] rounded-[10px] hover:bg-[#F8FAFC] bg-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-[18px] py-[11px] text-[13px] font-[500] text-white bg-[#F59E0B] hover:bg-[#D97706] rounded-[10px] transition-colors"
                                >
                                    Submit Flag
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Suspend Modal */}
            {selectedJob && isSuspendModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 no-scrollbar">
                    <div
                        className="fixed inset-0 bg-black/20 no-scrollbar backdrop-blur-sm transition-opacity"
                        onClick={() => setIsSuspendModalOpen(false)}
                    />

                    <div className="relative w-full max-w-[500px] flex flex-col bg-white rounded-[24px] shadow-2xl z-10 animate-in fade-in duration-200 overflow-hidden no-scrollbar">
                        <div className="px-7 py-7 overflow-y-auto flex-1 no-scrollbar">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EF44441A] text-[#EF4444] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-[600] text-[#0F172A] leading-tight mb-1">Suspend Job</h2>
                                        <p className="text-[12px] text-[#94A3B8]">#00003 · {selectedJob.title}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsSuspendModalOpen(false)}
                                    className="p-2 text-[#94A3B8] hover:bg-[#F1F5F9] rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            {/* Warning Message */}
                            <div className="flex gap-3 p-4 mb-6 bg-[#EF44440A] border border-[#EF44441A] rounded-[10px]">
                                <svg className="flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                <p className="text-[13px] text-[#7F1D1D] font-[400] leading-relaxed">
                                    Suspending this job will immediately remove it from the marketplace and notify the client. All active proposals will be paused.
                                </p>
                            </div>

                            {/* Reason Notes */}
                            <div className="mb-6">
                                <label className="block text-[12px] font-[500] text-[#475569] mb-3">Reason for Suspension *</label>
                                <textarea
                                    placeholder="Provide a detailed reason for suspending this job..."
                                    className="w-full h-[90px] p-[14px] text-[12.5px] text-[#0F172A] border border-[#E2E8F0] rounded-[10px] resize-none focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-colors"
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsSuspendModalOpen(false)}
                                    className="px-[18px] py-[11px] text-[13px] font-[500] text-[#475569] border border-[#E2E8F0] rounded-[10px] hover:bg-[#F8FAFC] bg-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-[18px] py-[11px] text-[13px] font-[500] text-white bg-[#F87171] rounded-[10px] transition-colors"
                                >
                                    Suspend Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Proposal Details Modal */}
            {selectedJob && selectedProposal && (() => {
                const renderSkills = (title) => (
                    <div className="mb-2">
                        <h3 className="text-[13px] font-[700] text-[#0F172A] mb-3">{title}</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {selectedProposal.skills.map(skill => (
                                <span key={skill} className="px-3.5 py-1.5 text-[12px] font-[500] text-[#475569] bg-[#F1F5F9] rounded-[8px]">{skill}</span>
                            ))}
                        </div>
                    </div>
                );

                return (
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 no-scrollbar">
                        <div
                            className="fixed inset-0 bg-black/20 no-scrollbar backdrop-blur-sm transition-opacity"
                            onClick={() => setSelectedProposal(null)}
                        />

                        <div className="relative w-full max-w-[650px] flex flex-col bg-white rounded-[24px] shadow-2xl z-10 animate-in fade-in duration-200 overflow-hidden no-scrollbar">
                            <div className="px-8 py-8 overflow-y-auto max-h-[90vh] flex-1 no-scrollbar">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-[600]"
                                            style={{ backgroundColor: getAvatarTheme(selectedProposal.themeIndex).bg, color: getAvatarTheme(selectedProposal.themeIndex).text }}
                                        >
                                            {selectedProposal.initial}
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-[18px] font-[700] text-[#0F172A] leading-tight mb-1">{selectedProposal.name}</h2>
                                            <p className="text-[13px] text-[#64748B] mb-1.5">{selectedProposal.title}</p>
                                            <div className="flex items-center gap-2 text-[12px] font-[500] text-[#94A3B8]">
                                                <div className="flex items-center gap-1">
                                                    <div className="flex text-[#F59E0B]">
                                                        {[1, 2, 3, 4, 5].map(i => (
                                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i <= Math.floor(selectedProposal.rating) ? "currentColor" : "none"} stroke={i <= Math.floor(selectedProposal.rating) ? "none" : "currentColor"} strokeWidth={i <= Math.floor(selectedProposal.rating) ? "0" : "2"}>
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span>{selectedProposal.rating}</span>
                                                </div>
                                                <span>·</span>
                                                <span className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                    {selectedProposal.location}
                                                </span>
                                                <span>·</span>
                                                <span className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    Just now
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProposal(null)}
                                        className="p-2 text-[#94A3B8] hover:bg-[#F1F5F9] rounded-full transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[16px] p-4 pl-0 pr-0 mb-6">
                                    <div className="flex flex-col items-center justify-center border-r border-[#E2E8F0] last:border-0 relative">
                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-1.5">Proposed Rate</span>
                                        <span className="text-[16px] font-[700] text-[#0F172A]">{selectedProposal.price}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center border-r border-[#E2E8F0] last:border-0 relative">
                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-1.5">Match Score</span>
                                        <span className="text-[16px] font-[700]" style={{ color: getMatchColor(selectedProposal.themeIndex) }}>{selectedProposal.match}%</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center border-r border-[#E2E8F0] last:border-0 relative">
                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-1.5">Success Rate</span>
                                        <span className="text-[16px] font-[700] text-[#10B981]">{selectedProposal.success}%</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center border-r border-[#E2E8F0] last:border-0 relative">
                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-1.5">Jobs Done</span>
                                        <span className="text-[16px] font-[700] text-[#0F172A]">{selectedProposal.jobs.split(' ')[0]}</span>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="flex gap-6 border-b border-t pt-3 border-[#F1F5F9] mb-6 px-2">
                                    <button
                                        onClick={() => setActiveModalTab('Proposal')}
                                        className={`pb-3 text-[12.5px] font-[500] ${activeModalTab === 'Proposal' ? 'text-primary border-b-2 border-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}
                                    >Proposal</button>
                                    <button
                                        onClick={() => setActiveModalTab('Profile')}
                                        className={`pb-3 text-[12.5px] font-[500] ${activeModalTab === 'Profile' ? 'text-primary border-b-2 border-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}
                                    >Profile</button>
                                    <button
                                        onClick={() => setActiveModalTab('Portfolio')}
                                        className={`pb-3 text-[12.5px] font-[500] ${activeModalTab === 'Portfolio' ? 'text-primary border-b-2 border-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}
                                    >Portfolio</button>
                                </div>

                                {/* Modal Content */}
                                <div className="flex flex-col">
                                    {activeModalTab === 'Proposal' && (
                                        <div className="flex flex-col animate-in fade-in duration-200">
                                            {/* Alert Banner */}
                                            <div className="flex items-center justify-between p-3.5 bg-[#FFFBF9] border border-[#FFEDD5] rounded-[10px] mb-6">
                                                <div className="flex items-center gap-2.5">
                                                    <Briefcase className="w-[16px] h-[16px] text-primary" strokeWidth={1.8} />
                                                    <span className="text-[12px] text-[#9A3412]">Proposal for: <span className="font-[600]">{selectedJob.title}</span></span>
                                                </div>
                                                <span className="flex items-center gap-1.5 text-[11px]  text-[#94A3B8]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    Submitted 8 min ago
                                                </span>
                                            </div>

                                            {/* Cover Letter */}
                                            <div className="mb-6">
                                                <h3 className="text-[13px] font-[700] text-[#0F172A] mb-3">Cover Letter</h3>
                                                <p className="text-[13px] text-[#475569] leading-relaxed">
                                                    {selectedProposal.coverLetter}
                                                </p>
                                            </div>

                                            {/* Relevant Skills */}
                                            {renderSkills('Relevant Skills')}
                                        </div>
                                    )}

                                    {activeModalTab === 'Profile' && (
                                        <div className="flex flex-col animate-in fade-in duration-200">
                                            <div className="mb-6">
                                                <h3 className="text-[13px] font-[600] text-[#0F172A] mb-3">About</h3>
                                                <p className="text-[13px] text-[#475569] leading-relaxed">
                                                    8+ years building production React applications for SaaS companies. Expert in performance optimization, testing, and component architecture. Previously at Stripe and Vercel.
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                <div className="flex gap-3 items-center bg-[#F8FAFC] rounded-[10px] p-4 border border-[#F1F5F9]">
                                                    <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#E66D3D0F] flex items-center justify-center text-[#E66D3D]">
                                                        <DollarSign className="w-[14px] h-[14px]" strokeWidth={2} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-0.5">Total Earnings</span>
                                                        <span className="text-[14px] font-[600] text-[#0F172A]">{selectedProposal.totalEarnings}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center bg-[#F8FAFC] rounded-[10px] p-4 border border-[#F1F5F9]">
                                                    <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#E66D3D0F] flex items-center justify-center text-[#E66D3D]">
                                                        <Briefcase className="w-[14px] h-[14px]" strokeWidth={2} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-0.5">Completed Jobs</span>
                                                        <span className="text-[14px] font-[600] text-[#0F172A]">{selectedProposal.jobs?.split(' ')[0]}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center bg-[#F8FAFC] rounded-[10px] p-4 border border-[#F1F5F9]">
                                                    <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#E66D3D0F] flex items-center justify-center text-[#E66D3D]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-0.5">Member Since</span>
                                                        <span className="text-[14px] font-[600] text-[#0F172A]">{selectedProposal.memberSince}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center bg-[#F8FAFC] rounded-[10px] p-4 border border-[#F1F5F9]">
                                                    <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#E66D3D0F] flex items-center justify-center text-[#E66D3D]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-0.5">Response Time</span>
                                                        <span className="text-[14px] font-[600] text-[#0F172A]">{selectedProposal.responseTime}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center bg-[#F8FAFC] rounded-[10px] p-4 border border-[#F1F5F9]">
                                                    <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#E66D3D0F] flex items-center justify-center text-[#E66D3D]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-0.5">Country</span>
                                                        <span className="text-[14px] font-[600] text-[#0F172A]">{selectedProposal.location}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center bg-[#F8FAFC] rounded-[10px] p-4 border border-[#F1F5F9]">
                                                    <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#E66D3D0F] flex items-center justify-center text-[#E66D3D]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-[500] text-[#94A3B8] tracking-widest mb-0.5">Success Rate</span>
                                                        <span className="text-[14px] font-[600] text-[#0F172A]">{selectedProposal.success}%</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {renderSkills('Skills')}
                                        </div>
                                    )}

                                    {activeModalTab === 'Portfolio' && (
                                        <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                                            {PORTFOLIO_MOCK_DATA.map((item, i) => (
                                                <div key={i} className="flex items-center justify-between p-5 border border-[#F1F5F9] rounded-[16px]">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: getAvatarTheme(i + 3).bg, color: getAvatarTheme(i + 3).text }}>
                                                            <Briefcase className="w-[16px] h-[16px]" strokeWidth={2} />
                                                        </div>
                                                        <div className="flex flex-col gap-1.5">
                                                            <h4 className="text-[13px] font-[500] text-[#0F172A]">{item.title}</h4>
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex text-[#F59E0B]">
                                                                    {[1, 2, 3, 4, 5].map(star => (
                                                                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={star <= Math.floor(item.rating) ? "currentColor" : "none"} stroke={star <= Math.floor(item.rating) ? "none" : "#E2E8F0"} strokeWidth={star <= Math.floor(item.rating) ? "0" : "1.5"}>
                                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                        </svg>
                                                                    ))}
                                                                </div>
                                                                <span className="text-[11.5px] text-[#64748B]">{item.rating}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="flex items-center gap-2 px-4 py-2 border border-[#E2E8F0] rounded-[8px] text-[11px] font-[500] text-[#475569] hover:bg-[#F8FAFC] transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                        View
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </>
    );
};

export default JobDetailsSidebar;
