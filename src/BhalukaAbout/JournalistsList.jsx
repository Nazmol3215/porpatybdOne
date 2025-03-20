import React from 'react';

const JournalistsList = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '26px', color: '#333', fontWeight: 'bold' }}>
                সাংবাদিকদের তালিকা
            </h2>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                margin: 'auto',
                maxWidth: '900px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f1f1f1', color: '#333', textAlign: 'center' }}>
                        <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: '600' }}>ক্রম নং</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: '600' }}>সাংবাদিকের নাম</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: '600' }}>কর্মরত পত্রিকাসমূহ</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: '600' }}>মোবাইল নাম্বার</th>
                    </tr>
                </thead>
                <tbody>
                    {journalists.map((journalist, index) => (
                        <tr key={index} style={{ textAlign: 'center', color: '#555' }}>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{journalist.serial}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{journalist.name}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{journalist.media}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{journalist.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const journalists = [
    { serial: '১', name: 'এম. এ জাহাঙ্গীর খান উজ্জ্বল', media: 'সমকাল', phone: '০১৯১১-৮৩১৬৩৭' },
    { serial: '২', name: 'এম.এ. বকুল', media: 'দৈনিক বকুলের সময়', phone: '০১৯১৭-৮৫৩৬৩৬' },
    { serial: '৩', name: 'আব্দুস রহমান তুষার', media: 'দৈনিক সংবাদ', phone: '০১৯১৭-৮৫৯৬৩৩' },
    { serial: '৪', name: 'মো. আজাদুর রহমান সুমন', media: 'এটিএন নিউজ ও বাংলাদেশ প্রতিদিন', phone: '০১৯১৬-৮৫৩৬৩৪' },
    { serial: '৫', name: 'মো. মশিউর রহমান খান', media: 'দৈনিক মানবজমিন', phone: '০১৯১৫-৮৫২৬৩৩' },
    { serial: '৬', name: 'আলাউদ্দিন ফারুক', media: 'দৈনিক নয়া দিগন্ত', phone: '০১৯১৬-৮৫৮৬৩৪' },
    { serial: '৭', name: 'অসীম কান্তি সরকার', media: 'দৈনিক জনতা', phone: '০১৯১১-৮৫৩৮৩৬' },
    { serial: '৮', name: 'মো. কামরুল হেদায়েত চন্দন', media: 'দৈনিক জনকন্ঠ', phone: '০১৯১৩-৮৫৩৮৩৭' },
    { serial: '৯', name: 'মো. মোহাম্মদ ইমরান সুমন', media: 'দৈনিক ইনকিলাব', phone: '০১৯১৫-৮৫৮৩৮৬' },
    { serial: '১০', name: 'মো. মাসুম হোসেন', media: 'এনটিভি', phone: '০১৯১৩-৮৫৩৮৪৮' },
    { serial: '১১', name: 'মো. রিয়াজুল ইসলাম রিয়াজ', media: 'আজকের ময়মনসিংহ', phone: '০১৯১১-৮৫৩৮৪৯' },
    { serial: '১২', name: 'মো. জহিরুল ইসলাম', media: 'চ্যানেল টিভি', phone: '০১৯১৫-৮৫৮৬৮৫' },
    { serial: '১৩', name: 'মো. রশিদুল ইসলাম রশিদ', media: 'আরটিভি ও সমকাল', phone: '০১৯১১-৮৫৩৮৬৮' },
    { serial: '১৪', name: 'রুহেল রায়', media: 'দৈনিক কল্যাণ', phone: '০১৯১৬-৮৫৩৮৬৬' },
    { serial: '১৫', name: 'শাহ হায়দার আলী', media: 'দৈনিক আলোকিত বাংলাদেশ', phone: '০১৯১৩-৮৫৩৬৩৬' },
    { serial: '২৬', name: 'কামরুল হাসান পার্থ কামাল', media: 'দৈনিক ইত্তেফাক', phone: '০১৯১৩-৫৮৪০৪৮' },
    { serial: '২৭', name: 'এম.এ. শাজাহান সেলিম', media: 'দৈনিক চিঠি', phone: '০১৯১৩-১২৫৮৫৬' },
    { serial: '২৮', name: 'মো. কামরুজ্জামান দানিশ', media: 'দৈনিক ইত্তেফাক', phone: '০১৯১১-৮৫৮০৩৬' },
    { serial: '২৯', name: 'সাব্বির রহমান শুভ্র', media: 'বাংলাদেশ সময়', phone: '০১৯১৭-৮৫৮০৩৭' },
    { serial: '৩০', name: 'এডভোকেট এস.এম. জামান', media: 'দৈনিক মযলুম সংবাদ', phone: '০১৯১৬-৮৫০৫৩৯' },
    { serial: '৩১', name: 'মো. শাহাব উদ্দিন', media: 'দৈনিক গফরগাঁও', phone: '০১৯১৯-৮৫০৫৪২' },
    { serial: '৩২', name: 'আবু সাঈদ খুররম', media: 'ভোরের কাগজ', phone: '০১৯১৬-৮৫৮৪১২' },
    { serial: '৩৩', name: 'আলমগীর হক বিপ্লব', media: 'বাংলাদেশ সময়', phone: '০১৯১৭-৮৫৩৮৪৪' },
    { serial: '৩৪', name: 'মোহাম্মদ আব্দুল আলী', media: 'ঢাকা মুরুল্লিয়া ও এশিয়া চিঠি', phone: '০১৯১২-৮৫৮৪৪১' },
    { serial: '৩৫', name: 'মো. রুহুল আমিন খান', media: 'চ্যানেল ২৪', phone: '০১৯১৩-৮৫৮৮৪৪' },
    { serial: '৩৬', name: 'শফিকুল ইসলাম সুমন', media: 'দৈনিক মানবজমিন', phone: '০১৯১৪-৮৫৩৮৫৫' },
    { serial: '৩৭', name: 'মো. মনিরুল ইসলাম রবিন', media: 'দৈনিক ঢাকার ডাক', phone: '০১৯১১-৮৫৩৮৫৬' },
    { serial: '৩৮', name: 'মোহাম্মদ শরিফুল ইসলাম', media: 'প্রতিদিন সংবাদ ও আওয়াজের রেডিও', phone: '০১৯১৩-৮৫৩৬৮৬' },
    { serial: '৩৯', name: 'আবুল কালাম আজাদ', media: 'দৈনিক আলোর সংবাদ', phone: '০১৯১১-৮৫৩৮৬৩' },
    { serial: '৪০', name: 'মো. আহসানুল হক', media: 'বাংলাদেশ সময়', phone: '০১৯১৩-৮৫৮০৩৪' },
    { serial: '৪১', name: 'মো. মাহফুজুর রহমান মুনির', media: 'ঢাকা পত্রিকা', phone: '০১৯১৫-৮৫৮৪৫০' },
    { serial: '৪২', name: 'মো. আমিরুল ইসলাম রনি', media: 'বাংলাদেশ সংবাদ ও আওয়াজ রেডিও', phone: '০১৯১১-৮৫৩৮৬৪' },
    { serial: '৪৩', name: 'মো. শরিফুল ইসলাম', media: 'দৈনিক মানবকণ্ঠ', phone: '০১৯১৩-৮৫৩৮৬৫' },
    { serial: '৪৪', name: 'আবু সাঈদ আনছারী', media: 'প্রতিদিন সংবাদ', phone: '০১৯১৪-৮৫৩৮৬৬' },
    { serial: '৪৫', name: 'মোহাম্মদ আব্দুর রহমান', media: 'এটিএন বাংলা ও আজকের সংবাদ', phone: '০১৯১১-৮৫৮০৪৩' },
];

export default JournalistsList;
