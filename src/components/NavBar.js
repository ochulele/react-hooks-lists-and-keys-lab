import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkLists = links.map((link) => {
    return <a key={link} href={`{#${link}}`}>{link}</a>
  })

  return <nav>{linkLists}</nav>
}

export default NavBar;
