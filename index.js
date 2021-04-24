import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(state[page]);
    },
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();
  myEventListener();
}
function myEventListener() {
  const menuToggle = document.querySelector(".toggle");
  const showcase = document.querySelector(".showcase");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
  });
}
