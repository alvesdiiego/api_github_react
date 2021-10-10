import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
width:100%;


input {
    border: 1px solid #ccc;
    border-radius: 10px;
    width:100%;
    height:45px;
    padding:8px;
    caret-color:red;
    
  
}
 button {
     background-color:#1A29B8;
     padding:8px  12px;
     margin:0 16px;
     border-radius:10px;
     height:45px;

     &:hover {
        background-color:#2135EB;
        
     }

     span {
         color:white;
         font-weight:bold;
     }
 }

`;
