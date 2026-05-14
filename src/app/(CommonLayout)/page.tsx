import Banner from "@/components/shared/Banner/Banner";
import ContactPage from "@/components/shared/ContactPage";
import FeatureMedicine from "@/components/shared/FeatureMedicine";
import WhyChose from "@/components/shared/WhyChoose/WhyChose";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-7xl mx-auto"></div>
      </div>
      <div>
        <Banner></Banner>
        <WhyChose></WhyChose>
        <FeatureMedicine></FeatureMedicine>
        <ContactPage></ContactPage>
      </div>
    </div>
  );
}
