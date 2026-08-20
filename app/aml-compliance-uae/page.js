import AmlBanner from "@/components/AMLComplianceUAE/AmlBanner";
import AmlClientExperience from "@/components/AMLComplianceUAE/AmlClientExperience";
import AmlEveryStage from "@/components/AMLComplianceUAE/AmlEveryStage";
import AmlExpertSupport from "@/components/AMLComplianceUAE/AmlExpertSupport";
import AmlFaqs from "@/components/AMLComplianceUAE/AmlFaqs";
import AmlOnePartner from "@/components/AMLComplianceUAE/AmlOnePartner";
import AmlStartConversation from "@/components/AMLComplianceUAE/AmlStartConversation";
import AmlWhySwenta from "@/components/AMLComplianceUAE/AmlWhySwenta";


export default function Home() {
  return (
    <>
    <AmlBanner/>
    <AmlEveryStage/>
    <AmlClientExperience/>
    <AmlExpertSupport/>
    <AmlWhySwenta/>
    <AmlOnePartner/>
    <AmlFaqs/>
    <AmlStartConversation/>
    </>
  );
}
