import { handleSmoothScroll } from "~/utils/scrollUtils";

export interface MenuItem {
  name: string;
  href: string;
}

export const useNavigation = () => {
  const router = useRouter();
  const route = useRoute();
  const activeSection = ref<string>("#home");

  const menuItems: MenuItem[] = [
    { name: "Problèmes", href: "#problems" },
    { name: "Processus", href: "#process" },
    // { name: "Résultats", href: "#results" },
    { name: "L'équipe", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  const initializeActiveSection = () => {
    if (import.meta.client) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries.find((entry) => entry.isIntersecting);
          if (visibleEntry) {
            activeSection.value = `#${visibleEntry.target.id}`;
          }
        },
        { threshold: 0.5 }
      );

      // Observer toutes les sections après le mount
      nextTick(() => {
        const allSections = [...menuItems, { name: "Accueil", href: "#home" }];
        allSections.forEach((item) => {
          const element = document.getElementById(item.href.slice(1));
          if (element) observer.observe(element);
        });
      });

      onBeforeUnmount(() => observer.disconnect());
    }
  };

  const scrollToSection = async (href: string, event?: Event) => {
    event?.preventDefault();

    activeSection.value = href;

    if (route.path !== "/") {
      await router.push("/");
      await nextTick();
    }

    if (href.startsWith("#")) {
      const headerOffset = window.innerWidth >= 1024 ? 280 : 120;
      handleSmoothScroll(href, undefined, headerOffset);
    }
  };

  const isActiveSection = (href: string): boolean => {
    return activeSection.value === href;
  };

  return {
    menuItems,
    scrollToSection,
    activeSection: readonly(activeSection),
    isActiveSection,
    initializeActiveSection,
  };
};
