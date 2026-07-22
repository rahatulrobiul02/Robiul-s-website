import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: i18n(I18nKey.home),
		url: "/",
	},
	[LinkPreset.projects]: {
		name: "Projects",
		url: "/projects/",
	},
	[LinkPreset.skill]: {
		name: "Skills",
		url: "/skills/",
	},
	[LinkPreset.blog]: {
		name: "Blog",
		url: "/blog/",
	},
	[LinkPreset.contact]: {
		name: "Contact",
		url: "/contact/",
	},
	[LinkPreset.About]: {
		name: i18n(I18nKey.about),
		url: "/about/",
	},
	[LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: "/archive/",
}

};