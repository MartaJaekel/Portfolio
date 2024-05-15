import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export function showProjects() {
  const projectContainers = document.querySelectorAll(".project-container");
  projectContainers.forEach((container) => {
    if (container.style.display === "none") {
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  });
}
