"use client"

import { useEffect, useRef, useState } from "react"

// three annotation chips that float on the video frame's border (desktop only).
// text is drawn from this page's own promises; placement hugs the side edges so
// it never collides with the video's own captions.
const CHIPS = [
  { text: "Free · No credit card", pos: "left-0 top-[15%] -translate-x-[58%]" },
  {
    text: "Reflective, not a verdict",
    pos: "right-0 top-1/2 -translate-y-1/2 translate-x-[58%]",
  },
  {
    text: "A reflection you keep",
    pos: "left-0 bottom-[15%] -translate-x-[58%]",
  },
] as const

type Mode = "preview" | "poster" | "playing"

/**
 * VslPlayer - the return VSL. Autoplays muted as a silent preview; a click
 * unmutes and restarts. Three chips float on the frame's border, matching the
 * reference video section. Drop the real file at public/video/vsl.mp4.
 */
export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mode, setMode] = useState<Mode>("preview")

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    video.muted = true
    const attempt = reduceMotion
      ? Promise.reject(new Error("reduced-motion"))
      : video.play()
    attempt.catch(() => setMode("poster"))
  }, [])

  const startWithSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    video.currentTime = 0
    setMode("playing")
    video.play().catch(() => {})
  }

  return (
    <div className="relative">
      <div className="hero-glow" aria-hidden />

      {/* floating border chips */}
      {CHIPS.map((chip) => (
        <span
          key={chip.text}
          aria-hidden
          className={`vsl-chip absolute z-20 hidden items-center xl:inline-flex ${chip.pos}`}
        >
          {chip.text}
        </span>
      ))}

      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-[color-mix(in_srgb,var(--signal)_14%,var(--background))] to-background shadow-[0_30px_80px_-40px_rgba(2,12,18,0.9)]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/video/vsl.mp4"
          poster="/video/vsl-poster.jpg"
          preload="metadata"
          playsInline
          muted
          controls={mode === "playing"}
          aria-label="Return VSL video"
        >
          Your browser does not support the video tag.
        </video>

        {/* silent-preview overlay: click to unmute + restart */}
        {mode === "preview" && (
          <button
            type="button"
            onClick={startWithSound}
            aria-label="Unmute and play the video from the beginning"
            className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-background/25 transition-colors duration-300 hover:bg-background/15"
          >
            <span className="flex flex-col items-center gap-3 rounded-2xl bg-background/70 px-8 py-6 text-center backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.03] sm:px-12 sm:py-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="h-8 w-8 text-signal sm:h-11 sm:w-11"
              >
                <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" fill="currentColor" />
                <path
                  d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-serif text-[1.05rem] leading-snug text-ink sm:text-[1.25rem]">
                Playing silently.
                <br />
                Tap to unmute.
              </span>
            </span>
          </button>
        )}

        {/* poster fallback (autoplay blocked): a plain play control */}
        {mode === "poster" && (
          <button
            type="button"
            onClick={startWithSound}
            aria-label="Play the video"
            className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
          >
            <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-signal text-background shadow-lg transition-transform duration-300 group-hover:scale-105">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
