"use client";

import MaxWidthWrapper from "@/components/reusable/maxWidthWrapper";
export default function MyApp() {
  return (
    <MaxWidthWrapper>
      <p className="text-gray-500 mb-4">
        {`Let's work on something together, drop a
        dm `}
      </p>
      <p>
        <a
          href="mailto:akumyongt27@gmail.com"
          className="text-gray-500 hover:underline"
        >
          Email
        </a>
        {" · "}
        <a
          href="https://x.com/tay_jnr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline"
        >
          Twitter
        </a>
        {" · "}
        <a
          href="https://github.com/Thomasyong11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline"
        >
          GitHub
        </a>
        {" · "}
        <a
          href="https://linkedin.com/in/adjamkwalim-akum-yong"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </MaxWidthWrapper>
  );
}
