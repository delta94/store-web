import * as React from "react";

function SvgOrdersHistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 7A4.5 4.5 0 008 11.5V13a1 1 0 11-2 0v-1.5a6.5 6.5 0 116.5 6.5 1 1 0 110-2 4.5 4.5 0 100-9z"
        fill="#919294"
      />
      <path
        d="M4.5 12a.5.5 0 00-.384.82l2.5 3a.5.5 0 00.768 0l2.5-3A.5.5 0 009.5 12h-5z"
        fill="#919294"
      />
    </svg>
  );
}

export default SvgOrdersHistoryIcon;
