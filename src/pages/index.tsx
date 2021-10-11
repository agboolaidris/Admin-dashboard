import Areachart from "../components/charts/Area";
import PieChart from "../components/charts/pie";
import Layout from "../layout/layout";
import { Wrapper } from "../styles/dashboard";

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <div className="col-8">
          <Areachart />
        </div>
        <div className="col-4">
          <PieChart />
        </div>
      </Wrapper>
    </Layout>
  );
}
