import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode; classname?: string }) => {
  return <div className={cn("max-w-4xl mx-auto px-4 md:py-8", className)}>{children}</div>;
};
