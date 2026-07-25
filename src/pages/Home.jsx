import { useTheme } from "../context/ThemePage";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="page">
      <h1>Bosh Sahifa</h1>
    </div>
  );
};

export default Home;
