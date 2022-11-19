import * as React from "react";
import { UserTable } from "./table";
import PersistentDrawerLeft from "./drawer";
import CustomButton from "./Theme/testing";
export default function App() {
  return (
    <section
      style={{
        margin: 50,
      }}
    >
      {/* <CustomButton /> */}
      <PersistentDrawerLeft />
      {/* <UserTable /> */}
    </section>
  );
}
