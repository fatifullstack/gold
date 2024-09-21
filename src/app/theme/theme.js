const {
    createTheme
} = require("@mui/material");

const getMuiTheme = () => createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: 'red',
                    whiteSpace: 'normal',
                    wodrBreak: "normal"
                }
            }
        },
    }
})

export default getMuiTheme;