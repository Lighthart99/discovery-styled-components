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
                height: 100%;
                width: 2px;
            `
        case "horizontal":
            return `
                height: 100%;
                width: 2px;
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
    background-color: ${theme.colors.black_400};

    ${Color}
    ${Direction}
    ${Size}
`

export default Divider