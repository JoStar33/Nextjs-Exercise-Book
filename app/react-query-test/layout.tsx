interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <>
      <div>레이아웃 구성</div>
      {children}
    </>
  );
}
