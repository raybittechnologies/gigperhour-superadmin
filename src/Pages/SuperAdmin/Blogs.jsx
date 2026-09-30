import React, { useState, useEffect } from 'react';
import { getBlogs, createBlog, uploadFile, updateBlog, publishBlog, unpublishBlog, deleteBlog } from '../../utils/api';
import { Plus, Search, FileText, Image as ImageIcon, Loader2, X, CheckCircle2, AlertCircle, Edit2, Trash2, Eye, EyeOff, Wand2, Bold, Italic, Underline as UnderlineIcon, Strikethrough as StrikethroughIcon, Eraser, List, ListOrdered, Link as LinkIcon, Maximize, Minimize, Code, Table as TableIcon } from 'lucide-react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import UnderlineExtension from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import LinkExtension from '@tiptap/extension-link';
import ImageExtension from '@tiptap/extension-image';
import TiptapBold from '@tiptap/extension-bold';
import TiptapItalic from '@tiptap/extension-italic';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';

// Aggressive Bold parser to catch all ChatGPT variations
const CustomBold = TiptapBold.extend({
    parseHTML() {
        return [
            { tag: 'strong' },
            { tag: 'b' },
            {
                style: 'font-weight', getAttrs: value => {
                    const weight = parseInt(value, 10);
                    return (weight >= 500 || value.includes('bold')) ? null : false;
                }
            },
            { class: 'font-bold' },
            { class: 'font-semibold' },
            { style: 'font-family', getAttrs: value => value.includes('bold') ? null : false },
            {
                tag: 'span', getAttrs: node => {
                    if (node.style && (node.style.fontWeight === 'bold' || parseInt(node.style.fontWeight, 10) >= 500)) return null;
                    if (node.className && node.className.includes('bold')) return null;
                    return false;
                }
            }
        ];
    }
});

import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';

// Aggressive Heading parser
const CustomHeading = Heading.extend({
    parseHTML() {
        return [
            { tag: 'h1', attrs: { level: 1 } },
            { tag: 'h2', attrs: { level: 2 } },
            { tag: 'h3', attrs: { level: 3 } },
            { tag: 'h4', attrs: { level: 4 } },
            { tag: 'h5', attrs: { level: 5 } },
            { tag: 'h6', attrs: { level: 6 } },
            {
                tag: 'p',
                getAttrs: node => {
                    const fontSize = node.style.fontSize;
                    if (fontSize && (fontSize.includes('px') && parseInt(fontSize) >= 18 || fontSize.includes('em') && parseFloat(fontSize) >= 1.2)) {
                        return { level: 3 };
                    }
                    if (node.style.fontWeight === 'bold' || parseInt(node.style.fontWeight) >= 600) {
                        return { level: 3 };
                    }
                    return false;
                }
            }
        ];
    }
});

// Aggressive Italic parser
const CustomItalic = TiptapItalic.extend({
    parseHTML() {
        return [
            { tag: 'i' },
            { tag: 'em' },
            { style: 'font-style', getAttrs: value => value === 'italic' && null },
            { class: 'italic' },
        ];
    }
});

