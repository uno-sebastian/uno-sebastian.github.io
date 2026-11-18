/* =============================================================================
   SITE CONTENT: edit this file to update the website.
   -----------------------------------------------------------------------------
   Everything you see on the page comes from this one object. You don't need to
   touch the HTML, CSS or main.js to add a job, a project or a skill.

   Quick rules:
   - Keep the commas between items. Text goes inside "double quotes".
   - **double asterisks** make text bold. [text](https://link) makes a link.
   - Images go in assets/img/ and are referenced like "assets/img/name.jpg".
   - To hide something without deleting it, wrap it in /* ... *\/ comments.
   ============================================================================= */

window.SITE = {
  name: "Sebastian Echeverry",
  headline: "Software Engineer",
  specialties: ["Unity", "XR", "Real-Time 3D"],
  location: "Atlanta, GA",
  availability: "Open to Software Engineer roles in Unity, XR and real-time 3D: remote or hybrid.",

  intro:
    "I build real-time 3D software that people actually use. I've shipped four Unity AR apps to the App Store for brands including **Delta**, **Stanley Black & Decker** and **Georgia Power**, built VR training and live-event experiences for **Nissan** and manufacturing clients, and helped set a **Fortnite** season launch date with forecasting at **Epic Games**.",

  links: {
    email: "uno.sebastian.echo@gmail.com",
    linkedin: "https://www.linkedin.com/in/uno-sebastian",
    github: "https://github.com/uno-sebastian",
    artstation: "https://uno-sebastian.artstation.com/",
    sketchfab: "https://sketchfab.com/uno.sebastian.echo",
  },

  stats: [
    { value: "10", label: "years of production code" },
    { value: "4", label: "apps shipped to the App Store" },
    { value: "1", label: "product acquired (AiR Show)" },
    { value: "+1%", label: "projected Fortnite yearly hours from launch-timing work" },
  ],

  brands: ["Epic Games", "Delta", "Nissan", "Stanley Black & Decker", "Georgia Power", "IHG"],

  about: [
    "I've worked in Unity from every side. I started as a 3D environment artist, became the engineer who architected and shipped AR and VR apps, and then spent several years building Python tools, forecasting models and web apps for data and finance teams.",
    "That mix is the point. I can talk shaders and frame budgets with artists, system design with engineers, and cost and schedule with the business. And across every job, the pattern is the same: I build the shared tools that make the whole team faster, from a shared Unity repo used across 6+ projects to forecasting libraries adopted by Epic's analytics team.",
    "I'm bilingual in English and Spanish, and I learned to code long before AI editors existed (I use them daily now).",
  ],

  /* Selected work: the cards near the top of the page.
     media: { image, video (Vimeo id, plays in the page), alt }
     links: any number of { label, url } buttons. */
  work: [
    {
      title: "Delta Flight Museum AR",
      client: "Delta Flight Museum · TRICK 3D",
      year: "Still live on the App Store",
      summary:
        "Co-architected a museum AR app with an event-driven C# training-step system, so the team could add new experiences without writing new code. Powers trigger-based AR for the DC-3, Spirit of Delta and DC-7B, plus an interactive galley exploration.",
      tags: ["Unity", "C#", "ARKit", "Architecture"],
      media: { image: "assets/img/delta-museum.jpg", video: "705775073", alt: "Delta Flight Museum AR, behind the scenes" },
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/delta-flight-museum-ar/id6477047790" },
        { label: "Behind the scenes", url: "https://vimeo.com/705775073" },
      ],
    },
    {
      title: "AiR Show",
      client: "TRICK 3D → Nextech AR",
      year: "Acquired 2020",
      summary:
        "A cross-platform AR venue that streamed live and pre-recorded artist performances into fans' homes, with background removal, iPhone human occlusion and assets loaded from a server at runtime. The product was acquired by Nextech AR, where I carried it through public App Store release.",
      tags: ["Unity", "iOS", "Android", "Video streaming"],
      media: { image: "assets/img/airshow.jpg", video: "459503898", alt: "AiR Show launch video" },
      links: [{ label: "Launch video", url: "https://vimeo.com/459503898" }],
    },
    {
      title: "Armchair Quarterback VR",
      client: "Nissan Heisman House Tour · TRICK 3D",
      year: "VR live event",
      summary:
        "Fans sat in a motion chair that tilted up to 45°, synced to stereoscopic video on Oculus Rift S. I kept high-bitrate video smooth on maxed-out hardware and built gaze-driven branching where fans catch or fumble the ball.",
      tags: ["Unity", "Oculus Rift S", "Motion hardware", "Video"],
      media: { image: "assets/img/nissan-aq.jpg", video: "369635016", alt: "Armchair Quarterback VR experience" },
      links: [{ label: "Watch video", url: "https://vimeo.com/369635016" }],
    },
    {
      title: "LaBounty Paladin Tool Bucket",
      client: "Stanley Black & Decker · TRICK 3D",
      year: "Still live on the App Store",
      summary:
        "Built the CMS, AR placement and product animations for a sales app that lets teams place full-scale hydraulic attachments in the real world. Designed asset-bundle content delivery before Unity's Addressables existed.",
      tags: ["Unity", "AR", "Asset bundles", "CMS"],
      media: { icon: "assets/img/labounty-icon.jpg", alt: "LaBounty Paladin Tool Bucket app icon" },
      links: [{ label: "App Store", url: "https://apps.apple.com/us/app/labounty-paladin-tool-bucket/id6477720554" }],
    },
    {
      title: "Thousands of vehicles on an old iPhone",
      client: "Georgia Power AR · TRICK 3D",
      year: "Performance",
      summary:
        "A GPU-efficient traffic system: thousands of planes, trains and cars rendered through Unity's particle renderer along paths built from real-world road and rail data, at the high frame rate AR needs on older iPhones.",
      tags: ["Particles", "Shaders", "Optimization", "AR"],
      media: { glyph: "traffic" },
      links: [],
    },
    {
      title: "The Friday launch",
      client: "Fortnite · Epic Games",
      year: "Mar 10, 2023",
      summary:
        "My seasonality forecasting model of Fortnite hours played found that Friday and Saturday drove the biggest gains. That finding led Epic to launch Chapter 4 Season 2 early on a Friday, with launch-timing simulations projecting a 1% increase in global yearly hours played.",
      tags: ["Python", "Forecasting", "Simulation"],
      media: { glyph: "chart" },
      links: [],
    },
    {
      title: "VR maintenance training",
      client: "Contact lens manufacturer · MPECT",
      year: "Delivered 1 month early",
      summary:
        "Built the Unity framework for VR technician training at a plant where production downtime cost millions per minute. Integrated custom haptic gloves with HTC Vive, worked on site with technicians, and delivered a month ahead of a six-month schedule.",
      tags: ["Unity", "HTC Vive", "Haptics", "Training"],
      media: { glyph: "vr" },
      links: [],
    },
    {
      title: "Finance apps on Databricks",
      client: "Sonny's Enterprises",
      year: "2024 – now",
      summary:
        "Built and deployed two Flask web apps on Databricks Apps, including BP Group Desk, the central tool for managing business-partner records during a consolidation of six ERP systems.",
      tags: ["Python", "Flask", "Databricks", "SQL"],
      media: { glyph: "app" },
      links: [],
    },
  ],

  /* Experience: newest first. "note" is an optional small line under the title. */
  experience: [
    {
      company: "Sonny's Enterprises",
      role: "Software Developer, Finance Systems",
      location: "Lawrenceville, GA",
      dates: "Aug 2024 – Present",
      note: "Hired as an analyst; became the team's developer.",
      bullets: [
        "Built **BP Group Desk**, the central app for managing and changing business-partner records during a consolidation of six ERP systems, including SAP B1, SAP ECC, SAP S/4HANA, QuickBooks and OneStream.",
        "Built **AR Aging**, a Flask app on Databricks Apps that reads live Databricks tables and keeps shared, editable data in sync for about 12 users.",
        "Merged SAP B1 and SAP ECC data into one manageable model while day-to-day business kept running.",
        "Built a Power BI dashboard used by the Board of Directors.",
        "Automated OneStream updates with Python pipelines that drive the OneStream Excel add-in from source files.",
        "Supported company-wide 2026 budgeting and planning: reshaped large datasets with Power Query and VBA and built P&L aggregations for business leaders.",
      ],
      tech: ["Python", "Flask", "Databricks Apps", "SQL", "SAP", "OneStream", "Power BI", "VBA"],
    },
    {
      company: "Columbia Care",
      role: "Data Analyst (Contract)",
      location: "Remote",
      dates: "Oct 2023 – May 2024",
      bullets: [
        "Extended an internal Python library to replace fragile web scraping with direct API ingestion, giving the team stable, automated data feeds.",
        "Built a KPI dashboard in PostHog (revenue, conversion, page views) with advanced ClickHouse SQL, layering formulas the way shaders layer math.",
        "Migrated the e-commerce site's analytics from Contentsquare to PostHog.",
      ],
      tech: ["Python", "SQL", "ClickHouse", "PostHog", "REST APIs"],
    },
    {
      company: "Epic Games",
      role: "Data Analyst",
      location: "Remote / Cary, NC",
      dates: "Nov 2021 – Oct 2023",
      note: "Started as a contractor; converted to full-time in Apr 2022.",
      bullets: [
        "Built a seasonality forecasting model of Fortnite hours played across seasons, holidays and weekdays. Its finding that Friday and Saturday drove the biggest gains led Epic to launch **Chapter 4 Season 2 early on a Friday** (Mar 10, 2023), with simulations projecting a **1% increase in global yearly hours played**.",
        "Designed a custom autoregressive forecasting library in Python with pluggable model components, adopted by the analytics team to compare model types across versions.",
        "Built a Python connector linking Querybook to local Python environments, cutting analyst iteration from hours to minutes.",
        "Built a Querybook toolkit of reusable functions and Jinja2-templated SQL that made complex queries simple for the team.",
        "Built country-level forecasting models validated with walk-forward testing, and simulation models that let project managers compare and prioritize event launches.",
      ],
      tech: ["Python", "Pandas", "Scikit-Learn", "SQL", "Snowflake", "Databricks", "PySpark", "Tableau"],
    },
    {
      company: "Georgia Tech Professional Education",
      role: "Teaching Assistant, Data Science and Visualization",
      location: "Atlanta, GA (part-time)",
      dates: "Jul 2021 – Apr 2022",
      bullets: [
        "Taught Python, SQL, ETL and machine learning to working professionals, and led full classes when the instructor was out.",
      ],
      tech: ["Python", "SQL", "Machine learning"],
    },
    {
      company: "Nextech AR Solutions",
      role: "Senior Unity Developer",
      location: "Remote / Atlanta, GA",
      dates: "Oct 2020 – Jul 2021",
      bullets: [
        "Carried **AiR Show** from acquisition to public App Store release: built features, stabilized the app and maintained it through launch.",
        "Managed and trained interns and developers on an expedited schedule, delivering a complex alpha within a month.",
        "Migrated the app's content management from Amazon S3 to Firebase to Azure, consolidating services and lowering cost and deployment time.",
        "Built a shared Unity code package reused across the company's apps, cutting duplicate work and improving stability.",
      ],
      tech: ["Unity", "C#", "iOS", "Android", "Firebase", "Azure"],
    },
    {
      company: "TRICK 3D",
      role: "Unity Developer",
      location: "Atlanta, GA",
      dates: "Nov 2018 – Oct 2020",
      bullets: [
        "Built **AiR Show**, a cross-platform AR app streaming artist performances into fans' homes, with background removal and human occlusion. The product was acquired by Nextech AR in 2020.",
        "Co-architected the **Delta Flight Museum AR** app (still live): an event-driven C# training-step system let the team add new experiences without new code.",
        "Built the CMS, AR placement and product animations for **Stanley Black & Decker's** LaBounty Paladin Tool Bucket (still live).",
        "Engineered **Nissan's Armchair Quarterback VR**: stereoscopic video synced to a motion chair on Oculus Rift S, with gaze-driven branching.",
        "Built a GPU-efficient traffic system for **Georgia Power's** AR app: thousands of vehicles on real-world paths at AR frame rates on older iPhones.",
        "Built a modular VR cabin walkthrough to pitch **Delta** executives a premium interior, with custom shader code for smooth panorama transitions within headset memory limits.",
        "Created a shared, testable code repository and custom editor tools across 6+ Unity projects, cutting recurring bugs and deployment time.",
      ],
      tech: ["Unity", "C#", "ARKit", "ARCore", "Oculus", "HTC Vive", "Shaders", "REST APIs"],
    },
    {
      company: "MPECT Inc.",
      role: "Unity Developer",
      location: "Johns Creek, GA",
      dates: "May 2018 – Oct 2018",
      bullets: [
        "Built the Unity framework for VR maintenance training at a contact lens manufacturer where downtime cost millions per minute, delivering one month ahead of a six-month schedule with a mostly offshore team.",
        "Integrated custom haptic VR gloves with HTC Vive (prototyping from Leap Motion to Vive Puck tracking) and wrote a one-click editor tool that switched to glove controls whenever gloves were detected.",
        "Worked on site with technicians to design training modules, including OSHA-compliant assessments with tactile feedback.",
        "Built an AR guided-narrative app for iPad and Android with a Google Sheets-driven scene loader, so two developers could build content in parallel.",
      ],
      tech: ["Unity", "C#", "HTC Vive", "Leap Motion", "ARKit", "ARCore", "Vuforia"],
    },
    {
      company: "TRICK 3D",
      role: "3D Environment Artist (Contract)",
      location: "Atlanta, GA",
      dates: "Nov 2016 – Feb 2018",
      bullets: [
        "Built a Unity plugin that generates scenes from external data, plus Samsung Gear VR apps including a product-visualization app used as a marketing platform.",
        "Extended Unreal Engine with Blueprint scripting to speed up the art team's production.",
        "Modeled, textured and lit furnished homes in Unreal for Floorplan Revolution, producing 360° panoramas, stills and fly-through videos.",
      ],
      tech: ["Unity", "Unreal Engine", "Gear VR", "Maya", "3ds Max"],
    },
  ],

  /* Personal projects, open source and school work. status is optional. */
  projects: [
    {
      title: "Rehearse",
      status: "In development",
      summary: "A Unity VR training-player app for Meta Quest, rebuilding my event-driven training-step system in Unity 6.",
      tags: ["Unity 6", "VR", "C#"],
      links: [],
    },
    {
      title: "phonejack",
      summary: "Ring a landline handset through a Cell2Jack Bluetooth adapter, ask it a question and get a yes or no. Home Assistant ready.",
      tags: ["Home Assistant", "Hardware"],
      links: [{ label: "GitHub", url: "https://github.com/uno-sebastian/phonejack" }],
    },
    {
      title: "D&D miniatures",
      summary: "Modeled friends' and favorite D&D characters in Maya and Blender, then 3D-printed them on an Ender-3. 13 models on Sketchfab.",
      tags: ["Maya", "Blender", "3D printing"],
      links: [
        { label: "Sketchfab", url: "https://sketchfab.com/uno.sebastian.echo" },
        { label: "ArtStation", url: "https://uno-sebastian.artstation.com/" },
      ],
    },
    {
      title: "Floorplan Revolution",
      summary: "Unreal arch-viz renders and fly-throughs of furnished homes: Lenox Park, Expedition, Residences at Studioplex and The Dowling.",
      tags: ["Unreal Engine", "Lighting", "Arch-viz"],
      links: [
        { label: "Watch video", url: "https://vimeo.com/232567365" },
        { label: "ArtStation", url: "https://uno-sebastian.artstation.com/" },
      ],
    },
    {
      title: "Used-Car-Deal-Ologist",
      summary: "A 4-person Flask app serving a used-car price model trained on 374,278 Craigslist listings. I was the top committer and built the front end ↔ model connection; deployed on Heroku.",
      tags: ["Flask", "Scikit-Learn", "Team project"],
      links: [],
    },
    {
      title: "Symphony of Sand",
      summary: "SCAD Senior Studio game: a 3-player couch co-op in Unity. On a 10-person team I stepped up to lead programmer, wrote 90%+ of the final code and built custom editor tools.",
      tags: ["Unity", "C#", "Lead programmer"],
      links: [],
    },
    {
      title: "Dwarf Thunder",
      summary: "Global Game Jam 2016: co-designer and lead programmer on a game built in 48 hours.",
      tags: ["Game jam"],
      links: [{ label: "Game page", url: "http://globalgamejam.org/2016/games/dwarf-thunder" }],
    },
    {
      title: "Developer tools",
      summary: "A Unity package for quick edits to a collab project's manifest, and a set of personal Maya MEL scripts.",
      tags: ["Unity", "Maya MEL"],
      links: [
        { label: "Unity package", url: "https://github.com/uno-sebastian/Unity-UserManifestModifier" },
        { label: "MEL scripts", url: "https://github.com/uno-sebastian/SeabassMELScripts" },
      ],
    },
  ],

  skills: [
    {
      group: "Real-time 3D & XR",
      items: ["C#", "Unity", "ARKit", "ARCore", "Vuforia", "Oculus / Meta", "HTC Vive", "Samsung Gear VR", "iOS", "Android", "Shaders & materials", "Particle systems", "Performance optimization", "Editor tooling", "Asset bundles", "REST APIs"],
    },
    {
      group: "Software & web",
      items: ["Python", "SQL", "Flask", "Jinja2", "Databricks", "PySpark", "Firebase", "Azure", "AWS S3", "Git", "JavaScript", "HTML/CSS"],
    },
    {
      group: "Data & business",
      items: ["Pandas", "Scikit-Learn", "Time-series forecasting", "Snowflake", "ClickHouse", "Power BI", "Tableau", "PostHog", "SAP B1 / ECC / S/4HANA", "OneStream", "Power Query", "VBA"],
    },
    {
      group: "Art & design",
      items: ["Maya", "3ds Max", "Blender", "Unreal Engine (Blueprints)", "Photoshop", "After Effects", "Modeling", "Texturing", "Lighting", "360° panoramas"],
    },
  ],

  education: [
    {
      title: "BFA, Interactive Design & Game Development",
      school: "Savannah College of Art and Design",
      dates: "2016",
      note: "Dean's List, 4 terms",
    },
    {
      title: "Certificate, Data Science and Analytics",
      school: "Georgia Tech Professional Education",
      dates: "2021",
    },
  ],

  languages: ["English", "Spanish"],
};
