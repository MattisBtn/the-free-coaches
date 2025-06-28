export interface MenuItem {
  name: string;
  href: string;
}

export const useNavigation = () => {
  const menuItems: MenuItem[] = [
    { name: "Accueil", href: "#home" },
    { name: "Problèmes", href: "#problems" },
    { name: "Processus", href: "#process" },
  ];

  const scrollToSection = (href: string, event?: Event) => {
    handleSmoothScroll(href, event);
  };

  return {
    menuItems,
    scrollToSection,
  };
};
