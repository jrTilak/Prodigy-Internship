const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-between h-screen">{children}</main>
  );
};
export default RootLayout;
