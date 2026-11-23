import Section from "@/components/Section.js";
import MenuCard from "@/components/MenuCard.js";
import menus from "@/data/menus";
import categories from "@/data/categories";
import StampCard from "@/components/StampCard";
import MenuBoard from "@/components/MenuBoard";


export default function Home() {

  const available = menus.filter((menu) => !menu.soldOut);
  const newMenus = menus.filter((menu) => menu.isNew);

  return (
    <main>
      <h1>☕ 루나 카페</h1>
      <p>전체 {menus.length}개 · 주문가능 {available.length}개</p>
      <StampCard/>
      <MenuBoard menus={menus}/>
    </main>
  );
}
