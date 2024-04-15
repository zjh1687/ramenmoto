function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div className="w-full absolute top-5 flex items-center justify-center z-10">
        <img src="/orijinhouse-logo2.png" className="w-[200px]" />
      </div>
      {props.children}
    </div>
  );
}

export default Layout;
