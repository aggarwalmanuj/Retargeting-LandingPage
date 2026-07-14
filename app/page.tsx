import { BeliefHeader } from "@/components/belief-score/header"
import { HeroBlock } from "@/components/belief-score/hero"
import { ProductProofBlock } from "@/components/belief-score/product-proof"
import { RecognitionBlock } from "@/components/belief-score/recognition"
import { SkepticismBlock } from "@/components/belief-score/skepticism"
import { UnfinishedBlock } from "@/components/belief-score/unfinished"
import { BeliefMapBlock } from "@/components/belief-score/belief-map"
import { ProcessDemoBlock } from "@/components/belief-score/process-demo"
import { PermissionBlock } from "@/components/belief-score/permission"
import { IdentityBlock } from "@/components/belief-score/identity"
import { FounderBlock } from "@/components/belief-score/founder"
import { ProofBlock } from "@/components/belief-score/proof"
import { HowItWorksBlock } from "@/components/belief-score/how-it-works"
import { FinalCtaBlock } from "@/components/belief-score/final-cta"
import { BeliefFooter } from "@/components/belief-score/footer"
import { StickyCta } from "@/components/belief-score/sticky-cta"

export default function BeliefScorePage() {
  return (
    <div id="top" data-palette="marine" className="min-h-screen font-sans">
      <BeliefHeader />
      <main>
        <HeroBlock /> {/* 01 */}
        <ProductProofBlock /> {/* 02 */}
        <RecognitionBlock /> {/* 03 */}
        <SkepticismBlock /> {/* 04 */}
        <UnfinishedBlock /> {/* 05 */}
        <BeliefMapBlock /> {/* 06 */}
        <ProcessDemoBlock /> {/* 07 */}
        <PermissionBlock /> {/* 08 */}
        <IdentityBlock /> {/* 09 */}
        <FounderBlock /> {/* 10 */}
        <ProofBlock /> {/* 11 */}
        <HowItWorksBlock /> {/* 12 */}
        <FinalCtaBlock /> {/* 13 */}
      </main>
      <BeliefFooter /> {/* 14 */}
      <StickyCta />
    </div>
  )
}
