export const personalInfo = {
  name: "Krishna Sidhvi Nekkanti",
  title: "Data Engineer & Data Analytics Engineer",
  subtitles: [
    "AWS & Azure Data Pipeline Architect",
    "ETL & Data Quality Specialist",
    "Data Science & Predictive Modeling Specialist"
  ],
  location: "Relocated: Hyderabad, India",
  phone: "+91 8341145666",
  email: "krishnanekkanti04@gmail.com",
  linkedIn: "https://www.linkedin.com/in/krishnasidhvinekkanti/",
  github: "https://github.com/krishnasidhvi",
  profileImg: "./profile.jpg",
  avatarImg: "./avatar.png",
  summary: "Highly skilled Data Analyst and Engineer with a proven ability to design, build, and optimize scalable data pipelines and ETL solutions. Known for improving processing reliability by up to 30% and reducing data anomalies by 50%, with a strong focus on translating business needs into innovative, data-driven solutions. Proficient in leveraging cloud platforms such as AWS (Glue, Redshift, Lambda), Informatica, and Azure Data Factory to enhance data quality, reliability, and performance."
};

export const keyImpactMetrics = [
  {
    label: "Pipeline Reliability Boost",
    value: "30%",
    prefix: "+",
    description: "Enhanced AWS Glue & Informatica ETL data pipelines scalability at Amazon",
    color: "cyan"
  },
  {
    label: "Data Anomaly Reduction",
    value: "50%",
    prefix: "-",
    description: "Achieved through Python & AWS Redshift data quality validation frameworks",
    color: "emerald"
  },
  {
    label: "Model Accuracy Gain",
    value: "95%",
    prefix: "",
    description: "Vehicle registration extraction accuracy using YOLO-based CNN models",
    color: "amber"
  },
  {
    label: "Fraud False Positives",
    value: "15%",
    prefix: "-",
    description: "Reduction in payment channel fraud false positives at Global Payments",
    color: "purple"
  }
];

export const competencies = [
  "Data Analysis & Management",
  "Data Science, Governance & Reporting",
  "Data Quality & Integrity",
  "Data Warehouse & Integrations",
  "Replication & Schema Translation",
  "ETL Pipelines & Workflow Automation",
  "Database Management & Optimization",
  "Risk Mitigation & Key Performance Metrics",
  "Data-Driven Decision Making",
  "Cross-functional Collaboration"
];

export const technicalSkills = [
  {
    category: "Cloud & Data Engineering",
    icon: "Cloud",
    skills: [
      { name: "AWS Glue", level: 95, tag: "Cloud ETL" },
      { name: "AWS Redshift", level: 92, tag: "Data Warehouse" },
      { name: "AWS Lambda", level: 90, tag: "Serverless" },
      { name: "Azure Data Factory", level: 88, tag: "Cloud Integration" },
      { name: "AWS Data Pipeline", level: 90, tag: "Orchestration" },
      { name: "Informatica", level: 85, tag: "ETL Tool" },
      { name: "AWS Athena", level: 88, tag: "Serverless Query" },
      { name: "Azure Fabric", level: 82, tag: "SaaS Analytics" }
    ]
  },
  {
    category: "Languages & Frameworks",
    icon: "Code",
    skills: [
      { name: "Python", level: 95, tag: "Primary Language" },
      { name: "SQL", level: 96, tag: "Data Querying" },
      { name: "Pandas & NumPy", level: 92, tag: "Data Manipulation" },
      { name: "Scikit-Learn", level: 88, tag: "Machine Learning" },
      { name: "TensorFlow & PyTorch", level: 84, tag: "Deep Learning" },
      { name: "REST APIs", level: 90, tag: "Integration" }
    ]
  },
  {
    category: "Big Data & Streaming",
    icon: "Database",
    skills: [
      { name: "Apache Spark", level: 86, tag: "Distributed Computing" },
      { name: "Apache Kafka", level: 85, tag: "Real-time Streaming" },
      { name: "Hadoop", level: 80, tag: "Big Data Storage" },
      { name: "MongoDB", level: 82, tag: "NoSQL DB" },
      { name: "PostgreSQL & SQL Server", level: 90, tag: "Relational DB" }
    ]
  },
  {
    category: "Analytics & Visualization",
    icon: "BarChart3",
    skills: [
      { name: "Tableau", level: 94, tag: "BI Dashboard" },
      { name: "Power BI", level: 90, tag: "Reporting & Dashboards" },
      { name: "Matplotlib & Seaborn", level: 88, tag: "Python Viz" },
      { name: "Power Apps & Automate", level: 82, tag: "Low-code Automation" }
    ]
  }
];

