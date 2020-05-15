import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Home from "./pages/home/Home";
import Palette from "./pages/palette/Palette";
import Typography from "./pages/typography/Typography";
import Components from "./pages/components/Components";
import FormPage from "./pages/components/form/FormPage";
import ButtonPage from "./pages/components/button/ButtonPage";
import LinkPage from "pages/components/link/LinkPage";
import TagPage from "pages/components/tag/TagPage";
import CardPage from "pages/components/card/CardPage";
import SideBarNavigationPage from "pages/components/navigation/sidebarnavigation/SideBarNavigationPage";
import TabNavigationPage from "pages/components/navigation/tabnavigation/TabNavigationPage";
import TablePage from "pages/components/table/TablePage";
import ModalPage from "pages/components/modal/ModalPage";

import GridSpacingPage from "pages/gridspacing/GridSpacingPage";
import IconsPage from "pages/icons/IconsPage";

import GenericApp from "./pages/examples/genericapp/GenericApp";
import Lorem from "pages/examples/genericapp/pages/lorem/Lorem";
import Ipsum from "pages/examples/genericapp/pages/ipsum/Ipsum";
import UserProfile from "pages/examples/genericapp/pages/userprofile/UserProfile";
import TilgangNasjonaleTjenester from "pages/examples/genericapp/pages/tilgangnasjonaletjenester/TilgangNasjonaleTjenester";

import ApiAdmin from "pages/examples/genericapp/pages/apiadmin/ApiAdmin";
import ApiDetails from "pages/examples/genericapp/pages/apiadmin/apidetails/ApiDetails";
import ApiDetails2 from "pages/examples/genericapp/pages/apiadmin/apidetails/ApiDetails-2";
import AddEnhet from "pages/examples/genericapp/pages/apiadmin/addenhet/AddEnhet";

import NyTilgangWizard2 from "pages/examples/genericapp/pages/tilgangnasjonaletjenester/NyTilgangWizard-2";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/palette" component={Palette} />
        <Route path="/typography" component={Typography} />
        <Route path="/gridspacing" component={GridSpacingPage} />
        <Route path="/icons" component={IconsPage} />
        <Route path="/tag" component={TagPage} />
        <Route path="/components" component={Components} />
        <Route path="/form" component={FormPage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/modal" component={ModalPage} />
        <Route path="/link" component={LinkPage} />
        <Route path="/card" component={CardPage} />
        <Route path="/table" component={TablePage} />
        <Route path="/sidebarnavigation" component={SideBarNavigationPage} />
        <Route path="/tabnavigation" component={TabNavigationPage} />
        <Route path="/genericapp" component={GenericApp} />
        <Route path="/lorem">
          <Lorem />
        </Route>
        <Route path="/ipsum">
          <Ipsum />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/tilgangnasjonale">
          <TilgangNasjonaleTjenester />
        </Route>
        <Route path="/nytilgangwizard-2">
          <NyTilgangWizard2 />
        </Route>
        {/* API admin */}
        <Route path="/apiadmin">
          <ApiAdmin />
        </Route>
        <Route path="/apidetails">
          <ApiDetails />
        </Route>
        <Route path="/apidetails-2">
          <ApiDetails2 />
        </Route>
        <Route path="/addenhet">
          <AddEnhet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
