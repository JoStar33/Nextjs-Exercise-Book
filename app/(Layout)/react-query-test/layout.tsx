interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div>레이아웃 구성</div>
      {children}
    </>
  );
}
