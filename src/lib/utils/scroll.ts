"use client";

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export function scrollToProducts() {
  scrollToSection("products");
}

export function scrollToDiscoveryCall() {
  scrollToSection("discovery-call");
}

export function openCalendly(url: string) {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    scrollToSection("discovery-call");
  }
}
