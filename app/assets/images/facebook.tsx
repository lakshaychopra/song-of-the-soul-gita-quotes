import * as React from "react";

interface IProp {
  className?: string;
}

const FaceBookLogo = (props: IProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="m19.953 26.553-14.238.013C2.582 26.57.017 24.01.014 20.876L0 6.639C-.003 3.506 2.557.941 5.69.938L19.928.923c3.133-.003 5.698 2.557 5.701 5.69l.014 14.238c.003 3.133-2.558 5.698-5.69 5.7Z"
    />
    <path
      fill="url(#b)"
      d="m19.953 26.553-14.238.013C2.582 26.57.017 24.01.014 20.876L0 6.639C-.003 3.506 2.557.941 5.69.938L19.928.923c3.133-.003 5.698 2.557 5.701 5.69l.014 14.238c.003 3.133-2.558 5.698-5.69 5.7Z"
    />
    <path
      fill="#fff"
      d="M12.822 18.73a4.99 4.99 0 0 1-4.984-4.984 4.99 4.99 0 0 1 4.984-4.984 4.99 4.99 0 0 1 4.983 4.984 4.99 4.99 0 0 1-4.983 4.983Zm0-8.544a3.564 3.564 0 0 0-3.56 3.56 3.564 3.564 0 0 0 3.56 3.56 3.564 3.564 0 0 0 3.56-3.56 3.564 3.564 0 0 0-3.56-3.56ZM18.161 9.474a1.068 1.068 0 1 0 0-2.136 1.068 1.068 0 0 0 0 2.136Z"
    />
    <path
      fill="#fff"
      d="M17.093 23H8.55a4.99 4.99 0 0 1-4.983-4.983V9.474A4.99 4.99 0 0 1 8.55 4.491h8.543a4.99 4.99 0 0 1 4.984 4.983v8.543a4.99 4.99 0 0 1-4.984 4.984ZM8.55 5.916a3.564 3.564 0 0 0-3.56 3.56v8.542a3.564 3.564 0 0 0 3.56 3.56h8.543a3.564 3.564 0 0 0 3.56-3.56V9.474a3.564 3.564 0 0 0-3.56-3.56H8.55Z"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(9.533 26.585) scale(31.9647)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FD5" />
        <stop offset={0.328} stopColor="#FF543F" />
        <stop offset={0.348} stopColor="#FC5245" />
        <stop offset={0.504} stopColor="#E64771" />
        <stop offset={0.643} stopColor="#D53E91" />
        <stop offset={0.761} stopColor="#CC39A4" />
        <stop offset={0.841} stopColor="#C837AB" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(21.2246 0 0 14.1419 4.126 .603)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4168C9" />
        <stop offset={0.999} stopColor="#4168C9" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
)
export default FaceBookLogo;
