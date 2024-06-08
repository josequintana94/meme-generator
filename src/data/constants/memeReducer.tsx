import {MemeAction} from "../enum";
import {IinitialStateProps} from "../interface";

export const initialState:IinitialStateProps = {
  topText: "TOP IMAGE TEXT",
  bottomText: "BOTTOM IMAGE TEXT",    
  previewImage: "", 
  backgroundImage:"/10guylogo.jpg",
  fontSize: "50",
  fontColor:"#ffffff",
  fontName:"6", 
};

export const memeReducer = (state = initialState, action:any) => {

  switch (action.type) { 

    case MemeAction.SetTopText: 
      return {
        ...state,
        topText: action.payload
      }; 

    case MemeAction.SetBottomText: 
      return {
        ...state,
        bottomText: action.payload
      }; 

    case MemeAction.SetBackgroundImage: 
      return {
        ...state,
        backgroundImage: action.payload
      }; 

    case MemeAction.SetPreviewImage: 
      return {
        ...state,
        previewImage: action.payload
      }; 

    case MemeAction.SetFontSize: 
      return {
        ...state,
        fontSize: action.payload
      }; 

    case MemeAction.SetFontColor: 
      return {
        ...state,
        fontColor: action.payload
      }; 
    
    case MemeAction.SetFont: 
      return {
        ...state,
        fontName: action.payload
      }; 
          
    default: return state;
  }
};


















