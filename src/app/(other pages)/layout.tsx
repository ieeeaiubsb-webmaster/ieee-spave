export default function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="container mx-auto ">{children}</main>
    </>
  );
}
