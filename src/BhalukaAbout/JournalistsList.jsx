import React from 'react';
import fgcfh1 from "../Images/poperty1.png"; // আপনার ইমেজ ফাইল পাথ দিন
import fgcfh2 from "../Images/i.png"; // আপনার ইমেজ ফাইল পাথ দিন
import fgcfh3 from "../Images/im.png.webp"; // আপনার ইমেজ ফাইল পাথ দিন
import fgcfh4 from "../Images/poperty.png"; // আপনার ইমেজ ফাইল পাথ দিন

const JournalistsList = () => {
    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">
                সাংবাদিকদের তালিকা
            </h2>

            <div className="row">
                {/* Small screens: Full width, Medium screens: List on the left */}
                <div className="col-12 col-md-9">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-light">
                            <tr className="text-center">
                                <th>ক্রম নং</th>
                                <th>সাংবাদিকের নাম</th>
                                <th>কর্মরত পত্রিকাসমূহ</th>
                                <th>মোবাইল নাম্বার</th>
                            </tr>
                        </thead>
                        <tbody>
                            {journalists.map((journalist, index) => (
                                <tr key={index} className="text-center">
                                    <td>{journalist.serial}</td>
                                    <td>{journalist.name}</td>
                                    <td>{journalist.media}</td>
                                    <td>{journalist.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Medium screens: Four images on the right */}
                <div className="col-md-3 d-none d-md-block">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <img
                                src={fgcfh2} // দ্বিতীয় ইমেজ
                                alt="Image 2"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <img
                                src={fgcfh3} // তৃতীয় ইমেজ
                                alt="Image 3"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <img
                                src={fgcfh4} // চতুর্থ ইমেজ
                                alt="Image 4"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
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
    { serial: '২৮', name: 'কামরুজ্জামান দানিশ', media: 'দৈনিক ইত্তেফাক', phone: '০১৯১১-৮৫৮০৩৬' },
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
