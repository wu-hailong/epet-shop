import styled from "styled-components"

const border = (Comp)=>{
    const BorderedComp = styled(Comp)`
    position : relative;
    border-radius:${props=>props.borderRadius || 0}px;
    &::after{
      pointer-events:none;
      position:absolute;
      z-index:999;
      top:0;
      left:0;
      content:'';
      border-width:${ props => props.borderWidth || 0}px;
      border-color:${ props => props.borderColor || "#ccc"};
      border-style:${ props => props.borderStyle || "solid"};

      @media all and (max--moz-device-pixel-ratio: 1.49),
        (-webkit-max-device-pixel-ratio: 1.49),
        (max-device-pixel-ratio: 1.49),
        (max-resolution: 143dpi),
        (max-resolution: 1.49dppx) {
          width:100%;
          height:100%;
          border-radius: ${ props => props.borderRadius || 0 }px;
         }
               
      @media all and (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),
        (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),
        (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),
        (min-resolution: 144dpi) and (max-resolution: 239dpi),
        (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
          width: 200%;
          height: 200%;
          transform: scale(0.5);
          border-radius: ${props => props.borderRadius * 2 || 0}px;
        }  

      @media all and (min--moz-device-pixel-ratio: 2.5),
        (-webkit-min-device-pixel-ratio: 2.5),
        (min-device-pixel-ratio: 2.5),
        (min-resolution: 240dpi),
        (min-resolution: 2.5dppx) {
          width: 300%;
          height: 300%;
          transform: scale(0.333333);
          border-radius: ${props => props.borderRadius * 3 || 0}px;
        }
      transform-origin:0 0;
    }
    `
    return BorderedComp
} 

export default border