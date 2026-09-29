import { MainPackageName, PackageScope } from "../consts";

const PACKAGE_SCOPE_SEPARATOR_RE = /(?<=\/)/;
const MINOR_RELEASE_VERSION_RE = /^(\d+\.\d+)\.0$/;
const RELEASE_TAG_RE =
  /^(?:((?:@[\w-]+\/)?[\w.-]+)@|v)?(\d+\.\d+\.\d+(?:-[\w.]+)?)$/;
const SCOPED_PACKAGE_NAME_RE = /^@([\w-]+)\//;

export function parseReleaseTag(tagName: string) {
  const [, packageName = MainPackageName, version] =
    RELEASE_TAG_RE.exec(tagName) ?? [];
  if (!version) return;

  return { packageName, version };
}

export function isMainPackage(packageName: string) {
  return packageName === MainPackageName;
}

export function getMinorReleaseVersion(version: string) {
  return MINOR_RELEASE_VERSION_RE.exec(version)?.[1];
}

export function splitPackageScope(packageName: string) {
  return packageName.split(PACKAGE_SCOPE_SEPARATOR_RE);
}

export function packageNameToSlug(packageName: string) {
  if (PackageScope && packageName.startsWith(PackageScope)) {
    return packageName.slice(PackageScope.length);
  }

  // Package names from other scopes can't be used as a single URL segment.
  return packageName.replace(SCOPED_PACKAGE_NAME_RE, "$1-");
}

export function getPackagePath(packageName: string) {
  return isMainPackage(packageName)
    ? "/"
    : `/packages/${packageNameToSlug(packageName)}/`;
}

export function getPackageReleasePath(packageName: string, version: string) {
  return isMainPackage(packageName)
    ? `/releases/${version}/`
    : `/packages/${packageNameToSlug(packageName)}/releases/${version}/`;
}
