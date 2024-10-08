import svg from '../../images/favicon/icons.svg'
// import svg from "../../images/favicon/icons.svg"

const Icon = ({ id, style, width, height }) => {
       return (
           <svg role='img' aria-label={`icon`} width={width} height={height} style={style}>
               <use href={`${svg}#${id}`}/>
           </svg>
       );
   };

   export default Icon;