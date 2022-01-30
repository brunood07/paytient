import { Card } from "../components/Card";
import { ChartArea } from "../components/Chart";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { DashboadContainer } from "../styles/styles";

export default function Home() {
  return (
    <DashboadContainer>
      <Header />
      <div>
        <Sidebar />
      </ div>
      <div className="content">
        <Card />
        <ChartArea />
      </div>
    </DashboadContainer>
  )
}
