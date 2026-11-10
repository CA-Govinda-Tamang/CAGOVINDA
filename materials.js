/* =====================================================================
   MATERIALS LIST – the only file you need to edit to update the website
   ---------------------------------------------------------------------
   HOW TO ADD OR REPLACE A PDF
   1. Upload the PDF into the right folder on GitHub
      (files/cap3/english, files/cap3/summary, files/cap3/compilation,
       files/cap2/..., files/cap3/exam ...).
   2. Find the Act below and fill in the line, for example
        summary: { file: "files/cap3/summary/Companies_Act_2063_Summary.pdf", version: "v1.0", date: "2026-11-20" },
      For a new version, upload the new PDF with the same name and change
      only version and date. The date decides what shows in "Latest uploads".
   3. Commit. The site updates itself in about a minute.

   RULES
   - Dates are written "YYYY-MM-DD".
   - Keep the commas and quotes exactly as in the examples.
   - null means "Coming soon".
   - video: { link: "<YouTube link>", date: "<upload date>" } – the thumbnail
     appears automatically and "Latest videos" on the home page updates.
   - bareNp: { link: "<Law Commission page>" }  – or several links:
       [ { label: "Act, 2053", link: "..." }, { label: "Regulations, 2061", link: "..." } ]
   - more: extra videos for the same Act, shown as "Also watch".
   ===================================================================== */

