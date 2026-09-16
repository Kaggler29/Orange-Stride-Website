import React, { useState } from 'react';
import { dataStrideData } from '../data/siteData';

interface DataStrideModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface QueryResult {
  headers: string[];
  rows: (string | number)[][];
}

const mockDb: Record<string, QueryResult> = {
  cohorts: {
    headers: ['cohort_id', 'program_name', 'participants', 'satisfaction_score', 'status'],
    rows: [
      ['OS-2026-01', 'Agentic AI & RAG Masterclass', 48, '4.95 / 5', 'Active'],
      ['OS-2026-02', 'Executive AI Strategy', 32, '4.88 / 5', 'Enrolling'],
      ['OS-2025-08', 'Applied ML for Healthcare', 65, '4.90 / 5', 'Completed'],
      ['OS-2025-11', 'Data Science with Python & SQL', 120, '4.82 / 5', 'Completed']
    ]
  },
  sectors: {
    headers: ['sector', 'organizations_trained', 'skill_adoption_rate', 'primary_stack'],
    rows: [
      ['Banking & Fintech', 'IIM Vishakhapatnam, EY, ISBF', '94%', 'Python, XGBoost, LLM Agents'],
      ['Healthcare & Pharma', 'Havells, NIIT, Colt', '91%', 'BioBERT, Computer Vision, SQL'],
      ['E-Commerce & Retail', 'Great Learning, Imarticus', '93%', 'Recommendation Engines, Spark'],
      ['Government & Policy', 'AJNIFM, Room to Read', '89%', 'Econometrics, Tableau, Power BI']
    ]
  }
};

export const DataStrideModal: React.FC<DataStrideModalProps> = ({ isOpen, onOpen, onClose }) => {
  const [selectedQuery, setSelectedQuery] = useState<'cohorts' | 'sectors'>('cohorts');
  const [queryCode, setQueryCode] = useState(
    'SELECT program_name, participants, satisfaction_score FROM cohorts ORDER BY satisfaction_score DESC;'
  );
  const [result, setResult] = useState<QueryResult>(mockDb.cohorts);
  const [isRunning, setIsRunning] = useState(false);

  const handleQueryPreset = (type: 'cohorts' | 'sectors') => {
    setSelectedQuery(type);
    if (type === 'cohorts') {
      setQueryCode('SELECT program_name, participants, satisfaction_score FROM cohorts ORDER BY satisfaction_score DESC;');
      setResult(mockDb.cohorts);
    } else {
      setQueryCode('SELECT sector, organizations_trained, skill_adoption_rate FROM sectors ORDER BY skill_adoption_rate DESC;');
      setResult(mockDb.sectors);
    }
  };

  const handleRunQuery = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setResult(mockDb[selectedQuery]);
    }, 280);
  };

  return (
    <>
      {/* Floating Animated Badge Button at Bottom Right */}
      <div
        id="ds-badge"
        onClick={onOpen}
        className="ds-badge fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1e2d3d] to-[#060a12] border border-orange-500/40 text-white font-display text-xs font-semibold shadow-[0_10px_25px_rgba(255,106,0,0.25)] hover:border-[#ff6a00] hover:shadow-[0_12px_35px_rgba(255,106,0,0.45)] hover:scale-105 transition-all cursor-pointer select-none"
        role="button"
        tabIndex={0}
        aria-label="Open DataStride learning platform preview"
      >
        <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse" />
        <span>◆ DataStride</span>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="ds-overlay fixed inset-0 z-[210] grid place-items-center p-4 sm:p-6 bg-[#03060c]/85 backdrop-blur-md overflow-y-auto"
          id="ds-modal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="ds-modal relative w-full max-w-3xl my-auto rounded-3xl bg-gradient-to-b from-[#1e2d3d]/95 via-[#0d1723]/98 to-[#060a12] border border-orange-500/40 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-ds"
              className="ds-close absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/15 flex items-center justify-center text-lg z-20 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#ff6a00] bg-[#ff6a00]/10 border border-[#ff6a00]/30 font-bold">
                  {dataStrideData.pill}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Interactive Cloud Sandbox
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {dataStrideData.subtitle}
              </h3>
              <p className="text-sm text-[#9aa0ae] max-w-xl leading-relaxed">
                {dataStrideData.desc}
              </p>
            </div>

            {/* Interactive Sandbox Section */}
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {dataStrideData.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1"
                  >
                    <span className="text-xl mb-1">{feat.ico}</span>
                    <strong className="text-xs font-display font-bold text-white">
                      {feat.h}
                    </strong>
                    <p className="text-[11px] text-[#9aa0ae] leading-snug">
                      {feat.p}
                    </p>
                  </div>
                ))}
              </div>

              {/* Live SQL Console Demo */}
              <div className="sql-console rounded-2xl bg-[#060a12] border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e2d3d]/40 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-neutral-300 ml-2">
                      DataStride SQL Terminal v2.4
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQueryPreset('cohorts')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        selectedQuery === 'cohorts' ? 'bg-[#ff6a00] text-[#180a00] font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      table: cohorts
                    </button>
                    <button
                      onClick={() => handleQueryPreset('sectors')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        selectedQuery === 'sectors' ? 'bg-[#ff6a00] text-[#180a00] font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      table: sectors
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-black/40">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-mono text-[#ff6a00] select-none pt-1">SQL&gt;</span>
                    <textarea
                      value={queryCode}
                      onChange={(e) => setQueryCode(e.target.value)}
                      rows={2}
                      className="w-full bg-transparent font-mono text-xs text-orange-200 resize-none focus:outline-none"
                    />
                    <button
                      onClick={handleRunQuery}
                      disabled={isRunning}
                      className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#ff6a00] text-[#180a00] hover:brightness-110 cursor-pointer flex-shrink-0"
                    >
                      {isRunning ? 'Running...' : 'Run Query ▶'}
                    </button>
                  </div>
                </div>

                {/* Output table */}
                <div className="p-4 border-t border-white/5 overflow-x-auto">
                  <span className="text-[10px] font-mono text-neutral-400 block mb-2 uppercase">
                    Result Set ({result.rows.length} rows returned in 12ms):
                  </span>
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-[#ff6a00]">
                        {result.headers.map((h, i) => (
                          <th key={i} className="py-2 px-3 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {result.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-white/[0.04] hover:bg-white/[0.03]">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-2 px-3 text-neutral-300">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-black/40 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-[#9aa0ae]">
                Available for enterprise teams &amp; cohort partners
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Maybe Later
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    onClose();
                  }}
                  className="btn btn-primary px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-b from-[#ff6a00] to-[#f47c20] text-[#180a00] shadow-[0_4px_15px_rgba(255,106,0,0.4)] cursor-pointer"
                >
                  Explore DataStride →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
