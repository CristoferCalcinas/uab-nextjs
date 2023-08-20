import SideBar from "@/components/Sidebar/SideBar";
import HomePage from "@/components/HomePage/HomePage";
import HomeGridLists from "@/components/HomePage/HomeGridLists";
import HomeStats from "@/components/HomePage/HomeStats";
import HomeForm from "@/components/HomePage/HomeForm";
export default function Home() {
  return (
    <SideBar>
      <div className="space-y-10">
        <div>
          <HomePage />
        </div>
        <div>
          <HomeGridLists />
        </div>
        <div>
          <HomeStats />
        </div>
        <div>
          <HomeForm />
        </div>
      </div>
    </SideBar>
  );
}
