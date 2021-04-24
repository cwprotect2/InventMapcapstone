export default (st) => `
<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${st
        .map((link) => `<a href="/${link.title}" data-navigo>${link.text}</a>`)
        .join("")}
    </ul>
  </nav>
`;
