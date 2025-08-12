import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function ResumeButtons() {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {/* View (opens in a new tab) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center rounded-lg bg-[#354e41] border px-4 py-2 gap-2 text-white text-sm font-medium hover:bg-[#537965]"
        >
          {/* eye icon */}
          <VisibilityIcon fontSize="inherit"/>
          View Resume
        </a>
  
        {/* Download (suggests a filename) */}
        <a
          href="/resume.pdf"
          download="Purva_Zinjarde_Resume.pdf"
          className="inline-flex items-center rounded-lg border bg-[#fbc337] px-4 py-2 gap-2 text-sm font-medium hover:bg-[#ffdd57]"
        >
          {/* download icon */}
          <FileDownloadIcon fontSize="inherit" />

          Download
        </a>
      </div>
    );
  }
  