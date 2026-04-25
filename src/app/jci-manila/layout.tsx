import { breadcrumbSchema } from "@/lib/schemas";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "JCI Manila", url: "https://mylesyeotan.com/jci-manila" },
]);

export default function JCILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
