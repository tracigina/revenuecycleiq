import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle, image, alt }) {
    return (
        <section className="relative bg-slate-900 overflow-hidden" data-testid="page-hero">
            {image && (
                <div className="absolute inset-0">
                    <img src={image} alt={alt || ""} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/70" />
                </div>
            )}
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal-500/15 blur-3xl" aria-hidden />
            <div className="container-rc relative py-24 md:py-32">
                <Reveal>
                    {eyebrow && (
                        <span className="inline-block text-xs uppercase tracking-[0.22em] font-semibold text-teal-300 mb-5">
                            {eyebrow}
                        </span>
                    )}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.05] max-w-4xl text-balance">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
                    )}
                </Reveal>
            </div>
        </section>
    );
}
