import styled from "styled-components";
import theme from "../styles/theme";

const Color = (props) => {
    switch (props.color) {
        case "yourcolorname":
            return `
            `
        default:
            return `
                background-color: ${theme.colors.black_400};
            `
    }
}

const Direction = (props) => {
    switch (props.direction) {
        case "vertical":
            return `
            -webkit-transform: translateY(-100%) rotate(90deg);
            -webkit-transform-origin: left bottom;
            `
        default:
            return `
            `
    }
}

const Size = (props) => {
    switch (props.size) {
        case "SM":
            return `
                height 1px;
            `
        case "MD":
            return `
                 height 2px;
            `    
    }
}

// continue with this one, add size, rotate horizontal/veritcal to make easy line thicknesses

const Divider = styled.div `
    width: 100%;
    height 2px;
    display: flex;
    background-color: ${theme.colors.black_400};

    ${Color}
    ${Direction}
    ${Size}
`

export default Divider