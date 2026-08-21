import AuditBanner from "@/components/AuditServiceDubai/AuditBanner";
import AuditClientExperience from "@/components/AuditServiceDubai/AuditClientExperience";
import AuditEveryStage from "@/components/AuditServiceDubai/AuditEveryStage";
import AuditExpertSupport from "@/components/AuditServiceDubai/AuditExpertSupport";
import AuditFaqs from "@/components/AuditServiceDubai/AuditFaqs";
import AuditOnePartner from "@/components/AuditServiceDubai/AuditOnePartner";
import AuditStartConversation from "@/components/AuditServiceDubai/AuditStartConversation";
import AuditWhoSupport from "@/components/AuditServiceDubai/AuditWhoSupport";
import AuditWhySwenta from "@/components/AuditServiceDubai/AuditWhySwenta";


export default function Home() {
  return (
    <>
    <AuditBanner/>
    <AuditEveryStage/>
    <AuditClientExperience/>
    <AuditExpertSupport/>
    <AuditWhySwenta/>
    <AuditOnePartner/>
     <AuditWhoSupport/>
    <AuditFaqs/>
    <AuditStartConversation/>
    </>
  );
}
