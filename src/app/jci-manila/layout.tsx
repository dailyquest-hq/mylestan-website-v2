// Metadata is defined in page.tsx — this layout exists for future segment-level
// wrappers (analytics, providers, etc.) without duplicating metadata.
export default function JCILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
