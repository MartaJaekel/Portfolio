import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export function showProjects() {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.style.display = "flex";
}
