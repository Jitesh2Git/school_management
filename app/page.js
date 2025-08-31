import { redirect } from "next/navigation";

const Home = () => {
  redirect("/showSchools");
  return null;
};

export default Home;
