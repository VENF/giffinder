import IconBase from "./IconBase";
const IconTrends = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 4)"
      >
        <path d="m13.5 0 3 4-8 10-8-10 3.009-4z" />
        <path d="m.5 4h16" />
        <path d="m5.5 4 3 10" />
        <path d="m11.5 4-3 10" />
        <path d="m3.509 0 1.991 4 3-4 3 4 2-4" />
      </g>
    </IconBase>
  );
};

export default IconTrends;
