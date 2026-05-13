import Banner from "@/components/Banner/Banner";
import WhyChose from "@/components/WhyChoose/WhyChose";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-7xl mx-auto"></div>
      </div>
      <div>
        <Banner></Banner>
        <WhyChose></WhyChose>
      </div>
    </div>
  );
}
