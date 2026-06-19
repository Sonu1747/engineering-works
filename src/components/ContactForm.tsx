import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUpload, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import confetti from 'canvas-confetti';

interface FormData {
  companyName: string;
  contactName: string;
  mobile: string;
  email: string;
  projectType: string;
  location: string;
  description: string;
  requiredManpower: string;
  startDate: string;
}

export default function ContactForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    mobile: '',
    email: '',
    projectType: 'Plant Erection',
    location: '',
    description: '',
    requiredManpower: '',
    startDate: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'files', string>>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Submit loading states
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setErrors((prev) => ({ ...prev, files: '' }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: Partial<Record<keyof FormData | 'files', string>> = {};

    if (!formData.contactName.trim()) tempErrors.contactName = 'Contact person name is required';
    if (!formData.mobile.trim()) {
      tempErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      tempErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.location.trim()) tempErrors.location = 'Project location is required';
    if (!formData.description.trim()) {
      tempErrors.description = 'Project description is required';
    } else if (formData.description.trim().length < 15) {
      tempErrors.description = 'Please describe the project in more detail (min 15 characters)';
    }

    if (!formData.requiredManpower.trim() || Number(formData.requiredManpower) < 1) {
      tempErrors.requiredManpower = 'Required manpower must be at least 1 person';
    }

    if (!formData.startDate) tempErrors.startDate = 'Expected start date is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate file upload progress
    if (selectedFile) {
      setIsUploading(true);
      setUploadProgress(0);

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 25;
        setUploadProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          submitFinalData();
        }
      }, 300);
    } else {
      submitFinalData();
    }
  };

  const submitFinalData = async () => {
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('companyName', formData.companyName);
      data.append('contactName', formData.contactName);
      data.append('mobile', formData.mobile);
      data.append('email', formData.email);
      data.append('projectType', formData.projectType);
      data.append('location', formData.location);
      data.append('description', formData.description);
      data.append('requiredManpower', formData.requiredManpower);
      data.append('startDate', formData.startDate);
      if (selectedFile) {
        data.append('projectDocs', selectedFile);
      }

      const response = await fetch('https://engineering-works.onrender.com/api/inquiry', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setShowSuccessModal(true);

        // Trigger Confetti explosion
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#f97316', '#ea580c', '#0b132b', '#ffffff'],
        });

        // Clear Form
        setFormData({
          companyName: '',
          contactName: '',
          mobile: '',
          email: '',
          projectType: 'Plant Erection',
          location: '',
          description: '',
          requiredManpower: '',
          startDate: '',
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        alert(result.error || 'Failed to submit inquiry. Please check your inputs and try again.');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      alert('A network error occurred. Please verify your connection or contact us via phone/email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-ind-blue-900/40 dark:bg-ind-blue-900/40 light:bg-ind-gray-100 text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Decorative Blur glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-ind-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ind-blue-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            Contract Inquiry Form
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 light:text-ind-gray-600 mt-4 font-light">
            Need skilled crews, plant shifting, or shutdown support? Fill out our inquiry form to request a commercial proposal.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Info panel */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-display font-bold uppercase text-white light:text-ind-blue-900">
                Pal Plant Services
              </h3>
              <p className="text-sm text-ind-gray-400 light:text-ind-gray-600 mt-2 font-light leading-relaxed">
                Connect with our commercial project desk. We offer flexible annual maintenance contracts, turnkey plant shifting, and quick deployment of skilled industrial manpower across all major states.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-ind-orange-500/10 border border-ind-orange-500/30 text-ind-orange-500 rounded-xl mt-1">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ind-gray-400 uppercase tracking-widest block">
                    Phone Numbers
                  </span>
                  <a
                    href="tel:+91 6388688948"
                    className="text-base sm:text-lg font-mono font-bold text-white light:text-ind-blue-900 hover:text-ind-orange-500 transition-colors"
                  >
                    +91 6388688948
                  </a>
                  <p className="text-xs text-ind-gray-400 font-light"></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-ind-orange-500/10 border border-ind-orange-500/30 text-ind-orange-500 rounded-xl mt-1">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ind-gray-400 uppercase tracking-widest block">
                    Email Support
                  </span>
                  <a
                    href="mailto:pal.engineering.works91@gmail.com"
                    className="text-base sm:text-lg font-mono font-bold text-white light:text-ind-blue-900 hover:text-ind-orange-500 transition-colors"
                  >
                    pal.engineering.works91@gmail.com
                  </a>
                  <p className="text-xs text-ind-gray-400 font-light"></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-ind-orange-500/10 border border-ind-orange-500/30 text-ind-orange-500 rounded-xl mt-1">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ind-gray-400 uppercase tracking-widest block">
                    Address
                  </span>
                  <p className="text-base text-white light:text-ind-blue-900 font-semibold font-display">
                    Farrukhabad
                  </p>
                  <p className="text-xs sm:text-sm text-ind-gray-400 light:text-ind-gray-600 mt-1 font-light leading-relaxed">
                    Fatehgarh, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/5 font-mono text-xs">
              <span className="text-ind-orange-500 font-black uppercase tracking-wider block mb-2">
                Business Outlets
              </span>
              <div className="flex justify-between py-1 border-b border-white/5 text-ind-gray-300 light:text-ind-gray-700">
                <span>Mon - Sat:</span>
                <span>08:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between py-1 text-ind-orange-500 font-bold">
                <span>Outage Emergency:</span>
                <span>24/7 SUPPORT ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form panel */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl glassmorphism border border-white/10 shadow-2xl space-y-6 text-left"
              noValidate
            >
              <h3 className="text-lg sm:text-xl font-display font-bold uppercase text-white light:text-ind-blue-900 tracking-wider pb-4 border-b border-white/10">
                Contract Inquiry Request
              </h3>

              {/* Grid 1: Company & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. UltraTech Cement"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ind-orange-500 text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Contact Person Name <span className="text-ind-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-sans ${errors.contactName ? 'border-red-500' : 'border-white/10'
                      }`}
                  />
                  {errors.contactName && (
                    <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.contactName}</span>
                  )}
                </div>
              </div>

              {/* Grid 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="mobile" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Mobile Number <span className="text-ind-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-mono ${errors.mobile ? 'border-red-500' : 'border-white/10'
                      }`}
                  />
                  {errors.mobile && (
                    <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.mobile}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Email Address <span className="text-ind-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@company.com"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-sans ${errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Grid 3: Project Type & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-ind-blue-900 border border-white/10 text-white focus:outline-none focus:border-ind-orange-500 text-sm font-sans"
                  >
                    <option value="Plant Erection">Plant Erection</option>
                    <option value="Plant Maintenance">Plant Maintenance</option>
                    <option value="Plant Relocation">Plant Relocation</option>
                    <option value="Shutdown Services">Shutdown Services</option>
                    <option value="Manpower Supply">Manpower Supply</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Project Location <span className="text-ind-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Durgapur, West Bengal"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-sans ${errors.location ? 'border-red-500' : 'border-white/10'
                      }`}
                  />
                  {errors.location && (
                    <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.location}</span>
                  )}
                </div>
              </div>

              {/* Grid 4: Manpower & Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="requiredManpower" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Required Manpower Crew <span className="text-ind-orange-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="requiredManpower"
                    name="requiredManpower"
                    value={formData.requiredManpower}
                    onChange={handleInputChange}
                    placeholder="Number of personnel"
                    min="1"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-mono ${errors.requiredManpower ? 'border-red-500' : 'border-white/10'
                      }`}
                  />
                  {errors.requiredManpower && (
                    <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.requiredManpower}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    Expected Start Date <span className="text-ind-orange-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-mono ${errors.startDate ? 'border-red-500' : 'border-white/10'
                      }`}
                  />
                  {errors.startDate && (
                    <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.startDate}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                  Project Description <span className="text-ind-orange-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Outline structural parameters, equipment types, and scope of work details..."
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none focus:border-ind-orange-500 text-sm font-sans ${errors.description ? 'border-red-500' : 'border-white/10'
                    }`}
                />
                {errors.description && (
                  <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.description}</span>
                )}
              </div>

              {/* Document Uploader */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-ind-gray-300 light:text-ind-gray-700 mb-2">
                  Upload Project Documents / Blueprints
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-white/10 hover:border-ind-orange-500/50 rounded-xl p-5 text-center cursor-pointer transition-colors bg-white/2"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="projectDocs"
                    name="projectDocs"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.zip"
                  />
                  <FaUpload className="w-6 h-6 text-ind-orange-500 mx-auto mb-2.5" />
                  <span className="text-xs text-ind-gray-300 font-sans block">
                    {selectedFile ? `Selected: ${selectedFile.name}` : 'Click to select blueprints/RFQs (PDF, DOCX, ZIP)'}
                  </span>
                  <span className="text-[10px] text-ind-gray-500 font-mono block mt-1">
                    Maximum size: 15MB
                  </span>
                </div>

                {/* Simulated file upload loading state */}
                {isUploading && (
                  <div className="mt-3.5 space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-ind-gray-400">
                      <span>Uploading project files...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-ind-orange-500 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || isUploading}
                className="w-full py-4 rounded-xl bg-ind-orange-600 hover:bg-ind-orange-500 disabled:bg-ind-gray-700 text-white font-display font-extrabold uppercase tracking-widest text-sm shadow-xl hover:shadow-ind-orange-500/20 transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-4.5 h-4.5 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <span>Submit Contract Inquiry</span>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Confetti Success Popup Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowSuccessModal(false)}
            className="absolute inset-0 bg-ind-blue-950/80 backdrop-blur-md"
          />
          <div className="relative z-10 w-full max-w-md bg-ind-blue-900 border border-white/10 p-8 rounded-3xl shadow-2xl text-center">
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white">
              Inquiry Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-ind-gray-300 font-light leading-relaxed mt-3">
              Thank you for contacting Pal Plant Erection Services. Our commercial engineering coordinators will review your description and documents, and call you within 24 business hours.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 px-6 py-2.5 bg-ind-orange-600 hover:bg-ind-orange-500 text-white font-display uppercase tracking-wider text-xs font-bold rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
