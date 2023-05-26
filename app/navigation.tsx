import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Navigation() {
  return (
    <div
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href={"/"} scroll={false}>
        Start
      </Link>
      <Link href={"/somewhere"} scroll={false}>
        Somewhere else
      </Link>
    </div>
  );
}
