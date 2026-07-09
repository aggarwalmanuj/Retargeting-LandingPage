import { MinimalHeader } from "@/components/landing-minimal/header"
import { MinimalHero } from "@/components/landing-minimal/hero"
import { ReminderSection } from "@/components/landing-minimal/reminder"
import { WhatsWaitingSection } from "@/components/landing-minimal/whats-waiting"
import { GateSection } from "@/components/landing-minimal/gate"
import { ClosingSection } from "@/components/landing-minimal/closing"
import { MinimalFooter } from "@/components/landing-minimal/footer"

export default function RetargetingPage() {
  return (
    <div data-palette="marine" className="min-h-screen font-sans">
      <MinimalHeader />
      <main>
        <MinimalHero />
        <ReminderSection />
        <WhatsWaitingSection />
        <GateSection />
        <ClosingSection />
      </main>
      <MinimalFooter />
    </div>
  )
}
