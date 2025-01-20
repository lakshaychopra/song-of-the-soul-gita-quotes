import * as React from "react"
interface IProp {
  className?: string
}

const ArrowIcon = (props: IProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={238}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#FFCEE0"
      fillOpacity={0.4}
      d="M7.5 4.25 0 .67v8.66l7.5-3.58v-1.5ZM237.9 5 230.4.67v8.66L237.9 5ZM6.75 5.75h224.4v-1.5H6.75v1.5Z"
    />
  </svg>
)
export default ArrowIcon;
