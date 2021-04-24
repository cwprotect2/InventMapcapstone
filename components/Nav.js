export default (st) => `
<nav>
      ${st
        .map(
          (link) =>
            `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
  </nav>
`;
