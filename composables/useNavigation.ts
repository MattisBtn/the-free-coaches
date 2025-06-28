import { handleSmoothScroll } from "~/utils/scrollUtils";

export interface MenuItem {
  name: string;
  href: string;
}

export const useNavigation = () => {
  const router = useRouter();
  const route = useRoute();

  const menuItems: MenuItem[] = [
    { name: "Accueil", href: "#home" },
    { name: "Problèmes", href: "#problems" },
    { name: "Processus", href: "#process" },
    { name: "Résultats", href: "#results" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = async (href: string, event?: Event) => {
    if (event) {
      event.preventDefault();
    }

    // Si on n'est pas sur la page d'accueil, naviguer d'abord vers l'accueil
    if (route.path !== "/") {
      await router.push("/");
      // Attendre un petit délai pour que la page se charge
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // Maintenant faire le scroll vers la section
    if (href.startsWith("#")) {
      // Offset ajusté pour le nouveau header plus grand
      const headerOffset = window.innerWidth >= 1024 ? 280 : 120;
      handleSmoothScroll(href, undefined, headerOffset);
    }
  };

  return {
    menuItems,
    scrollToSection,
  };
};
