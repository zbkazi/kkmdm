import AboutDetails from "@/components/information/about/AboutDetails";
import React from "react";

const aboutData = {
  title: "কাশির খামার মফিজিয়া দাখিল মাদ্রাসা: সংক্ষিপ্ত বিবরণ",
  description:
    "কাশির খামার মফিজিয়া দাখিল মাদ্রাসা একটি ইসলামিক শিক্ষা প্রতিষ্ঠান, যা উলিপুর, কুড়িগ্রামের কাশির খামার গ্রামে অবস্থিত। এটির এডুকেশনাল ইনস্টিটিউট আইডেন্টিফিকেশন নম্বর (EIIN) হলো 122690।",
  sections: [
    {
      title: "প্রতিষ্ঠানের ইতিহাস",
      content:
        "মাদ্রাসাটি 01 জানুয়ারি, 1982 সালে প্রথম চালু করা হয়েছিল। প্রতিষ্ঠার পর থেকে এটি ইসলামিক শিক্ষার পাশাপাশি সাধারণ শিক্ষাও প্রদান করে আসছে।",
    },
    {
      title: "শিক্ষা কার্যক্রম",
      content: [
        "প্রথম শ্রেণী থেকে পঞ্চম শ্রেণি পর্যন্ত।",
        "ষষ্ঠ শ্রেণী থেকে অষ্টম শ্রেণি পর্যন্ত।",
        "নবম ও দশম শ্রেণি এবং এসএসসি দাখিল পর্যায় পর্যন্ত।",
      ],
    },
    {
      title: "কার্যক্রম ও ব্যবস্থাপনা",
      content: [
        "মাদ্রাসাটি দিনের শিফটে পরিচালিত হয়।",
        "এর ব্যবস্থাপনা পরিচালিত হয় একটি ম্যানেজিং কমিটির মাধ্যমে।",
        "প্রতিষ্ঠানটি সরকার কর্তৃক স্বীকৃত এবং এর স্বীকৃতি স্তর হলো দাখিল মাদ্রাসা।",
      ],
    },
    {
      title: "অতিরিক্ত তথ্য",
      content: [
        "মাদ্রাসার পাঠাগারে বিপুল সংখ্যক ইসলামিক এবং সাধারণ জ্ঞানবিষয়ক বই রয়েছে।",
        "প্রতিষ্ঠানটি প্রতি বছর বিভিন্ন সাংস্কৃতিক এবং ধর্মীয় অনুষ্ঠানের আয়োজন করে থাকে।",
        "শিক্ষার্থীদের জন্য রয়েছে নিয়মিত স্বাস্থ্য পরীক্ষা এবং চিকিৎসা সুবিধা।",
      ],
    },
  ],
  conclusion:
    "কাশির খামার মফিজিয়া দাখিল মাদ্রাসা একটি গুরুত্বপূর্ণ শিক্ষা প্রতিষ্ঠান যা কাশির খামার গ্রামের শিক্ষার্থীদের জন্য একটি মানসম্মত শিক্ষা প্রদান করে আসছে।",
};

const AboutDetailsPage = () => {
  return (
    <div>
      <AboutDetails data={aboutData} />
    </div>
  );
};

export default AboutDetailsPage;