const TiptapToolbar = ({ editor, onToggleFullscreen, onToggleCode, isCodeView, showToast, isFullscreen }) => {
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [showTableMenu, setShowTableMenu] = useState(false);

    if (!editor) return null;

    const handleAddLink = () => {
        if (linkUrl) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
        }
        setShowLinkModal(false);
        setLinkUrl('');
    };

    return (
        <div id="toolbar" className="flex items-center flex-wrap gap-1 px-3 py-2 bg-gray-50 border-b border-gray-200 rounded-t-xl">
            <button type="button" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} className="!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center" title="Clear Formatting">
                <Wand2 size={16} />
            </button>
            <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>
            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('bold') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <Bold size={16} />
            </button>
            <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('italic') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <Italic size={16} />
            </button>
            <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('underline') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <UnderlineIcon size={16} />
            </button>
            <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('strike') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <StrikethroughIcon size={16} />
            </button>
            <button type="button" onClick={() => editor.chain().focus().unsetAllMarks().run()} className="!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center" title="Eraser">
                <Eraser size={16} />
            </button>
            <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>

            <select
                className="px-2 py-1 bg-white border border-gray-200 rounded text-[13px] text-gray-600 focus:outline-none"
                onChange={(e) => {
                    if (e.target.value === 'p') editor.chain().focus().setParagraph().run();
                    else editor.chain().focus().toggleHeading({ level: parseInt(e.target.value) }).run();
                }}
            >
                <option value="p">Normal Text</option>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
            </select>

            <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>

            <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('bulletList') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <List size={16} />
            </button>
            <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('orderedList') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <ListOrdered size={16} />
            </button>

            <select
                className="px-2 py-1 bg-white border border-gray-200 rounded text-[13px] text-gray-600 focus:outline-none ml-1"
                onChange={(e) => editor.chain().focus().setTextAlign(e.target.value).run()}
            >
                <option value="left">Left Align</option>
                <option value="center">Center Align</option>
                <option value="right">Right Align</option>
            </select>
            <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>

            <button type="button" onClick={() => {
                setLinkUrl(editor.getAttributes('link').href || '');
                setShowLinkModal(true);
            }} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('link') ? 'bg-gray-200 text-gray-900' : ''}`}>
                <LinkIcon size={16} />
            </button>
            <button type="button" onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        try {
                            // Optionally, you can add a loading state here
                            const uploadData = new FormData();
                            uploadData.append("file", file);
                            const res = await uploadFile(uploadData);
                            const d = res.data;
                            let fileUrl = d?.url || d?.file_url || d?.data?.url || d?.data?.file_url || d?.data?.file || (typeof d?.data === 'string' ? d.data : null);

                            if (!fileUrl && d?.data && typeof d.data === 'object') {
                                fileUrl = Object.values(d.data).find(v => typeof v === 'string' && (v.startsWith('http') || v.includes('/uploads/')));
                            }

                            if (fileUrl) {
                                editor.chain().focus().setImage({ src: fileUrl }).run();
                            } else {
                                showToast('Could not resolve image URL from upload response.', 'error');
                            }
                        } catch (err) {
                            console.error('Image upload failed', err);
                            showToast('Failed to upload image.', 'error');
                        }
                    }
                };
                input.click();
            }} className="!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center" title="Upload Image">
                <ImageIcon size={16} />
            </button>
            <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setShowTableMenu(!showTableMenu)}
                    className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${editor.isActive('table') ? 'bg-gray-200 text-gray-900' : ''}`}
                    title="Table"
                >
                    <TableIcon size={16} />
                </button>
                {showTableMenu && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] z-50 w-44 py-1.5 text-[13px] animate-in fade-in zoom-in-95 duration-200">
                        {!editor.isActive('table') ? (
                            <button
                                type="button"
                                onClick={() => { editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(); setShowTableMenu(false); }}
                                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                            >
                                Insert Table
                            </button>
                        ) : (
                            <div className="flex flex-col">
                                <button type="button" onClick={() => { editor.chain().focus().addColumnBefore().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Add Column Before</button>
                                <button type="button" onClick={() => { editor.chain().focus().addColumnAfter().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Add Column After</button>
                                <button type="button" onClick={() => { editor.chain().focus().deleteColumn().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">Delete Column</button>
                                <div className="h-[1px] bg-gray-100 my-1.5 mx-2"></div>
                                <button type="button" onClick={() => { editor.chain().focus().addRowBefore().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Add Row Before</button>
                                <button type="button" onClick={() => { editor.chain().focus().addRowAfter().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Add Row After</button>
                                <button type="button" onClick={() => { editor.chain().focus().deleteRow().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">Delete Row</button>
                                <div className="h-[1px] bg-gray-100 my-1.5 mx-2"></div>
                                <button type="button" onClick={() => { editor.chain().focus().deleteTable().run(); setShowTableMenu(false); }} className="w-full text-left px-4 py-2 font-semibold text-red-600 hover:bg-red-50 transition-colors">Delete Table</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="flex-1"></div>
            <button type="button" onClick={onToggleFullscreen} className="!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center" title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
                {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
            <button type="button" onClick={onToggleCode} className={`!p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-900 rounded transition-colors flex items-center justify-center ${isCodeView ? 'bg-gray-200 text-gray-900' : ''}`} title="Code View">
                <Code size={16} />
            </button>

            {/* Link Modal */}
            {showLinkModal && (
                <div className="fixed inset-0 bg-black/50 z-[300] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl w-full max-w-[350px] shadow-2xl p-5 animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-[15px] font-bold text-gray-900">Insert Link</h3>
                            <button onClick={() => setShowLinkModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={16} />
                            </button>
                        </div>
                        <input
                            type="url"
                            value={linkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                            placeholder="https://example.com"
                            className="w-full px-4 py-2.5 text-[13px] bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors mb-4"
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddLink();
                                }
                            }}
                        />
                        <div className="flex gap-2 justify-end">
                            {editor.isActive('link') && (
                                <button
                                    onClick={() => {
                                        editor.chain().focus().unsetLink().run();
                                        setShowLinkModal(false);
                                    }}
                                    className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 font-medium text-[12.5px] hover:bg-gray-50 transition-colors mr-auto"
                                >
                                    Unlink
                                </button>
                            )}
                            <button
                                onClick={() => setShowLinkModal(false)}
                                className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 font-medium text-[12.5px] hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddLink}
                                className="bg-[#E66D3D] hover:bg-[#d35a2e] text-white px-4 py-2 rounded-lg text-[12.5px] font-medium transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isCodeView, setIsCodeView] = useState(false);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('content');
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
        is_published: true,
        seo_title: '',
        meta_description: '',
        faq_schema: []
    });

    const addFAQ = () => {
        setFormData(prev => ({
            ...prev,
            faq_schema: [...(prev.faq_schema || []), { question: '', answer: '' }]
        }));
    };

    const removeFAQ = (index) => {
        setFormData(prev => ({
            ...prev,
            faq_schema: prev.faq_schema.filter((_, i) => i !== index)
        }));
    };

    const handleFAQChange = (index, field, value) => {
        setFormData(prev => {
            const newFaqs = [...(prev.faq_schema || [])];
            newFaqs[index] = { ...newFaqs[index], [field]: value };
            return { ...prev, faq_schema: newFaqs };
        });
    };

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bold: false,
                italic: false,
                heading: false,
            }),
            TextStyle,
            FontSize,
            CustomHeading,
            CustomBold,
            CustomItalic,
            UnderlineExtension,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            LinkExtension.configure({ openOnClick: false }),
            ImageExtension,
            Table.configure({ resizable: true }),
            TableRow,
            TableHeader,
            TableCell
        ],
        content: '',
        editorProps: {
            handleDrop: function(view, event, slice, moved) {
                if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
                    let file = event.dataTransfer.files[0];
                    if (file.type.startsWith('image/')) {
                        event.preventDefault();
                        const uploadData = new FormData();
                        uploadData.append("file", file);
                        
                        // We use a toast if available or just log for simplicity in the handler
                        uploadFile(uploadData).then(res => {
                            const d = res.data;
                            let fileUrl = d?.url || d?.file_url || d?.data?.url || d?.data?.file_url || d?.data?.file || (typeof d?.data === 'string' ? d.data : null);
                            if (!fileUrl && d?.data && typeof d.data === 'object') {
                                const possibleUrl = Object.values(d.data).find(v => typeof v === 'string' && (v.startsWith('http') || v.includes('/uploads/')));
                                if (possibleUrl) fileUrl = possibleUrl;
                            }
                            
                            if (fileUrl) {
                                const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
                                const node = view.state.schema.nodes.image.create({ src: fileUrl });
                                const transaction = view.state.tr.insert(coordinates ? coordinates.pos : view.state.selection.to, node);
                                view.dispatch(transaction);
                            }
                        }).catch(err => {
                            console.error("Image drop upload failed:", err);
                        });
                        return true;
                    }
                }
                return false;
            },
            handlePaste: function(view, event, slice) {
                if (event.clipboardData && event.clipboardData.files && event.clipboardData.files[0]) {
                    let file = event.clipboardData.files[0];
                    if (file.type.startsWith('image/')) {
                        event.preventDefault();
                        const uploadData = new FormData();
                        uploadData.append("file", file);
                        
                        uploadFile(uploadData).then(res => {
                            const d = res.data;
                            let fileUrl = d?.url || d?.file_url || d?.data?.url || d?.data?.file_url || d?.data?.file || (typeof d?.data === 'string' ? d.data : null);
                            if (!fileUrl && d?.data && typeof d.data === 'object') {
                                const possibleUrl = Object.values(d.data).find(v => typeof v === 'string' && (v.startsWith('http') || v.includes('/uploads/')));
                                if (possibleUrl) fileUrl = possibleUrl;
                            }
                            
                            if (fileUrl) {
                                const node = view.state.schema.nodes.image.create({ src: fileUrl });
                                const transaction = view.state.tr.replaceSelectionWith(node);
                                view.dispatch(transaction);
                            }
                        }).catch(err => {
                            console.error("Image paste upload failed:", err);
                        });
                        return true;
                    }
                }
                return false;
            }
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            console.log("TIPTAP HTML OUTPUT:", html);
            // Create a synthetic event to match handleInputChange signature
            handleInputChange({ target: { name: 'content', value: html } });
        }
    });

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
            setActiveTab('content');
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
                is_published: true,
                seo_title: '',
                meta_description: '',
                faq_schema: []
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
            is_published: blog.is_published || false,
            seo_title: blog.seo_title || '',
            meta_description: blog.meta_description || '',
            faq_schema: blog.faq_schema || []
        });
        setCoverImageFile(null);
        if (editor) {
            editor.commands.setContent(blog.content || '');
        }
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
            <style>{`
                .ProseMirror .tableWrapper {
                    overflow-x: auto;
                    margin: 1.5rem 0;
                    -webkit-overflow-scrolling: touch;
                }
                .ProseMirror table {
                    border-collapse: collapse;
                    table-layout: fixed;
                    width: 100%;
                    min-width: 400px;
                    margin: 0;
                }
                .ProseMirror table td, .ProseMirror table th {
                    min-width: 1em;
                    border: 1px solid #e5e7eb;
                    padding: 8px 12px;
                    vertical-align: top;
                    box-sizing: border-box;
                    position: relative;
                }
                .ProseMirror table th {
                    font-weight: bold;
                    text-align: left;
                    background-color: #f9fafb;
                }
                .ProseMirror table .column-resize-handle {
                    position: absolute;
                    right: -2px;
                    top: 0;
                    bottom: -2px;
                    width: 4px;
                    background-color: #E66D3D;
                    pointer-events: none;
                }
                .ProseMirror table p {
                    margin: 0;
                }
            `}</style>
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
                            is_published: true,
                            seo_title: '',
                            meta_description: '',
                            faq_schema: []
                        });
                        setCoverImageFile(null);
                        if (editor) {
                            editor.commands.setContent('');
                        }
                        setActiveTab('content');
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

                        {/* Tabs */}
                        <div className="px-6 pt-4 border-b border-gray-100 flex gap-6">
                            <button
                                type="button"
                                onClick={() => setActiveTab('content')}
                                className={`pb-3 text-[14px] font-semibold transition-colors relative ${activeTab === 'content' ? 'text-[#E66D3D]' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Content Details
                                {activeTab === 'content' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E66D3D] rounded-t-full" />}
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('seo')}
                                className={`pb-3 text-[14px] font-semibold transition-colors relative ${activeTab === 'seo' ? 'text-[#E66D3D]' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                SEO & FAQ
                                {activeTab === 'seo' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E66D3D] rounded-t-full" />}
                            </button>
                        </div>

                        {/* Modal Body (Scrollable form) */}
                        <div className="p-6 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <form id="blogForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 gap-5">
                                    {activeTab === 'content' && (
                                        <>
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

                                            <div className={isFullscreen ? "fixed inset-0 z-[300] bg-white flex flex-col animate-in fade-in duration-200" : "col-span-2"}>
                                                {!isFullscreen && <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Content (HTML) <span className="text-red-500">*</span></label>}

                                                <div className={`bg-white flex flex-col ${isFullscreen ? 'flex-1 min-h-0' : 'rounded-xl overflow-hidden shadow-sm border border-gray-200 focus-within:border-[#E66D3D] focus-within:ring-1 focus-within:ring-[#E66D3D] transition-colors'}`}>
                                                    <TiptapToolbar editor={editor} onToggleFullscreen={() => setIsFullscreen(!isFullscreen)} onToggleCode={() => setIsCodeView(!isCodeView)} isCodeView={isCodeView} showToast={showToast} isFullscreen={isFullscreen} />
                                                    <textarea
                                                        name="content"
                                                        value={formData.content}
                                                        onChange={(e) => {
                                                            handleInputChange(e);
                                                            if (editor) editor.commands.setContent(e.target.value);
                                                        }}
                                                        className={`w-full p-5 font-mono text-[14px] bg-white text-gray-800 resize-none focus:outline-none ${isFullscreen ? 'flex-1 min-h-0' : 'min-h-[250px]'} ${isCodeView ? 'block' : 'hidden'}`}
                                                        placeholder="Write your HTML here..."
                                                    />
                                                    <div className={`${isCodeView ? 'hidden' : 'flex'} flex-col ${isFullscreen ? 'flex-1 min-h-0' : ''}`}>
                                                        <EditorContent
                                                            editor={editor}
                                                            className={`bg-white prose prose-sm max-w-none flex flex-col [&_.tiptap]:outline-none [&_.tiptap]:p-5 ${isFullscreen ? 'flex-1 min-h-0 overflow-y-auto [&_.tiptap]:min-h-full' : '[&_.tiptap]:min-h-[250px]'}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {activeTab === 'seo' && (
                                        <>
                                            {/* SEO Section */}
                                            <div className="col-span-2 pt-4 border-t border-gray-100 mt-2">
                                                <h3 className="text-[15px] font-bold text-gray-900 mb-4">SEO Details</h3>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">SEO Title</label>
                                                        <input
                                                            type="text"
                                                            name="seo_title"
                                                            value={formData.seo_title || ''}
                                                            onChange={handleInputChange}
                                                            placeholder="e.g. Get Your First Freelance Job in 2026 | GigPerHour"
                                                            className="w-full px-4 py-2.5 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Meta Description</label>
                                                        <textarea
                                                            name="meta_description"
                                                            value={formData.meta_description || ''}
                                                            onChange={handleInputChange}
                                                            rows="2"
                                                            placeholder="e.g. Learn how to land your first freelance job with our step-by-step guide..."
                                                            className="w-full px-4 py-2.5 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors resize-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ Schema Section */}
                                            <div className="col-span-2 pt-4 border-t border-gray-100 mt-2">
                                                <div className="flex justify-between items-center mb-4">
                                                    <h3 className="text-[15px] font-bold text-gray-900">FAQ Schema</h3>
                                                    <button type="button" onClick={addFAQ} className="text-[#E66D3D] hover:bg-[#E66D3D]/10 px-3 py-1.5 rounded-lg text-[13px] font-semibold flex items-center gap-1.5 transition-colors">
                                                        <Plus size={14} /> Add FAQ
                                                    </button>
                                                </div>

                                                <div className="flex flex-col gap-4">
                                                    {(!formData.faq_schema || formData.faq_schema.length === 0) && (
                                                        <div className="text-[13px] text-gray-500 text-center py-4 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
                                                            No FAQs added yet. Click "Add FAQ" to include structured Q&A for SEO.
                                                        </div>
                                                    )}
                                                    {formData.faq_schema?.map((faq, index) => (
                                                        <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 relative group">
                                                            <button type="button" onClick={() => removeFAQ(index)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 hover:bg-white p-1.5 rounded-lg shadow-sm transition-all opacity-0 group-hover:opacity-100">
                                                                <Trash2 size={14} />
                                                            </button>
                                                            <div className="grid grid-cols-1 gap-3 pr-8">
                                                                <div>
                                                                    <label className="block text-[12px] font-semibold text-gray-600 mb-1">Question {index + 1}</label>
                                                                    <input
                                                                        type="text"
                                                                        value={faq.question}
                                                                        onChange={(e) => handleFAQChange(index, 'question', e.target.value)}
                                                                        placeholder="e.g. How do I get my first freelance job?"
                                                                        className="w-full px-3 py-2 text-[13px] bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-[12px] font-semibold text-gray-600 mb-1">Answer</label>
                                                                    <textarea
                                                                        value={faq.answer}
                                                                        onChange={(e) => handleFAQChange(index, 'answer', e.target.value)}
                                                                        rows="2"
                                                                        placeholder="e.g. Start by completing your profile..."
                                                                        className="w-full px-3 py-2 text-[13px] bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#E66D3D] focus:ring-1 focus:ring-[#E66D3D] transition-colors resize-none"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {!editingId && (
                                        <div className="col-span-2 flex items-center mt-4 border-t border-gray-100 pt-4">
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
