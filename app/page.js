import Banner from "@/components/Home/Banner";
import ClientExperience from "@/components/Home/ClientExperience";
import ClientExperienceTwo from "@/components/Home/ClientExperienceTwo";
import EveryStage from "@/components/Home/EveryStage";
import ExpertSupport from "@/components/Home/ExpertSupport";
import Faqs from "@/components/Home/Faqs";
import OnePartner from "@/components/Home/OnePartner";
import StartConversation from "@/components/Home/StartConversation";
import WhySwenta from "@/components/Home/WhySwenta";


export default function Home() {
  return (
    <>
    <Banner/>
    <EveryStage/>
    <ClientExperience/>
    <ExpertSupport/>
    <WhySwenta/>
    <OnePartner/>
    <ClientExperienceTwo/>
    <Faqs/>
    <StartConversation/>
    </>
  );
}
