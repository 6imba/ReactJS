import NavComponent from "./NavComponent/NavComponent"
import MenuComponent from "./MenuComponent/MenuComponent"
import RibbonCompoent from "../RibbonCompoent/RibbonCompoent"

const HeaderComponent = () => {
  return (
    <>
        <NavComponent/>
        <RibbonCompoent/>
        <MenuComponent/>
    </>
  )
}

export default HeaderComponent