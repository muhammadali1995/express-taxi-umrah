export default function Tab(props: { label: string; children: any }) {
  const { children } = props;
  return <div className="hidden">{children}</div>;
}