export const workExperience = [
  {
    id: "global-payments",
    company: "Global Payments",
    location: "Atlanta, GA (Contract)",
    role: "Data Analytics Engineer",
    period: "March 2024 – January 2026",
    badge: "Contract",
    summary: "Led data quality validation frameworks and real-time payment analytics for operations & risk management teams.",
    achievements: [
      "Analyzed transaction patterns across payment channels to optimize payment processing efficiency using Python and SQL.",
      "Developed and maintained Tableau dashboards for real-time tracking of key payment metrics across operations and risk management teams.",
      "Supported fraud detection initiatives by analyzing historical data to identify anomalies, improving model accuracy and reducing false positives by 15%.",
      "Refined ETL pipelines in collaboration with data engineers using AWS Redshift and Informatica, ensuring seamless data integration.",
      "Implemented rigorous data quality validation frameworks, reducing data anomalies by 40% and ensuring strict compliance with regulatory standards."
    ],
    tech: ["Python", "SQL", "Tableau", "AWS Redshift", "Informatica", "Fraud Analytics", "Data Quality"]
  },
  {
    id: "amazon",
    company: "Amazon",
    location: "Seattle, WA (Contract)",
    role: "Data Engineer",
    period: "September 2023 – January 2024",
    badge: "Contract",
    summary: "Architected high-throughput AWS ETL workflows and automated month-end data mapping frameworks.",
    achievements: [
      "Spearheaded enhancements to data pipelines using AWS Glue and Informatica, achieving a 30% improvement in processing reliability and scalability.",
      "Automated ETL workflows with AWS Data Pipeline, reducing manual effort and increasing efficiency by 25%, ensuring timely data delivery.",
      "Conducted robust data quality checks with Python and AWS Redshift, reducing data anomalies by 50% for high-quality downstream analytics.",
      "Integrated REST APIs with AWS services to enable seamless data extraction and accessibility across business analytics teams.",
      "Optimized SQL-based data mapping using AWS Athena, ensuring precise and timely month-end financial and operational reporting."
    ],
    tech: ["AWS Glue", "AWS Redshift", "AWS Data Pipeline", "AWS Athena", "Informatica", "Python", "SQL", "REST APIs"]
  },
  {
    id: "vanguard",
    company: "Vanguard",
    location: "Malvern, PA (Contract)",
    role: "Data Analyst",
    period: "July 2022 – December 2022",
    badge: "Contract",
    summary: "Built KPI tracking dashboards and Azure Data Factory pipelines for enterprise asset management metrics.",
    achievements: [
      "Optimized Tableau dashboards connected to SQL Server and PostgreSQL, driving real-time KPI monitoring and boosting operational efficiency by 15%.",
      "Enhanced reporting capabilities by developing supplemental Power BI solutions to augment complex Tableau financial insights.",
      "Managed Azure Data Factory pipelines, ensuring seamless and accurate data flows for real-time dashboard updates.",
      "Coordinated Azure Fabric and REST API integration, enabling seamless cross-platform data flow and supporting dynamic reporting needs."
    ],
    tech: ["Tableau", "Power BI", "SQL Server", "PostgreSQL", "Azure Data Factory", "Azure Fabric", "REST APIs"]
  }
];

export const projects = [
  {
    id: "license-plate",
    title: "Real-time Number Plate Detection System",
    subtitle: "Master's Degree Research | UMBC",
    period: "August 2021 – May 2023",
    metrics: "95% Extraction Accuracy",
    description: "Designed and implemented a deep learning vehicle registration number detection system using YOLO-based CNN for automated traffic monitoring and law enforcement workflows.",
    keyPoints: [
      "Built custom object detection pipeline leveraging YOLO-based Convolutional Neural Networks and OpenCV.",
      "Extracted plate numbers with 95% accuracy in real-time camera feeds, drastically reducing manual enforcement intervention.",
      "Trained model in Google Colab environment using PyTorch and TensorFlow with custom image augmentation techniques."
    ],
    tags: ["YOLO CNN", "OpenCV", "TensorFlow", "Python", "Google Colab", "NumPy"],
    gradient: "from-cyan-500/20 via-slate-900 to-blue-900/40",
    accentColor: "#0ea5e9"
  },
  {
    id: "chicago-crime",
    title: "Chicago Crime Analytics & Prediction",
    subtitle: "Master's Degree Research | UMBC",
    period: "August 2021 – May 2023",
    metrics: "12% Reduction in Targeted Area Crime",
    description: "Developed predictive machine learning models to forecast crime patterns in Chicago, empowering law enforcement to optimize resource allocation through interactive Tableau spatial dashboards.",
    keyPoints: [
      "Processed multi-gigabyte historical crime datasets using Python, Pandas, and NumPy.",
      "Trained spatial-temporal machine learning models using Scikit-Learn algorithms (Random Forests, XGBoost).",
      "Delivered interactive Tableau visualization tool enabling tactical police unit deployment, directly contributing to a 12% crime drop in targeted zones."
    ],
    tags: ["Python", "Scikit-Learn", "Pandas", "Tableau", "Predictive Modeling"],
    gradient: "from-emerald-500/20 via-slate-900 to-teal-900/40",
    accentColor: "#10b981"
  },
  {
    id: "fraud-detection",
    title: "Real-Time Credit Card Fraud Detection",
    subtitle: "Master's Degree Research | UMBC",
    period: "August 2021 – May 2023",
    metrics: "25% Detection Accuracy Gain",
    description: "Built and deployed a streaming fraud prevention pipeline combining AWS Lambda and Apache Kafka to identify high-risk transaction anomalies in real time.",
    keyPoints: [
      "Engineered real-time message streaming with Apache Kafka for microsecond transaction payload ingestion.",
      "Deployed event-driven anomaly detection models on AWS Lambda, storing clean event streams in MongoDB.",
      "Improved fraud detection accuracy by 25%, significantly cutting financial loss and false positive customer blocks."
    ],
    tags: ["AWS Lambda", "Apache Kafka", "MongoDB", "Python", "Seaborn", "Streaming ETL"],
    gradient: "from-purple-500/20 via-slate-900 to-indigo-900/40",
    accentColor: "#a855f7"
  }
];

