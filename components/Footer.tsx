'use client';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {
    return (
      <footer className="bg-[#344E41] text-white text-sm border-t border-[#FAB910] px-4 py-6">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            © 2025 Purva Zinjarde &nbsp; | &nbsp; Let's Connect
          </div>
  
          <div className="w-full md:w-auto text-center md:text-right">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex justify-center md:justify-end items-center gap-1 text-white hover:text-[#fab910] transition w-full md:w-auto"
            >
              <span>Back to Top</span>
              <KeyboardArrowUpIcon fontSize="small" />
            </button>
          </div>
        </div>
      </footer>
    );
  }