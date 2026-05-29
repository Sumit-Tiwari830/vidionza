import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CENTER_NAV_LINKS, HERO_VIDEO_SRC } from "@/lib/constants";

export default function HomeHeroSection() {
    return (
        <section className="home-hero">
            <div className="hero-surface absolute inset-0 z-10" />
            <video
                className="hero-video absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
            <div className="hero-fade pointer-events-none absolute inset-0 z-20" />

            <div className="home-hero-stack">
                <nav className="hero-pill home-nav">
                    {/* --- FIXED LOGO SECTION --- */}
                    <Link href="/" className="home-brand flex items-center gap-2">
                        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="visionza"
                                width={70}
                                height={70}
                                className="h-full w-full object-contain"
                                priority
                            />
                        </span>
                        <div className="flex min-w-0 flex-col justify-center">
                            <span className="caps-2xs block text-sm font-semibold leading-none text-foreground">
                                visionza
                            </span>
                            <span className="caps-xs mt-1 block truncate text-[10px] uppercase leading-none text-muted-foreground">
                                AI image restyling
                            </span>
                        </div>
                    </Link>
                    {/* --------------------------- */}

                    <div className="home-nav-center">
                        {CENTER_NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="hero-nav-link inline-flex items-center gap-1"
                            >
                                {link.label}
                                {"chevron" in link && link.chevron ? (
                                    <ChevronDownIcon className="home-nav-chevron" aria-hidden />
                                ) : null}
                            </Link>
                        ))}
                    </div>

                    <div className="home-nav-auth">
                        <Show when="signed-out">
                            <SignInButton mode="modal" fallbackRedirectUrl="/studio">
                                <Button type="button" variant="outline" size="sm" className="home-btn-signin">
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                                <Button type="button" className="home-btn-nav-primary">
                                    Get Started
                                </Button>
                            </SignUpButton>
                        </Show>

                        <Show when="signed-in">
                            <Button variant="outline" asChild className="home-btn-studio-outline">
                                <Link href="/studio" prefetch={false}>
                                    Studio
                                </Link>
                            </Button>
                            <UserButton />
                        </Show>
                    </div>
                </nav>

                <div className="home-hero-copy">
                    <h1 className="hero-title home-hero-title">
                        <span className="block">High-fidelity style transfer.</span>
                        <span className="home-hero-tagline">One upload, a gallery-ready image.</span>
                    </h1>

                    <p className="home-hero-lede">
                        Upload once, pick a curated style, get a polished restyle.
                    </p>

                    <div className="home-hero-ctas">
                        <Show when="signed-out">
                            <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                                <Button type="button" className="home-btn-hero-primary">
                                    Get Started Free
                                </Button>
                            </SignUpButton>
                        </Show>

                        <Show when="signed-in">
                            <Button asChild className="home-btn-hero-primary">
                                <Link href="/studio" prefetch={false}>
                                    Open Studio
                                </Link>
                            </Button>
                        </Show>

                        <Button asChild variant="ghost" className="hero-pill home-btn-hero-ghost">
                            <a href="#how-it-works">Watch 2min demo</a>
                        </Button>
                    </div>
                </div>

                <div className="home-demo-wrap">
                    <div className="home-demo-shift">
                        <div className="hero-demo-glass home-demo-glass-shell">
                            <div className="hero-demo-glass-inner home-demo-inner">
                                <Image
                                    src="/demo.png"
                                    alt="Visionza workspace showing upload, curated styles, and a before-and-after preview"
                                    width={3290}
                                    height={1872}
                                    className="h-auto w-full"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}