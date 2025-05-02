import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto ">{children}</main>
      <Footer />
    </>
  );
}
