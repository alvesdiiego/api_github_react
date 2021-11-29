import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from"react-tabs"


export const WrapperTabs = styled(Tabs)`
font-size:16px;
width:100%;
margin-top:16px ;

`;

export const WrapperTablist = styled(TabList)`
list-style-type:none;
padding:4px;
display:flex;
margin:0;
`;


export const WrapperTab = styled(Tab)`
border-radius:16px;
border:1px solid #ccc;
padding:14px;
user-select:none;
cursor:pointer;
margin:8px;
z-index:9999;
font-weight:bold;

&.is-selected {
    box-shadow: 2px 3px 1px;
}
`;


export const WrapperTabPanel = styled(TabPanel)`
padding:14px;
border:1px solid #ccc;
display:none;

&.is-selected {
    display:block;
}

`;

export const WrapperList = styled.div`
display:flex;
justify-content:space-evenly;

flex-wrap: wrap;
`;