import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Copy, Check, ShieldCheck, Database, RefreshCw } from 'lucide-react';
import { sampleSqlQueries } from '../data/portfolioData';

export default function PipelinePlayground() {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [executionOutput, setExecutionOutput] = useState(null);

  const query = sampleSqlQueries[activeTab];

  const handleRun = () => {
    setIsRunning(true);
    setExecutionOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 0) {
        setExecutionOutput({
          status: "SUCCESS",
          executionTime: "142 ms",
          recordsScanned: "1,420,890 events",
          anomaliesDetected: "40% reduction (Compliance Verified)",
          data: [
            { channel: "CREDIT_CARD_REST", total: "450,210", nulls: "12", null_pct: "0.002%", latency: "42ms" },
            { channel: "ACH_BATCH_PAY", total: "620,100", nulls: "45", null_pct: "0.007%", latency: "85ms" },
            { channel: "MOBILE_POS_GATEWAY", total: "350,580", nulls: "8", null_pct: "0.002%", latency: "38ms" }
          ]
        });
      } else {
        setExecutionOutput({
          status: "AWS GLUE JOB SUCCEEDED",
          executionTime: "1.24 mins (Spark Cluster)",
          recordsScanned: "3,850,000 streaming events",
          anomaliesDetected: "0 duplicate transaction IDs",
          log: "[INFO] GlueContext initialized.\n[INFO] Catalog schema 'payment_dw' parsed successfully.\n[INFO] Filtering risk_score > 0.85 (Anomalous payload stream tagged).\n[INFO] Partitioning parquet files by payment_channel to s3://global-payments-analytics-prod/\n[SUCCESS] Job completed with 0 errors."
        });
      }
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(query.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-950/80 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" /> Interactive ETL & Data Quality Playground
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Live Data Engineering Code & Query Simulator
          </h2>
          <p className="text-slate-400 text-sm">
            Experience the actual Redshift SQL validation scripts & PySpark Glue ETL logic used to achieve 50% anomaly reductions in production.
          </p>
        </div>

        {/* Console Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Top Bar Tabs */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            
            {/* Script Selector Tabs */}
            <div className="flex items-center gap-2">
              {sampleSqlQueries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setExecutionOutput(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeTab === idx
                      ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {idx === 0 ? 'SQL Data Quality Audit' : 'AWS Glue PySpark Job'}
                </button>
              ))}
            </div>

            {/* Console Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-700"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {isCopied ? 'Copied' : 'Copy Code'}
              </button>

              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-2 px-5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Executing...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Run Simulation
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Code Viewer Panel */}
          <div className="p-6 bg-slate-950 font-mono text-xs text-cyan-300 overflow-x-auto border-b border-slate-800/80 max-h-[350px]">
            <div className="text-slate-500 mb-2">// {query.description}</div>
            <pre className="leading-relaxed">
              <code>{query.code}</code>
            </pre>
          </div>

          {/* Execution Output Panel */}
          <div className="p-6 bg-slate-900 min-h-[160px]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" /> Execution Console Output:
              </span>
              {executionOutput && (
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> {executionOutput.status} ({executionOutput.executionTime})
                </span>
              )}
            </div>

            {!executionOutput && !isRunning && (
              <div className="text-slate-500 text-xs font-mono py-6 text-center border border-dashed border-slate-800 rounded-xl">
                Click "Run Simulation" above to execute query on mock Redshift/Glue engine.
              </div>
            )}

            {isRunning && (
              <div className="flex items-center justify-center gap-3 py-8 text-cyan-400 font-mono text-xs">
                <RefreshCw className="w-5 h-5 animate-spin" />
                Parsing catalog schema and running distributed map-reduce partitions...
              </div>
            )}

            {executionOutput && activeTab === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono mb-2">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    Scanned: <span className="text-cyan-400">{executionOutput.recordsScanned}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    Quality Standard: <span className="text-emerald-400">{executionOutput.anomaliesDetected}</span>
                  </div>
                </div>

                <div className="overflow-x-auto border border-slate-800 rounded-xl">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-2.5">Payment Channel</th>
                        <th className="p-2.5">Total Events</th>
                        <th className="p-2.5">Null Amounts</th>
                        <th className="p-2.5">Null Pct</th>
                        <th className="p-2.5">Avg Latency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-200">
                      {executionOutput.data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40">
                          <td className="p-2.5 font-bold text-cyan-300">{row.channel}</td>
                          <td className="p-2.5">{row.total}</td>
                          <td className="p-2.5 text-emerald-400">{row.nulls}</td>
                          <td className="p-2.5 text-emerald-400">{row.null_pct}</td>
                          <td className="p-2.5">{row.latency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {executionOutput && activeTab === 1 && (
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 whitespace-pre-wrap">
                {executionOutput.log}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
