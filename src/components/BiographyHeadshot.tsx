import { Button } from './ui/button';

export default function BiographyHeadshot() {
  const handleDownloadHeadshot = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png';
    link.download = 'brent-summers-headshot.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="biography" className="mb-20">
      <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
        BIOGRAPHY & HEADSHOT
      </h2>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="bg-background border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-10 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
            <div className="space-y-6 text-foreground text-lg font-semibold leading-relaxed">
              <p>
                Brent Summers is an AI-first marketing leader. At Qualcomm Technologies, Brent leads AI Platforms & GTM Innovation which is a hybrid function combining strategic vision, technical implementation, and behavior change. He has deployed more than 20 AI agents which are embedded, governed, and scaled across the global marketing team. For instance, WRITER has delivered an impressive 8.6x ROI with 85% of users active every week.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-background border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
            <img 
              src="/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png" 
              alt="Professional headshot of Brent Summers" 
              className="w-full border-4 border-foreground mb-6"
            />
            <Button 
              onClick={handleDownloadHeadshot}
              className="w-full bg-primary text-primary-foreground border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-lg font-black py-3"
            >
              DOWNLOAD HEADSHOT
            </Button>
            <p className="text-sm text-foreground/70 text-center mt-4 font-bold">
              High-resolution headshot available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}