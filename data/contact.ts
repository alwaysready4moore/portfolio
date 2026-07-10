export const contactInfo = {
  email: "msnelson9241@gmail.com",
  emailSubject: "Portfolio Inquiry - AlwaysReady4Moore",
  linkedin: "https://www.linkedin.com/in/alwaysready4moore",
  github: "https://github.com/alwaysready4moore",

  get mailto() {
    return `mailto:${this.email}?subject=${encodeURIComponent(
      this.emailSubject,
    )}`;
  },
} as const;