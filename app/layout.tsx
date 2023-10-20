import "./global.css";

import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body dir="ltr">{children}</body>
    </html>
  );
}
