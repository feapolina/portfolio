import * as React from "react";
import { JSX } from "react/jsx-runtime";

export function PrismaIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <path
        fill="#fff"
        d="M66.457.014a6.308 6.308 0 00-5.812 3.028l-47.87 78.072a6.379 6.379 0 00.048 6.748l23.568 37.186a6.387 6.387 0 007.22 2.683l68.012-20.407a6.37 6.37 0 003.96-8.765l-43.72-94.85A6.298 6.298 0 0066.46.014zm1.795 23.95a2.348 2.348 0 012.448 1.433l30.16 69.784a2.39 2.39 0 01-1.512 3.241l-46.996 14.024a2.39 2.39 0 01-3.024-2.76l16.83-83.812a2.353 2.353 0 012.099-1.91z"
      />
    </svg>
  );
}
