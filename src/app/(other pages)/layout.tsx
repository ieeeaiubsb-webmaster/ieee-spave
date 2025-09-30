import Footer from "@/components/footer";
import MyNavbar from "@/components/Navbar";

export default function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MyNavbar />
      <main className="container mx-auto ">{children}</main>
      <Footer />
    </>
  );
}
