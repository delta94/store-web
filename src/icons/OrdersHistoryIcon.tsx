import * as React from "react";

function SvgOrdersHistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12.5 17A5.5 5.5 0 107 11.5V13"
        stroke="#919294"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 12a.5.5 0 00-.384.82l2.5 3a.5.5 0 00.768 0l2.5-3A.5.5 0 009.5 12h-5z"
        fill="#919294"
      />
    </svg>
  );
}

export default SvgOrdersHistoryIcon;
