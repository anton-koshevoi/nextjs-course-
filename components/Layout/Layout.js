import {Fragment} from "react";
import {MainNavigation} from "./MainNavigation";

export function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