export const education = [
  {
    degree: "Master of Professional Studies in Data Science",
    institution: "University of Maryland Baltimore County (UMBC)",
    location: "Baltimore, MD",
    year: "May 2023",
    details: "Focused on advanced machine learning, data engineering architectures, big data analytics, and cloud streaming systems."
  },
  {
    degree: "Bachelor of Science in Technology",
    institution: "Amity University of Rajasthan",
    location: "Jaipur, India",
    year: "May 2021",
    details: "Minors in Business Management and German (Foreign Language)."
  }
];

export const certifications = [
  {
    name: "AWS Certified Associate Data Engineer",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified",
    icon: "Award",
    verified: true,
    color: "amber"
  },
  {
    name: "Academy Accreditation – Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Accredited",
    icon: "Sparkles",
    verified: true,
    color: "cyan"
  },
  {
    name: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
    date: "Completed",
    icon: "CheckCircle",
    verified: true,
    color: "emerald"
  },
  {
    name: "Salesforce Administrator",
    issuer: "Salesforce",
    date: "Certified",
    icon: "ShieldCheck",
    verified: true,
    color: "purple"
  },
  {
    name: "Execute and Evaluate Hugging Face AI Models",
    issuer: "Hugging Face / DeepLearning.AI",
    date: "Certified",
    icon: "Sparkles",
    verified: true,
    color: "cyan"
  },
  {
    name: "Build LLM Evaluation Applications with LangChain",
    issuer: "LangChain / DeepLearning.AI",
    date: "Certified",
    icon: "Sparkles",
    verified: true,
    color: "emerald"
  }
];

export const sampleSqlQueries = [
  {
    title: "Data Quality Anomaly Audit Query (AWS Redshift / Athena)",
    description: "Detects schema drift and validates null percentage across high-throughput transaction pipelines",
    code: `SELECT 
    payment_channel,
    COUNT(*) AS total_transactions,
    SUM(CASE WHEN transaction_amount IS NULL THEN 1 ELSE 0 END) AS null_amounts,
    ROUND(100.0 * SUM(CASE WHEN transaction_amount IS NULL THEN 1 ELSE 0 END) / COUNT(*), 2) AS null_pct,
    AVG(processing_time_ms) AS avg_latency_ms
FROM redshift_db.payment_events_raw
WHERE transaction_timestamp >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY payment_channel
HAVING null_pct > 0.5
ORDER BY total_transactions DESC;`
  },
  {
    title: "AWS Glue PySpark ETL Data Cleansing Job",
    description: "Automated PySpark transformation script for streaming data deduplication and Parquet partitioning",
    code: `from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from pyspark.sql.functions import col, when, current_timestamp

glueContext = GlueContext(SparkContext.getOrCreate())
df = glueContext.create_dynamic_frame.from_catalog(
    database="payment_dw", 
    table_name="raw_fraud_stream"
).toDF()

# Data Quality Filter: Remove anomalies & cast types
cleaned_df = df.filter(col("amount") > 0) \\
    .withColumn("is_anomalous", when(col("risk_score") > 0.85, True).otherwise(False)) \\
    .withColumn("etl_processed_at", current_timestamp()) \\
    .dropDuplicates(["transaction_id"])

cleaned_df.write.mode("append") \\
    .partitionBy("payment_channel") \\
    .parquet("s3://global-payments-analytics-prod/processed_transactions/")`
  }
];