// ------------------------- CAP III / CA Membership -------------------------
// Order = exam weightage (number of exam sessions each Act was asked in, Dec 2003 – Jun 2026)
window.CAP3_ACTS = [
  {
    name:    "Companies Act, 2063",
    area:    "Corporate",
    video:   { link: "https://youtu.be/PSn4jJ627kM", date: "2026-06-27" },
    bareNp:  { link: "https://www.lawcommission.gov.np/content/12157/12157-company-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Banks and Financial Institutions Act, 2073",
    area:    "Banking",
    video:   { link: "https://youtu.be/klY3sqLtUPU", date: "2026-05-30" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12214/12214-bank-and-financial-institution/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Nepal Rastra Bank Act, 2058",
    area:    "Banking",
    video:   { link: "https://youtu.be/V2WXKxMfdys", date: "2026-09-19" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12211/12211-nepal-rastra-bank-act-2058/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Insurance Act, 2079",
    area:    "Finance",
    video:   { link: "https://youtu.be/ZgcKO0YKwZE", date: "2026-09-12" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12233/12233-insurance-act-2079/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Nepal Chartered Accountants Act, 2053 & Regulations, 2061",
    area:    "Compliance",
    video:   { link: "https://youtu.be/Zi97iHYT8XA", date: "2026-05-23" },
    bareNp:  [
      { label: "Act, 2053 (Nepali)", link: "https://lawcommission.gov.np/content/13409/nepal-chartered-accountation-act--2053/" },
      { label: "Regulations, 2061 (Nepali)", link: "https://mof.gov.np/content/1589/nepal-chartered-accountants-regulations-regulations--2061/" }
    ],
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Securities Act, 2063",
    area:    "Finance",
    video:   { link: "https://youtu.be/gIq_mxZ9T-E", date: "2026-06-13" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12228/12228-securities-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Industrial Enterprises Act, 2076",
    area:    "Corporate",
    video:   { link: "https://youtu.be/elfOVISLG6Y", date: "2026-07-11" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12174/12174-industrial-business-act-2076/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Labour Act, 2074",
    area:    "Compliance",
    video:   { link: "https://youtu.be/SX8Ip2tL7to", date: "2026-08-02" },
    bareNp:  { link: "https://lawcommission.gov.np/content/13309/labor-act--2017/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Cooperatives Act, 2074",
    area:    "Finance",
    video:   { link: "https://youtu.be/a4FclAh-3uM", date: "2026-07-26" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12756/12756-cooperatives-act-2017/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Foreign Exchange (Regulation) Act, 2019",
    area:    "Banking",
    video:   { link: "https://youtu.be/JWG2qq0VcLA", date: "2026-06-20" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12208/12208-foreign-exchange-regulation/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Foreign Investment and Technology Transfer Act, 2075",
    area:    "Corporate",
    video:   { link: "https://youtu.be/-BHRYCpK6Lo", date: "2026-08-08" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12171/12171-the-foreign-investment-and-tec/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "International Financial Transactions Act, 2054",
    area:    "Finance",
    video:   { link: "https://youtu.be/D4vdzmM9XHY", date: "2026-08-15" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12226/12226-international-financial-transa/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Audit Act, 2075",
    area:    "Compliance",
    video:   { link: "https://youtu.be/V8LmfMiVOn8", date: "2026-08-22" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12885/12885-the-audit-act-2019/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Insolvency Act, 2063",
    area:    "Corporate",
    video:   { link: "https://youtu.be/RL39aPSOEfw", date: "2026-07-04" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12158/12158-damashahi-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Money Laundering Prevention Act, 2064",
    area:    "Compliance",
    video:   { link: "https://youtu.be/Dfnc7cL8qIU", date: "2026-05-17" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12229/12229-money-laundering-prevention-ac/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Public Procurement Act, 2063",
    area:    "Compliance",
    covers:  "Based on amendments as per Public Procurement (2nd Amendment) Ordinance, 2083",
    video:   { link: "https://youtu.be/geCMJ77-IZ8", date: "2026-05-10" },
    more:    [ { label: "Public Procurement – 2nd Amendment 2083 (amended sections only)", link: "https://youtu.be/XerdT2iDfUk", date: "2026-07-19" } ],
    bareNp:  { link: "https://lawcommission.gov.np/content/12891/12891-public-procurement-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Financial Intermediary Societies Act, 2055",
    area:    "Finance",
    video:   { link: "https://youtu.be/NVgj361DLzU", date: "2026-09-05" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12210/12210-financial-intermediation-insti/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Banking Offence and Punishment Act, 2064",
    area:    "Banking",
    video:   { link: "https://youtu.be/nT70SGmZwbA", date: "2026-06-06" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12213/12213-banking-offenses-and-punishmen/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Arbitration Act, 2055",
    area:    "Corporate",
    video:   { link: "https://youtu.be/SBFzKbxqDE8", date: "2026-08-29" },
    bareNp:  { link: "https://lawcommission.gov.np/content/13367/arbitration-act--2055/" },
    bareEn:  null,
    summary: null,
    comp:    null
  }
];

// Exam corner (CAP III). After uploading: fill in file and date for the PDF,
// and video: { link: "https://youtu.be/...", date: "YYYY-MM-DD" } for the YouTube video.
window.CAP3_EXAM = [
  { type: "Master revision", title: "Last Minute Revision – All 19 Acts",
    desc: "Every section asked in Exam, RTP and PEPT, with frequency badges, Top 10 per Act and memory tricks.",
    file: null, version: "v1.0", date: null, video: null },
  { type: "Punishments and penalties", title: "Punishments and Penalties – All 19 Acts",
    desc: "Offences, fines, imprisonment, regulators' fines and appeal rules from the latest Nepali texts.",
    file: null, version: "v1.0", date: null, video: null },
  { placeholder: true, type: "Next series", title: "Coming soon", desc: "New revision series will appear here." }
];

// ----------------------- CAP II / Application Level ------------------------
// Order = ICAN Applied Law syllabus areas 1–7 (weighting in %). "area" also drives the filter buttons.
window.CAP2_ACTS = [
  {
    name:    "Chartered Accountants and Audit",
    area:    "1. CA Act & Audit · 10%",
    covers:  "Nepal Chartered Accountants Act, 2053, CA Regulations, 2061 & Audit Act, 2075",
    video:   { link: "https://youtu.be/5nsXHORxvP8", date: "2026-11-04" },
    bareNp:  [
      { label: "CA Act, 2053", link: "https://lawcommission.gov.np/content/13409/nepal-chartered-accountation-act--2053/" },
      { label: "CA Regulations, 2061", link: "https://mof.gov.np/content/1589/nepal-chartered-accountants-regulations-regulations--2061/" },
      { label: "Audit Act, 2075", link: "https://lawcommission.gov.np/content/12885/12885-the-audit-act-2019/" }
    ],
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Companies Act, 2063",
    area:    "2. Industry Related Acts · 30%",
    video:   { link: "https://youtu.be/Ho5VslQqJ0U", date: "2026-09-27" },
    bareNp:  { link: "https://www.lawcommission.gov.np/content/12157/12157-company-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Industrial Enterprises Act, 2076 & FITTA, 2075",
    area:    "2. Industry Related Acts · 30%",
    covers:  "Industrial Enterprises Act, 2076 & Foreign Investment and Technology Transfer Act, 2075",
    soon:    true,
    video:   null,
    bareNp:  [
      { label: "Industrial Enterprises Act, 2076", link: "https://lawcommission.gov.np/content/12174/12174-industrial-business-act-2076/" },
      { label: "FITTA, 2075", link: "https://lawcommission.gov.np/content/12171/12171-the-foreign-investment-and-tec/" }
    ],
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Banks and Financial Institutions Act, 2073",
    area:    "3. Finance Related Acts · 30%",
    video:   { link: "https://youtu.be/BqqEPt-6aUE", date: "2026-10-24" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12214/12214-bank-and-financial-institution/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Nepal Rastra Bank Act, 2058",
    area:    "3. Finance Related Acts · 30%",
    video:   { link: "https://youtu.be/n62RRDhdwLA", date: "2026-10-18" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12211/12211-nepal-rastra-bank-act-2058/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Insurance Act, 2079",
    area:    "3. Finance Related Acts · 30%",
    video:   { link: "https://youtu.be/AgyouH9x-6g", date: "2026-10-31" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12233/12233-insurance-act-2079/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Securities Act, 2063",
    area:    "3. Finance Related Acts · 30%",
    video:   { link: "https://youtu.be/V3BCeCqHcOA", date: "2026-10-28" },
    bareNp:  { link: "https://lawcommission.gov.np/content/12228/12228-securities-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Employment / Labour Related Acts",
    area:    "4. Labour & Employment · 10%",
    covers:  "Labour Act, 2074, Contribution-based Social Security Act, 2074, Employee Provident Fund Act, 2019, Citizens Investment Trust Act, 2047 & Bonus Act, 2030",
    soon:    true,
    video:   null,
    bareNp:  [
      { label: "Labour Act, 2074", link: "https://lawcommission.gov.np/content/13309/labor-act--2017/" },
      { label: "Contribution-based Social Security Act, 2074", link: "https://lawcommission.gov.np/content/13308/continuous-social-security-act--2074/" },
      { label: "Employee Provident Fund Act, 2019", link: "https://lawcommission.gov.np/content/12223/12223-employee-provident-fund-act-2/" },
      { label: "Citizens Investment Trust Act, 2047", link: "https://lawcommission.gov.np/content/13478/civil-investment-fund-act--2047/" },
      { label: "Bonus Act, 2030", link: "https://lawcommission.gov.np/content/12144/12144-bonus-act-2030/" }
    ],
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Civil Code, 2074 – Part V",
    area:    "5. National Civil Code · 10%",
    covers:  "Contracts and other liabilities",
    video:   { link: "https://youtu.be/nJIdXfJBNRw", date: "2026-10-03" },
    bareNp:  { link: "https://lawcommission.gov.np/content/13455/civil-code-2074/" },
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Acts Related to Social Organizations",
    area:    "6. Social Organizations · 5%",
    covers:  "Associations Registration Act, 2034 & Social Welfare Act, 2049",
    video:   { link: "https://youtu.be/w5zyQFrqSMU", date: "2026-10-10" },
    bareNp:  [
      { label: "Associations Registration Act, 2034", link: "https://lawcommission.gov.np/content/12249/12249-association-registration-act/" },
      { label: "Social Welfare Act, 2049", link: "https://www.lawcommission.gov.np/content/12907/social-welfare-act--2049/" }
    ],
    bareEn:  null,
    summary: null,
    comp:    null
  },
  {
    name:    "Public Procurement Act, 2063",
    area:    "7. Public Procurement · 5%",
    soon:    true,
    video:   null,
    bareNp:  { link: "https://lawcommission.gov.np/content/12891/12891-public-procurement-act-2063/" },
    bareEn:  null,
    summary: null,
    comp:    null
  }
];

// Exam corner (CAP II)
window.CAP2_EXAM = [
  { type: "Revision series · MCQ practice", title: "Applied Law MCQ Practice – Free Web Quiz",
    desc: "Exam-style objective questions for ICAN Application Level (new syllabus) in the 10 × 2 + 10 × 1 pattern, with instant explanations and section references.",
    link: "https://application-level-mcq-ican.netlify.app/", cta: "Start quiz", gc: "quiz-open", size: "Free · no sign-up",
    video: { link: "https://youtu.be/61yngLq0hS8", date: "2026-11-07" } },
  { placeholder: true, type: "Next series", title: "Coming soon", desc: "Revision decks and new series for Application Level will appear here." }
];

// ------------------------------ Playlists ----------------------------------
window.PLAYLISTS = {
  cap3: "https://www.youtube.com/playlist?list=PLoyZ6N3iLkfJv2ojMu_MmMD-ppHW6R5bi",
  cap2: "https://www.youtube.com/playlist?list=PLRZMF96kcNnU"
};
