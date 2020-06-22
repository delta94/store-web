import * as React from "react";

function SvgPersonalInformationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 5h-3.18C14.4 3.84 13.3 3 12 3c-1.3 0-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 5c1.107 0 2 .893 2 2s-.893 2-2 2-2-.893-2-2 .893-2 2-2zm4.832 8.018c.157.53-.28.982-.832.982H8c-.552 0-.99-.453-.832-.982C7.521 15.834 8.614 14 12 14s4.479 1.834 4.832 3.018z"
        fill="#919294"
      />
    </svg>
  );
}

export default SvgPersonalInformationIcon;
