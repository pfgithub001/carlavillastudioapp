import * as React from "react"
const SvgLink = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" className="icon icon--link" viewBox="0 0 24 24" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 16h2a4 4 0 0 0 0-8h-2m-7 4h8M9 8H7a4 4 0 1 0 0 8h2"
    />
  </svg>
)
export default SvgLink