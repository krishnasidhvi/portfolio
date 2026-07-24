# Portfolio Engineering Challenges & Solutions

This document outlines the technical design decisions, challenges encountered, and architectural solutions implemented while building the professional Data Engineering & Analytics portfolio for **Krishna Sidhvi Nekkanti**.

---

## 🛠️ Challenge 1: Data Synthesis & Quantifiable Metrics Representation

### **The Problem:**
Traditional resumes often list bullet points sequentially, making it difficult for technical hiring managers and recruiters to quickly quantify real-world business impact.

### **The Engineering Solution:**
- Created a structured data model (`portfolioData.js`) that isolates key production metrics from career roles at **Amazon**, **Global Payments**, and **Vanguard**, as well as **UMBC Master's research**.
- Designed the `MetricsOverview` component featuring real-time animated stat cards (+30% AWS Glue scalability, -50% Redshift anomaly reduction, 95% YOLO CNN extraction accuracy, -15% fraud false positives).
- Added cross-tagging between metrics and individual job/project cards to provide immediate context upon interaction.

---

## 🎨 Challenge 2: Dual Personal Branding (Real Headshot vs. 3D AI Data Avatar)

### **The Problem:**
Balancing executive corporate professionalism with cutting-edge tech innovation. Candidates need to show both a authentic headshot portrait and a modern digital presence.

### **The Engineering Solution:**
- Generated a high-fidelity 3D AI Data Engineer Avatar (`/avatar.png`) trained on reference portrait context.
- Implemented an interactive view mode state (`'photo'` vs `'avatar'`) inside the `Hero` component.
- Built a seamless 1-click toggle (`📷 Real Photo` vs `🤖 AI Avatar`) with glassmorphism badge overlays, enabling recruiters to switch views instantly.

---

## ⚡ Challenge 3: Live ETL & SQL Data Quality Sandbox in the Browser

### **The Problem:**
Data Engineering capabilities (AWS Glue PySpark jobs, Redshift SQL data quality frameworks) are backend-heavy and difficult to demonstrate interactively on a static portfolio website.

### **The Engineering Solution:**
- Architected `PipelinePlayground.jsx`, a browser-based code playground simulating distributed map-reduce partitions and query execution.
- Embedded actual production-grade scripts:
  - **AWS Redshift / Athena SQL Anomaly Audit**: Validates null percentage drift across payment channels.
  - **AWS Glue PySpark Streaming Job**: Filters high-risk fraud payloads and writes deduplicated Parquet streams to Amazon S3.
- Implemented live execution state simulation, copy-to-clipboard functionality, and structured tabular result rendering.

---

## 📄 Challenge 4: High-Fidelity Resume Viewer with Native Print & Export Capabilities

### **The Problem:**
Recruiters often prefer reviewing or downloading raw PDF copies of resumes rather than clicking through interactive web pages.

### **The Engineering Solution:**
- Built `ResumeModal.jsx`, a full-screen, printable Master Resume viewer.
- Integrated native `window.print()` triggers styled with dedicated print CSS media queries to generate pixel-perfect 1-page PDF exports directly from the browser.
- Included a 1-click **Copy Raw Text** function that formats the entire resume into clean Markdown for ATS (Applicant Tracking System) submissions.

---

## 🌐 Challenge 5: Multi-Platform Deployment & Vercel Custom Domain Configuration

### **The Problem:**
Ensuring zero-downtime, sub-second global response times, and establishing a memorable public URL for job applications.

### **The Engineering Solution:**
- Built with Vite & React for minimal bundle footprint (225 kB gzip).
- Configured continuous integration & deployment via GitHub (`krishnasidhvi/portfolio`) directly linked to Vercel (`portfolio-nks1.vercel.app`).
- Configured SPA routing fallback rules (`vite.config.js` & `index.html`) to prevent 404s on page reloads.

---

## 🎯 Recommended Next Steps: Custom Domain Setup in Vercel

To make your portfolio even more authoritative for enterprise recruiters (e.g. `krishnasidhvi.com` or `krishnanekkanti.dev`):

1. **Purchase a Domain** (via Namecheap, GoDaddy, or Google Domains).
2. **Link to Vercel**:
   - Go to your Vercel project dashboard at [vercel.com/nks1/portfolio](https://vercel.com/nks1/portfolio).
   - Navigate to **Settings** → **Domains**.
   - Type your custom domain name (e.g. `krishnasidhvi.com`) and click **Add**.
3. **Configure DNS Records** at your domain registrar:
   - **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
   - **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
4. Vercel automatically issues an SSL certificate within 2 minutes!
