import * as React from "react";

function SvgSignInSecurityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.383 19.828C15.587 18.324 19 14.735 19 10.801V7.31a1 1 0 00-.65-.937l-6-2.243a1 1 0 00-.7 0l-6 2.243A1 1 0 005 7.31v3.491c0 3.934 3.414 7.523 6.617 9.027a.9.9 0 00.766 0zm3.147-9.799a.75.75 0 00-1.06-1.06l-3.94 3.939-.939-.94a.75.75 0 00-1.06 1.061l1.292 1.293a1 1 0 001.414 0l4.293-4.293z"
        fill="#919294"
      />
    </svg>
  );
}

export default SvgSignInSecurityIcon;
