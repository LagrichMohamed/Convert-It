// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited File Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                  A browser-based file converter for images, audio, and video files. Built with Next.js 13 and powered by FFmpeg compiled to WebAssembly. No file size limits or restrictions - all conversions happen locally in your browser, ensuring complete privacy. Supports common media formats including MP4, MP3, WAV, JPG, PNG and more.
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
