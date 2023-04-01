import React from "react";

export default function Li({ children, className }: Props) {
  return <li className={className}>{children}</li>;
}

interface Props {
  key?: string;
  isActive?: boolean;
  className?: string;
  children?: React.ReactNode;
}
