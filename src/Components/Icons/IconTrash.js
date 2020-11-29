import IconBase from "./IconBase";
const IconTrash = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      >
        <path d="m2.5 2.5h10v12c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2zm5-2c1.1045695 0 2 .8954305 2 2h-4c0-1.1045695.8954305-2 2-2z" />
        <path d="m.5 2.5h14" />
        <path d="m5.5 5.5v8" />
        <path d="m9.5 5.5v8" />
      </g>
    </IconBase>
  );
};

export default IconTrash;
