import TaxBanner from "@/components/CorporateTaxServicesUAE/TaxBanner";
import TaxClientExperience from "@/components/CorporateTaxServicesUAE/TaxClientExperience";
import TaxEveryStage from "@/components/CorporateTaxServicesUAE/TaxEveryStage";
import TaxExpertSupport from "@/components/CorporateTaxServicesUAE/TaxExpertSupport";
import TaxFaqs from "@/components/CorporateTaxServicesUAE/TaxFaqs";
import TaxOnePartner from "@/components/CorporateTaxServicesUAE/TaxOnePartner";
import TaxStartConversation from "@/components/CorporateTaxServicesUAE/TaxStartConversation";
import TaxWhoSupport from "@/components/CorporateTaxServicesUAE/TaxWhoSupport";
import TaxWhySwenta from "@/components/CorporateTaxServicesUAE/TaxWhySwenta";

export default function Home() {
  return (
    <>
      <TaxBanner />
      <TaxEveryStage />
      <TaxClientExperience />
      <TaxExpertSupport />
      <TaxWhySwenta />
      <TaxWhoSupport/>
      <TaxOnePartner />
      <TaxFaqs />
      <TaxStartConversation />
    </>
  );
}