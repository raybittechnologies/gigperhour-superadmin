import React, { useState, useEffect } from 'react';
import { getBlogs, createBlog, uploadFile, updateBlog, publishBlog, unpublishBlog, deleteBlog } from '../../utils/api';
import { Plus, Search, FileText, Image as ImageIcon, Loader2, X, CheckCircle2, AlertCircle, Edit2, Trash2, Eye, EyeOff, Wand2, Bold, Italic, Underline as UnderlineIcon, Strikethrough as StrikethroughIcon, Eraser, List, ListOrdered, Link as LinkIcon, Maximize, Code } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomToolbar = ({ onToggleFullscreen, onToggleCode, isCodeView }) => (
    <div id="toolbar" className="flex items-center flex-wrap gap-1 px-3 py-2 bg-gray-50 border-b border-gray-200 rounded-t-xl">
        <button className="ql-clean !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <Wand2 size={16} />
        </button>
        <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>
        <button className="ql-bold !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <Bold size={16} />
        </button>
        <button className="ql-italic !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <Italic size={16} />
        </button>
        <button className="ql-underline !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <UnderlineIcon size={16} />
        </button>
        <button className="ql-strike !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <StrikethroughIcon size={16} />
        </button>
        <button className="ql-clean !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <Eraser size={16} />
        </button>
        <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>

        <select className="ql-size" defaultValue="normal">
            <option value="small"></option>
            <option value="normal"></option>
            <option value="large"></option>
            <option value="huge"></option>
        </select>

        <select className="ql-color" />
        <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>

        <button className="ql-list !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center" value="bullet">
            <List size={16} />
        </button>
        <button className="ql-list !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center" value="ordered">
            <ListOrdered size={16} />
        </button>
        <select className="ql-align" />
        <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>

        <button className="ql-link !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <LinkIcon size={16} />
        </button>
        <button className="ql-image !p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <ImageIcon size={16} />
        </button>
        <div className="flex-1"></div>
        <button type="button" onClick={onToggleFullscreen} className="!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center">
            <Maximize size={16} />
        </button>
        <button type="button" onClick={onToggleCode} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${isCodeView ? 'bg-gray-200 text-gray-900' : ''}`}>
            <Code size={16} />
        </button>
    </div>
);

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isCodeView, setIsCodeView] = useState(false);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [coverImageFile, setCoverImageFile] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [deleteConfirmId, setDeleteConfirmId] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Toast state
    const [toastMessage, setToastMessage] = useState(null);
    const showToast = (text, type = 'error') => {
        setToastMessage({ text, type });
        setTimeout(() => setToastMessage(null), 3000);
    };

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        cover_image: '',
        category: '',
        author_name: '',
        is_published: true
    });

    const modules = React.useMemo(() => ({
        toolbar: {
            container: "#toolbar"
        },
        clipboard: {
            matchVisual: false
        }
    }), []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await getBlogs();
            if (response.data && response.data.data) {
                // Adjust this depending on the exact structure of your API response
                setBlogs(response.data.data.blogs || response.data.data || []);
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch blogs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    cover_image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            let finalCoverUrl = formData.cover_image;

            if (coverImageFile) {
                const uploadData = new FormData();
                uploadData.append("file", coverImageFile);
                const res = await uploadFile(uploadData);

                const d = res.data;
                const fileUrl = d?.url || d?.file_url || d?.data?.url || d?.data?.file_url || d?.data?.file || (typeof d?.data === 'string' ? d.data : null);

                if (fileUrl) {
                    finalCoverUrl = fileUrl;
                } else if (d?.data && typeof d.data === 'object') {
                    const possibleUrl = Object.values(d.data).find(v => typeof v === 'string' && (v.startsWith('http') || v.includes('/uploads/')));
                    if (possibleUrl) finalCoverUrl = possibleUrl;
                }
            }

            const payload = {
                ...formData,
                cover_image: finalCoverUrl,
                category: formData.category.toLowerCase()
            };

            if (editingId) {
                await updateBlog(editingId, payload);
            } else {
                await createBlog(payload);
            }

            await fetchBlogs();
            setIsModalOpen(false);
            setCoverImageFile(null);
            showToast(editingId ? 'Blog updated successfully!' : 'Blog created successfully!', 'success');
            setEditingId(null);
            // Reset form
            setFormData({
                title: '',
                excerpt: '',
                content: '',
                cover_image: '',
                category: '',
                author_name: '',
                is_published: true
            });
        } catch (err) {
            console.error(err);
            const backendError = err.response?.data?.message || err.response?.data?.error?.message || 'Failed to save blog. Please try again.';
            showToast(backendError, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (blog) => {
        setEditingId(blog.id);
        setFormData({
            title: blog.title || '',
            excerpt: blog.excerpt || '',
            content: blog.content || '',
            cover_image: blog.cover_image || '',
            category: blog.category || '',
            author_name: blog.author_name || '',
            is_published: blog.is_published || false
        });
        setCoverImageFile(null);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        setDeleteConfirmId(id);
    };

    const confirmDelete = async () => {
        if (!deleteConfirmId) return;
        setIsDeleting(true);
        try {
            await deleteBlog(deleteConfirmId);
            await fetchBlogs();
            showToast('Blog deleted successfully!', 'success');
        } catch (err) {
            console.error(err);
            showToast('Failed to delete blog.', 'error');
        } finally {
            setIsDeleting(false);
            setDeleteConfirmId(null);
        }
    };

    const handleTogglePublish = async (blog) => {
        try {
            if (blog.is_published) {
                await unpublishBlog(blog.id);
                showToast('Blog unpublished successfully', 'success');
            } else {
                await publishBlog(blog.id);
                showToast('Blog published successfully', 'success');
            }
            await fetchBlogs();
        } catch (err) {
            console.error(err);
            showToast('Failed to update blog status.', 'error');
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto w-full pb-10 relative">
            {/* Toast Notification */}
            {toastMessage && (
                <div className={`fixed top-6 right-6 z-[200] px-5 py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 animate-in slide-in-from-right-8 fade-in duration-300 ${toastMessage.type === 'error'
                    ? 'bg-white border-l-4 border-red-500 text-gray-800'
                    : 'bg-white border-l-4 border-[#E66D3D] text-gray-800'
                    }`}>
                    {toastMessage.type === 'error' ? (
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                            <AlertCircle size={16} className="text-red-500" />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-[#E66D3D]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 size={16} className="text-[#E66D3D]" />
                        </div>
                    )}
                    <p className="text-[13.5px] font-medium">{toastMessage.text}</p>
                    <button onClick={() => setToastMessage(null)} className="ml-2 text-gray-400 hover:text-gray-600">
                        <X size={16} />
                    </button>
                </div>
            )}

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-[#0F172A]">Blogs</h1>
                    <p className="text-[13px] text-[#94A3B8] font-[300]">Manage and create content for your platform</p>
                </div>

                <button
                    onClick={() => {
                        setEditingId(null);
                        setFormData({
                            title: '',
                            excerpt: '',
                            content: '',
                            cover_image: '',
                            category: '',
                            author_name: '',
                            is_published: true
                        });
                        setCoverImageFile(null);
                        setIsModalOpen(true);
                    }}
                    className="bg-[#E66D3D] hover:bg-[#d35a2e] text-white px-5 py-2.5 rounded-xl text-[13px] font-medium flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(230,109,61,0.39)] hover:shadow-[0_6px_20px_rgba(230,109,61,0.23)] hover:-translate-y-[1px]"
                >
                    <Plus size={16} />
                    Create Blog
                </button>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[500px]">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="relative w-[300px]">
                        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full pl-9 pr-4 py-2 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors bg-white"
                        />
                    </div>
                </div>

                {/* List View */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-gray-400">
                        <Loader2 size={32} className="animate-spin mb-4 text-[#E66D3D]" />
                        <p className="text-[13px]">Loading blogs...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-red-400">
                        <AlertCircle size={48} className="mb-4 opacity-50" />
                        <p className="text-[13px]">{error}</p>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-gray-400">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                            <FileText size={24} className="text-gray-300" />
                        </div>
                        <p className="text-[14px] font-medium text-gray-600 mb-1">No blogs found</p>
                        <p className="text-[13px] text-gray-400 mb-4">You haven't published any articles yet.</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-[#E66D3D] text-[13px] font-medium hover:underline"
                        >
                            Create your first blog
                        </button>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {blogs.map((blog, index) => (
                            <div key={index} className="p-5 hover:bg-gray-50/50 transition-colors flex items-start gap-5">
                                <div className="w-[120px] h-[80px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
                                    {blog.cover_image ? (
                                        <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                                            <ImageIcon size={24} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-[15px] font-semibold text-gray-900 truncate">{blog.title}</h3>
                                        {blog.is_published ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[10px] font-medium border border-green-100">
                                                <CheckCircle2 size={10} /> Published
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-medium">
                                                Draft
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[13px] text-gray-500 mb-2 line-clamp-1">{blog.excerpt}</p>
                                    <div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
                                        <span>By {blog.author_name || 'Unknown'}</span>
                                        {blog.category && (
                                            <span className="capitalize bg-gray-100 px-2 py-0.5 rounded text-gray-500">{blog.category}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 ml-4">
                                    <button onClick={() => handleTogglePublish(blog)} className="p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors" title={blog.is_published ? "Unpublish" : "Publish"}>
                                        {blog.is_published ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                    <button onClick={() => handleEdit(blog)} className="p-2 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors" title="Edit Blog">
                                        <Edit2 size={16} />
                                    </button>
                                    <button onClick={() => handleDelete(blog.id)} className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete Blog">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Create Blog Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-[800px] shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <div>
                                <h2 className="text-[18px] font-bold text-gray-900">{editingId ? 'Edit Blog' : 'Create New Blog'}</h2>
                                <p className="text-[13px] text-gray-500">{editingId ? 'Modify the details of your blog post.' : 'Fill in the details to publish a new article.'}</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Modal Body (Scrollable form) */}
                        <div className="p-6 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <form id="blogForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="col-span-2">
                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Title <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="e.g. Why your last freelance hire failed"
                                            className="w-full px-4 py-2.5 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Category <span className="text-red-500">*</span></label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-2.5 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors"
                                        >
                                            <option value="" disabled>Select a category</option>
                                            <option value="tips">Tips</option>
                                            <option value="events">Events</option>
                                            <option value="news">News</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Author Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="author_name"
                                            value={formData.author_name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="e.g. Admin"
                                            className="w-full px-4 py-2.5 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors"
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Cover Image Upload</label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="flex-1 px-4 py-2 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-[13px] file:font-semibold file:bg-[#E66D3D]/10 file:text-[#E66D3D] hover:file:bg-[#E66D3D]/20 cursor-pointer"
                                            />
                                            {formData.cover_image && formData.cover_image.startsWith('data:image') && (
                                                <div className="w-[45px] h-[45px] rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 shadow-sm">
                                                    <img src={formData.cover_image} alt="Preview" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Excerpt <span className="text-red-500">*</span></label>
                                        <textarea
                                            name="excerpt"
                                            value={formData.excerpt}
                                            onChange={handleInputChange}
                                            required
                                            rows="2"
                                            placeholder="A short summary of the blog post..."
                                            className="w-full px-4 py-2.5 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors resize-none"
                                        />
                                    </div>

                                    <div className={isFullscreen ? "fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm p-4 sm:p-8 flex flex-col animate-in fade-in duration-200" : "col-span-2"}>
                                        {isFullscreen && (
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-white font-semibold text-lg">Edit Content</h3>
                                                <button type="button" onClick={() => setIsFullscreen(false)} className="text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full">
                                                    <X size={20} />
                                                </button>
                                            </div>
                                        )}
                                        {!isFullscreen && <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Content (HTML) <span className="text-red-500">*</span></label>}

                                        <div className={`rounded-xl overflow-hidden shadow-sm border border-gray-200 focus-within:border-[#E66D3D] focus-within:ring-1 focus-within:ring-[#E66D3D] transition-colors bg-white flex flex-col ${isFullscreen ? 'flex-1 shadow-2xl' : ''}`}>
                                            <CustomToolbar onToggleFullscreen={() => setIsFullscreen(!isFullscreen)} onToggleCode={() => setIsCodeView(!isCodeView)} isCodeView={isCodeView} />
                                            <textarea
                                                name="content"
                                                value={formData.content}
                                                onChange={handleInputChange}
                                                className={`w-full p-5 font-mono text-[14px] bg-white text-gray-800 resize-none focus:outline-none ${isFullscreen ? 'flex-1' : 'min-h-[250px]'} ${isCodeView ? 'block' : 'hidden'}`}
                                                placeholder="Write your HTML here..."
                                            />
                                            <div className={`${isCodeView ? 'hidden' : 'block'} ${isFullscreen ? 'flex-1 flex flex-col' : ''}`}>
                                                <ReactQuill
                                                    theme="snow"
                                                    value={formData.content}
                                                    onChange={(content) => handleInputChange({ target: { name: 'content', value: content } })}
                                                    modules={modules}
                                                    placeholder="Write your blog post content here..."
                                                    className={`bg-white [&_.ql-toolbar]:hidden [&_.ql-container]:border-0 [&_.ql-editor]:text-[15px] ${isFullscreen ? 'flex-1 [&_.ql-container]:h-0 [&_.ql-editor]:h-full [&_.ql-editor]:overflow-y-auto' : '[&_.ql-editor]:min-h-[250px]'}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {!editingId && (
                                        <div className="col-span-2 flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                id="is_published"
                                                name="is_published"
                                                checked={formData.is_published}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-[#E66D3D] border-gray-300 rounded focus:ring-[#E66D3D] cursor-pointer"
                                            />
                                            <label htmlFor="is_published" className="ml-2 block text-[13.5px] font-medium text-gray-700 cursor-pointer">
                                                Publish immediately
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-[13px] hover:bg-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                form="blogForm"
                                disabled={isSubmitting}
                                className="bg-[#E66D3D] hover:bg-[#d35a2e] disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-xl text-[13px] font-medium flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(230,109,61,0.39)] hover:-translate-y-[1px]"
                            >
                                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
                                {isSubmitting ? 'Saving...' : editingId ? 'Save Changes' : 'Create Blog'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteConfirmId && (
                <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-[400px] shadow-2xl p-6 animate-in zoom-in-95 duration-200">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4 mx-auto">
                            <AlertCircle size={24} className="text-red-500" />
                        </div>
                        <h3 className="text-[18px] font-bold text-gray-900 text-center mb-2">Delete Blog?</h3>
                        <p className="text-[13px] text-gray-500 text-center mb-6">
                            Are you sure you want to delete this blog? This action cannot be undone and will permanently remove it from the platform.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirmId(null)}
                                disabled={isDeleting}
                                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-[13px] hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                disabled={isDeleting}
                                className="flex-1 bg-red-500 hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed text-white px-4 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                {isDeleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
