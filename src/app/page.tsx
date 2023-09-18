import { Articles } from "./components/Articles/Articles";
import { Tags } from "./components/Tags";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <div>
      <main>
        <div className="lay-sidebar">
          <div className="sidebar__main">
            <Title />
            <Tags />
            <Articles />
          </div>
          <div className="sidebar__asaide">
            <div className="banner --desktop --large"/>
            <div className="banner --desktop --large"/>
            <div className="banner --desktop --large"/>
          </div>
        </div>
      </main>
    </div>
  );
}
