import React, { useState } from 'react';
import { Clock, MessageSquare, AlertTriangle, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

const STATUS_STYLES = {
    'OPEN': {
        borderColor: 'border-[#EF444426]',
        dotColor: 'bg-[#EF4444]',
        textColor: 'text-[#EF4444]'
    },
    'UNDER REVIEW': {
        borderColor: 'border-[#F59E0B26]',
        dotColor: 'bg-[#F59E0B]',
        textColor: 'text-[#F59E0B]'
    },
    'RESOLVED': {
        borderColor: 'border-[#22C55E26]',
        dotColor: 'bg-[#22C55E]',
        textColor: 'text-[#22C55E]'
    }
};

const SEVERITY_STYLES = {
    'Critical': 'text-[#E66D3D]',
    'Moderate': 'text-[#F59E0B]',
    'Low': 'text-[#64748B]'
};

const DISPUTE_STATUS_STYLES = {
    'Open': 'text-[#EF4444]',
    'Under Review': 'text-[#F59E0B]',
    'Resolved': 'text-[#22C55E]'
};

const Disputes = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedDispute, setSelectedDispute] = useState(null);

    const tabs = ['All', 'Open', 'Reviewing', 'Resolved'];

    const summaryCards = [
        {
            title: 'OPEN',
            count: '4',
            subtitle: '$239,000 at stake'
        },
        {
            title: 'UNDER REVIEW',
            count: '2',
            subtitle: 'Awaiting resolution'
        },
        {
            title: 'RESOLVED',
            count: '1',
            subtitle: 'This month'
        }
    ];

    const disputesList = [
        {
            id: 1,
            title: 'E-Commerce Platform Scaling',
            severity: 'Critical',
            parties: 'ShopGlobal Inc. vs. Team Alpha',
            amount: '210,000',
            date: 'Feb 25, 2026',
            comments: 14,
            status: 'Open'
        },
        {
            id: 2,
            title: 'Logo Design Package',
            severity: 'Low',
            parties: 'FreshBrew Co. vs. Lina Al-Rashid',
            amount: '2,500',
            date: 'Feb 24, 2026',
            comments: 8,
            status: 'Open',
            reason: 'Client claims delivered designs are plagiarized. Freelancer denies allegations.',
            messages: [
                { sender: 'FreshBrew Co.', initial: 'C', text: 'Requesting resolution per contract terms...', bgClass: 'bg-[#F1F5F9]', textClass: 'text-[#64748B]' },
                { sender: 'Lina Al-Rashid', initial: 'F', text: 'Work was completed as specified in the SOW...', bgClass: 'bg-orange-50', textClass: 'text-[#E66D3D]' }
            ]
        },
        {
            id: 3,
            title: 'API Integration Project',
            severity: 'Critical',
            parties: 'DataSync Ltd. vs. Carlos Mendez',
            amount: '18,000',
            date: 'Feb 23, 2026',
            comments: 22,
            status: 'Resolved'
        },
        {
            id: 4,
            title: 'Marketing Automation',
            severity: 'Moderate',
            parties: 'GrowthHQ vs. Emma Wilson',
            amount: '8,500',
            date: 'Feb 22, 2026',
            comments: 6,
            status: 'Open'
        },
        {
            id: 5,
            title: 'Mobile App Bug Fixes',
            severity: 'Moderate',
            parties: 'AppVenture vs. David Kim',
            amount: '4,200',
            date: 'Feb 20, 2026',
            comments: 11,
            status: 'Under Review'
        }
    ];

    return (
        <div className="max-w-[1200px] mx-auto w-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-[#0F172A]">Disputes</h1>
                    <p className="text-[13px] text-[#94A3B8] font-[300] ">6 active disputes requiring attention</p>
                </div>

                {/* Tabs */}
                <div className="flex bg-white rounded-lg border border-gray-200 ">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-[12px] font-medium transition-colors first:rounded-l-lg last:rounded-r-lg ${activeTab === tab
                                ? 'bg-[#E66D3D0F] text-[#E66D3D]'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {summaryCards.map((card, index) => {
                    const styles = STATUS_STYLES[card.title] || {};
                    return (
                        <div key={index} className={`bg-white rounded-xl p-6 border ${styles.borderColor || 'border-gray-100'} shadow-sm`}>
                            <div className="flex items-center gap-2 mb-4">
                                <div className={`w-2 h-2 rounded-full ${styles.dotColor || 'bg-gray-400'}`}></div>
                                <span className={`text-[11px] font-medium tracking-wider ${styles.textColor || 'text-gray-500'}`}>
                                    {card.title}
                                </span>
                            </div>
                            <div className="text-[28px] font-bold text-[#0F172A] mb-2">{card.count}</div>
                            <div className="text-[12px] text-[#94A3B8] font-[400]">{card.subtitle}</div>
                        </div>
                    )
                })}
            </div>

            {/* Main Content Area */}
            <div className="flex gap-6">
                {/* Left Column - List */}
                <div className="w-[400px] flex-shrink-0 flex flex-col gap-4">
                    {disputesList.map((dispute) => (
                        <div
                            key={dispute.id}
                            onClick={() => setSelectedDispute(dispute)}
                            className={` rounded-xl p-5 border shadow-sm transition-colors cursor-pointer ${selectedDispute?.id === dispute.id
                                ? 'bg-[#E66D3D0A] border-[#E66D3D33] shadow-sm'
                                : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1]'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-[13.5px] text-[#0F172A]">{dispute.title}</h3>
                                <span className={`text-[10px] font-semibold ${SEVERITY_STYLES[dispute.severity] || 'text-gray-500'}`}>
                                    {dispute.severity}
                                </span>
                            </div>
                            <p className="text-[12px] text-[#64748B] font-[400] mb-3">{dispute.parties}</p>

                            <div className="flex items-center justify-between text-[11px] text-[#94A3B8] ">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5  ">
                                        <DollarSign size={12} className="opacity-70" />
                                        ${dispute.amount}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={12} className="opacity-70" /> {dispute.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MessageSquare size={12} className="opacity-70" /> {dispute.comments}
                                    </span>
                                </div>
                                <span className={`font-medium text-[10px] ${DISPUTE_STATUS_STYLES[dispute.status]}`}>
                                    {dispute.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column - Detail View Placeholder */}
                {selectedDispute ? (
                    <div className="flex-1 bg-white rounded-xl border border-[#F1F5F9] flex flex-col p-6 shadow-sm h-fit">
                        {/* Tags and Amount */}
                        <div className="flex justify-between items-start ">
                            <div className="flex gap-4">
                                <span className={`text-[11px] font-semibold ${SEVERITY_STYLES[selectedDispute.severity]}`}>
                                    {selectedDispute.severity}
                                </span>
                                <span className={`text-[11px] font-semibold ${DISPUTE_STATUS_STYLES[selectedDispute.status]}`}>
                                    {selectedDispute.status}
                                </span>
                            </div>
                            <div className="text-[18px] font-bold text-[#0F172A]">
                                ${selectedDispute.amount}
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-[18px] font-semibold text-[#0F172A] mb-4">
                            {selectedDispute.title}
                        </h2>

                        {/* Parties Block */}
                        <div className="flex justify-between items-center bg-[#F8FAFC] rounded-[10px] p-3 mb-6 text-[13px] border border-[#F1F5F9]">
                            <div className="flex items-center gap-3 text-[#475569] font-medium">
                                <span>{selectedDispute.parties.split(' vs. ')[0]}</span>
                                <ArrowRight size={14} className="text-[#94A3B8]" />
                                <span>{selectedDispute.parties.split(' vs. ')[1] || selectedDispute.parties}</span>
                            </div>
                            <div className="text-[#94A3B8] text-[11px]">
                                Filed: {selectedDispute.date}
                            </div>
                        </div>

                        {/* Dispute Reason */}
                        <div className="mb-6">
                            <h3 className="text-[12px] font-semibold text-[#94A3B8] tracking-wider mb-3 uppercase">
                                DISPUTE REASON
                            </h3>
                            <p className="text-[13px] text-[#475569] leading-relaxed">
                                {selectedDispute.reason || "Client claims delivered designs are plagiarized. Freelancer denies allegations."}
                            </p>
                        </div>

                        {/* Thread Section */}
                        <div className="bg-[#F8FAFC] border-[#E2E8F0] border rounded-xl p-4 mb-6">
                            <div className="flex items-center gap-2 text-[#64748B] text-[12px] font-medium mb-3">
                                <MessageSquare size={14} />
                                <span>{selectedDispute.messages?.length || 0} messages in thread</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {selectedDispute.messages?.map((msg, i) => (
                                    <div key={i} className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                                        <div className="flex gap-3">
                                            <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-[9px] font-bold ${msg.bgClass || 'bg-[#F1F5F9]'} ${msg.textClass || 'text-[#64748B]'}`}>
                                                {msg.initial || msg.sender.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-[12px] font-medium text-[#0F172A] mb-1">
                                                    {msg.sender}
                                                </div>
                                                <div className="text-[12px] text-[#64748B]">
                                                    {msg.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-auto">
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-[12px] border border-[#E2E8F0] text-[#475569] font-medium text-[13px] hover:bg-gray-50 transition-colors">
                                <AlertTriangle size={15} />
                                Escalate
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-[12px] bg-[#22C55E] text-white text-[13px] hover:bg-green-600 transition-colors">
                                <CheckCircle2 size={15} />
                                Mark Resolved
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 flex flex-col items-center max-h-fit justify-center py-12 shadow-sm">
                        <AlertTriangle size={48} className="text-gray-200 mb-4" strokeWidth={1.5} />
                        <p className="text-[15px] text-gray-400 font-medium">Select a dispute to review</p>
                    </div>
                )}
            </div>



        </div>
    );
};

export default Disputes;