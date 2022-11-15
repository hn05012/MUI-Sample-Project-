import * as React from "react";
import { UserTable } from "./table";
import PersistentDrawerLeft from "./drawer";
export default function App() {
  return (
    <section
      style={{
        margin: 50,
      }}
    >
      <PersistentDrawerLeft />
      {/* <UserTable /> */}
    </section>
  );
}
