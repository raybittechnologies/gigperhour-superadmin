import React, { useState } from 'react';
import { Star, MapPin, Clock, ChevronRight, Eye, Briefcase, FileText, CheckCircle2, GraduationCap, Link2, XCircle, CheckCircle } from 'lucide-react';
const getInitial = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
};

const APPLICANTS = [
    {
        id: 1,
        name: "Maria Santos",
        role: "Full-Stack Developer",
        rating: 4.9,
        location: "Lisbon, PT",
        timeAgo: "2 hours ago",
        passedChecks: 3,
        totalChecks: 3,
        image: "https://i.pravatar.cc/150?img=47",
        experienceYears: "8 years",
        about: "Senior full-stack developer with 8 years building scalable web apps. Expert in React, Node.js, and AWS.",
        portfolioItems: "12 items",
        education: "MSc Computer Science, University of Lisbon",
        links: [
            { text: "github.com/msantos" },
            { text: "linkedin.com/in/msantos" }
        ]
    },
    {
        id: 2,
        name: "James Chen",
        role: "UI/UX Designer",
        rating: 4.7,
        location: "Toronto, CA",
        timeAgo: "4 hours ago",
        passedChecks: 2,
        totalChecks: 3,
        image: "https://i.pravatar.cc/150?img=11",
        experienceYears: "5 years",
        about: "Creative UI/UX designer focused on intuitive, user-centric interfaces. Proficient in Figma, Framer, and Adobe Creative Suite.",
        portfolioItems: "24 items",
        education: "BFA Graphic Design, OCAD University",
        links: [
            { text: "dribbble.com/jameschen" },
            { text: "linkedin.com/in/jameschen" }
        ]
    },
    {
        id: 3,
        name: "Aisha Patel",
        role: "Data Scientist",
        rating: 4.8,
        location: "Mumbai, IN",
        timeAgo: "6 hours ago",
        passedChecks: 3,
        totalChecks: 3,
        image: "https://i.pravatar.cc/150?img=32",
        experienceYears: "4 years",
        about: "Data scientist specializing in machine learning and predictive analytics. Expertise in Python, TensorFlow, and SQL.",
        portfolioItems: "8 items",
        education: "BS Statistics, University of Mumbai",
        links: [
            { text: "github.com/aishapatel" },
            { text: "linkedin.com/in/aishapatel" }
        ]
    },
    {
        id: 4,
        name: "Erik Johansson",
        role: "DevOps Engineer",
        rating: 5,
        location: "Stockholm, SE",
        timeAgo: "1 day ago",
        passedChecks: 3,
        totalChecks: 3,
        experienceYears: "10 years",
        about: "Experienced DevOps engineer with a strong background in AWS, Kubernetes, and CI/CD pipelines.",
        portfolioItems: "15 items",
        education: "MS Software Engineering, KTH Royal Institute of Technology",
        links: [
            { text: "github.com/erikj" },
            { text: "linkedin.com/in/erikjohansson" }
        ]
    },
    {
        id: 5,
        name: "Lina Al-Rashid",
        role: "Mobile Developer",
        rating: 4.5,
        location: "Dubai, AE",
        timeAgo: "1 day ago",
        passedChecks: 3,
        totalChecks: 3,
        experienceYears: "3 years",
        about: "iOS and Android developer with a passion for building beautiful, performant mobile applications using React Native and Swift.",
        portfolioItems: "6 items",
        education: "BS Computer Science, American University in Dubai",
        links: [
            { text: "github.com/linaal" },
            { text: "linkedin.com/in/linaalrashid" }
        ]
    },
    {
        id: 6,
        name: "Tom Baker",
        role: "Technical Writer",
        rating: 4.6,
        location: "London, UK",
        timeAgo: "2 days ago",
        passedChecks: 2,
        totalChecks: 3,
        experienceYears: "6 years",
        about: "Technical writer adept at translating complex concepts into clear, engaging content. Experience documenting APIs and SDKs.",
        portfolioItems: "30+ items",
        education: "BA English, University College London",
        links: [
            { text: "medium.com/@tombaker" },
            { text: "linkedin.com/in/tombaker" }
        ]
    }
];

