import Navigation from "@/components/Navigation";
import "@/SCSS/Header.scss";
import "@/SCSS/Navigation.scss";

export default function Header() {
  return (
    <div className="GlassWrapper">
      <h1 className="Header">Justin Hebenstreit</h1>
      <Navigation />
    </div>
  );
}
