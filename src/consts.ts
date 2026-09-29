// Configure the changelog for your project in this file.

/**
 * Human-readable name of the project, used in page titles and image alt texts.
 */
export const ProjectName = "Starlight Cooler Credit";

export const SiteTitle = `${ProjectName} Changelog`;
export const SiteDescription = `All releases of ${ProjectName} in one place.`;

/**
 * GitHub repository (`owner/name`) whose releases are displayed.
 */
export const GitHubRepository = "trueberryless-org/starlight-cooler-credit";

/**
 * Package whose releases are displayed on the home page. Releases of every other package published from the
 * repository are listed on the packages page.
 *
 * Releases must be tagged as `package@version` (e.g. `@astrojs/starlight@1.0.0`). Tags without a package name
 * (e.g. `v1.0.0` or `1.0.0`) are attributed to this package.
 */
export const MainPackageName = "starlight-cooler-credit";

/**
 * Package scope stripped from package names to build package page URLs, e.g. `@astrojs/` turns
 * `@astrojs/starlight-tailwind` into `/packages/starlight-tailwind/`.
 */
export const PackageScope: string = "";

/**
 * Website of the project, linked in the header.
 */
export const WebsiteUrl = "https://starlight-cooler-credit.netlify.app";

/**
 * Links displayed in the footer.
 */
export const FooterLinks = [
  { label: "GitHub", url: `https://github.com/${GitHubRepository}` },
];

/**
 * Open Graph image of the site, e.g. `/og.png` for an image placed at `public/og.png`.
 */
export const OgImage: string | undefined = undefined;

/**
 * Whether minor and major releases of the main package display a generated release image.
 *
 * @see https://github.com/trueberryless-org/release-image-generator
 */
export const ShowReleaseImages = true;