const Verification = () => {
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    return (
        <div className="">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-[22px] font-[700] text-[#0F172A] leading-tight tracking-[-0.01em]">
                    Verification Queue
                </h1>
                <p className="text-[13px] text-[#94A3B8] font-[300] mt-1 tracking-wide">
                    {APPLICANTS.length} freelancer applications pending review
                </p>
            </div>

            {/* Layout */}
            <div className="flex gap-6 items-start">

                {/* Left Column - List */}
                <div className="w-[420px] flex flex-col gap-3 flex-shrink-0">
                    {APPLICANTS.map((applicant) => (
                        <div
                            key={applicant.id}
                            onClick={() => setSelectedApplicant(applicant)}
                            className={`p-4 rounded-[12px] border cursor-pointer transition-all flex items-center justify-between ${selectedApplicant?.id === applicant.id
                                ? 'bg-[#E66D3D0A] border-[#E66D3D33] shadow-sm'
                                : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1]'
                                }`}
                        >
                            <div className="flex gap-4 items-start">
                                {/* Avatar */}
                                {applicant.image ? (
                                    <img src={applicant.image} alt={applicant.name} className="w-[40px] h-[40px] rounded-full object-cover shrink-0 mt-0.5" />
                                ) : (
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#F1F5F9] text-[#94A3B8] flex items-center justify-center text-[14px] font-[600] shrink-0 mt-0.5">
                                        {getInitial(applicant.name)}
                                    </div>
                                )}

                                {/* Info */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <h3 className="text-[13px] font-[500] text-[#0F172A]">{applicant.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-[10px] h-[10px] text-[#F59E0B] fill-current" />
                                            <span className="text-[11px] text-[#64748B]">{applicant.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-[12px] text-[#64748B] mb-2.5">{applicant.role}</p>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 text-[#94A3B8] text-[11px]">
                                            <MapPin className="w-[10px] h-[10px]" />
                                            <span>{applicant.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#94A3B8] text-[11px]">
                                            <Clock className="w-[10px] h-[10px]" />
                                            <span>{applicant.timeAgo}</span>
                                        </div>
                                        <div className={`px-2 py-0.5 rounded-full text-[10px] font-[500] tracking-wide ${applicant.passedChecks === applicant.totalChecks
                                            ? 'bg-[#ECFDF5] text-[#10B981]'
                                            : 'bg-[#FFFBEB] text-[#F59E0B]'
                                            }`}>
                                            {applicant.passedChecks}/{applicant.totalChecks} passed
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#CBD5E1]" strokeWidth={2} />
                        </div>
                    ))}
                </div>

                {/* Right Column - Preview/Detail */}
                <div className="flex-1 bg-white border border-[#E2E8F0] rounded-[16px] min-h-[200px]  p-6  sticky top-6">
                    {selectedApplicant ? (
                        <div className="flex flex-col h-full animate-in fade-in duration-200">
                            {/* Profile Header */}
                            <div className="flex items-start gap-5 mb-8">
                                {selectedApplicant.image ? (
                                    <img src={selectedApplicant.image} alt={selectedApplicant.name} className="w-[64px] h-[64px] rounded-[16px] object-cover shrink-0 box-content shadow-sm" />
                                ) : (
                                    <div className="w-[64px] h-[64px] rounded-[16px] bg-[#F1F5F9] text-[#64748B] flex items-center justify-center text-[28px] font-[600] shrink-0 shadow-sm">
                                        {getInitial(selectedApplicant.name)}
                                    </div>
                                )}
                                <div className="flex flex-col pt-1">
                                    <h2 className="text-[18px] font-[600] text-[#0F172A] ">{selectedApplicant.name}</h2>
                                    <p className="text-[13px] text-[#64748B] mb-1">{selectedApplicant.role} · {selectedApplicant.experienceYears}</p>
                                    <div className="flex items-center gap-4 text-[12px] text-[#94A3B8]">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-[12px] h-[12px]" />
                                            <span>{selectedApplicant.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 font-[500]">
                                            <Star className="w-[12px] h-[12px] text-[#F59E0B] fill-current" />
                                            <span className="text-[#F59E0B]">{selectedApplicant.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* About */}
                            <div className="mb-5">
                                <h3 className="text-[12px] font-[600] text-[#94A3B8] tracking-widest uppercase mb-2">About</h3>
                                <p className="text-[13px] text-[#475569] leading-relaxed">
                                    {selectedApplicant.about}
                                </p>
                            </div>

                            {/* Summary Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <div className="bg-[#F8FAFC] p-4 rounded-[10px] border border-[#F1F5F9] flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                        <Briefcase className="w-[13px] h-[13px] text-[#64748B]" strokeWidth={2} />
                                        <span className="text-[12px]">Experience</span>
                                    </div>
                                    <span className="text-[14px] font-[600] text-[#0F172A]">{selectedApplicant.experienceYears}</span>
                                </div>
                                <div className="bg-[#F8FAFC] p-4 rounded-[10px] border border-[#F1F5F9] flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                        <FileText className="w-[13px] h-[13px] text-[#64748B]" strokeWidth={2} />
                                        <span className="text-[12px]">Portfolio</span>
                                    </div>
                                    <span className="text-[14px] font-[600] text-[#0F172A]">{selectedApplicant.portfolioItems}</span>
                                </div>
                                <div className="bg-[#F8FAFC] p-4 rounded-[10px] border border-[#F1F5F9] flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                        <CheckCircle2 className="w-[13px] h-[13px] text-[#64748B]" strokeWidth={2} />
                                        <span className="text-[12px]">Tests</span>
                                    </div>
                                    <span className={`text-[14px] font-[600] ${selectedApplicant.passedChecks === selectedApplicant.totalChecks ? 'text-[#22C55E]' : 'text-[#F59E0B]'}`}>
                                        {selectedApplicant.passedChecks}/{selectedApplicant.totalChecks} passed
                                    </span>
                                </div>
                                <div className="bg-[#F8FAFC] p-4 rounded-[10px] border border-[#F1F5F9] flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                        <GraduationCap className="w-[14px] h-[14px]" strokeWidth={2} />
                                        <span className="text-[12px] font-[500]">Education</span>
                                    </div>
                                    <span className="text-[12.5px] font-[600] text-[#0F172A] leading-snug">{selectedApplicant.education}</span>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="mb-auto">
                                <h3 className="text-[12px] font-[600] text-[#94A3B8] tracking-widest uppercase mb-3">Links</h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedApplicant.links.map((link, idx) => (
                                        <a key={idx} href="#" className="flex items-center gap-2 px-3 py-1.5 bg-[#F8FAFC] text-[#6366F1] hover:bg-[#E0E7FF] transition-colors rounded-[8px] text-[12px]  border border-[#E2E8F0]">
                                            <Link2 className="w-[14px] h-[14px]" />
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Actions */}
                            <div className="flex gap-4 mt-8">
                                <button className="flex-1 flex justify-center items-center gap-2 h-[44px] text-[13px] font-[500] text-[#EF4444] border border-[#FECACA] rounded-[12px] hover:bg-[#FEF2F2] transition-colors">
                                    <XCircle className="w-[16px] h-[16px]" strokeWidth={2} />
                                    Reject
                                </button>
                                <button className="flex-[1.2] flex justify-center items-center gap-2 h-[44px] text-[13px] font-[500] text-white bg-primary rounded-[12px]  shadow-[0_2px_8px_rgba(230,109,61,0.25)] transition-colors">
                                    <CheckCircle className="w-[16px] h-[16px]" strokeWidth={2} />
                                    Approve & Verify
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center h-[100%]  absolute inset-0">
                            <Eye className="w-[40px] h-[40px] text-[#E2E8F0] mb-5 stroke-[1.5]" />
                            <h3 className="text-[15px] font-[600] text-[#94A3B8] mb-1.5">Select an applicant to review</h3>
                            <p className="text-[12.5px] text-[#CBD5E1]">Click on any application from the list</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Verification;