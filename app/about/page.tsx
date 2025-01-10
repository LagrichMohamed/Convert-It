export default function About() {
  return (
      <div className="space-y-8 text-md md:text-lg text-muted-foreground pb-4 md:pb-8">
          <p>
              this is a browser-based file converter powered by FFmpeg compiled to WebAssembly. 
              All conversions happen locally in your browser - no server uploads required.
          </p>

          <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Features:</h2>
              <ul className="list-disc pl-4 space-y-2">
                  <li>Convert images between common formats (JPG, PNG, WebP, etc)</li>
                  <li>Convert audio files (MP3, WAV, AAC, etc)</li>
                  <li>Convert and compress videos (MP4, WebM, etc)</li>
                  <li>Client-side processing using WebAssembly</li>
                  <li>No file size limits or restrictions</li>
              </ul>
          </div>

          <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Technical Stack:</h2>
              <ul className="list-disc pl-4 space-y-2">
                  <li>Next.js 13 with App Router</li>
                  <li>FFmpeg.wasm for media processing</li>
                  <li>TailwindCSS for styling</li>
                  <li>TypeScript for type safety</li>
                  <li>Shadcn/ui for components</li>
              </ul>
          </div>

          <p>
              Built with performance and privacy in mind - your files never leave your browser.
          </p>
      </div>
  );
}
