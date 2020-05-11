import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({ 
  "palette":{ 
    "common":{
        "black":"#000",
        "white":"#fff"
      },
    "background":{ 
      "paper":"#fff",
      "default":"#d1c4e9"
    },"primary":{ 
      "light":"#fff263",
      "main":"#fbc02d",
      "dark":"#c49000",
      "contrastText":"#fff"
    },"secondary":{
      "light":"#7c43bd",
      "main":"#4a148c",
      "dark":"#12005e",
      "contrastText":"#fff"
    },"error":{
      "light":"#98ee99",
      "main":"red",
      "dark":"#338a3e",
      "contrastText":"#fff"
    }
    ,"text":{
      "primary":"rgba(0, 0, 0, 0.87)",
      "secondary":"rgba(0, 0, 0, 0.54)",
      "disabled":"rgba(0, 0, 0, 0.38)",
      "hint":"rgba(0, 0, 0, 0.38)"}
    }})
