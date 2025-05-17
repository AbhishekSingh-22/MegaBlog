import React from "react";

function Container({ children, className = "" }) {
  return (
    <main className={`w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </main>
  );
}

export default Container;
