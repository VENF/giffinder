import IconBase from './IconBase';
const IconSearch = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8.5" cy="8.5" r="5" />
        <path d="m17.571 17.5-5.571-5.5" />
      </g>
    </IconBase>
  );
};

export default IconSearch;
